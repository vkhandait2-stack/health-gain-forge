import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Metrics } from "@/components/site/Metrics";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { Industries } from "@/components/site/Industries";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Hipaa } from "@/components/site/Hipaa";
import { AiIntelligence } from "@/components/site/AiIntelligence";
import { Process } from "@/components/site/Process";
import { Results } from "@/components/site/Results";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { RoiCalculator } from "@/components/site/RoiCalculator";
import { Faq, FAQS } from "@/components/site/Faq";
import { Resources } from "@/components/site/Resources";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { StickyCta } from "@/components/site/StickyCta";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CursorGlow } from "@/components/motion/CursorGlow";

const TITLE = "Healthcare Revenue Cycle Management Services for Medical Practices in the USA | Nex Records";
const DESCRIPTION =
  "Nex Records is an enterprise Healthcare Revenue Cycle Management company helping U.S. medical practices, clinics and hospitals increase revenue, reduce denials and get paid faster.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "revenue cycle management, medical billing, healthcare RCM, denial management, medical coding, insurance verification, USA" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nex-records.com/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://nex-records.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "ProfessionalService"],
          name: "Nex Records",
          description: DESCRIPTION,
          areaServed: { "@type": "Country", name: "United States" },
          serviceType: "Healthcare Revenue Cycle Management",
          url: "https://nex-records.com/",
          email: "Vaishnav@Nex-Records.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "8 The Green, STE D",
            addressLocality: "Dover",
            addressRegion: "DE",
            postalCode: "19901",
            addressCountry: "US",
          },
          sameAs: ["https://www.linkedin.com/company/nexrecords/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nex Records",
          url: "https://nex-records.com/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Metrics />
        <Services />
        <Benefits />
        <Industries />
        <WhyChoose />
        <Hipaa />
        <AiIntelligence />
        <Process />
        <Results />
        <CtaBand
          title="Ready to Optimize Your Revenue Cycle?"
          subtitle="Talk to a revenue specialist and see how Nex Records can transform your financial performance."
          primary="Book Free Consultation"
          secondary="Request Proposal"
        />
        <CaseStudies />
        <Testimonials />
        <RoiCalculator />
        <Faq />
        <Resources />
        <CtaBand
          title="Ready to Transform Your Revenue Cycle?"
          subtitle="Join the healthcare providers trusting Nex Records to increase revenue and reduce denials."
          primary="Book Free Consultation"
          secondary="Talk to an RCM Expert"
        />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <Toaster position="top-center" richColors />
    </div>
  );
}
