import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";

interface Specialty {
  name: string;
  desc: string;
  slug?: string;
}

const SPECIALTIES: Specialty[] = [
  { name: "Primary Care", slug: "primary-care", desc: "Streamlined billing and eligibility workflows for high-volume primary care visits." },
  { name: "Family Medicine", slug: "family-medicine", desc: "Accurate coding for preventive, chronic and acute care across all ages." },
  { name: "Internal Medicine", slug: "internal-medicine", desc: "Complex E/M coding and documentation support to capture full reimbursement." },
  { name: "Urgent Care", slug: "urgent-care", desc: "Fast claims for walk-in volume with real-time eligibility verification." },
  { name: "Behavioral Health", slug: "behavioral-health", desc: "Specialized billing for therapy, counseling and time-based session codes." },
  { name: "Mental Health", slug: "mental-health", desc: "Authorization-heavy workflows handled end to end to prevent denials." },
  { name: "Psychiatry", slug: "psychiatry", desc: "Medication management and psychotherapy add-on coding done right." },
  { name: "Cardiology", slug: "cardiology", desc: "Diagnostic and interventional coding with bundling compliance." },
  { name: "Orthopedics", slug: "orthopedics", desc: "Surgical, imaging and DME billing with modifier precision." },
  { name: "Pediatrics", slug: "pediatrics", desc: "Well-child, vaccine and developmental screening reimbursement optimization." },
  { name: "Dermatology", slug: "dermatology", desc: "Pathology, biopsy and cosmetic vs. medical claim separation." },
  { name: "OB/GYN", slug: "obgyn", desc: "Global maternity billing and gynecological procedure coding." },
  { name: "Pain Management", slug: "pain-management", desc: "Injection, procedure and authorization management to reduce delays." },
  { name: "Physical Therapy", slug: "physical-therapy", desc: "Time-unit billing, plan-of-care tracking and cap monitoring." },
  { name: "Chiropractic", slug: "chiropractic", desc: "Medical necessity documentation and active-treatment coding." },
  { name: "Radiology", slug: "radiology", desc: "Technical and professional component billing across modalities." },
  { name: "Gastroenterology", slug: "gastroenterology", desc: "Endoscopy, screening vs. diagnostic and modifier coding done right." },
  { name: "Nephrology", slug: "nephrology", desc: "Dialysis MCP billing and chronic care coding for renal practices." },
  { name: "Telehealth", slug: "telehealth", desc: "Place-of-service and modifier compliance for virtual visits." },
  { name: "Multi-Specialty Groups", slug: "multi-specialty", desc: "Unified reporting and billing across every department and provider." },
];

export function Industries() {
  const [active, setActive] = useState<Specialty | null>(null);
  return (
    <section id="industries" className="section-pad scroll-mt-24" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="industries-heading">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Revenue Cycle Management for Every Healthcare Specialty"
            subtitle="Our dedicated RCM teams understand the unique billing workflows, coding requirements and reimbursement challenges of every medical specialty."
          />
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SPECIALTIES.map((s) => (
            <motion.button
              key={s.name}
              variants={itemVariants}
              onClick={() => setActive(s)}
              className="group rounded-xl border border-border bg-card/80 px-4 py-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-glow"
            >
              <span className="block h-2 w-2 rounded-full bg-brand transition-all duration-300 group-hover:w-6" />
              <span className="mt-3 block text-sm font-semibold text-navy">{s.name}</span>
              <span className="mt-1 block text-xs text-brand opacity-0 transition-opacity group-hover:opacity-100">
                View details
              </span>
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-navy-deep/40 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-float"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-accent"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                Specialty
              </span>
              <h3 className="mt-3 text-xl font-semibold text-navy">{active.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{active.desc}</p>
              {active.slug && (
                <Link
                  to="/industries/$slug"
                  params={{ slug: active.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all hover:gap-2"
                >
                  View full details <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}