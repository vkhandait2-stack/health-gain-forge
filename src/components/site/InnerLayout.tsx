import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { Reveal } from "./Reveal";

export function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <CursorGlow />
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}

interface Crumb {
  label: string;
  to?: string;
}

export function InnerHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.15 240 / 0.5), transparent 70%)" }}
      />
      <div className="mx-auto max-w-5xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
          {crumbs.map((c, i) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-brand">{c.label}</Link>
              ) : (
                <span className="text-navy">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-brand/40" />}
            </span>
          ))}
        </nav>
        <Reveal>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl md:leading-[1.08]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PsrCards({ problem, solution, result }: { problem: string; solution: string; result: string }) {
  const items = [
    { tag: "Problem", body: problem, tone: "text-destructive" },
    { tag: "Solution", body: solution, tone: "text-brand" },
    { tag: "Result", body: result, tone: "text-success" },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it) => (
        <div key={it.tag} className="rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
          <span className={`text-xs font-bold uppercase tracking-wider ${it.tone}`}>{it.tag}</span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
        </div>
      ))}
    </div>
  );
}