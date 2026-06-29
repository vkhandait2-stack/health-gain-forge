import { motion } from "motion/react";
import { Counter } from "@/components/site/Counter";
import { Sparkline, Bars, Donut } from "./MiniChart";

const ROWS = [
  { label: "Claims Submitted", value: 18420, color: "var(--brand)" },
  { label: "Claims Paid", value: 17390, color: "oklch(0.62 0.16 162)" },
  { label: "Pending Claims", value: 1030, color: "oklch(0.72 0.16 70)" },
  { label: "Denials", value: 386, color: "oklch(0.6 0.23 25)" },
];

export function RevenueDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass rounded-[1.6rem] p-5 shadow-float"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <p className="text-sm font-semibold text-navy">Revenue Performance</p>
        <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
          This month
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="col-span-2 rounded-2xl bg-gradient-navy p-4 text-navy-foreground">
          <p className="text-xs text-navy-foreground/70">Recovered Revenue</p>
          <p className="mt-1 text-3xl font-bold">
            <Counter value={4126800} prefix="$" />
          </p>
          <Sparkline data={[10, 14, 12, 18, 16, 22, 21, 28, 30, 34]} color="oklch(0.78 0.13 200)" className="mt-3 h-9 w-full" />
        </div>
        {ROWS.map((r) => (
          <div key={r.label} className="rounded-2xl border border-border/60 bg-card/80 p-3">
            <p className="text-[11px] text-muted-foreground">{r.label}</p>
            <p className="mt-1 text-xl font-bold text-navy">
              <Counter value={r.value} />
            </p>
            <span className="mt-1 block h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <motion.span
                className="block h-full rounded-full"
                style={{ background: r.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min((r.value / 18420) * 100, 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 p-4">
        <div>
          <p className="text-[11px] text-muted-foreground">Collection Percentage</p>
          <p className="text-2xl font-bold text-navy">
            <Counter value={96.4} decimals={1} suffix="%" />
          </p>
          <Bars data={[6, 7, 8, 7, 9, 10, 11]} color="var(--brand)" className="mt-2 h-7 w-28" />
        </div>
        <Donut value={96} size={72} color="var(--brand)" />
      </div>
    </motion.div>
  );
}