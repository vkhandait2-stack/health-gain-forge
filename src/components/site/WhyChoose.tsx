import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";
import { KpiDashboard } from "@/components/dashboards/KpiDashboard";

const BENEFITS = [
  "HIPAA-Compliant Workflows",
  "Experienced Certified RCM Specialists",
  "Dedicated Account Managers",
  "AI-Powered Revenue Insights",
  "Reduced Claim Denials",
  "Faster Reimbursements",
  "Improved Cash Flow",
  "Transparent Reporting",
  "Scalable Operations",
  "Custom RCM Solutions",
  "24/7 Operational Support",
  "Enterprise Security",
];

export function WhyChoose() {
  return (
    <section id="about" className="section-pad scroll-mt-24 bg-secondary/40" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="why-heading">
          <SectionHeading
            eyebrow="Why Nex Records"
            title="Why Leading Healthcare Providers Choose Nex Records"
            subtitle="An enterprise revenue cycle organization built on technology, operational excellence and experienced specialists."
          />
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <motion.div
                key={b}
                variants={itemVariants}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-glow"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-navy">{b}</span>
              </motion.div>
            ))}
          </Stagger>
          <KpiDashboard />
        </div>
      </div>
    </section>
  );
}