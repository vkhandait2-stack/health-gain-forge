import { Stagger, itemVariants } from "./Reveal";
import { motion } from "motion/react";

// Clearly-framed performance benchmarks we target — not fabricated client totals.
const STATS = [
  { display: "Up to 98%", label: "Clean-claim rate" },
  { display: "95%+", label: "First-pass resolution" },
  { display: "Up to 30%", label: "Fewer denials" },
  { display: "< 35 days", label: "Days in A/R" },
  { display: "24/7", label: "US-based RCM support" },
];

export function Metrics() {
  return (
    <section className="section-pad" aria-label="Performance benchmarks">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Industry-standard results we target for the practices we serve
        </p>
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">{s.display}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
