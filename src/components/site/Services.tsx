import { motion } from "motion/react";
import {
  FileText,
  Code2,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
  Send,
  Wallet,
  Undo2,
  PhoneCall,
  BadgeCheck,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, itemVariants } from "./Reveal";
import { TiltCard } from "@/components/motion/TiltCard";

const SERVICES = [
  { icon: FileText, title: "Medical Billing", desc: "End-to-end billing from patient registration to final reimbursement." },
  { icon: Code2, title: "Medical Coding", desc: "Accurate ICD-10, CPT and HCPCS coding by experienced certified professionals." },
  { icon: ShieldCheck, title: "Eligibility Verification", desc: "Verify insurance benefits before appointments to reduce claim rejections." },
  { icon: KeyRound, title: "Prior Authorization", desc: "Fast prior authorization management to prevent treatment delays." },
  { icon: ClipboardCheck, title: "Charge Entry", desc: "Accurate charge capture with faster, cleaner claim preparation." },
  { icon: Send, title: "Claims Submission", desc: "Electronic claim submission with continuous claim tracking." },
  { icon: Wallet, title: "Payment Posting", desc: "Quick payment posting with complete, audit-ready reconciliation." },
  { icon: Undo2, title: "Denial Management", desc: "Root cause analysis, appeal processing and denial prevention strategies." },
  { icon: PhoneCall, title: "A/R Follow-up", desc: "Persistent insurance and patient follow-up to improve collections." },
  { icon: BadgeCheck, title: "Credentialing & Enrollment", desc: "Provider credentialing with Medicare, Medicaid and commercial payers." },
  { icon: Bot, title: "Virtual Medical Assistant", desc: "AI-assisted front office support for scheduling and patient communication." },
  { icon: BarChart3, title: "Revenue Analytics", desc: "Real-time dashboards showing collections, KPIs and financial performance." },
];

const WORKFLOW = [
  "Patient Registration",
  "Insurance Verification",
  "Medical Coding",
  "Charge Entry",
  "Claims Submission",
  "Payment Posting",
  "Denial Management",
  "AR Follow-up",
  "Revenue Analytics",
];

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="services-heading">
          <SectionHeading
            eyebrow="Services"
            title="Complete Revenue Cycle Management"
            subtitle="Everything your practice needs to maximize reimbursements, reduce denials and improve cash flow."
          />
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <TiltCard
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-soft transition-all duration-300 hover:border-brand/30 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </TiltCard>
          ))}
        </Stagger>

        {/* Workflow */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-navy sm:text-2xl">
            One connected revenue cycle workflow
          </h3>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {WORKFLOW.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2"
              >
                <span className="rounded-full border border-brand/20 bg-card px-4 py-2 text-xs font-semibold text-navy shadow-soft sm:text-sm">
                  <span className="mr-1.5 text-brand">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {i < WORKFLOW.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand/50 sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}