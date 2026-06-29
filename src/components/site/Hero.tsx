import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./HeroBackground";
import { HeroDashboard } from "@/components/dashboards/HeroDashboard";
import { Magnetic } from "@/components/motion/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 lg:pt-24" aria-labelledby="hero-heading">
      <HeroBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Healthcare Revenue Cycle Partner
          </motion.span>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]"
          >
            Accelerate Your Healthcare Revenue with Smarter{" "}
            <span className="text-gradient">Revenue Cycle Management</span>.
          </motion.h1>

          {/* SEO H2 reinforcing target keyword */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From patient registration to final payment — Nex Records helps healthcare providers
            reduce denials, maximize reimbursements, improve cash flow and streamline every stage of
            the revenue cycle.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Magnetic>
              <Button asChild variant="hero" size="lg">
                <a href="#contact">
                  Schedule Free Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </span>
              Rated by healthcare leaders
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-success" /> HIPAA-conscious workflows
            </span>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}