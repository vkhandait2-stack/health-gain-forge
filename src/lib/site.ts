// Central Nex Records contact + conversion configuration.
export const SITE_URL = "https://nex-records.com";
export const CALENDLY_URL = "https://calendly.com/vaishk1212/new-meeting";
export const LINKEDIN_URL = "https://www.linkedin.com/company/nexrecords/";

// Web3Forms — every lead submission is emailed via https://api.web3forms.com/submit.
// This is a publishable access key (safe in client code).
export const WEB3FORMS_ACCESS_KEY = "b3eb2c5f-9ab0-4596-9aed-d2fef2d3698c";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// The single contact email used everywhere on the site.
export const EMAIL_PRIMARY = "Vaishnav@Nex-Records.com";
export const EMAIL_SECONDARY = "Vaishnav@Nex-Records.com";
export const CONTACT_EMAIL = "Vaishnav@Nex-Records.com";

export const ADDRESS = {
  company: "Nex Records",
  lines: ["8 The Green, STE D", "Dover, County of Kent", "Delaware 19901", "United States"],
  tagline: "Serving Healthcare Providers Across the United States.",
};

// Props to open an external link safely in a new tab.
export const externalLink = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};
