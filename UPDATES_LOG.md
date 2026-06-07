# Shirley Trading - Development Log

This document serves as a record of the recent UI/UX improvements, layout refactors, and performance optimizations applied to the Shirley's Gold Trading Enterprise website.

## 1. Global Layout & Scaling
- **Container Width Adjustments**: Adjusted all main page containers (`Section`, `PageHero`, `SiteFooter`, page layouts) from a max-width of 1280px (`max-w-7xl`) to a fluid `w-[80%] max-w-[1800px]` width constraint. This allows the website to better utilize wide screen estate.
- **Header Scaling**: The navigation header wrapper was updated to use a `w-[90%] max-w-[1800px]` span to align perfectly with the body content and prevent overflow.
- **Responsive Typography**: Substantially reduced the overly large heading and paragraph font sizes across standard pages (like `components/section.tsx` and `components/page-hero.tsx`) to implement dynamic scaling across mobile, tablet, and desktop viewports.

## 2. Component Refactoring & Compact Cards
To ensure a premium, modern aesthetic, the padding, border-radius, and heading sizes of all card components were tightened to remove bulky, bloated appearances:
- **Value Propositions & Services**: Changed padding to `p-5` with `rounded-[1.25rem]`, reducing heading sizes to `text-xl`.
- **Business Divisions Grid**: Refactored card padding from `p-8` to `p-6` with tighter `rounded-[1.5rem]` borders.
- **Compliance & Governance**: Reduced footprint of cards to `p-5` with `rounded-[1.25rem]`.
- **Leadership Profiles**: Updated image constraints and lowered padding to `p-6` with `rounded-[1.5rem]`.
- **About Page Statistics**: Streamlined Glance items, Registration profiles, Mission/Vision, and Core Value cards to maintain uniform compactness.

## 3. Brand Identity & Header Overflow Fixes
- **Tagline Consolidation**: The hero tagline was refactored from a long paragraph to a punchy, concise statement: *"Connecting strategic trade corridors with global markets."*
- **Header Navigation Fix**: Adjusted the mobile menu breakpoint from `md` (768px) to `lg` (1024px) initially, then refined the horizontal spacing (`gap-0.5` to `gap-4`) and font sizing (`0.7rem` to `0.8rem`) so that all 7 navigation links fit comfortably on tablet (`md`) screens without wrapping or squishing.
- **Header Logo Sizing**: The SVG icon and "Shirley Trading" text were scaled down on standard devices to prevent horizontal overflow, while explicitly programmed to scale up (`xl:text-base`) on large 1280px+ monitors.
- **Active Navigation Color**: Updated the active navigation link text to pure `#000` (black) on desktop and implemented a high-contrast white background with black text for the mobile navigation active state.
- **Footer Brand Name**: Corrected the footer's "Shirley Trading" eyebrow text color from a hardcoded black/white toggle to `text-gold` to maintain brand consistency.

## 4. Legibility & Contrast Enhancements
- **Secondary Text Opacity**: Located the CSS variables (`--text-secondary`, `--text-tertiary`) that were causing small paragraphs to look "faint". Increased the base contrast for both Light and Dark themes and removed a `0.92` opacity constraint to make all text 100% solid and legible.

## 5. Performance & SEO Integrations
- **Image Optimization**: Discovered that the Next.js `unoptimized` flag was active on the main Hero Carousel component, forcing browsers to download heavy, raw images. Removed this flag so the framework natively converts images to highly compressed WebP formats, drastically improving Core Web Vitals and load times.
- **Social Sharing Logo (Open Graph)**: Generated a valid `og-image.png` from the existing `icon.svg` file, as platforms like WhatsApp and LinkedIn often fail to render SVG link previews. Connected this new PNG to the centralized `seo.ts` schema generator.
