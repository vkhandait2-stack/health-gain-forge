// Central Nex Records contact + conversion configuration.
export const SITE_URL = "https://nex-records.com";
export const CALENDLY_URL = "https://calendly.com/vaishk1212/new-meeting";
export const LINKEDIN_URL = "https://www.linkedin.com/company/nexrecords/";

// Paste the deployed Google Apps Script Web App URL (ends in /exec) here.
// Until it is set, the lead form falls back to opening an email to CONTACT_EMAIL.
export const GOOGLE_SHEETS_WEBHOOK_URL = "";

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
