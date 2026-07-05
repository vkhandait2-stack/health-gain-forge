import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { SITE_URL } from "@/lib/site";

const TITLE = "Healthcare RCM Case Studies & Results | Nex Records";
const DESC = "See how Nex Records helps medical practices reduce denials, recover revenue and get paid faster with specialized revenue cycle management.";

const CASES = [
  {
    specialty: "Multi-Specialty Group",
    challenge: "Rising denials and inconsistent coding across 14 providers were leaving significant revenue uncollected.",
    solution: "We centralized coding, added pre-submission claim scrubbing and stood up denial analytics with weekly reviews.",
    metrics: [
      { label: "Reduction in Denials", value: "↓ 42%", up: false },
      { label: "Increase in Collections", value: "↑ 31%", up: true },
    ],
  },
  {
    specialty: "Behavioral Health",
    challenge: "Authorization delays were stalling treatment and slowing payments across a growing therapy practice.",
    solution: "A dedicated prior-auth team plus real-time eligibility checks removed the front-end bottlenecks.",
    metrics: [
      { label: "Faster Reimbursements", value: "↑ 28%", up: true },
      { label: "AR Days Reduced", value: "↓ 18 days", up: false },
    ],
  },
  {
    specialty: "Orthopedic Practice",
    challenge: "Revenue was leaking from surgical and DME under-coding and inconsistent modifier use.",
    solution: "Specialist coders with modifier expertise and implant tracking captured the full value of every case.",
    metrics: [
      { label: "Revenue Recovered", value: "↑ 34%", up: true },
      { label: "Clean Claim Rate", value: "99.1%", up: true },
    ],
  },
  {
    specialty: "Urgent Care Network",
    challenge: "High walk-in volume was overwhelming the in-house billing team and delaying claims.",
    solution: "Automated charge capture and scalable claims processing kept every visit billed on time.",
    metrics: [
      { label: "Collections Increase", value: "↑ 26%", up: true },
      { label: "Denial Rate", value: "↓ 2.0%", up: false },
    ],
  },
  {
    specialty: "Physical Therapy Clinic",
    challenge: "Cap monitoring errors and time-unit billing mistakes were triggering avoidable denials.",
    solution: "Plan-of-care tracking and compliant unit-based billing corrected the errors at the source.",
    metrics: [
      { label: "Reimbursement Lift", value: "↑ 22%", up: true },
      { label: "AR Days Reduced", value: "↓ 15 days", up: false },
    ],
  },
  {
    specialty: "Ambulatory Surgery Center",
    challenge: "Complex facility claims were causing payment delays and a growing backlog of appeals.",
    solution: "Facility billing experts and proactive A/R follow-up cleared the backlog and lifted net collections.",
    metrics: [
      { label: "Net Collections", value: "↑ 29%", up: true },
      { label: "Denials Overturned", value: "↑ 47%", up: true },
    ],
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/case-studies` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/case-studies` }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Case Studies"
        title="Real results for healthcare providers"
        subtitle="How practices across specialties improved financial performance with Nex Records revenue cycle management."
        crumbs={[{ label: "Home", to: "/" }, { label: "Case Studies" }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <motion.article
                key={c.specialty}
                variants={itemVariants}
                className="flex flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-soft"
              >
                <span className="inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {c.specialty}
                </span>
                <div className="mt-4 space-y-3 text-sm">
                  <p><span className="font-semibold text-navy">Challenge: </span><span className="text-muted-foreground">{c.challenge}</span></p>
                  <p><span className="font-semibold text-navy">Solution: </span><span className="text-muted-foreground">{c.solution}</span></p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-secondary/40 p-3">
                      <p className={`flex items-center gap-1 text-lg font-bold ${m.up ? "text-success" : "text-brand"}`}>
                        {m.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Results are representative of outcomes we help practices achieve and vary by specialty, payer mix and baseline performance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Get your free RCM assessment <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild variant="glass" size="lg"><Link to="/services">Explore services</Link></Button>
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready for results like these?"
        subtitle="Talk to a Nex Records revenue specialist and see what's possible for your practice."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}