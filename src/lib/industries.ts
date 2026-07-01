export interface IndustryContent {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  overview: string;
  challenges: { title: string; desc: string }[];
  highlights: string[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

function build(
  slug: string,
  name: string,
  icon: string,
  focus: string,
  challenges: { title: string; desc: string }[],
  highlights: string[],
  stats: { value: string; label: string }[],
  faqs: { q: string; a: string }[],
): IndustryContent {
  return {
    slug,
    name,
    icon,
    tagline: `Specialized revenue cycle management built for ${name.toLowerCase()}.`,
    problem: `${name} practices face specialty-specific coding rules, payer requirements and denial patterns that generic billing teams routinely get wrong.`,
    solution: `Nex Records assigns dedicated RCM specialists who know ${name.toLowerCase()} billing — ${focus} — and manage your full revenue cycle end to end.`,
    result: `Cleaner claims, fewer denials and higher collections tailored to the realities of ${name.toLowerCase()}.`,
    overview: `Our ${name.toLowerCase()} revenue cycle team understands the billing workflows, coding nuances and reimbursement challenges unique to your specialty. From eligibility and coding through denial management and analytics, we manage every step so your practice captures the full value of every encounter.`,
    challenges,
    highlights,
    stats,
    faqs,
    metaTitle: `${name} Medical Billing & RCM Services | Nex Records`,
    metaDescription: `Specialized ${name.toLowerCase()} medical billing and revenue cycle management from Nex Records. Reduce denials, capture full reimbursement and get paid faster.`,
  };
}

const DEFAULT_HIGHLIGHTS = [
  "Dedicated specialty-trained RCM team",
  "Certified specialty coders",
  "Denial prevention and rapid appeals",
  "Eligibility and prior-auth handling",
  "Real-time revenue dashboards",
  "HIPAA-conscious workflows",
];

const DEFAULT_STATS = [
  { value: "98%", label: "Clean-claim rate" },
  { value: "30%", label: "Fewer denials" },
  { value: "20%+", label: "Revenue lift" },
];

const DEFAULT_FAQS = (name: string) => [
  { q: `Do you have experience with ${name.toLowerCase()} billing?`, a: `Yes. We assign coders and billers who specialize in ${name.toLowerCase()} and know its payer rules and coding nuances.` },
  { q: "Do you work with our existing system?", a: "Yes, we operate inside your existing EHR/PM system with no disruptive migration." },
  { q: "How fast can we get started?", a: "Most practices onboard within 2–4 weeks depending on volume and payer mix." },
];

export const INDUSTRIES: IndustryContent[] = [
  build("primary-care", "Primary Care", "Stethoscope", "high-volume visit billing and preventive care coding", [
    { title: "High Visit Volume", desc: "Large daily volumes strain billing capacity and slow claims." },
    { title: "Preventive Coding", desc: "Wellness and preventive visits have strict coding rules." },
    { title: "Chronic Care", desc: "CCM and chronic care management require careful documentation." },
    { title: "Payer Mix", desc: "Broad payer mix means varied rules and denial patterns." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Primary Care")),
  build("family-medicine", "Family Medicine", "Users", "all-ages preventive, chronic and acute care coding", [
    { title: "All-Ages Care", desc: "Coding spans pediatrics through geriatrics in one practice." },
    { title: "Preventive Services", desc: "Screenings and wellness visits need precise coding." },
    { title: "Bundled Services", desc: "Multiple services per visit raise bundling complexity." },
    { title: "Documentation", desc: "E/M documentation must support the level billed." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Family Medicine")),
  build("internal-medicine", "Internal Medicine", "HeartPulse", "complex E/M coding and chronic disease management", [
    { title: "Complex E/M", desc: "High-level visits require airtight documentation." },
    { title: "Chronic Disease", desc: "Managing multiple conditions complicates coding." },
    { title: "Time-Based Billing", desc: "Time-based codes must be documented correctly." },
    { title: "Under-Coding Risk", desc: "Complex visits are frequently under-coded and underpaid." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Internal Medicine")),
  build("urgent-care", "Urgent Care", "Siren", "walk-in volume, eligibility and fast claim turnaround", [
    { title: "Walk-In Volume", desc: "Unpredictable volume demands scalable billing." },
    { title: "Real-Time Eligibility", desc: "Verification must happen fast at point of care." },
    { title: "S-Codes & Facility", desc: "Urgent care coding has unique requirements." },
    { title: "High Patient Balances", desc: "Copays and self-pay need efficient collection." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Urgent Care")),
  build("behavioral-health", "Behavioral Health", "Brain", "time-based session coding and authorization-heavy workflows", [
    { title: "Time-Based Sessions", desc: "Therapy codes depend on precise session timing." },
    { title: "Heavy Authorizations", desc: "Many services require prior authorization." },
    { title: "Parity Rules", desc: "Mental health parity adds payer complexity." },
    { title: "Recurring Visits", desc: "Frequent sessions multiply billing volume." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Behavioral Health")),
  build("mental-health", "Mental Health", "HeartHandshake", "authorization management and session-based billing", [
    { title: "Authorization Load", desc: "Ongoing auth management is time-consuming." },
    { title: "Session Coding", desc: "Psychotherapy add-on codes require accuracy." },
    { title: "Telehealth Mix", desc: "Virtual visits add place-of-service complexity." },
    { title: "Denial Sensitivity", desc: "Small errors trigger frequent denials." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Mental Health")),
  build("psychiatry", "Psychiatry", "Pill", "medication management and psychotherapy add-on coding", [
    { title: "Med Management", desc: "E/M plus psychotherapy add-ons require care." },
    { title: "Complex Combinations", desc: "Combined service coding is error-prone." },
    { title: "Authorizations", desc: "Many treatments need prior authorization." },
    { title: "Documentation", desc: "Notes must support combined billing." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Psychiatry")),
  build("cardiology", "Cardiology", "Activity", "diagnostic and interventional coding with bundling compliance", [
    { title: "Interventional Coding", desc: "Procedures carry complex, high-value codes." },
    { title: "Bundling Rules", desc: "NCCI edits and bundling must be respected." },
    { title: "Diagnostics", desc: "Echo, stress tests and imaging need precision." },
    { title: "High Revenue at Risk", desc: "Errors on high-value claims are costly." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Cardiology")),
  build("orthopedics", "Orthopedics", "Bone", "surgical, imaging and DME billing with modifier precision", [
    { title: "Surgical Coding", desc: "Global periods and modifiers are complex." },
    { title: "DME Billing", desc: "Durable medical equipment adds requirements." },
    { title: "Imaging", desc: "In-office imaging needs correct component billing." },
    { title: "Authorizations", desc: "Procedures frequently require prior auth." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Orthopedics")),
  build("pediatrics", "Pediatrics", "Baby", "well-child, vaccine and developmental screening reimbursement", [
    { title: "Vaccine Billing", desc: "Immunization administration coding is intricate." },
    { title: "Well-Child Visits", desc: "Preventive schedules have specific codes." },
    { title: "Screenings", desc: "Developmental screenings must be captured." },
    { title: "Medicaid Mix", desc: "Heavy Medicaid volume adds payer complexity." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Pediatrics")),
  build("dermatology", "Dermatology", "Scan", "pathology, biopsy and cosmetic vs. medical claim separation", [
    { title: "Path & Biopsy", desc: "Specimen and pathology coding require accuracy." },
    { title: "Cosmetic vs. Medical", desc: "Claims must correctly separate the two." },
    { title: "Procedure Volume", desc: "High procedure counts multiply coding work." },
    { title: "Modifiers", desc: "Lesion and site modifiers are error-prone." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Dermatology")),
  build("obgyn", "OB/GYN", "Flower2", "global maternity billing and gynecological procedure coding", [
    { title: "Global Maternity", desc: "Global OB packages are complex to bill." },
    { title: "Procedure Coding", desc: "Gynecological procedures need precision." },
    { title: "Split Billing", desc: "Antepartum/postpartum splits require care." },
    { title: "Authorizations", desc: "Certain services require prior auth." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("OB/GYN")),
  build("pain-management", "Pain Management", "Zap", "injection, procedure and authorization management", [
    { title: "Injection Coding", desc: "Injections and blocks have detailed rules." },
    { title: "Heavy Authorizations", desc: "Most procedures require prior auth." },
    { title: "Medical Necessity", desc: "Documentation must justify each service." },
    { title: "Bundling", desc: "Procedure bundling edits are common." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Pain Management")),
  build("physical-therapy", "Physical Therapy", "Dumbbell", "time-unit billing, plan-of-care tracking and cap monitoring", [
    { title: "Timed Units", desc: "The 8-minute rule and timed codes are tricky." },
    { title: "Plan of Care", desc: "Certifications and re-certs must be tracked." },
    { title: "Therapy Caps", desc: "Threshold monitoring prevents denials." },
    { title: "High Visit Volume", desc: "Frequent visits multiply billing volume." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Physical Therapy")),
  build("chiropractic", "Chiropractic", "PersonStanding", "medical necessity documentation and active-treatment coding", [
    { title: "Medical Necessity", desc: "Documentation must support active treatment." },
    { title: "Maintenance Care", desc: "Distinguishing active vs. maintenance is key." },
    { title: "Modifiers", desc: "AT and other modifiers must be correct." },
    { title: "Limited Coverage", desc: "Payer coverage limits require careful billing." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Chiropractic")),
  build("radiology", "Radiology", "ScanLine", "technical and professional component billing across modalities", [
    { title: "Component Billing", desc: "Technical vs. professional splits require care." },
    { title: "Modality Volume", desc: "High imaging volume multiplies claims." },
    { title: "Authorizations", desc: "Advanced imaging frequently needs prior auth." },
    { title: "Modifiers", desc: "TC/26 and other modifiers must be exact." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Radiology")),
  build("gastroenterology", "Gastroenterology", "Microscope", "endoscopy, screening vs. diagnostic and modifier coding", [
    { title: "Endoscopy Coding", desc: "Procedure families have detailed rules." },
    { title: "Screening vs. Diagnostic", desc: "The distinction changes reimbursement." },
    { title: "Modifiers", desc: "PT and other modifiers are essential." },
    { title: "Facility Coordination", desc: "ASC and facility billing must align." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Gastroenterology")),
  build("nephrology", "Nephrology", "Droplets", "dialysis MCP billing and chronic care coding", [
    { title: "Dialysis Billing", desc: "Monthly capitated payment coding is complex." },
    { title: "Chronic Care", desc: "CKD management requires careful documentation." },
    { title: "Facility Coordination", desc: "Dialysis facility billing must align." },
    { title: "Frequent Visits", desc: "Recurring visits raise billing volume." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Nephrology")),
  build("telehealth", "Telehealth", "Video", "place-of-service and modifier compliance for virtual visits", [
    { title: "POS Codes", desc: "Place-of-service rules changed and vary by payer." },
    { title: "Modifiers", desc: "95 and other modifiers must be applied correctly." },
    { title: "Shifting Policies", desc: "Telehealth rules evolve constantly." },
    { title: "Cross-State Rules", desc: "Multi-state care adds payer complexity." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Telehealth")),
  build("multi-specialty", "Multi-Specialty Groups", "Building2", "unified billing and reporting across every department", [
    { title: "Many Specialties", desc: "Each department has different coding rules." },
    { title: "Unified Reporting", desc: "Leaders need one consolidated financial view." },
    { title: "Provider Volume", desc: "Many providers multiply billing complexity." },
    { title: "Consistency", desc: "Standardizing workflows across sites is hard." },
  ], DEFAULT_HIGHLIGHTS, DEFAULT_STATS, DEFAULT_FAQS("Multi-Specialty Groups")),
];

export function getIndustry(slug: string): IndustryContent | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);