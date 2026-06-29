import { motion } from "motion/react";
import { Activity, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { Sparkline, Bars, Donut } from "./MiniChart";

function StatCard({
  icon,
  label,
  children,
  accent,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  accent: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl border border-border/70 bg-card/90 p-4 shadow-soft"
    >
      <div className="flex items-center gap-2">
        <span
          className="grid h-7 w-7 place-items-center rounded-lg"
          style={{ background: `color-mix(in oklab, ${accent} 14%, transparent)`, color: accent }}
        >
          {icon}
        </span>
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="mt-3">{children}</div>
    </motion.div>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-[1.6rem] p-4 shadow-float sm:p-5"
        whileHover={{ y: -6 }}
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
              <Activity className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">Revenue Command Center</p>
              <p className="text-[11px] text-muted-foreground">Live · Updated just now</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-ring" /> Live
          </span>
        </div>

        {/* primary metric */}
        <div className="mt-4 rounded-2xl bg-gradient-navy p-4 text-navy-foreground">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-navy-foreground/70">Revenue Recovered (MTD)</p>
              <p className="mt-1 text-3xl font-bold tracking-tight">
                <Counter value={2438500} prefix="$" />
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success/20 px-2 py-1 text-xs font-semibold text-success">
              <TrendingUp className="h-3.5 w-3.5" /> +<Counter value={35} suffix="%" />
            </span>
          </div>
          <Sparkline
            data={[8, 12, 10, 16, 14, 20, 18, 26, 24, 32, 30, 38]}
            color="oklch(0.78 0.13 200)"
            className="mt-3 h-10 w-full"
          />
        </div>

        {/* grid */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <StatCard icon={<CheckCircle2 className="h-4 w-4" />} label="Claims Submitted Today" accent="var(--brand)" delay={0.1}>
            <p className="text-2xl font-bold text-navy">
              <Counter value={1284} />
            </p>
            <Bars data={[5, 8, 6, 9, 7, 11, 10]} color="var(--brand)" className="mt-2 h-8" />
          </StatCard>

          <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Insurance Verification" accent="oklch(0.62 0.16 162)" delay={0.18}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-navy">
                  <Counter value={98} decimals={0} suffix="%" />
                </p>
                <p className="text-[11px] text-muted-foreground">Accuracy</p>
              </div>
              <Donut value={98} size={52} color="oklch(0.62 0.16 162)" />
            </div>
          </StatCard>

          <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Collections" accent="var(--brand-bright)" delay={0.26}>
            <p className="text-2xl font-bold text-navy">
              <Counter value={94.6} decimals={1} suffix="%" />
            </p>
            <Sparkline data={[6, 7, 9, 8, 11, 10, 13]} color="var(--brand-bright)" className="mt-2 h-8 w-full" />
          </StatCard>

          <StatCard icon={<AlertTriangle className="h-4 w-4" />} label="Denial Rate" accent="oklch(0.72 0.16 70)" delay={0.34}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-navy">
                  <Counter value={2.1} decimals={1} suffix="%" />
                </p>
                <p className="text-[11px] text-muted-foreground">A/R Days: <Counter value={26} /></p>
              </div>
              <Donut value={21} size={52} color="oklch(0.72 0.16 70)" />
            </div>
          </StatCard>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand/10 text-brand">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">Payment Posted</span>
          </div>
          <p className="text-lg font-bold text-navy">
            <Counter value={912400} prefix="$" />
          </p>
        </div>
      </motion.div>

      {/* floating badges */}
      <motion.div
        className="absolute -left-4 top-1/3 hidden rounded-xl border border-border/70 bg-card px-3 py-2 shadow-card sm:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] text-muted-foreground">Clean Claim Rate</p>
        <p className="text-sm font-bold text-success">99.2%</p>
      </motion.div>
      <motion.div
        className="absolute -right-3 bottom-12 hidden rounded-xl border border-border/70 bg-card px-3 py-2 shadow-card sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] text-muted-foreground">Reimbursements</p>
        <p className="text-sm font-bold text-brand">Faster by 28%</p>
      </motion.div>
    </div>
  );
}