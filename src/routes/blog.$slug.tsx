import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerLayout, InnerHero } from "@/components/site/InnerLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { getPost, BLOG_SLUGS, type BlogPost } from "@/lib/blog";
import { SITE_URL, CALENDLY_URL, externalLink } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE_URL}/blog/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Nex Records` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.title },
        { name: "twitter:description", content: loaderData.excerpt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.date,
            author: { "@type": "Organization", name: "Nex Records" },
            publisher: { "@type": "Organization", name: "Nex Records" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <InnerLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-navy">Article not found</h1>
        <p className="mt-3 text-muted-foreground">This article doesn't exist.</p>
        <Button asChild variant="hero" className="mt-6"><Link to="/blog">Back to blog</Link></Button>
      </div>
    </InnerLayout>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const p = Route.useLoaderData() as BlogPost;
  return (
    <InnerLayout>
      <InnerHero
        eyebrow={p.category}
        title={p.title}
        subtitle={p.excerpt}
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: p.title }]}
      />
      <article className="section-pad">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-medium text-muted-foreground">
            {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {p.read}
          </p>
          <div className="mt-8 grid gap-8">
            {p.sections.map((s) => (
              <Reveal key={s.h}>
                <h2 className="text-xl font-semibold text-navy">{s.h}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6 shadow-soft">
            <h3 className="text-base font-semibold text-navy">Key takeaways</h3>
            <ul className="mt-4 grid gap-2">
              {p.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-navy">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={CALENDLY_URL} {...externalLink}>Book Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="glass" size="lg"><Link to="/blog">More articles</Link></Button>
          </div>
        </div>
      </article>
      <CtaBand
        title="Ready to strengthen your revenue cycle?"
        subtitle="Talk to a Nex Records revenue specialist and get a free RCM assessment."
        primary="Book Free Consultation"
        secondary="Talk to an RCM Expert"
      />
    </InnerLayout>
  );
}

export { BLOG_SLUGS };