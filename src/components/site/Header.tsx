import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Brand } from "./Brand";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#resources" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-xs font-medium sm:text-sm">
        <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-success animate-pulse-ring sm:block" />
        <p className="text-navy-foreground/90">
          Helping Healthcare Providers Increase Revenue, Reduce Denials &amp; Get Paid Faster.
        </p>
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-1 font-semibold text-brand-glow transition-colors hover:text-white sm:inline-flex"
        >
          Book Free Consultation <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-background/0"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? "h-14" : "h-[4.5rem]"
          }`}
          aria-label="Primary"
        >
          <Brand />
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="sm">
              <a href="#portal">Client Portal</a>
            </Button>
            <Button asChild variant="hero" size="sm">
              <a href="#contact">Book Free Consultation</a>
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-3 mt-2 rounded-2xl p-4 shadow-card lg:hidden"
          >
            <ul className="grid gap-1">
              {[...NAV, { label: "Client Portal", href: "#portal" }].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" className="mt-3 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Book Free Consultation
              </a>
            </Button>
            <a
              href="tel:+18005550199"
              className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Phone className="h-4 w-4" /> (800) 555-0199
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}