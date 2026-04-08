import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { href: "/#discover", label: "Discover" },
  { href: "/#features", label: "Features" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#f5dbe7] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="shrink-0">
          <BrandLogo size="md" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#5f4a53] transition hover:text-[#a30b45]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_-20px_rgba(163,11,69,0.75)] transition hover:brightness-105"
        >
          Download now
        </a>
      </div>
    </header>
  );
}
