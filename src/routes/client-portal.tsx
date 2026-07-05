import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock, LineChart, FileText, MessageSquare, Mail } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { SITE_URL, CONTACT_EMAIL, CALENDLY_URL, externalLink } from "@/lib/site";

const TITLE = "Client Portal | Nex Records";
const DESC = "Access your Nex Records revenue cycle dashboards, reports and dedicated account team. Existing clients can request portal access.";

const FEATURES = [
  { icon: LineChart, title: "Live Revenue Dashboards", desc: "Track collections, denials, A/R days and KPIs in real time." },
  { icon: FileText, title: "Reports & Statements", desc: "Download financial reports and reconciliation statements on demand." },
  { icon: MessageSquare, title: "Dedicated Account Team", desc: "Message your revenue specialists directly for fast answers." },
  { icon: Lock, title: "Secure Access", desc: "Role-based access with HIPAA-conscious safeguards throughout." },
];

export const Route = createFileRoute("/client-portal")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/client-portal` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/client-portal` }],
  }),
  component: ClientPortalPage,
});

function ClientPortalPage() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Client Portal"
        title="Your revenue cycle, in one place"
        subtitle="Existing Nex Records clients get secure access to live dashboards, reports and their dedicated account team."
        crumbs={[{ label: "Home", to: "/" }, { label: "Client Portal" }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={itemVariants} className="rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><f.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-base font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </Stagger>

          <div className="mx-auto mt-12 max-w-xl rounded-[1.6rem] border border-border bg-card p-8 text-center shadow-card">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand"><Lock className="h-6 w-6" /></span>
            <h2 className="mt-5 text-xl font-bold text-navy">Portal access for clients</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Already working with Nex Records? Request your secure portal login and we'll get you set up. Not a client yet?
              Book a free consultation to get started.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="hero" size="lg">
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Client Portal Access Request")}`}>
                  <Mail className="h-4 w-4" /> Request portal access
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={CALENDLY_URL} {...externalLink}>Book Free Consultation <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Not a client yet?"
        subtitle="See how Nex Records can increase revenue and reduce denials for your practice."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}