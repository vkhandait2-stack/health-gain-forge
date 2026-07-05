import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";

const TITLE = "Privacy Policy | Nex Records";
const DESC = "How Nex Records collects, uses and protects information submitted through our website.";

const SECTIONS: LegalSection[] = [
  {
    h: "1. Overview",
    body: [
      "Nex Records (\u201cwe,\u201d \u201cus,\u201d \u201cour\u201d) respects your privacy. This Privacy Policy explains what information we collect through our website, how we use it, and the choices you have. It applies only to this website and not to any third-party sites we may link to.",
    ],
  },
  {
    h: "2. Information we collect",
    body: ["We collect information you voluntarily provide and limited technical information automatically:"],
    list: [
      "Contact details you submit through our forms — such as your name, practice or organization, work email, phone number, specialty and number of providers.",
      "Optional details you choose to share, such as average monthly claims, current billing/EHR software or a message describing your needs.",
      "Standard technical data such as browser type, device information and pages visited, used to keep the site secure and improve performance.",
    ],
  },
  {
    h: "3. Please do not submit PHI",
    body: [
      "Our website forms are for business inquiries only. Please do not submit any protected health information (PHI) or patient records through this website. We do not collect patient data through our website forms.",
    ],
  },
  {
    h: "4. How we use your information",
    body: ["We use the information you provide to:"],
    list: [
      "Respond to your inquiry and schedule consultations.",
      "Provide information about our revenue cycle management services.",
      "Improve our website and communications.",
      "Meet legal, security and record-keeping obligations.",
    ],
  },
  {
    h: "5. How we share information",
    body: [
      "We do not sell your personal information. We share information only with service providers who help us operate our website and communications, and only as needed to perform those services, or when required by law.",
    ],
  },
  {
    h: "6. Data security",
    body: [
      "We use administrative, technical and organizational safeguards designed to protect the information you submit, including access controls and encryption in transit. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    h: "7. Data retention",
    body: [
      "We retain inquiry information for as long as needed to respond to your request and for legitimate business and legal purposes, after which it is deleted or anonymized.",
    ],
  },
  {
    h: "8. Your choices",
    body: [
      `You may request access to, correction of, or deletion of the information you submitted by emailing ${CONTACT_EMAIL}. You can also opt out of non-essential communications at any time.`,
    ],
  },
  {
    h: "9. Cookies and analytics",
    body: [
      "We may use cookies and privacy-conscious analytics to understand how visitors use our website and to improve it. You can control cookies through your browser settings.",
    ],
  },
  {
    h: "10. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The \u201cLast updated\u201d date above reflects the most recent revision.",
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use and protect information submitted through this website."
      updated="July 2026"
      sections={SECTIONS}
    />
  ),
});