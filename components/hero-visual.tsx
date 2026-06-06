export function HeroVisual() {
  return (
    <div className="theme-panel rounded-[2rem] p-4">
      <div className="overflow-hidden rounded-[1.5rem] border border-[rgb(var(--line)/0.16)] bg-white">
        <svg
          viewBox="0 0 760 640"
          className="h-full w-full"
          role="img"
          aria-label="Illustration of global trading operations across precious metals, automotive, and electronics"
        >
          <defs>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8b15a" />
              <stop offset="100%" stopColor="#b8852f" />
            </linearGradient>
          </defs>

          <rect width="760" height="640" fill="#ffffff" />

          <g opacity="0.16" stroke="#111827" strokeWidth="1.2" fill="none">
            <path d="M74 94h612" />
            <path d="M74 548h612" />
            <path d="M104 72v492" />
            <path d="M656 72v492" />
          </g>

          <g>
            <circle cx="170" cy="134" r="10" fill="#111827" />
            <circle cx="390" cy="96" r="10" fill="#111827" />
            <circle cx="600" cy="146" r="10" fill="#111827" />
            <circle cx="238" cy="484" r="10" fill="#111827" />
            <circle cx="516" cy="472" r="10" fill="#111827" />
          </g>

          <g fill="none" stroke="url(#gold)" strokeWidth="5" strokeLinecap="round">
            <path d="M170 134C258 122 318 104 390 96" />
            <path d="M390 96C482 112 538 122 600 146" />
            <path d="M170 134C210 236 224 346 238 484" />
            <path d="M600 146C574 252 552 354 516 472" />
            <path d="M238 484C346 448 438 446 516 472" />
          </g>

          <g transform="translate(110 202)">
            <rect x="0" y="0" width="224" height="160" rx="30" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
            <text x="28" y="42" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#4b5563" letterSpacing="4">
              PRECIOUS METALS
            </text>
            <text x="28" y="66" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="16" fill="#111827" opacity="0.72">
              Verified sourcing and certified export execution.
            </text>
            <g transform="translate(28 84)">
              <polygon points="64,0 0,46 64,126 128,46" fill="url(#gold)" opacity="0.94" />
              <polyline points="0,46 128,46" fill="none" stroke="#111827" strokeWidth="3" />
              <polyline points="32,24 64,46 96,24" fill="none" stroke="#111827" strokeWidth="3" />
            </g>
          </g>

          <g transform="translate(416 188)">
            <rect x="0" y="0" width="230" height="174" rx="30" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
            <text x="30" y="42" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#4b5563" letterSpacing="4">
              AUTOMOTIVE
            </text>
            <text x="30" y="66" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="16" fill="#111827" opacity="0.72">
              Fleet-ready import channels for West African demand.
            </text>
            <g transform="translate(26 84)" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M28 42 44 6h86c9 0 17 6 20 14l12 28" />
              <path d="M10 46h170v30a10 10 0 0 1-10 10H20A10 10 0 0 1 10 76V46Z" fill="#ffffff" />
              <circle cx="42" cy="78" r="12" fill="#111827" />
              <circle cx="142" cy="78" r="12" fill="#111827" />
              <path d="M52 24h54" />
            </g>
          </g>

          <g transform="translate(244 398)">
            <rect x="0" y="0" width="258" height="164" rx="30" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
            <text x="30" y="42" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#4b5563" letterSpacing="4">
              ELECTRONICS
            </text>
            <text x="30" y="66" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="16" fill="#111827" opacity="0.72">
              Coordinated sourcing for devices and appliances.
            </text>
            <g transform="translate(34 84)">
              <rect x="0" y="0" width="126" height="78" rx="12" fill="#ffffff" stroke="#111827" strokeWidth="4" />
              <rect x="150" y="8" width="50" height="94" rx="10" fill="#ffffff" stroke="#111827" strokeWidth="4" />
              <rect x="22" y="95" width="82" height="10" rx="5" fill="#111827" />
              <circle cx="175" cy="92" r="4" fill="#111827" />
              <path d="M36 28h52M36 44h66M36 60h36" stroke="#c39239" strokeWidth="6" strokeLinecap="round" />
            </g>
          </g>

          <g transform="translate(522 64)">
            <rect x="0" y="0" width="154" height="42" rx="21" fill="#111827" />
            <text x="77" y="26" textAnchor="middle" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="13" fill="#ffffff" letterSpacing="3">
              GLOBAL TRADE HUB
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
