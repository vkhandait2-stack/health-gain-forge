import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, Linkedin, ShieldCheck, MapPin, CalendarCheck } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, LINKEDIN_URL, CONTACT_EMAIL, ADDRESS, SITE_URL, externalLink } from "@/lib/site";

const TITLE = "Contact Nex Records | Free RCM Audit for Medical Practices";
const DESC =
  "Talk to a Nex Records revenue cycle specialist. Request a free RCM audit, get a custom proposal, or book a consultation. US-based, HIPAA-conscious support.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nex Records",
          email: CONTACT_EMAIL,
          url: `${SITE_URL}/contact`,
          areaServed: { "@type": "Country", name: "United States" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "8 The Green, STE D",
            addressLocality: "Dover",
            addressRegion: "DE",
            postalCode: "19901",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Contact"
        title="Talk to a Revenue Cycle Specialist"
        subtitle="Request a free RCM audit and see how Nex Records can increase revenue, reduce denials and get your practice paid faster. Tell us a little about your practice below."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h2 className="sr-only">Request a free RCM audit</h2>
              <LeadForm />
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-navy p-7 text-navy-foreground shadow-float">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
                  style={{ background: "radial-gradient(circle, oklch(0.65 0.18 250 / 0.6), transparent 70%)" }}
                />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-brand-glow" />
                </span>
                <p className="relative mt-4 text-xs font-semibold uppercase tracking-wide text-navy-foreground/60">
                  Registered Mailing Address
                </p>
                <address className="relative mt-2 not-italic leading-relaxed">
                  <span className="text-lg font-semibold">{ADDRESS.company}</span>
                  <br />
                  {ADDRESS.lines.map((l) => (
                    <span key={l} className="text-navy-foreground/80">
                      {l}
                      <br />
                    </span>
                  ))}
                </address>
                <p className="relative mt-4 border-t border-white/10 pt-4 text-sm font-medium text-brand-glow">
                  {ADDRESS.tagline}
                </p>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-glow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Mail className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email us</p>
                <p className="mt-1 break-all text-sm font-semibold text-navy group-hover:text-brand">{CONTACT_EMAIL}</p>
              </a>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <CalendarCheck className="h-5 w-5 text-brand" />
                  <p className="text-sm font-semibold text-navy">Prefer to book a call?</p>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild variant="hero" className="w-full">
                    <a href={CALENDLY_URL} {...externalLink}>Book a Free Consultation</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={LINKEDIN_URL} {...externalLink}>
                      <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                    </a>
                  </Button>
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm text-navy">
                  <Clock className="h-5 w-5 shrink-0 text-brand" />
                  <span>
                    <strong className="font-semibold">Business hours (US):</strong> Mon–Fri, 8:00am–7:00pm ET
                  </span>
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-soft/60 p-3 text-xs text-navy">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    <strong className="font-semibold">HIPAA note:</strong> We never collect PHI through this website. BAAs
                    are available for engaged clients.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
