"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const avatars = [
  { src: "/images/avatar-elena.png", alt: "Waitlist member Elena" },
  { src: "/images/avatar-juliette.png", alt: "Waitlist member Juliette" },
  { src: "/images/avatar-ricardo.png", alt: "Waitlist member Ricardo" },
];

type Status = "idle" | "submitting" | "joined" | "error";

type WaitlistEmailCaptureProps = {
  inputId?: string;
  source?: string;
};

export default function WaitlistEmailCapture({
  inputId = "hero-email",
  source = "hero",
}: WaitlistEmailCaptureProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("joined");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="sm:rounded-full sm:border sm:border-[#f3d8e4] sm:bg-white/90 sm:p-2 sm:shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)] sm:backdrop-blur"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <div className="space-y-3 sm:flex sm:flex-row sm:items-center sm:gap-2 sm:space-y-0">
          <input
            id={inputId}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Enter your email"
            className="block h-[60px] w-full rounded-full border-2 border-[#f3d8e4] bg-white px-6 text-base text-[#24141c] shadow-[0_18px_40px_-24px_rgba(163,11,69,0.4)] outline-none transition placeholder:text-[#b59aa4] focus:border-[#c11a63] sm:h-12 sm:min-w-0 sm:flex-1 sm:border sm:bg-[#fff7fb] sm:px-5 sm:text-sm sm:shadow-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex h-[60px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-7 text-base font-semibold text-white shadow-[0_22px_40px_-18px_rgba(163,11,69,0.7)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:h-12 sm:w-auto sm:flex-shrink-0 sm:text-sm sm:shadow-none"
          >
            <span>{status === "submitting" ? "Joining..." : "Join waitlist"}</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5 sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center gap-3 text-sm text-[#6f5a64]">
        <div className="flex -space-x-3">
          {avatars.map((avatar) => (
            <div
              key={avatar.src}
              className="overflow-hidden rounded-full border-2 border-white shadow-sm"
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={36}
                height={36}
                className="h-9 w-9 object-cover"
              />
            </div>
          ))}
        </div>
        <p>
          Join <span className="font-semibold text-[#a30b45]">others</span> on
          the waitlist
        </p>
      </div>

      {status === "joined" && (
        <p className="text-sm font-medium text-[#a30b45]">
          You&apos;re in. We&apos;ll send launch updates to {email}.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
