import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "motion/react";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const TITLE = "Healthcare RCM Blog & Insights | Nex Records";
const DESC = "Practical guidance on medical billing, coding, denial management and revenue cycle strategy for U.S. medical practices — from the Nex Records team.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <InnerLayout>
      <InnerHero
        eyebrow="Resources"
        title="Insights from our revenue cycle experts"
        subtitle="Actionable articles to help your practice reduce denials, code accurately and get paid faster."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <motion.div key={p.slug} variants={itemVariants}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-glow"
                >
                  <div className="relative h-36 overflow-hidden bg-gradient-navy">
                    <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.6), transparent 60%)" }} />
                    <BookOpen className="absolute bottom-4 left-5 h-7 w-7 text-brand-glow" />
                    <span className="absolute left-5 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-navy-foreground backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-muted-foreground">{p.read}</p>
                    <h2 className="mt-2 text-lg font-semibold text-navy">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBand
        title="Want these results for your practice?"
        subtitle="Talk to a revenue specialist and get a free RCM assessment."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}