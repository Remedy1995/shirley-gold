import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center text-white">
      <span className="relative flex h-[50px] w-[140px] shrink-0 overflow-hidden sm:h-[58px] sm:w-[165px] lg:h-[66px] lg:w-[190px]">
        <Image
          src="/shirleys-gold-logo.png"
          alt="Shirley's Gold Trading Enterprise"
          fill
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 165px, 190px"
          className="object-contain object-left"
          priority
        />
      </span>
    </Link>
  );
}
