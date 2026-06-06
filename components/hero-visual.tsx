export function HeroVisual() {
  return (
    <div className="rounded-[2.25rem] border border-[rgb(var(--line)/0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,237,219,0.94))] p-4 shadow-[0_36px_90px_rgba(15,23,42,0.12)]">
      <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--line)/0.14)] bg-white">
        <svg
          viewBox="0 0 760 640"
          className="h-full w-full"
          role="img"
          aria-label="Illustration of Shirley's Gold Trading's three-division trade network across precious metals, automotive, and electronics"
        >
          <defs>
            <linearGradient id="boardGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffdf7" />
              <stop offset="100%" stopColor="#f5efdf" />
            </linearGradient>
            <linearGradient id="routeGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d6b05b" />
              <stop offset="100%" stopColor="#b78429" />
            </linearGradient>
            <linearGradient id="goldFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0bc68" />
              <stop offset="100%" stopColor="#bf8e32" />
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
              <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#0f172a" floodOpacity="0.08" />
            </filter>
          </defs>

          <rect width="760" height="640" fill="url(#boardGlow)" />
          <rect x="38" y="38" width="684" height="564" rx="34" fill="#ffffff" stroke="#d9deea" filter="url(#softShadow)" />

          <g opacity="0.1" stroke="#22304a" strokeWidth="1.2">
            <path d="M98 130h564" />
            <path d="M98 510h564" />
            <path d="M126 92v456" />
            <path d="M632 92v456" />
          </g>

          <g fill="#16213b">
            <circle cx="190" cy="182" r="9" />
            <circle cx="386" cy="136" r="9" />
            <circle cx="582" cy="192" r="9" />
            <circle cx="238" cy="436" r="9" />
            <circle cx="530" cy="428" r="9" />
          </g>

          <g fill="none" stroke="url(#routeGold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M190 182C258 164 322 146 386 136" />
            <path d="M386 136C460 146 522 160 582 192" />
            <path d="M190 182C214 256 228 334 238 436" />
            <path d="M582 192C566 280 548 354 530 428" />
            <path d="M238 436C334 416 430 412 530 428" />
          </g>

          <g transform="translate(490 104)">
            <rect x="0" y="0" width="156" height="44" rx="22" fill="#16213b" />
            <text x="78" y="28" textAnchor="middle" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="13" fill="#ffffff" letterSpacing="3">
              GLOBAL TRADE HUB
            </text>
          </g>

          <g transform="translate(132 220)">
            <rect x="0" y="0" width="212" height="156" rx="28" fill="#ffffff" stroke="#d5dce9" filter="url(#softShadow)" />
            <text x="28" y="42" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#667085" letterSpacing="4">
              PRECIOUS METALS
            </text>
            <text x="28" y="68" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="17" fill="#16213b" opacity="0.75">
              Verified sourcing and certified export channels.
            </text>
            <g transform="translate(28 86)">
              <polygon points="64,0 0,46 64,126 128,46" fill="url(#goldFill)" />
              <polyline points="0,46 128,46" fill="none" stroke="#16213b" strokeWidth="3" />
              <polyline points="32,24 64,46 96,24" fill="none" stroke="#16213b" strokeWidth="3" />
            </g>
          </g>

          <g transform="translate(410 208)">
            <rect x="0" y="0" width="228" height="164" rx="28" fill="#ffffff" stroke="#d5dce9" filter="url(#softShadow)" />
            <text x="28" y="42" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#667085" letterSpacing="4">
              AUTOMOTIVE
            </text>
            <text x="28" y="68" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="17" fill="#16213b" opacity="0.75">
              Fleet-ready import channels for West African buyers.
            </text>
            <g transform="translate(30 88)" fill="none" stroke="#16213b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M28 42 44 6h86c9 0 17 6 20 14l12 28" />
              <path d="M10 46h170v30a10 10 0 0 1-10 10H20A10 10 0 0 1 10 76V46Z" fill="#ffffff" />
              <circle cx="42" cy="78" r="12" fill="#16213b" />
              <circle cx="142" cy="78" r="12" fill="#16213b" />
              <path d="M52 24h54" />
            </g>
          </g>

          <g transform="translate(240 398)">
            <rect x="0" y="0" width="280" height="150" rx="28" fill="#ffffff" stroke="#d5dce9" filter="url(#softShadow)" />
            <text x="28" y="40" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="18" fill="#667085" letterSpacing="4">
              ELECTRONICS
            </text>
            <text x="28" y="66" fontFamily="Avenir Next, Segoe UI, sans-serif" fontSize="17" fill="#16213b" opacity="0.75">
              Coordinated sourcing for devices and appliances.
            </text>
            <g transform="translate(34 80)">
              <rect x="0" y="0" width="122" height="74" rx="12" fill="#ffffff" stroke="#16213b" strokeWidth="4" />
              <rect x="148" y="4" width="42" height="90" rx="10" fill="#ffffff" stroke="#16213b" strokeWidth="4" />
              <rect x="18" y="90" width="84" height="10" rx="5" fill="#16213b" />
              <circle cx="169" cy="84" r="4" fill="#16213b" />
              <path d="M34 24h54M34 40h68M34 56h38" stroke="#c29138" strokeWidth="6" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
