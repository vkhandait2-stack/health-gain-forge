import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Dr. Sarah Whitfield",
    role: "Practice Owner",
    org: "Whitfield Family Medicine",
    quote:
      "Within four months our denials dropped sharply and collections climbed. Nex Records feels like an extension of our own team.",
    initials: "SW",
  },
  {
    name: "Marcus Delgado",
    role: "Practice Manager",
    org: "Summit Orthopedics",
    quote:
      "The transparency is unmatched. I can see exactly where every dollar is in the revenue cycle, in real time.",
    initials: "MD",
  },
  {
    name: "Angela Brooks",
    role: "Hospital Administrator",
    org: "Riverbend Health System",
    quote:
      "Their specialists understand payer behavior better than anyone we've worked with. Our clean claim rate has never been higher.",
    initials: "AB",
  },
  {
    name: "James Holloway",
    role: "Medical Billing Director",
    org: "Coastal Behavioral Health",
    quote:
      "Prior authorizations used to delay care for weeks. Now they're handled proactively and our cash flow is consistent.",
    initials: "JH",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = TESTIMONIALS[index];

  return (
    <section className="section-pad" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div id="testimonials-heading">
          <SectionHeading eyebrow="Testimonials" title="Trusted by Healthcare Professionals" />
        </div>
        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="glass rounded-[1.6rem] p-8 text-center shadow-card sm:p-10"
            >
              <Quote className="mx-auto h-8 w-8 text-brand/30" />
              <div className="mt-3 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg font-medium leading-relaxed text-navy sm:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-navy">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}, {t.org}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card shadow-soft transition-colors hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card shadow-soft transition-colors hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}