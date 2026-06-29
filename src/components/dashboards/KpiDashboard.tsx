import { motion } from "motion/react";
import { Counter } from "@/components/site/Counter";
import { Sparkline } from "./MiniChart";

const KPIS = [
  { label: "Claims Processed", value: 1240000, prefix: "" },
  { label: "Revenue Recovered", value: 184, prefix: "$", suffix: "M" },
  { label: "Clean Claim Rate", value: 99.2, suffix: "%", decimals: 1 },
  { label: "Denial Rate", value: 2.1, suffix: "%", decimals: 1 },
  { label: "Collection Rate", value: 96.4, suffix: "%", decimals: 1 },
  { label: "Average AR Days", value: 26, suffix: "" },
  { label: "Verification Accuracy", value: 98, suffix: "%" },
];

export function KpiDashboard() {
  return (
    <div className="glass rounded-[1.6rem] p-5 shadow-float">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <p className="text-sm font-semibold text-navy">Operational KPIs</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-ring" /> Live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {KPIS.slice(0, 6).map((k) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/80 p-3"
          >
            <p className="text-[11px] text-muted-foreground">{k.label}</p>
            <p className="mt-1 text-xl font-bold text-navy">
              <Counter value={k.value} decimals={k.decimals ?? 0} prefix={k.prefix ?? ""} suffix={k.suffix ?? ""} />
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-gradient-navy p-4 text-navy-foreground">
        <div className="flex items-center justify-between">
          <p className="text-xs text-navy-foreground/70">Insurance Verification Accuracy</p>
          <p className="text-lg font-bold">
            <Counter value={98} suffix="%" />
          </p>
        </div>
        <Sparkline data={[12, 14, 13, 17, 19, 18, 22, 24]} color="oklch(0.78 0.13 200)" className="mt-2 h-10 w-full" />
      </div>
    </div>
  );
}