import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

interface CtaBandProps {
  title: string;
  subtitle?: string;
  primary: string;
  secondary: string;
}

export function CtaBand({ title, subtitle, primary, secondary }: CtaBandProps) {
  return (
    <section className="section-pad" aria-label="Call to action">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-navy px-6 py-14 text-center shadow-float sm:px-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.65 0.18 250 / 0.6), transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.13 200 / 0.5), transparent 70%)" }}
          />
          <h2 className="relative text-2xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="relative mx-auto mt-4 max-w-xl text-navy-foreground/70">{subtitle}</p>
          )}
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">
                {primary} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">{secondary}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}