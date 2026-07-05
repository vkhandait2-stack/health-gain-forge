import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { InnerLayout, InnerHero, PsrCards } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Stagger, itemVariants, Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { getIndustry, INDUSTRY_SLUGS, type IndustryContent } from "@/lib/industries";
import { getIcon } from "@/components/site/iconMap";
import { SITE_URL, CALENDLY_URL, externalLink } from "@/lib/site";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return industry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE_URL}/industries/${loaderData.slug}`;
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${loaderData.name} Revenue Cycle Management`,
            description: loaderData.metaDescription,
            provider: { "@type": "Organization", name: "Nex Records" },
            areaServed: { "@type": "Country", name: "United States" },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loaderData.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <InnerLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-navy">Specialty not found</h1>
        <p className="mt-3 text-muted-foreground">This specialty page doesn't exist.</p>
        <Button asChild variant="hero" className="mt-6"><Link to="/industries">View all specialties</Link></Button>
      </div>
    </InnerLayout>
  ),
  component: IndustryDetail,
});

function IndustryDetail() {
  const s = Route.useLoaderData() as IndustryContent;
  const Icon = getIcon(s.icon);
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Who We Serve"
        title={`${s.name} Medical Billing & RCM`}
        subtitle={s.tagline}
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries", to: "/industries" }, { label: s.name }]}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <PsrCards problem={s.problem} solution={s.solution} result={s.result} />
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
              <Icon className="h-6 w-6" />
            </span>
            <p className="text-base leading-relaxed text-muted-foreground">{s.overview}</p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Specialty Challenges" title={`What makes ${s.name.toLowerCase()} billing different`} align="left" />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.challenges.map((c) => (
              <motion.div key={c.title} variants={itemVariants} className="rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="What You Get" title={`How we support ${s.name.toLowerCase()} practices`} align="left" />
              <ul className="mt-8 grid gap-3">
                {s.highlights.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-navy">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4 self-start rounded-2xl bg-gradient-navy p-6 shadow-float sm:p-8">
              {s.stats.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl font-bold text-brand-glow sm:text-3xl">{m.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-navy-foreground/70">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 grid gap-4">
            {s.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={CALENDLY_URL} {...externalLink}>Book Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="glass" size="lg"><Link to="/industries">All Specialties</Link></Button>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to improve ${s.name.toLowerCase()} revenue?`}
        subtitle="Talk to a Nex Records revenue specialist who knows your specialty inside out."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}

export { INDUSTRY_SLUGS };