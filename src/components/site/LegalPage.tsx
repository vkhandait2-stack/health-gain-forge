import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { InnerLayout, InnerHero } from "./InnerLayout";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL, ADDRESS } from "@/lib/site";

export interface LegalSection {
  h: string;
  body: string[];
  list?: string[];
}

export function LegalPage({
  eyebrow,
  title,
  subtitle,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        crumbs={[{ label: "Home", to: "/" }, { label: title }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Last updated: {updated}</p>
          <div className="mt-8 grid gap-8">
            {sections.map((s) => (
              <Reveal key={s.h}>
                <h2 className="text-xl font-semibold text-navy">{s.h}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">{p}</p>
                ))}
                {s.list && (
                  <ul className="mt-3 grid gap-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-navy">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 shadow-soft">
            <h2 className="text-base font-semibold text-navy">Questions?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us about this policy at:
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
            <address className="mt-4 not-italic text-sm text-muted-foreground">
              {ADDRESS.company}, {ADDRESS.lines.join(", ")}
            </address>
            <p className="mt-4 text-xs text-muted-foreground">
              This page is maintained by Nex Records to explain how we handle information on this website. It is provided for
              transparency and is not legal advice. See our{" "}
              <Link to="/privacy" className="text-brand hover:underline">Privacy Policy</Link>,{" "}
              <Link to="/terms" className="text-brand hover:underline">Terms of Service</Link> and{" "}
              <Link to="/hipaa" className="text-brand hover:underline">HIPAA Compliance</Link> pages for related details.
            </p>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}