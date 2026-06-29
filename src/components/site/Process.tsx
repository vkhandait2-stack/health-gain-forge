import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { title: "Patient Registration", desc: "Capture accurate demographics and insurance details from the start." },
  { title: "Insurance Verification", desc: "Confirm eligibility and benefits before the visit." },
  { title: "Medical Coding", desc: "Precise ICD-10, CPT and HCPCS coding by certified specialists." },
  { title: "Charge Entry", desc: "Complete charge capture for clean, complete claims." },
  { title: "Claim Submission", desc: "Electronic submission with proactive scrubbing." },
  { title: "Payment Posting", desc: "Accurate posting and reconciliation of every payment." },
  { title: "Denial Management", desc: "Root-cause analysis and appeals to recover revenue." },
  { title: "AR Follow-Up", desc: "Persistent follow-up to accelerate collections." },
  { title: "Revenue Reporting", desc: "Transparent dashboards and continuous performance insights." },
];

export function Process() {
  return (
    <section className="section-pad bg-secondary/40" aria-labelledby="process-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div id="process-heading">
          <SectionHeading
            eyebrow="Our Process"
            title="Our Proven Revenue Cycle Process"
            subtitle="A connected, continuously monitored workflow that turns every patient encounter into captured revenue."
          />
        </div>
        <div className="relative mt-14 pl-10">
          <span className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-px bg-border" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-9 last:pb-0"
            >
              <span className="absolute -left-10 grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-glow">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-brand/30 hover:shadow-glow">
                <h3 className="text-base font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}