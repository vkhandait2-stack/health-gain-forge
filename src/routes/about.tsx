import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, ShieldCheck, Users, TrendingUp, HeartHandshake } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Stagger, itemVariants, Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { SITE_URL } from "@/lib/site";

const TITLE = "About Nex Records | Healthcare Revenue Cycle Management";
const DESC = "Nex Records is a U.S.-focused Healthcare Revenue Cycle Management company helping medical practices, clinics and hospitals increase revenue, reduce denials and get paid faster.";

const VALUES = [
  { icon: ShieldCheck, title: "Integrity & Compliance", desc: "HIPAA-conscious workflows and transparent reporting guide everything we do." },
  { icon: TrendingUp, title: "Results That Matter", desc: "We measure success by cleaner claims, faster reimbursement and higher collections." },
  { icon: HeartHandshake, title: "True Partnership", desc: "Dedicated specialists who know your practice and act as an extension of your team." },
  { icon: Users, title: "Specialty Expertise", desc: "Certified coders and billers trained across 20+ medical specialties." },
];

const STATS = [
  { value: "Up to 98%", label: "Clean-claim rate we target" },
  { value: "Up to 30%", label: "Fewer denials" },
  { value: "< 35 days", label: "Days in A/R" },
  { value: "24/7", label: "US-based RCM support" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="About Nex Records"
        title="Revenue cycle experts on your side"
        subtitle="We help U.S. healthcare providers take control of their revenue cycle — so clinical teams can focus on patients while we get every claim paid accurately and faster."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/80 p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Target className="h-5 w-5" /></span>
              <h2 className="mt-5 text-xl font-semibold text-navy">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To make healthcare revenue cycle management effortless and transparent — eliminating denials, accelerating
                reimbursement and giving providers complete visibility into their financial performance.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Eye className="h-5 w-5" /></span>
              <h2 className="mt-5 text-xl font-semibold text-navy">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be the most trusted revenue cycle partner for healthcare organizations across the United States — known
                for accuracy, accountability and measurable results.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card/80 p-7 shadow-soft">
            <h2 className="text-xl font-semibold text-navy">Who we are</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nex Records is a Healthcare Revenue Cycle Management company built for modern medical practices. Our certified
              coders, billers and denial-management specialists manage every stage of the revenue cycle — eligibility,
              coding, charge entry, claims submission, payment posting, denial management and analytics — with a relentless
              focus on collecting every dollar you have earned. We combine experienced U.S.-focused teams with automated
              claim scrubbing and AI-driven denial prevention to keep your first-pass acceptance high and your A/R low.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={itemVariants} className="rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><v.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-[1.6rem] bg-gradient-navy p-8 shadow-float sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-brand-glow sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-navy-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Figures reflect industry-standard performance benchmarks we target for the practices we serve.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/services">Explore our services <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild variant="glass" size="lg"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's optimize your revenue cycle"
        subtitle="Talk to a Nex Records revenue specialist and get a free RCM assessment."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}