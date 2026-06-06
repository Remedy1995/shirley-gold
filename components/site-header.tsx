"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a] shadow-[0_18px_55px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-10">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-theme ${pathname === item.href ? "nav-link-theme-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Mobile primary"
        className="border-t border-white/10 bg-[#05070a] px-6 py-3 md:hidden"
      >
        <div className="scrollbar-none flex gap-5 overflow-x-auto">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-mobile ${pathname === item.href ? "nav-link-mobile-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
