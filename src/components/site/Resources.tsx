import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";

const ARTICLES = [
  { tag: "Guide", title: "The Complete Medical Billing Guide for 2026", read: "8 min read" },
  { tag: "Best Practices", title: "RCM Best Practices to Maximize Collections", read: "6 min read" },
  { tag: "Denials", title: "A Practical Framework for Denial Management", read: "7 min read" },
  { tag: "Strategy", title: "Revenue Optimization for Growing Practices", read: "5 min read" },
  { tag: "Coding", title: "Medical Coding Updates Every Provider Should Know", read: "9 min read" },
  { tag: "AI", title: "How AI Is Transforming Healthcare RCM", read: "6 min read" },
];

export function Resources() {
  return (
    <section id="resources" className="section-pad scroll-mt-24" aria-labelledby="resources-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="resources-heading">
          <SectionHeading
            eyebrow="Resources"
            title="Insights from our revenue cycle experts"
            subtitle="Practical guidance to help your practice strengthen financial performance."
          />
        </div>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <motion.article
              key={a.title}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-glow"
            >
              <div className="relative h-36 overflow-hidden bg-gradient-navy">
                <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.6), transparent 60%)" }} />
                <BookOpen className="absolute bottom-4 left-5 h-7 w-7 text-brand-glow" />
                <span className="absolute left-5 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-navy-foreground backdrop-blur">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted-foreground">{a.read}</p>
                <h3 className="mt-2 flex-1 text-lg font-semibold text-navy">{a.title}</h3>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}