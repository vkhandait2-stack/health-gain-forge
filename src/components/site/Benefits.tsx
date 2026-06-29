import { motion } from "motion/react";
import {
  TrendingUp,
  ShieldOff,
  Banknote,
  Timer,
  Percent,
  Lock,
  Users,
  UserCheck,
  LineChart,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { itemVariants, Stagger } from "./Reveal";
import { RevenueDashboard } from "@/components/dashboards/RevenueDashboard";

const OUTCOMES = [
  { icon: TrendingUp, label: "Increase Revenue" },
  { icon: ShieldOff, label: "Reduce Claim Denials" },
  { icon: Banknote, label: "Improve Cash Flow" },
  { icon: Timer, label: "Faster Payments" },
  { icon: Percent, label: "Higher Collection Rate" },
  { icon: Lock, label: "HIPAA-Compliant Processes" },
  { icon: Users, label: "Experienced RCM Specialists" },
  { icon: UserCheck, label: "Dedicated Account Managers" },
  { icon: LineChart, label: "24/7 Reporting Dashboard" },
];

export function Benefits() {
  return (
    <section id="solutions" className="section-pad scroll-mt-24 bg-secondary/40" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="solutions-heading">
          <SectionHeading
            eyebrow="Business Outcomes"
            title="Solutions built around measurable financial results"
            subtitle="We don't sell features — we deliver outcomes that strengthen your bottom line."
            align="left"
          />
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <motion.div
                key={o.label}
                variants={itemVariants}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <o.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-navy">{o.label}</span>
              </motion.div>
            ))}
          </Stagger>
          <RevenueDashboard />
        </div>
      </div>
    </section>
  );
}