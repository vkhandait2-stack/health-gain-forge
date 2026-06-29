import { Counter } from "./Counter";
import { Stagger, itemVariants } from "./Reveal";
import { motion } from "motion/react";

const STATS = [
  { value: 99.2, decimals: 1, suffix: "%", label: "Clean Claim Rate" },
  { value: 98, suffix: "%", label: "Insurance Verification Accuracy" },
  { value: 35, suffix: "%", label: "Average Revenue Improvement" },
  { value: 40, suffix: "%", label: "Reduction in Claim Denials" },
  { value: 0, suffix: "", label: "Dedicated RCM Support", literal: "24/7" },
];

export function Metrics() {
  return (
    <section className="section-pad" aria-label="Business metrics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                {s.literal ? (
                  s.literal
                ) : (
                  <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}