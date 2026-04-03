"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[#1a1a1a]">
            Contact Us
          </h1>
          <p className="mt-4 text-[#6e5e5e]">
            Have a question, feedback, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>

          {status === "sent" ? (
            <div className="mt-10 rounded-2xl bg-[#FDE8EF] p-8 text-center">
              <h2 className="text-2xl font-semibold text-[#D91A5D]">
                Message Sent
              </h2>
              <p className="mt-2 text-[#413737]">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full bg-[#D91A5D] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B51550]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#413737]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#D91A5D] focus:ring-2 focus:ring-[#D91A5D]/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#413737]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#D91A5D] focus:ring-2 focus:ring-[#D91A5D]/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#413737]">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#D91A5D] focus:ring-2 focus:ring-[#D91A5D]/20"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="professional">I&apos;m a Professional</option>
                  <option value="support">Support / Bug Report</option>
                  <option value="partnership">Partnership / Business</option>
                  <option value="press">Press / Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#413737]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#D91A5D] focus:ring-2 focus:ring-[#D91A5D]/20"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#D91A5D] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#B51550] disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="mt-16 grid gap-8 border-t border-gray-100 pt-12 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D91A5D]">
                Email
              </h3>
              <p className="mt-2 text-sm text-[#413737]">
                support@glamhereapp.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D91A5D]">
                Social
              </h3>
              <p className="mt-2 text-sm text-[#413737]">
                @glamhere on Instagram, TikTok
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D91A5D]">
                Response Time
              </h3>
              <p className="mt-2 text-sm text-[#413737]">
                Within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
