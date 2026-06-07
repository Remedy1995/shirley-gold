"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a] shadow-[0_18px_55px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="mx-auto flex w-[90%] max-w-[1800px] items-center justify-between gap-2 py-2.5">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex xl:gap-4">
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/14 bg-white/6 text-white transition hover:bg-white/10 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <nav
          id="mobile-primary-nav"
          aria-label="Mobile primary"
          className="border-t border-white/10 bg-[#05070a] px-5 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition ${
                  pathname === item.href
                    ? "bg-white text-black"
                    : "text-white/80 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
