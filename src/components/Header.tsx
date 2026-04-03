import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="GlamHere"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#D91A5D] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B51550]"
        >
          Download Now
        </a>
      </div>
    </header>
  );
}
