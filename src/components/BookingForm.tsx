"use client";

import { FormEvent, useMemo, useState } from "react";
import type { BookableProvider } from "@/lib/booking";

type Status = "idle" | "submitting" | "done" | "error";

const money = (n: number) =>
  n === 0 ? "Free" : `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;

function track(event: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export default function BookingForm({
  providers,
  categories,
  initialProviderId = "",
}: {
  providers: BookableProvider[];
  categories: string[];
  initialProviderId?: string;
}) {
  // A specific provider can be scoped in from the map ("Book with X").
  const [providerScopeId, setProviderScopeId] = useState(initialProviderId);
  const [serviceId, setServiceId] = useState(""); // used only in the scoped path
  const [category, setCategory] = useState(""); // used in the default path
  const [city, setCity] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  }, []);

  // Distinct cities the professionals are in — powers the location dropdown.
  const cities = useMemo(() => {
    const set = new Set<string>();
    for (const p of providers) {
      if (p.services.length > 0 && p.city) set.add(p.city);
    }
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [providers]);

  // React to a provider being chosen from the map (initialProviderId change).
  const [lastInitProvider, setLastInitProvider] = useState(initialProviderId);
  if (initialProviderId && initialProviderId !== lastInitProvider) {
    setLastInitProvider(initialProviderId);
    setProviderScopeId(initialProviderId);
    setServiceId("");
    const p = providers.find((x) => x.id === initialProviderId);
    setCity(p?.city || "");
  }

  const scopedProvider =
    providers.find((p) => p.id === providerScopeId) ?? null;

  function clearScope() {
    setProviderScopeId("");
    setServiceId("");
    setCity("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Resolve what's being requested.
    let payloadProviderId: string | null = null;
    let payloadServiceId: string | null = null;
    let payloadRequested: string | null = null;
    if (scopedProvider) {
      // Booking a specific pro from the map: capture their specific service.
      payloadProviderId = scopedProvider.id;
      payloadServiceId = serviceId || null;
    } else {
      // Default flow: pick a service category.
      if (!category) {
        setErrorMsg("Please choose a service.");
        setStatus("error");
        return;
      }
      payloadRequested = category;
    }

    if (!city) {
      setErrorMsg("Please choose a location.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          serviceId: payloadServiceId,
          providerId: payloadProviderId,
          requestedService: payloadRequested,
          preferredDate,
          preferredTime,
          source: "book_page",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        track("booking_request", { status: "failed" });
        return;
      }

      setStatus("done");
      track("booking_request", {
        status: "success",
        has_provider: payloadProviderId ? "yes" : "no",
        has_service: payloadServiceId ? "yes" : "no",
      });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
      track("booking_request", { status: "failed" });
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-[#f3d7e3] bg-white p-8 text-center shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-5 font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#24141c]">
          Request sent!
        </h2>
        <p className="mt-3 text-[#5f4a53]">
          We&apos;ve got your booking request and will reach out at{" "}
          <span className="font-semibold text-[#a30b45]">{email}</span> to confirm
          the details. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  const inputClass =
    "block w-full rounded-xl border border-[#f3d8e4] bg-[#fff7fb] px-4 py-3 text-[15px] text-[#24141c] outline-none transition placeholder:text-[#b59aa4] focus:border-[#c11a63] focus:bg-white disabled:opacity-70";
  const labelClass = "mb-1.5 block text-sm font-medium text-[#4a3640]";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-[#f3d7e3] bg-white p-6 shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)] sm:p-8"
    >
      {scopedProvider && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-[#f3d8e4] bg-[#fff7fb] px-4 py-2.5">
          <span className="text-sm text-[#4a3640]">
            Booking with{" "}
            <span className="font-semibold text-[#a30b45]">{scopedProvider.name}</span>
          </span>
          <button
            type="button"
            onClick={clearScope}
            className="text-sm font-medium text-[#c11a63] hover:underline"
          >
            Change
          </button>
        </div>
      )}

      {/* 1. Service first — a category by default, or the pro's specific
          services when booking someone chosen from the map. */}
      <div>
        <label htmlFor="service" className={labelClass}>
          What would you like booked?
        </label>
        {scopedProvider ? (
          <select
            id="service"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a service…</option>
            {scopedProvider.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title} — {money(s.price)} · {s.durationMinutes} min
              </option>
            ))}
          </select>
        ) : (
          <select
            id="service"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a service…</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 2. Location dropdown, sourced from the pros' cities */}
      <div>
        <label htmlFor="city" className={labelClass}>
          Location
        </label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!!scopedProvider && !!scopedProvider.city}
          className={inputClass}
        >
          <option value="">Select a location…</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Scheduling */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred date
          </label>
          <input
            id="preferredDate"
            type="date"
            min={today}
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred time
          </label>
          <select
            id="preferredTime"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className={inputClass}
          >
            <option value="">Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      {/* Contact details — all required */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_22px_40px_-18px_rgba(163,11,69,0.7)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request booking"}
      </button>
      <p className="text-center text-xs text-[#8a7681]">
        No payment now. A GlamHere pro confirms your appointment before anything is
        charged.
      </p>
    </form>
  );
}
