import { motion } from "motion/react";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";

const CASES = [
  {
    specialty: "Multi-Specialty Group",
    challenge: "Rising denials and inconsistent coding across 14 providers.",
    solution: "Centralized coding, pre-submission scrubbing and denial analytics.",
    metrics: [
      { label: "Reduction in Denials", value: "↓ 42%", up: false },
      { label: "Increase in Collections", value: "↑ 31%", up: true },
    ],
  },
  {
    specialty: "Behavioral Health",
    challenge: "Authorization delays stalling treatment and payments.",
    solution: "Dedicated prior-auth team and real-time eligibility checks.",
    metrics: [
      { label: "Faster Reimbursements", value: "↑ 28%", up: true },
      { label: "AR Days Reduced", value: "↓ 18 days", up: false },
    ],
  },
  {
    specialty: "Orthopedic Practice",
    challenge: "Revenue leakage from surgical and DME under-coding.",
    solution: "Specialist coders with modifier and implant tracking.",
    metrics: [
      { label: "Revenue Recovered", value: "↑ 34%", up: true },
      { label: "Clean Claim Rate", value: "99.1%", up: true },
    ],
  },
  {
    specialty: "Urgent Care Network",
    challenge: "High walk-in volume overwhelming the billing team.",
    solution: "Automated charge capture and scalable claims processing.",
    metrics: [
      { label: "Collections Increase", value: "↑ 26%", up: true },
      { label: "Denial Rate", value: "↓ 2.0%", up: false },
    ],
  },
  {
    specialty: "Physical Therapy Clinic",
    challenge: "Cap monitoring errors and time-unit billing mistakes.",
    solution: "Plan-of-care tracking and compliant unit-based billing.",
    metrics: [
      { label: "Reimbursement Lift", value: "↑ 22%", up: true },
      { label: "AR Days Reduced", value: "↓ 15 days", up: false },
    ],
  },
  {
    specialty: "Ambulatory Surgery Center",
    challenge: "Complex facility claims causing payment delays.",
    solution: "Facility billing experts and proactive AR follow-up.",
    metrics: [
      { label: "Net Collections", value: "↑ 29%", up: true },
      { label: "Denials Overturned", value: "↑ 47%", up: true },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad scroll-mt-24 bg-secondary/40" aria-labelledby="cases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="cases-heading">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real Results for Healthcare Providers"
            subtitle="Helping medical organizations improve financial performance through modern Revenue Cycle Management."
          />
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <motion.article
              key={c.specialty}
              variants={itemVariants}
              className="group flex flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-glow"
            >
              <span className="inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {c.specialty}
              </span>
              <div className="mt-4 space-y-3 text-sm">
                <p><span className="font-semibold text-navy">Challenge: </span><span className="text-muted-foreground">{c.challenge}</span></p>
                <p><span className="font-semibold text-navy">Solution: </span><span className="text-muted-foreground">{c.solution}</span></p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-secondary/40 p-3">
                    <p className={`flex items-center gap-1 text-lg font-bold ${m.up ? "text-success" : "text-brand"}`}>
                      {m.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                Read Full Story <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}