import { Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Brand } from "./Brand";
import { LINKEDIN_URL, CONTACT_EMAIL, ADDRESS, externalLink } from "@/lib/site";

interface FooterLink {
  label: string;
  to: string;
  params?: Record<string, string>;
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Medical Billing", to: "/services/$slug", params: { slug: "medical-billing" } },
      { label: "Medical Coding", to: "/services/$slug", params: { slug: "medical-coding" } },
      { label: "Denial Management", to: "/services/$slug", params: { slug: "denial-management" } },
      { label: "Revenue Analytics", to: "/services/$slug", params: { slug: "revenue-analytics" } },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Primary Care", to: "/industries/$slug", params: { slug: "primary-care" } },
      { label: "Behavioral Health", to: "/industries/$slug", params: { slug: "behavioral-health" } },
      { label: "Orthopedics", to: "/industries/$slug", params: { slug: "orthopedics" } },
      { label: "Physical Therapy", to: "/industries/$slug", params: { slug: "physical-therapy" } },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "HIPAA Compliance", to: "/hipaa" },
      { label: "Client Portal", to: "/client-portal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Brand dark />
            <p className="mt-4 max-w-xs text-sm text-navy-foreground/60">
              An enterprise Healthcare Revenue Cycle Management company helping U.S. providers
              increase revenue, reduce denials and get paid faster.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-glow" />
                <address className="not-italic leading-relaxed text-navy-foreground/70">
                  <span className="font-semibold text-navy-foreground">{ADDRESS.company}</span><br />
                  {ADDRESS.lines.join(", ")}
                </address>
              </div>
              <p className="mt-3 text-xs font-medium text-brand-glow">{ADDRESS.tagline}</p>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-navy-foreground/70 transition-colors hover:text-brand-glow">
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
              <a href={LINKEDIN_URL} {...externalLink} className="inline-flex items-center gap-2 text-navy-foreground/70 transition-colors hover:text-brand-glow">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-navy-foreground">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      params={l.params}
                      className="text-sm text-navy-foreground/60 transition-colors hover:text-brand-glow"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nex Records. All rights reserved.</p>
          <p>HIPAA-conscious workflows · Enterprise security · USA-based revenue specialists</p>
        </div>
      </div>
    </footer>
  );
}
