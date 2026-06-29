import { motion } from "motion/react";
import { X, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const BEFORE = ["High Denials", "Slow Payments", "Manual Processes", "Poor Visibility", "Revenue Leakage"];
const AFTER = ["Higher Revenue", "Lower Denials", "Faster Collections", "AI Insights", "Complete Transparency"];

export function Results() {
  return (
    <section className="section-pad" aria-labelledby="results-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div id="results-heading">
          <SectionHeading
            eyebrow="The Transformation"
            title="The difference Nex Records makes"
            subtitle="See what changes when your revenue cycle runs on technology, specialists and operational excellence."
          />
        </div>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-secondary/50 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Before Nex Records</p>
            <ul className="mt-4 space-y-3">
              {BEFORE.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-navy/70">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden items-center justify-center md:flex">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-brand/30 bg-card p-6 shadow-glow"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">After Nex Records</p>
            <ul className="mt-4 space-y-3">
              {AFTER.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}