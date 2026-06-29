import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const FAQS = [
  {
    q: "What is Revenue Cycle Management?",
    a: "Revenue Cycle Management (RCM) is the end-to-end financial process of managing a patient encounter — from registration and insurance verification through coding, claims submission, payment posting and collections. Nex Records manages every stage so providers get paid accurately and faster.",
  },
  {
    q: "How quickly can we transition?",
    a: "Most practices are fully onboarded within 2–4 weeks. We handle the transition with a dedicated implementation team and minimal disruption to your operations.",
  },
  {
    q: "How does Nex Records reduce denials?",
    a: "We combine pre-submission claim scrubbing, eligibility verification, accurate coding and AI-driven denial prediction to prevent issues before they happen — then aggressively appeal any denials that occur.",
  },
  {
    q: "Do you support all specialties?",
    a: "Yes. Our specialist teams cover primary care, behavioral health, orthopedics, cardiology, physical therapy, ASCs, home health and 20+ other specialties, each with workflows tailored to their coding and payer requirements.",
  },
  {
    q: "How is patient information protected?",
    a: "Nex Records follows HIPAA-conscious workflows with encrypted data flow, role-based access controls and continuous monitoring to safeguard protected health information.",
  },
  {
    q: "How do you improve collections?",
    a: "Through faster, cleaner claims, persistent AR follow-up, accurate payment posting and transparent reporting that surfaces every opportunity to recover revenue.",
  },
  {
    q: "Do you provide dedicated account managers?",
    a: "Every client is assigned a dedicated account manager and revenue specialist team who know your practice and provide proactive, transparent communication.",
  },
  {
    q: "Can you integrate with our EHR?",
    a: "Yes. Our processes are designed to work alongside your existing EHR and practice management systems for a seamless revenue cycle.",
  },
];

export function Faq() {
  return (
    <section id="resources-faq" className="section-pad bg-secondary/40" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div id="faq-heading">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        </div>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}