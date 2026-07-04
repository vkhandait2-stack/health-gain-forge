import { Mail, Clock, Linkedin, ShieldCheck, MapPin, ArrowRight, CalendarCheck, FileText, LineChart, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";
import { CALENDLY_URL, LINKEDIN_URL, CONTACT_EMAIL, ADDRESS, externalLink } from "@/lib/site";

const REASONS = [
  { icon: FileText, text: "Need pricing?" },
  { icon: LineChart, text: "Need a custom proposal?" },
  { icon: CalendarCheck, text: "Need an RCM assessment?" },
  { icon: Wrench, text: "Need implementation details?" },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad scroll-mt-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to a Revenue Cycle Specialist"
            subtitle="Book a free consultation to see how Nex Records can increase revenue, reduce denials and get your practice paid faster."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Left: reasons + book */}
          <Reveal className="flex flex-col gap-5">
            <LeadForm compact id="lead-form" />
            <div className="rounded-[1.6rem] border border-border bg-card p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Contact our Revenue Cycle Specialists</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {REASONS.map((r) => (
                  <li key={r.text} className="flex items-center gap-3 rounded-xl bg-brand-soft/50 px-4 py-3 text-sm font-medium text-navy">
                    <r.icon className="h-5 w-5 shrink-0 text-brand" /> {r.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg" className="flex-1">
                  <a href={CALENDLY_URL} {...externalLink}>Book Free Consultation <ArrowRight className="h-4 w-4" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href={LINKEDIN_URL} {...externalLink}><Linkedin className="h-4 w-4" /> Connect on LinkedIn</a>
                </Button>
              </div>
            </div>

            {/* Email card */}
            <a href={`mailto:${CONTACT_EMAIL}`} className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-glow">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Mail className="h-5 w-5" /></span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email us</p>
              <p className="mt-1 break-all text-sm font-semibold text-navy group-hover:text-brand">{CONTACT_EMAIL}</p>
            </a>
          </Reveal>

          {/* Right: address + hours */}
          <Reveal delay={1} className="flex flex-col gap-5">
            {/* Premium address card */}
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-navy p-7 text-navy-foreground shadow-float">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.65 0.18 250 / 0.6), transparent 70%)" }} />
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/10"><MapPin className="h-5 w-5 text-brand-glow" /></span>
              <p className="relative mt-4 text-xs font-semibold uppercase tracking-wide text-navy-foreground/60">Registered Mailing Address</p>
              <address className="relative mt-2 not-italic leading-relaxed">
                <span className="text-lg font-semibold">{ADDRESS.company}</span>
                <br />
                {ADDRESS.lines.map((l) => (<span key={l} className="text-navy-foreground/80">{l}<br /></span>))}
              </address>
              <p className="relative mt-4 border-t border-white/10 pt-4 text-sm font-medium text-brand-glow">{ADDRESS.tagline}</p>
            </div>

            {/* Hours + HIPAA */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand" />
                <div className="text-sm text-navy">
                  <strong className="font-semibold">Business Hours (United States)</strong>
                  <br />Mon–Fri, 8:00am–7:00pm ET
                </div>
              </div>
              <div className="mt-5 flex items-start gap-2 rounded-xl bg-brand-soft/60 p-3 text-xs text-navy">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span><strong className="font-semibold">HIPAA Statement:</strong> Nex Records protects patient information with secure, HIPAA-conscious workflows at every stage of the revenue cycle.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
