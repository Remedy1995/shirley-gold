"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
  imageClassName?: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  accentColor: string;
  eyebrow: string;
  title: string;
  ctaHref: string;
  overlayColor: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2013/07/18/10/56/gold-163519_1280.jpg",
    imageClassName: "saturate-[0.92] sepia-[0.16] contrast-[1.03]",
    tag: "Precious Metals",
    tagColor: "#F0D79A",
    tagBg: "rgba(214,176,91,0.14)",
    tagBorder: "rgba(214,176,91,0.34)",
    accentColor: "#C8A546",
    eyebrow: "Sector 01 · Commodities",
    title: "Precious metals with verified export discipline.",
    ctaHref: "/divisions/precious-metals",
    overlayColor: "rgba(20,16,10,0.06)"
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2016/04/05/23/55/car-1310739_1280.jpg",
    imageClassName: "saturate-[0.68] sepia-[0.18] contrast-[1.02] brightness-[0.92]",
    tag: "Automotive",
    tagColor: "#E6D0A0",
    tagBg: "rgba(214,176,91,0.12)",
    tagBorder: "rgba(214,176,91,0.3)",
    accentColor: "#D1AE61",
    eyebrow: "Sector 02 · Vehicles",
    title: "Automotive channels built for West African demand.",
    ctaHref: "/divisions/automotive",
    overlayColor: "rgba(12,16,24,0.08)"
  },
  {
    id: 3,
    image: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_1280.jpg",
    imageClassName: "saturate-[0.72] sepia-[0.14] contrast-[1.02] brightness-[0.9]",
    tag: "Electronics",
    tagColor: "#E7D4A8",
    tagBg: "rgba(214,176,91,0.12)",
    tagBorder: "rgba(214,176,91,0.3)",
    accentColor: "#C39C49",
    eyebrow: "Sector 03 · Technology",
    title: "Electronics sourcing coordinated through Dubai.",
    ctaHref: "/divisions/electronics",
    overlayColor: "rgba(10,14,18,0.06)"
  }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  const go = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, paused, go]);

  const slide = slides[current];

  return (
    <div
      className="overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.12)] bg-[#0f1318] shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-[4px] bg-white/10">
        <div
          className="h-[4px] transition-[width] duration-500"
          style={{ background: slide.accentColor, width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="relative min-h-[480px] overflow-hidden sm:min-h-[560px]">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.tag}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 80vw"
          className={`absolute inset-0 h-full w-full object-cover object-center ${slide.imageClassName ?? ""}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.18),rgba(5,7,10,0.08)_28%,rgba(5,7,10,0.28)_58%,rgba(5,7,10,0.76)_100%)]" />
        <div className="absolute inset-0" style={{ background: slide.overlayColor }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(199,165,75,0.06),transparent_34%,rgba(199,165,75,0.03)_100%)]" />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-end px-6 py-6 sm:px-8">
          <span
            className="rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-sm shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
            style={{
              color: slide.tagColor,
              background: "rgba(15,23,42,0.52)",
              borderColor: "rgba(255,255,255,0.24)"
            }}
          >
            {slide.tag}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-8 sm:pb-10">
          <div className="max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: slide.tagColor }}>
              {slide.eyebrow}
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.26)] sm:text-[2.5rem]">
              {slide.title}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaHref}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                Explore division
              </Link>
              <div className="flex gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => go(index)}
                    className="h-2.5 rounded-full transition-all"
                    style={{
                      width: index === current ? 28 : 10,
                      background: index === current ? slide.accentColor : "rgba(255,255,255,0.35)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
