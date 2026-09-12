"use client";

import { FormEvent, useMemo, useState } from "react";
import type { BookableProvider } from "@/lib/booking";

type Mode = "artist" | "service";
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
}: {
  providers: BookableProvider[];
}) {
  const [mode, setMode] = useState<Mode>("service");
  const [providerId, setProviderId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [requestedService, setRequestedService] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [altDate, setAltDate] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  }, []);

  const selectedProvider = providers.find((p) => p.id === providerId) ?? null;

  // Flat lookup for service-mode: serviceId -> provider + service info.
  const serviceLookup = useMemo(() => {
    const map = new Map<
      string,
      { providerId: string; providerName: string; title: string; price: number }
    >();
    for (const p of providers) {
      for (const s of p.services) {
        map.set(s.id, {
          providerId: p.id,
          providerName: p.name,
          title: s.title,
          price: s.price,
        });
      }
    }
    return map;
  }, [providers]);

  // Services grouped by category for the service-mode dropdown.
  const servicesByCategory = useMemo(() => {
    const groups = new Map<
      string,
      { id: string; label: string; price: number }[]
    >();
    for (const p of providers) {
      for (const s of p.services) {
        const cat = s.category || "Other services";
        if (!groups.has(cat)) groups.set(cat, []);
        groups.get(cat)!.push({
          id: s.id,
          label: `${s.title} · ${p.name} — ${money(s.price)}`,
          price: s.price,
        });
      }
    }
    for (const list of groups.values())
      list.sort((a, b) => a.label.localeCompare(b.label));
    return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [providers]);

  function switchMode(next: Mode) {
    setMode(next);
    setServiceId("");
    setRequestedService("");
    if (next === "service") setProviderId("");
    track("booking_mode", { mode: next });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    // Resolve provider/service depending on mode.
    let payloadServiceId: string | null = null;
    let payloadProviderId: string | null = null;
    if (mode === "artist") {
      payloadProviderId = providerId || null;
      payloadServiceId = serviceId || null;
    } else if (serviceId) {
      const s = serviceLookup.get(serviceId);
      payloadServiceId = serviceId;
      payloadProviderId = s?.providerId ?? null;
    }

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
          requestedService,
          preferredDate,
          preferredTime,
          altDate,
          notes,
          source: `book_page_${mode}`,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        track("booking_request", { status: "failed", mode });
        return;
      }

      setStatus("done");
      track("booking_request", {
        status: "success",
        mode,
        has_provider: payloadProviderId ? "yes" : "no",
        has_service: payloadServiceId ? "yes" : "no",
      });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
      track("booking_request", { status: "failed", mode });
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
    "block w-full rounded-xl border border-[#f3d8e4] bg-[#fff7fb] px-4 py-3 text-[15px] text-[#24141c] outline-none transition placeholder:text-[#b59aa4] focus:border-[#c11a63] focus:bg-white";
  const labelClass = "mb-1.5 block text-sm font-medium text-[#4a3640]";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-[#f3d7e3] bg-white p-6 shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)] sm:p-8"
    >
      {/* Mode toggle */}
      <div className="inline-flex rounded-full border border-[#f3d8e4] bg-[#fff7fb] p-1">
        {(["service", "artist"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => switchMode(m)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              mode === m
                ? "bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-white shadow-sm"
                : "text-[#6f5a64] hover:text-[#a30b45]"
            }`}
          >
            {m === "service" ? "Pick a service" : "Choose an artist"}
          </button>
        ))}
      </div>

      {mode === "service" ? (
        <div>
          <label htmlFor="service" className={labelClass}>
            What would you like booked?
          </label>
          <select
            id="service"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a service…</option>
            {servicesByCategory.map(([cat, list]) => (
              <optgroup key={cat} label={cat}>
                {list.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <p className="mt-2 text-sm text-[#6f5a64]">
            Not seeing it? Describe what you&apos;re after and we&apos;ll match you
            with an available pro.
          </p>
          <input
            type="text"
            value={requestedService}
            onChange={(e) => setRequestedService(e.target.value)}
            placeholder="e.g. Bridal makeup for 4 people on June 12"
            className={`${inputClass} mt-2`}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label htmlFor="provider" className={labelClass}>
              Choose your artist
            </label>
            <select
              id="provider"
              value={providerId}
              onChange={(e) => {
                setProviderId(e.target.value);
                setServiceId("");
                const p = providers.find((x) => x.id === e.target.value);
                if (p?.city && !city) setCity(p.city);
              }}
              className={inputClass}
            >
              <option value="">Select an artist…</option>
              {providers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                  {p.city ? ` — ${p.city}` : ""}
                </option>
              ))}
            </select>
          </div>

          {selectedProvider && (
            <div>
              <label htmlFor="artist-service" className={labelClass}>
                Which service? (optional)
              </label>
              <select
                id="artist-service"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className={inputClass}
              >
                <option value="">I&apos;m not sure yet</option>
                {selectedProvider.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} — {money(s.price)} · {s.durationMinutes} min
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {/* Scheduling preferences */}
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
        <div>
          <label htmlFor="altDate" className={labelClass}>
            Alternate date (optional)
          </label>
          <input
            id="altDate"
            type="date"
            min={today}
            value={altDate}
            onChange={(e) => setAltDate(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Contact details */}
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
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City (optional)
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Los Angeles"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything else? (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Inspo photos, occasion, allergies, budget…"
          className={inputClass}
        />
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
