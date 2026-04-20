"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "joined" | "error">("idle");
  const [position, setPosition] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setPosition(data.position);
      setStatus("joined");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#a30b45]/10 blur-[160px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#FDF9F9]/80 blur-[120px]" />

        <div className="relative mx-auto max-w-xl px-6 text-center">
          {status === "joined" ? (
            <div className="rounded-3xl bg-[#FDF9F9] p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#a30b45] text-2xl font-bold text-white">
                {position}
              </div>
              <h1 className="mt-6 font-[var(--font-display)] text-3xl font-bold text-[#1a1a1a]">
                You&apos;re on the list!
              </h1>
              <p className="mt-3 text-[#6e5e5e]">
                You&apos;re #{position} in line. We&apos;ll notify you at{" "}
                <span className="font-medium text-[#1a1a1a]">{form.email}</span>{" "}
                when it&apos;s your turn.
              </p>
              <div className="mt-8 rounded-xl bg-white p-5">
                <p className="text-sm font-medium text-[#413737]">
                  Want to move up the list?
                </p>
                <p className="mt-1 text-sm text-[#6e5e5e]">
                  Share glamhere with friends and climb the waitlist.
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.origin}/waitlist`
                    );
                  }}
                  className="mt-4 rounded-full border-2 border-[#a30b45] px-6 py-2 text-sm font-semibold text-[#a30b45] transition hover:bg-[#a30b45] hover:text-white"
                >
                  Copy Invite Link
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="inline-block rounded-full bg-[#FDF9F9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a30b45]">
                Early Access
              </p>
              <h1 className="mt-6 font-[var(--font-display)] text-4xl font-bold leading-tight text-[#1a1a1a] sm:text-5xl">
                Be the First to Experience{" "}
                <span className="text-[#a30b45]" style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}><span className="font-bold italic">glam</span><span className="font-normal">here</span></span>
              </h1>
              <p className="mt-4 text-lg text-[#6e5e5e]">
                Join the waitlist and get early access to the platform that&apos;s
                redefining how you discover and book beauty professionals.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-4 text-left"
              >
                <div>
                  <label htmlFor="wl-name" className="block text-sm font-medium text-[#413737]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="wl-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#a30b45] focus:ring-2 focus:ring-[#a30b45]/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="wl-email" className="block text-sm font-medium text-[#413737]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="wl-email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#a30b45] focus:ring-2 focus:ring-[#a30b45]/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="wl-role" className="block text-sm font-medium text-[#413737]">
                    I am a...
                  </label>
                  <select
                    id="wl-role"
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#a30b45] focus:ring-2 focus:ring-[#a30b45]/20"
                  >
                    <option value="">Select your role</option>
                    <option value="client">Client looking for beauty services</option>
                    <option value="professional">Beauty professional / creator</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-[#a30b45] py-3.5 text-sm font-semibold text-white transition hover:bg-[#70002D] disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Joining..."
                    : "Join the Waitlist"}
                </button>
              </form>

              <p className="mt-6 text-xs text-[#6e5e5e]">
                No spam, ever. We&apos;ll only email you when your spot is ready.
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
