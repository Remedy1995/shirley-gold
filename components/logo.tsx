import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 text-white">
      <span className="relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/12 bg-white/8 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
        <span className="absolute inset-1 rounded-full border border-gold/40" />
        <svg
          viewBox="0 0 64 64"
          className="h-8 w-8 text-gold"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M32 6 11 24l21 34 21-34L32 6Zm-8.5 20.4L32 13l8.5 13.4H23.5Zm-4.7 3.4h8.8L32 46 18.8 29.8Zm17.4 0h8.9L32 46l4.2-16.2Z" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-[0.04em] text-white sm:text-xl">
        Shirley&apos;s Gold Trading
      </span>
    </Link>
  );
}
