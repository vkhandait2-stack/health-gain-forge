import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { SITE_URL } from "@/lib/site";

const TITLE = "HIPAA Compliance | Nex Records";
const DESC = "How Nex Records protects health information with HIPAA-conscious revenue cycle management workflows.";

const SECTIONS: LegalSection[] = [
  {
    h: "Our commitment to HIPAA",
    body: [
      "Nex Records is committed to protecting the privacy and security of health information. Because revenue cycle management involves handling sensitive data, we operate with HIPAA-conscious workflows designed to safeguard protected health information (PHI) at every stage of the revenue cycle.",
    ],
  },
  {
    h: "Safeguards we maintain",
    body: ["Our approach to protecting health information includes:"],
    list: [
      "Administrative safeguards — role-based access, workforce training and documented policies.",
      "Technical safeguards — encryption of data in transit, access controls, authentication and activity monitoring.",
      "Physical and operational safeguards — restricted access to systems and secure handling of information.",
      "Minimum necessary principle — staff access only the information required to perform their role.",
    ],
  },
  {
    h: "Business Associate Agreements",
    body: [
      "When we provide revenue cycle services that involve PHI, we do so under a Business Associate Agreement (BAA) with the covered entity, as required by HIPAA. The BAA defines the permitted uses of PHI and our obligations to protect it.",
    ],
  },
  {
    h: "Website and PHI",
    body: [
      "This public website does not collect patient data. Please do not submit any PHI through our website forms — they are intended for business inquiries only. PHI is only handled within secure service workflows governed by a signed agreement, never through this website.",
    ],
  },
  {
    h: "Breach response",
    body: [
      "We maintain incident-response procedures to detect, contain and respond to security events. In the event of a reportable breach involving PHI, we follow applicable notification requirements and coordinate with the affected covered entity.",
    ],
  },
  {
    h: "Shared responsibility",
    body: [
      "HIPAA compliance is a shared responsibility between healthcare providers and their business associates. We provide the safeguards described here as part of our services; providers remain responsible for their own compliance obligations. This page describes our practices and is not a certification.",
    ],
  },
];

export const Route = createFileRoute("/hipaa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/hipaa` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/hipaa` }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Compliance"
      title="HIPAA Compliance"
      subtitle="How we protect health information with HIPAA-conscious workflows across the revenue cycle."
      updated="July 2026"
      sections={SECTIONS}
    />
  ),
});