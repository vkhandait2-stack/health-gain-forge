import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/industries";
import { getIcon } from "@/components/site/iconMap";
import { SITE_URL } from "@/lib/site";

const TITLE = "Healthcare Specialties We Serve | Nex Records RCM";
const DESC = "Specialty-specific revenue cycle management from Nex Records — primary care, behavioral health, cardiology, orthopedics, physical therapy and 15+ more medical specialties.";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/industries` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/industries` }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Who We Serve"
        title="Revenue Cycle Management for Every Specialty"
        subtitle="Dedicated RCM teams that understand the billing workflows, coding rules and denial patterns unique to your specialty."
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <motion.div key={s.slug} variants={itemVariants}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-glow"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-navy">{s.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>
      <CtaBand
        title="Specialized RCM for your practice"
        subtitle="Talk to a revenue specialist who knows your specialty's billing rules."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}