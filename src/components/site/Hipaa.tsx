import { motion } from "motion/react";
import { ShieldCheck, Lock, KeyRound, ServerCog } from "lucide-react";
import { Reveal } from "./Reveal";

const POINTS = [
  { icon: Lock, title: "Encrypted Data Flow", desc: "Patient information is protected in transit and at rest across every workflow." },
  { icon: KeyRound, title: "Strict Access Controls", desc: "Role-based access and audit trails keep protected health information secure." },
  { icon: ServerCog, title: "Operational Excellence", desc: "Secure, monitored processes designed around healthcare privacy standards." },
];

export function Hipaa() {
  return (
    <section className="section-pad" aria-labelledby="hipaa-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-8 shadow-float sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-brand-glow/50"
                style={{ left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                animate={{ y: [0, -16, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex justify-center">
              <div className="relative grid h-44 w-44 place-items-center">
                <motion.span
                  className="absolute inset-0 rounded-full border border-brand-glow/30"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.span
                  className="absolute inset-4 rounded-full border border-brand-glow/40"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <span className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-brand shadow-glow">
                  <ShieldCheck className="h-12 w-12 text-primary-foreground" />
                </span>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-glow">
                <Lock className="h-3.5 w-3.5" /> Security First
              </span>
              <h2 id="hipaa-heading" className="mt-4 text-2xl font-bold text-navy-foreground sm:text-3xl">
                HIPAA Compliance &amp; Data Security
              </h2>
              <p className="mt-3 max-w-xl text-navy-foreground/70">
                Nex Records follows secure healthcare workflows, protects patient information and
                prioritizes privacy and operational excellence at every stage of the revenue cycle.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {POINTS.map((p) => (
                  <div key={p.title} className="glass-dark rounded-xl p-4">
                    <p.icon className="h-5 w-5 text-brand-glow" />
                    <p className="mt-2 text-sm font-semibold text-navy-foreground">{p.title}</p>
                    <p className="mt-1 text-xs text-navy-foreground/60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}