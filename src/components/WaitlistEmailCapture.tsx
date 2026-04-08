"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const avatars = [
  { src: "/images/avatar-elena.png", alt: "Waitlist member Elena" },
  { src: "/images/avatar-juliette.png", alt: "Waitlist member Juliette" },
  { src: "/images/avatar-ricardo.png", alt: "Waitlist member Ricardo" },
];

type Status = "idle" | "submitting" | "joined" | "error";

export default function WaitlistEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
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
        className="space-y-3 sm:space-y-0 sm:rounded-[28px] sm:border sm:border-[#f3d8e4] sm:bg-white/90 sm:p-3 sm:shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)] sm:backdrop-blur"
      >
        <label htmlFor="hero-email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="hero-email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Enter your email"
            className="h-16 w-full flex-1 rounded-full border border-[#f1d4e0] bg-white px-6 text-base text-[#24141c] shadow-[0_16px_40px_-24px_rgba(163,11,69,0.3)] outline-none transition focus:border-[#c11a63] sm:h-14 sm:bg-[#fff7fb] sm:px-5 sm:shadow-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-7 text-sm font-semibold text-white shadow-[0_18px_35px_-18px_rgba(163,11,69,0.65)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? "Joining..." : "Join waitlist"}
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
