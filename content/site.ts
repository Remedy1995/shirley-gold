export type DivisionSlug = "precious-metals" | "automotive" | "electronics";

export type Division = {
  slug: DivisionSlug;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  gallery: {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
  }[];
  bullets: string[];
  metrics: { label: string; value: string }[];
  detailSections: { title: string; body: string }[];
};

export type Stakeholder = {
  name: string;
  role: string;
  intro: string;
  areas: string[];
  initials: string;
  verifiedSource: string;
};

export const site = {
  name: "Shirley's Gold Trading Enterprise - FZCO",
  shortName: "Shirley Trading",
  titleTemplate: "%s | Shirley Trading",
  description:
    "Shirley's Gold Trading Enterprise - FZCO is a Dubai-based trading company connecting African resources with global markets through precious metals trading, automotive imports, and consumer electronics distribution.",
  domain: "https://www.shirleytrading.com",
  ogImage: "/og-image.webp",
  keywords: [
    "Shirley Trading",
    "Shirley's Gold Trading Enterprise",
    "Dubai trading company",
    "precious metals trading",
    "gold procurement Ghana",
    "automotive imports West Africa",
    "electronics distribution Africa",
    "Dubai Silicon Oasis FZCO",
    "commodity exports UAE"
  ],
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xgobazay",
  phone: "+971 55 339 8741",
  email: "info@shirleytrading.com",
  license: "License No. 50854",
  address: "DSO-IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai, UAE",
  registration: "Dubai Economy and Tourism Department",
  freeZone: "Dubai Silicon Oasis (DSO-IFZA)",
  jurisdiction: "Dubai Silicon Oasis Authority (DSOA)",
  founded: "2024",
  heroTitle: "Connecting strategic trade corridors with global markets.",
  heroText:
    "Established under Dubai Silicon Oasis, Shirley's Gold Trading Enterprise - FZCO operates across precious metals, automotive imports, and electronics distribution with a model built for regulated trade, cross-border execution, and long-range commercial value.",
  stats: [
    { label: "Annual Gold Export", value: "200-400 kg" },
    { label: "Business Divisions", value: "3" },
    { label: "Continental Markets", value: "3+" },
    { label: "Year Established", value: "2024" }
  ],
  mission:
    "To bridge economic opportunities across continents by providing reliable, transparent, and efficient trading services in precious metals, automotive, and electronics while building sustainable partnerships and lasting value for all stakeholders.",
  vision:
    "To become a leading multi-sector trading enterprise recognized for integrity, innovation, and excellence in connecting African resources with global markets.",
  values: [
    {
      title: "Integrity",
      body: "Honesty and full transparency in every transaction and relationship."
    },
    {
      title: "Excellence",
      body: "Superior quality in products, services, and client relationships."
    },
    {
      title: "Innovation",
      body: "Embracing technology and efficient processes to stay ahead."
    },
    {
      title: "Sustainability",
      body: "Long-term ethical trade partnerships that create enduring value."
    }
  ],
  compliancePoints: [
    "Licensed under DSOA and registered with Dubai Economy and Tourism.",
    "Strict AML and KYC procedures across all counterparties.",
    "Minerals Commission certificates, assay reports, and Bills of Lading on gold exports.",
    "Encrypted communications, secure digital records, and segregated divisional accounts.",
    "Conflict-free sourcing, fair miner pricing, and zero tolerance for undocumented transactions."
  ],
  geography: [
    {
      name: "United Arab Emirates",
      label: "Headquarters and global trading hub",
      body: "Dubai Silicon Oasis provides the regulatory, logistics, and ownership framework that supports efficient international trade execution."
    },
    {
      name: "Ghana, West Africa",
      label: "Primary gold sourcing market",
      body: "GoldBod-certified small-scale miner procurement in line with Minerals Commission guidelines anchors the precious metals supply chain."
    },
    {
      name: "West Africa",
      label: "Automotive and electronics demand corridor",
      body: "Regional distribution focuses on vehicles, appliances, and consumer technology for wholesale and business buyers."
    },
    {
      name: "China",
      label: "Manufacturing source for electronics",
      body: "Consumer electronics and home appliances are sourced from reputable OEM manufacturers and coordinated through Dubai."
    },
    {
      name: "Global Refineries",
      label: "Institutional precious metals buyers",
      body: "Direct institutional relationships support secure, certified sales to UAE and international refinery partners."
    }
  ],
  serviceFaq: [
    {
      question: "What business divisions does Shirley's Gold Trading Enterprise operate?",
      answer:
        "The company operates in three divisions: precious metals trading, automotive imports, and consumer electronics distribution."
    },
    {
      question: "Where is Shirley's Gold Trading Enterprise incorporated?",
      answer:
        "The company is incorporated in Dubai as a Free Zone Company (FZCO) under Dubai Silicon Oasis with License No. 50854."
    },
    {
      question: "What type of partnership enquiries does the company accept?",
      answer:
        "The company accepts enquiries related to gold trading and procurement, automotive import orders, electronics distribution, and investment or partnership proposals."
    }
  ],
  valueProposition: [
    {
      title: "Ethical Sourcing",
      body: "GoldBod-compliant gold procurement and verified automotive and electronics supplier relationships."
    },
    {
      title: "Quality Assurance",
      body: "Third-party gold purity testing, roadworthiness certification, and electronics warranty tracking."
    },
    {
      title: "End-to-End Logistics",
      body: "Integrated freight, customs clearance, insurance, and last-mile delivery across jurisdictions."
    },
    {
      title: "Regulatory Compliance",
      body: "Full adherence to UAE FZCO, Ghana Minerals Commission, and international trade frameworks."
    },
    {
      title: "Flexible Finance",
      body: "Structured payment terms, trade financing, and instalment plans for qualified buyers."
    },
    {
      title: "Dedicated Client Support",
      body: "Dedicated account managers, after-sales support, and ongoing market advisory services."
    }
  ]
};

export const leadership = {
  name: "Shirley Ama Daniels",
  role: "Co-founder, Investment Strategist, and Business Executive",
  intro:
    "Shirley Ama Daniels is a results-driven business executive and investment strategist with more than a decade of experience across gold trading, commodity exports, procurement, and strategic business management.",
  body: [
    "As Managing Partner of the DD Willet Group of Companies and Co-founder of Shirley's Gold Trading Enterprise, she has built a reputation for navigating complex markets across West Africa and the Middle East with commercial discipline and ethical leadership.",
    "Her expertise spans the full gold value chain from sourcing and processing to export and international brokerage, supported by strong financial oversight, team leadership, and business development capabilities.",
    "She is known for a principled approach to trade, a commitment to operational excellence, and a long-term view of value creation for clients, investors, and communities."
  ],
  focusAreas: [
    "Gold trading and commodity export strategy",
    "Strategic procurement and international brokerage",
    "Financial oversight and risk-informed growth",
    "Team leadership, partnerships, and market development"
  ]
};

export const stakeholders: Stakeholder[] = [
  {
    name: "Shirley Ama Daniels",
    role: "Co-founder, Investment Strategist, and Business Executive",
    intro:
      "Results-driven business executive with more than a decade of experience in gold trading, commodity exports, procurement, and strategic business management.",
    areas: [
      "Gold trading and commodity export strategy",
      "Strategic procurement and international brokerage",
      "Financial oversight and business development",
      "Team leadership across West Africa and the Middle East"
    ],
    initials: "SD",
    verifiedSource: "Executive leadership"
  }
];

export const divisions: Division[] = [
  {
    slug: "precious-metals",
    name: "Precious Metals Trading",
    eyebrow: "Division 01",
    summary: "Ethically sourced Ghanaian gold connected to UAE and international refinery buyers.",
    description:
      "The precious metals division connects GoldBod-certified Ghanaian miners with UAE refineries and institutional buyers through compliant sourcing, assay-certified quality control, and secure logistics.",
    gallery: [
      {
        src: "/division-precious-1.webp",
        alt: "Gold bars positioned for institutional trade and refinery markets",
        eyebrow: "Sourcing",
        title: "Licensed procurement and verified supply flow"
      },
      {
        src: "/division-precious-2.webp",
        alt: "Gold procurement at origin with field-level sourcing activity",
        eyebrow: "Assay",
        title: "Purity testing and refinery-grade quality assurance"
      },
      {
        src: "/division-precious-3.webp",
        alt: "Mobile trading and market access for precious metals buyers",
        eyebrow: "Execution",
        title: "Secure logistics and institutional buyer delivery"
      },
      {
        src: "/division-precious-4.webp",
        alt: "Protected storage and secure handling of certified gold bars",
        eyebrow: "Markets",
        title: "Structured access to UAE and global refinery markets"
      }
    ],
    bullets: [
      "Gold procurement from certified Ghanaian miners",
      "Independent quality testing and assay certification",
      "Secure vault storage and insured logistics",
      "Direct sales to UAE and global refineries",
      "Full export documentation and compliance"
    ],
    metrics: [
      { label: "Export Volume", value: "200-400 kg annually" },
      { label: "Purity", value: "22-24 karat certified" },
      { label: "Markets", value: "UAE, Europe, Asia" }
    ],
    detailSections: [
      {
        title: "Ethical sourcing chain",
        body:
          "Procurement is built around GoldBod-licensed sourcing partnerships and Ghana Minerals Commission compliance to support traceability and buyer confidence."
      },
      {
        title: "Assay and documentation rigor",
        body:
          "Every export flow is supported by independent purity testing, assay reporting, and the documentation institutional buyers expect."
      },
      {
        title: "Secure international execution",
        body:
          "Bonded and insured logistics, secure records, and direct refinery relationships keep the trading chain controlled from origin to final sale."
      }
    ]
  },
  {
    slug: "automotive",
    name: "Automotive Import",
    eyebrow: "Division 02",
    summary: "Premium new and quality-used vehicles sourced from Dubai for West African buyers.",
    description:
      "The automotive division imports and distributes new and quality-used vehicles from Dubai to West African markets, with Ghana as the primary destination market.",
    gallery: [
      {
        src: "/division-automotive-1.webp",
        alt: "New vehicle positioned for regional automotive demand",
        eyebrow: "Inventory",
        title: "Market-fit vehicle sourcing for regional demand"
      },
      {
        src: "/division-automotive-2.webp",
        alt: "Specialized automotive transport and branded mobility showcase",
        eyebrow: "Logistics",
        title: "Shipping, customs, and delivery coordination"
      },
      {
        src: "/division-automotive-3.webp",
        alt: "Pickup vehicle prepared for commercial and fleet programs",
        eyebrow: "Fleet",
        title: "Fleet-ready supply for business and institutional buyers"
      },
      {
        src: "/division-automotive-4.webp",
        alt: "Automotive inventory arriving through a port logistics environment",
        eyebrow: "Support",
        title: "Inspection, roadworthiness, and after-sales support"
      }
    ],
    bullets: [
      "Toyota sedans, SUVs, pickups, vans, and commercial vehicles",
      "Chinese brands including Geely, BYD, Changan, JAC, Great Wall, and MG",
      "Quality assurance and roadworthiness certification",
      "Shipping, customs clearance, fleet solutions, financing, and after-sales support"
    ],
    metrics: [
      { label: "Primary Market", value: "Ghana, West Africa" },
      { label: "Vehicle Mix", value: "New and quality-used" },
      { label: "Buyer Profile", value: "Retail, fleet, and business buyers" }
    ],
    detailSections: [
      {
        title: "Market-fit inventory",
        body:
          "Vehicle selection is tailored to practical demand in West Africa, from executive sedans and SUVs to commercial and fleet-ready transport."
      },
      {
        title: "Trade execution support",
        body:
          "Clients receive end-to-end support from sourcing and inspection through shipping, customs, and delivery coordination."
      },
      {
        title: "Fleet and institutional capability",
        body:
          "The division is positioned to support corporate fleets, project mobility needs, and structured buyer programs."
      }
    ]
  },
  {
    slug: "electronics",
    name: "Electronics Distribution",
    eyebrow: "Division 03",
    summary: "Consumer electronics and appliances sourced from Asia and distributed through Dubai into Africa.",
    description:
      "The electronics division sources consumer electronics and home appliances from Chinese manufacturers and channels them through Dubai to African retail and wholesale buyers.",
    gallery: [
      {
        src: "/division-electronics-1.webp",
        alt: "Appliance showroom with premium home electronics",
        eyebrow: "Sourcing",
        title: "OEM electronics sourcing coordinated through Asia"
      },
      {
        src: "/division-electronics-2.webp",
        alt: "Smart home electronics and connected device display",
        eyebrow: "Distribution",
        title: "Appliances and devices routed through Dubai"
      },
      {
        src: "/division-electronics-3.webp",
        alt: "Business electronics showroom with computing and media devices",
        eyebrow: "Channels",
        title: "Wholesale and retail supply across African markets"
      },
      {
        src: "/division-electronics-4.webp",
        alt: "Consumer gaming and home entertainment electronics in use",
        eyebrow: "Commercial",
        title: "Commercial-grade supply for business procurement"
      }
    ],
    bullets: [
      "Home appliances including refrigerators, washing machines, and air conditioners",
      "Consumer electronics such as televisions, audio systems, and smart home devices",
      "Computing devices, mobile devices, gaming products, and commercial-grade electronics",
      "Wholesale and retail distribution support"
    ],
    metrics: [
      { label: "Sourcing Origin", value: "China" },
      { label: "Transit Hub", value: "Dubai" },
      { label: "Target Market", value: "African retail and wholesale buyers" }
    ],
    detailSections: [
      {
        title: "Cross-border sourcing model",
        body:
          "The division uses Dubai as a coordination hub for OEM sourcing, shipment consolidation, and onward movement into African markets."
      },
      {
        title: "Broad category coverage",
        body:
          "Product coverage spans home appliances, mobile devices, computing, entertainment, and business electronics."
      },
      {
        title: "Buyer support",
        body:
          "Distribution can support wholesale channels, project supply needs, and recurring business procurement requirements."
      }
    ]
  }
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" }
];
