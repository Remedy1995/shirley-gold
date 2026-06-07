import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden sm:h-11 sm:w-11">
        <Image
          src="/shirleys-gold-mark.webp"
          alt="Shirley's Gold Trading logo"
          fill
          sizes="44px"
          className="object-contain"
        />
      </span>
      <span className="truncate text-sm font-semibold uppercase tracking-[0.12em] text-white xl:text-base">
        Shirley Trading
      </span>
    </Link>
  );
}
