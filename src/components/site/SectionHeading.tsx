import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
              dark
                ? "border-white/15 bg-white/5 text-brand-glow"
                : "border-brand/20 bg-brand-soft text-brand"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1] ${
            dark ? "text-navy-foreground" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              dark ? "text-navy-foreground/70" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}