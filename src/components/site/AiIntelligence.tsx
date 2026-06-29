import { motion } from "motion/react";
import { Sparkles, AlertTriangle, TrendingUp, Activity, Map, Lightbulb } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";
import { Counter } from "./Counter";
import { Sparkline, Bars } from "@/components/dashboards/MiniChart";

const FEATURES = [
  { icon: AlertTriangle, title: "Predictive Denial Alerts", desc: "Flag at-risk claims before submission to prevent denials." },
  { icon: TrendingUp, title: "Revenue Forecast", desc: "Project collections and cash flow with AI-driven accuracy." },
  { icon: Activity, title: "Insurance Trends", desc: "Spot payer behavior shifts and reimbursement patterns early." },
  { icon: Sparkles, title: "Claim Status Tracking", desc: "Real-time visibility on every claim across its lifecycle." },
  { icon: Map, title: "Revenue Heat Map", desc: "Identify revenue leakage by service line and location." },
  { icon: Lightbulb, title: "AI Recommendations", desc: "Actionable guidance to optimize every revenue cycle stage." },
];

export function AiIntelligence() {
  return (
    <section className="section-pad" aria-labelledby="ai-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="ai-heading">
          <SectionHeading
            eyebrow="AI Intelligence"
            title="AI-Powered Revenue Intelligence"
            subtitle="Smarter automation for faster reimbursements and better financial visibility."
          />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                className="group rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-glow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-transform group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </Stagger>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-[1.6rem] p-5 shadow-float"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <p className="text-sm font-semibold text-navy">AI Revenue Console</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                <Sparkles className="h-3 w-3" /> AI
              </span>
            </div>
            <div className="mt-4 rounded-2xl bg-gradient-navy p-4 text-navy-foreground">
              <p className="text-xs text-navy-foreground/70">Forecasted Revenue (Next 30 Days)</p>
              <p className="mt-1 text-3xl font-bold">
                <Counter value={3920000} prefix="$" />
              </p>
              <Sparkline data={[10, 13, 12, 17, 16, 21, 24, 22, 28, 31]} color="oklch(0.78 0.13 200)" className="mt-3 h-10 w-full" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border/60 bg-card/80 p-3">
                <p className="text-[11px] text-muted-foreground">Predicted Denials Prevented</p>
                <p className="mt-1 text-xl font-bold text-success">
                  <Counter value={1148} />
                </p>
                <Bars data={[4, 6, 5, 8, 7, 9, 11]} color="oklch(0.62 0.16 162)" className="mt-2 h-7" />
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/80 p-3">
                <p className="text-[11px] text-muted-foreground">AI Confidence</p>
                <p className="mt-1 text-xl font-bold text-navy">
                  <Counter value={97.3} decimals={1} suffix="%" />
                </p>
                <Bars data={[6, 7, 8, 8, 9, 10, 10]} color="var(--brand)" className="mt-2 h-7" />
              </div>
            </div>
            <div className="mt-3 flex items-start gap-2 rounded-2xl border border-brand/20 bg-brand-soft/60 p-3">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <p className="text-xs text-navy">
                <span className="font-semibold">Recommendation:</span> Resubmit 23 cardiology claims with
                modifier 25 to recover an estimated $48,200.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}