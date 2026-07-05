import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { SITE_URL } from "@/lib/site";

const TITLE = "Terms of Service | Nex Records";
const DESC = "The terms that govern your use of the Nex Records website.";

const SECTIONS: LegalSection[] = [
  {
    h: "1. Acceptance of terms",
    body: [
      "By accessing or using the Nex Records website, you agree to these Terms of Service. If you do not agree, please do not use the site.",
    ],
  },
  {
    h: "2. Use of the website",
    body: ["You agree to use this website only for lawful purposes. You must not:"],
    list: [
      "Attempt to gain unauthorized access to the site or its systems.",
      "Interfere with or disrupt the operation or security of the site.",
      "Submit false information or another person's information without permission.",
      "Use the site to transmit unlawful, harmful or infringing content.",
    ],
  },
  {
    h: "3. No protected health information",
    body: [
      "This website and its forms are intended for business inquiries. Do not submit patient records or protected health information (PHI) through the website.",
    ],
  },
  {
    h: "4. Informational content",
    body: [
      "Content on this website is provided for general informational purposes about our revenue cycle management services. It does not constitute legal, financial, coding or compliance advice, and outcomes described are not guaranteed.",
    ],
  },
  {
    h: "5. Intellectual property",
    body: [
      "All content on this website — including text, graphics, logos and design — is owned by or licensed to Nex Records and is protected by applicable intellectual property laws. You may not reproduce it without permission.",
    ],
  },
  {
    h: "6. Third-party links",
    body: [
      "Our website may contain links to third-party sites. We are not responsible for the content, privacy practices or availability of those sites.",
    ],
  },
  {
    h: "7. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Nex Records is not liable for any indirect, incidental or consequential damages arising from your use of, or inability to use, this website.",
    ],
  },
  {
    h: "8. Changes to these terms",
    body: [
      "We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    h: "9. Governing law",
    body: [
      "These terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles.",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The terms that govern your use of the Nex Records website."
      updated="July 2026"
      sections={SECTIONS}
    />
  ),
});