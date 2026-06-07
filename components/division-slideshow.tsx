"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

export function DivisionSlideshow({
  slides,
  label
}: {
  slides: Slide[];
  label: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[current];

  return (
    <section className="mx-auto w-[80%] max-w-[1800px] pt-10 lg:pt-12">
      <div className="overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.14)] bg-[#0d1218] shadow-[0_24px_70px_rgb(var(--panel-shadow)/0.22)]">
        <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden">
          <Image
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,15,0.12),rgba(8,11,15,0.08)_24%,rgba(8,11,15,0.26)_58%,rgba(8,11,15,0.76)_100%)]" />

          <div className="absolute inset-x-0 top-0 flex items-center px-5 py-5 sm:px-7 sm:py-6">
            <span className="rounded-full border border-[#e1bf69]/30 bg-[#e1bf69]/16 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0d79a] backdrop-blur-sm">
              {label}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-7 sm:pb-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f0d79a]">
                {activeSlide.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.26)] sm:text-[2rem]">
                {activeSlide.title}
              </h2>
            </div>

            <div className="mt-6 flex justify-end">
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Go to ${slide.eyebrow} slide`}
                    onClick={() => setCurrent(index)}
                    className="h-2.5 rounded-full transition-all"
                    style={{
                      width: index === current ? 28 : 10,
                      background: index === current ? "#c8a546" : "rgba(255,255,255,0.35)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
