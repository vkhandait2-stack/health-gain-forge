export interface ServiceContent {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  eyebrow: string;
  problem: string;
  solution: string;
  result: string;
  overview: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  steps: { title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "medical-billing",
    name: "Medical Billing Services",
    icon: "FileText",
    tagline: "End-to-end medical billing that gets you paid faster and in full.",
    eyebrow: "Core RCM Service",
    problem:
      "In-house billing teams are stretched thin. Claims go out late, small errors trigger rejections, and staff turnover leaves revenue sitting uncollected.",
    solution:
      "Nex Records runs your entire billing operation — from patient registration and charge capture to clean-claim submission and reconciliation — with certified specialists and payer-specific edits.",
    result:
      "Practices see cleaner claims, faster reimbursement and a measurable lift in monthly collections without adding headcount.",
    overview:
      "Our medical billing service is a fully managed extension of your front and back office. We combine experienced U.S.-focused billers with automated scrubbing to submit clean claims the first time, then relentlessly follow every dollar until it is collected.",
    features: [
      { title: "Clean-Claim Scrubbing", desc: "Automated and manual edits catch errors before submission to keep first-pass acceptance high." },
      { title: "Charge Capture", desc: "Accurate charge entry so no billable service slips through the cracks." },
      { title: "Electronic Submission", desc: "Claims submitted electronically with real-time clearinghouse tracking." },
      { title: "Payment Posting", desc: "Fast, audit-ready posting and reconciliation of ERAs and EOBs." },
      { title: "Patient Statements", desc: "Clear, compliant patient billing and support to speed up patient collections." },
      { title: "Transparent Reporting", desc: "Live dashboards showing collections, aging and KPI trends." },
    ],
    benefits: [
      "Higher first-pass claim acceptance",
      "Faster reimbursement cycles",
      "Reduced administrative burden on staff",
      "Lower billing overhead vs. in-house",
      "Predictable, transparent monthly reporting",
      "Scalable capacity as you grow",
    ],
    steps: [
      { title: "Onboarding & Audit", desc: "We map your current workflow, payers and problem areas." },
      { title: "Clean-Claim Setup", desc: "Configure payer rules, edits and submission workflows." },
      { title: "Submit & Track", desc: "Claims go out daily with continuous status monitoring." },
      { title: "Collect & Report", desc: "Payments posted, denials worked, results reported." },
    ],
    metrics: [
      { value: "98%", label: "First-pass claim rate" },
      { value: "40%", label: "Faster reimbursement" },
      { value: "20%+", label: "Revenue recovered" },
    ],
    faqs: [
      { q: "Do you work with our existing EHR/PM system?", a: "Yes. We work inside your existing system or recommend integrations, so there is no disruptive migration required." },
      { q: "How quickly can you onboard our practice?", a: "Most practices are fully onboarded within 2–4 weeks depending on payer mix and volume." },
      { q: "Is my patient data secure?", a: "We follow HIPAA-conscious workflows with strict access controls and encryption across every touchpoint." },
      { q: "What size practices do you support?", a: "From solo providers to multi-location groups and billing companies." },
    ],
    metaTitle: "Medical Billing Services for U.S. Practices | Nex Records",
    metaDescription:
      "Outsource medical billing to Nex Records. Clean-claim submission, faster reimbursement and higher collections for U.S. medical practices, clinics and hospitals.",
  },
  {
    slug: "medical-coding",
    name: "Medical Coding Services",
    icon: "Code2",
    tagline: "Certified ICD-10, CPT and HCPCS coding that captures every dollar.",
    eyebrow: "Core RCM Service",
    problem:
      "Under-coding leaves money on the table and over-coding invites audits. Keeping up with annual code changes strains clinical teams.",
    solution:
      "Certified professional coders (CPC/CCS) apply accurate, compliant codes with documentation review and payer-specific guidance.",
    result:
      "Accurate reimbursement, fewer denials and audit-ready documentation across every specialty.",
    overview:
      "Our coding team assigns precise ICD-10, CPT and HCPCS codes backed by documentation review and continuous compliance checks. We help you capture the full value of every encounter while staying protected from audit risk.",
    features: [
      { title: "Certified Coders", desc: "AAPC/AHIMA-certified specialists across every major specialty." },
      { title: "Documentation Review", desc: "We flag documentation gaps that put reimbursement at risk." },
      { title: "Compliance Edits", desc: "NCCI, LCD/NCD and modifier accuracy built into every claim." },
      { title: "Specialty Expertise", desc: "Dedicated coders who know your specialty's rules cold." },
      { title: "Audit Support", desc: "Audit-ready coding and support if a payer requests records." },
      { title: "Quality Assurance", desc: "Multi-level QA sampling keeps accuracy consistently high." },
    ],
    benefits: [
      "Maximized, compliant reimbursement",
      "Fewer coding-related denials",
      "Reduced audit exposure",
      "Always current with code updates",
      "Specialty-specific accuracy",
      "Faster claim turnaround",
    ],
    steps: [
      { title: "Chart Review", desc: "Coders review clinical documentation for completeness." },
      { title: "Code Assignment", desc: "Accurate ICD-10, CPT and HCPCS codes applied." },
      { title: "Compliance Check", desc: "Automated and manual edits ensure clean, compliant codes." },
      { title: "Feedback Loop", desc: "Documentation improvement guidance shared with providers." },
    ],
    metrics: [
      { value: "99%", label: "Coding accuracy" },
      { value: "30%", label: "Fewer coding denials" },
      { value: "24h", label: "Typical turnaround" },
    ],
    faqs: [
      { q: "Are your coders certified?", a: "Yes, every coder holds AAPC or AHIMA certification and codes within their specialty expertise." },
      { q: "Can you help improve provider documentation?", a: "Absolutely. We provide documentation improvement feedback to help capture full reimbursement." },
      { q: "Do you handle audit requests?", a: "We provide audit-ready coding and support your team through payer audits." },
      { q: "Which specialties do you cover?", a: "All major specialties, each staffed by coders who focus on that field." },
    ],
    metaTitle: "Medical Coding Services (ICD-10, CPT, HCPCS) | Nex Records",
    metaDescription:
      "Certified medical coding services from Nex Records. Accurate, compliant ICD-10, CPT and HCPCS coding that reduces denials and maximizes reimbursement.",
  },
  {
    slug: "eligibility-verification",
    name: "Insurance Eligibility Verification",
    icon: "ShieldCheck",
    tagline: "Verify benefits before the visit to stop denials at the source.",
    eyebrow: "Front-End RCM",
    problem:
      "Eligibility errors are a leading cause of denials and surprise patient balances that never get collected.",
    solution:
      "We verify insurance coverage, benefits and patient responsibility before every appointment so claims start clean.",
    result:
      "Fewer front-end denials, accurate patient estimates and a smoother check-in experience.",
    overview:
      "Nex Records verifies active coverage, plan benefits, copays, deductibles and prior-auth requirements ahead of each visit. Catching issues before care is delivered eliminates the most common — and most preventable — source of denials.",
    features: [
      { title: "Real-Time Checks", desc: "Coverage and benefit verification through payer portals and EDI." },
      { title: "Benefit Breakdown", desc: "Copay, deductible and coinsurance details captured up front." },
      { title: "Auth Flagging", desc: "Identify services that require prior authorization early." },
      { title: "Patient Estimates", desc: "Accurate out-of-pocket estimates for a better patient experience." },
      { title: "Batch Verification", desc: "Bulk verification for upcoming schedules to save staff time." },
      { title: "Error Alerts", desc: "Coverage lapses and mismatches flagged before the visit." },
    ],
    benefits: [
      "Fewer front-end denials",
      "Accurate patient cost estimates",
      "Improved patient collections",
      "Reduced check-in friction",
      "Less rework for staff",
      "Cleaner claims downstream",
    ],
    steps: [
      { title: "Schedule Sync", desc: "We pull upcoming appointments from your system." },
      { title: "Verify Coverage", desc: "Active coverage and benefits confirmed with payers." },
      { title: "Capture Details", desc: "Copay, deductible and auth requirements documented." },
      { title: "Flag Issues", desc: "Problems surfaced to staff before the patient arrives." },
    ],
    metrics: [
      { value: "25%", label: "Fewer denials" },
      { value: "100%", label: "Visits verified" },
      { value: "48h", label: "Ahead of visit" },
    ],
    faqs: [
      { q: "How far in advance do you verify?", a: "Typically 48–72 hours before the appointment, with same-day checks for add-ons." },
      { q: "Do you check prior-auth requirements too?", a: "Yes, we flag services that need authorization so nothing delays care." },
      { q: "Can you provide patient cost estimates?", a: "We capture benefit details so your team can share accurate estimates." },
      { q: "Does this integrate with our schedule?", a: "We work from your scheduling system to verify upcoming visits automatically." },
    ],
    metaTitle: "Insurance Eligibility Verification Services | Nex Records",
    metaDescription:
      "Real-time insurance eligibility and benefits verification from Nex Records. Prevent front-end denials and improve patient collections before the visit.",
  },
  {
    slug: "prior-authorization",
    name: "Prior Authorization Services",
    icon: "KeyRound",
    tagline: "Fast, tracked prior authorizations so care is never delayed.",
    eyebrow: "Front-End RCM",
    problem:
      "Prior auth is time-consuming, payer rules constantly change, and delays frustrate patients and providers alike.",
    solution:
      "We manage the full authorization lifecycle — submission, follow-up and status tracking — across all payers.",
    result:
      "Faster approvals, fewer delayed procedures and denials avoided before they happen.",
    overview:
      "Our prior authorization team obtains and tracks approvals for procedures, imaging, medications and referrals. We handle payer requirements and persistent follow-up so your clinical staff can focus on patients, not paperwork.",
    features: [
      { title: "End-to-End Handling", desc: "We submit, follow up and track every authorization to closure." },
      { title: "Payer Rule Library", desc: "Up-to-date requirements for each payer and service type." },
      { title: "Status Tracking", desc: "Real-time visibility into every pending authorization." },
      { title: "Peer-to-Peer Support", desc: "Coordination for peer reviews when required." },
      { title: "Expedited Requests", desc: "Urgent auth handling for time-sensitive care." },
      { title: "Denial Prevention", desc: "Complete, accurate submissions reduce auth denials." },
    ],
    benefits: [
      "Faster authorization turnaround",
      "Fewer treatment delays",
      "Reduced auth-related denials",
      "Less staff time on hold with payers",
      "Better patient experience",
      "Full audit trail of every request",
    ],
    steps: [
      { title: "Identify Need", desc: "Flag services that require authorization early." },
      { title: "Submit Request", desc: "Complete, accurate submissions to the payer." },
      { title: "Follow Up", desc: "Persistent tracking until a decision is reached." },
      { title: "Document", desc: "Approval details recorded for clean claims." },
    ],
    metrics: [
      { value: "35%", label: "Faster approvals" },
      { value: "90%+", label: "Approval rate" },
      { value: "0", label: "Missed auth claims" },
    ],
    faqs: [
      { q: "Which services do you get authorizations for?", a: "Procedures, imaging, DME, medications, specialty referrals and more." },
      { q: "How do you handle urgent requests?", a: "We expedite time-sensitive authorizations and coordinate peer-to-peer reviews." },
      { q: "Will we see status updates?", a: "Yes, you get real-time visibility into every pending authorization." },
      { q: "Does this reduce denials?", a: "Complete, accurate submissions significantly reduce authorization-related denials." },
    ],
    metaTitle: "Prior Authorization Services for Healthcare | Nex Records",
    metaDescription:
      "End-to-end prior authorization management from Nex Records. Faster approvals, fewer delays and reduced denials across all payers and services.",
  },
  {
    slug: "denial-management",
    name: "Denial Management Services",
    icon: "Undo2",
    tagline: "Recover lost revenue and prevent denials from recurring.",
    eyebrow: "Back-End RCM",
    problem:
      "Denied claims pile up, appeals get abandoned, and the same root causes keep costing you revenue month after month.",
    solution:
      "We work every denial with root-cause analysis, rapid appeals and prevention strategies that fix the underlying problem.",
    result:
      "More denied revenue recovered and a steadily shrinking denial rate over time.",
    overview:
      "Nex Records treats denials as a system to be fixed, not a queue to be endured. We categorize every denial, appeal aggressively, and feed root-cause insights back into your workflow so the same denials stop happening.",
    features: [
      { title: "Root-Cause Analysis", desc: "Every denial categorized to find and fix systemic issues." },
      { title: "Rapid Appeals", desc: "Timely, well-documented appeals to recover revenue." },
      { title: "Prevention Playbooks", desc: "Workflow fixes that stop denials at the source." },
      { title: "Payer Trend Tracking", desc: "Spot payer behavior changes before they cost you." },
      { title: "Priority Worklists", desc: "High-value denials worked first for maximum recovery." },
      { title: "Reporting", desc: "Clear visibility into denial reasons and recovery rates." },
    ],
    benefits: [
      "More denied revenue recovered",
      "Lower overall denial rate",
      "Fewer write-offs",
      "Actionable root-cause insights",
      "Faster appeal turnaround",
      "Continuous process improvement",
    ],
    steps: [
      { title: "Categorize", desc: "Every denial classified by reason and payer." },
      { title: "Appeal", desc: "Documented appeals filed within payer timelines." },
      { title: "Recover", desc: "Persistent follow-up until payment is secured." },
      { title: "Prevent", desc: "Root causes fixed upstream to stop recurrence." },
    ],
    metrics: [
      { value: "65%", label: "Denials overturned" },
      { value: "50%", label: "Fewer repeat denials" },
      { value: "15%+", label: "Revenue recovered" },
    ],
    faqs: [
      { q: "Do you work old denials too?", a: "Yes, we can pursue aged denials alongside current ones to recover legacy revenue." },
      { q: "How do you prevent future denials?", a: "We feed root-cause findings into your workflow to fix the underlying issues." },
      { q: "Which denials do you prioritize?", a: "High-value and time-sensitive denials are worked first for maximum recovery." },
      { q: "Will we see denial trends?", a: "Yes, reporting shows denial reasons, payer trends and recovery performance." },
    ],
    metaTitle: "Denial Management & Appeals Services | Nex Records",
    metaDescription:
      "Denial management from Nex Records. Root-cause analysis, rapid appeals and prevention strategies that recover lost revenue and lower your denial rate.",
  },
  {
    slug: "ar-follow-up",
    name: "Accounts Receivable (A/R) Follow-Up",
    icon: "PhoneCall",
    tagline: "Persistent A/R follow-up that turns aging claims into cash.",
    eyebrow: "Back-End RCM",
    problem:
      "Aging A/R buckets grow when no one has time to chase payers and patients, and older claims quietly become write-offs.",
    solution:
      "Our A/R team systematically works every outstanding claim by age and value until it is resolved or paid.",
    result:
      "Lower days in A/R, fewer write-offs and steady recovery of aged balances.",
    overview:
      "Nex Records runs disciplined A/R follow-up across insurance and patient balances. We prioritize by age and dollar value, resolve underpayments, and keep your aging buckets under control month after month.",
    features: [
      { title: "Aging Prioritization", desc: "Claims worked by age and value for maximum impact." },
      { title: "Insurance Follow-Up", desc: "Persistent payer contact until claims are resolved." },
      { title: "Underpayment Recovery", desc: "Identify and recover underpaid and short-paid claims." },
      { title: "Patient A/R", desc: "Respectful patient balance follow-up and support." },
      { title: "Write-Off Control", desc: "Fewer avoidable write-offs through timely action." },
      { title: "A/R Reporting", desc: "Clear aging reports and recovery tracking." },
    ],
    benefits: [
      "Reduced days in A/R",
      "Recovery of aged balances",
      "Fewer write-offs",
      "Improved cash flow predictability",
      "Underpayments identified and recovered",
      "Clean, current aging buckets",
    ],
    steps: [
      { title: "Segment A/R", desc: "Balances prioritized by age and dollar value." },
      { title: "Work Claims", desc: "Payers and patients contacted systematically." },
      { title: "Resolve", desc: "Underpayments, denials and delays resolved." },
      { title: "Report", desc: "Aging and recovery reported transparently." },
    ],
    metrics: [
      { value: "30%", label: "Lower days in A/R" },
      { value: "20%+", label: "Aged A/R recovered" },
      { value: "<35", label: "Target days in A/R" },
    ],
    faqs: [
      { q: "Do you work aged A/R cleanup projects?", a: "Yes, we take on aged A/R recovery as a project or ongoing service." },
      { q: "How do you prioritize claims?", a: "By age and dollar value so the highest-impact claims are worked first." },
      { q: "Do you handle patient balances?", a: "Yes, with respectful, compliant patient follow-up and support." },
      { q: "What A/R metrics do you report?", a: "Days in A/R, aging buckets, recovery rates and payer performance." },
    ],
    metaTitle: "Accounts Receivable (A/R) Follow-Up Services | Nex Records",
    metaDescription:
      "A/R follow-up services from Nex Records. Reduce days in A/R, recover aged balances and improve cash flow with persistent insurance and patient follow-up.",
  },
  {
    slug: "payment-posting",
    name: "Payment Posting Services",
    icon: "Wallet",
    tagline: "Fast, accurate payment posting with audit-ready reconciliation.",
    eyebrow: "Back-End RCM",
    problem:
      "Slow or inaccurate posting hides underpayments, delays A/R follow-up and clouds your true financial picture.",
    solution:
      "We post ERAs, EOBs and patient payments quickly and accurately with full reconciliation and variance detection.",
    result:
      "Clean books, faster denial and underpayment detection, and reliable financial reporting.",
    overview:
      "Nex Records posts every payment accurately and on time, reconciling deposits to remittances and flagging variances immediately. Precise posting is the foundation of clean A/R and trustworthy financial reporting.",
    features: [
      { title: "ERA & EOB Posting", desc: "Electronic and manual remittance posting with accuracy." },
      { title: "Reconciliation", desc: "Deposits reconciled to remittances every day." },
      { title: "Variance Detection", desc: "Underpayments and adjustments flagged instantly." },
      { title: "Denial Routing", desc: "Denials identified at posting and routed for action." },
      { title: "Patient Payments", desc: "Accurate posting of patient and card payments." },
      { title: "Audit-Ready Records", desc: "Clean, traceable posting for audits and reporting." },
    ],
    benefits: [
      "Accurate, timely posting",
      "Faster underpayment detection",
      "Clean reconciliation",
      "Reliable financial reporting",
      "Quicker denial identification",
      "Reduced posting backlogs",
    ],
    steps: [
      { title: "Receive Remittances", desc: "ERAs, EOBs and payments collected daily." },
      { title: "Post Accurately", desc: "Payments and adjustments posted correctly." },
      { title: "Reconcile", desc: "Deposits matched to remittances." },
      { title: "Flag Variances", desc: "Underpayments and denials surfaced for follow-up." },
    ],
    metrics: [
      { value: "99.5%", label: "Posting accuracy" },
      { value: "24h", label: "Posting turnaround" },
      { value: "0", label: "Posting backlog" },
    ],
    faqs: [
      { q: "How fast do you post payments?", a: "Typically within 24 hours of receiving remittances." },
      { q: "Do you catch underpayments?", a: "Yes, variance detection flags underpayments and short-pays for recovery." },
      { q: "Do you post patient payments too?", a: "Yes, both insurance and patient payments are posted accurately." },
      { q: "Is your posting audit-ready?", a: "Every entry is clean, traceable and ready for audit or reporting." },
    ],
    metaTitle: "Payment Posting & Reconciliation Services | Nex Records",
    metaDescription:
      "Accurate payment posting from Nex Records. Fast ERA/EOB posting, daily reconciliation and variance detection for clean books and reliable reporting.",
  },
  {
    slug: "credentialing",
    name: "Provider Credentialing & Enrollment",
    icon: "BadgeCheck",
    tagline: "Get providers credentialed and enrolled without the delays.",
    eyebrow: "Enablement",
    problem:
      "Credentialing delays keep providers from billing, and lapsed enrollments quietly block payments for months.",
    solution:
      "We manage credentialing and payer enrollment end to end — applications, CAQH, follow-up and re-credentialing.",
    result:
      "Providers start billing sooner and stay actively enrolled with every payer.",
    overview:
      "Nex Records handles provider credentialing and payer enrollment with Medicare, Medicaid and commercial plans. We track deadlines, maintain CAQH, and manage re-credentialing so revenue is never blocked by paperwork.",
    features: [
      { title: "Payer Enrollment", desc: "Enrollment with Medicare, Medicaid and commercial payers." },
      { title: "CAQH Management", desc: "CAQH setup and ongoing profile maintenance." },
      { title: "Application Handling", desc: "Complete, accurate applications submitted and tracked." },
      { title: "Re-Credentialing", desc: "Proactive tracking so credentials never lapse." },
      { title: "Follow-Up", desc: "Persistent payer follow-up to speed approvals." },
      { title: "Status Visibility", desc: "Real-time tracking of every credentialing request." },
    ],
    benefits: [
      "Faster time to first bill",
      "No lapsed enrollments",
      "Reduced administrative burden",
      "Accurate, complete applications",
      "Proactive re-credentialing",
      "Full status transparency",
    ],
    steps: [
      { title: "Gather Data", desc: "Provider information and documents collected." },
      { title: "Submit", desc: "Applications and CAQH completed and submitted." },
      { title: "Follow Up", desc: "Persistent tracking until approval." },
      { title: "Maintain", desc: "Re-credentialing tracked so nothing lapses." },
    ],
    metrics: [
      { value: "30%", label: "Faster enrollment" },
      { value: "100%", label: "Deadlines tracked" },
      { value: "0", label: "Lapsed enrollments" },
    ],
    faqs: [
      { q: "How long does credentialing take?", a: "It varies by payer, but proactive follow-up typically shortens timelines significantly." },
      { q: "Do you manage CAQH?", a: "Yes, we set up and maintain CAQH profiles on your behalf." },
      { q: "Do you handle re-credentialing?", a: "Yes, we track deadlines proactively so credentials never lapse." },
      { q: "Which payers do you enroll with?", a: "Medicare, Medicaid and commercial payers nationwide." },
    ],
    metaTitle: "Provider Credentialing & Payer Enrollment | Nex Records",
    metaDescription:
      "Provider credentialing and payer enrollment from Nex Records. Faster time to bill, CAQH management and proactive re-credentialing with every payer.",
  },
  {
    slug: "charge-entry",
    name: "Charge Entry Services",
    icon: "ClipboardCheck",
    tagline: "Accurate charge capture for cleaner, faster claims.",
    eyebrow: "Front-End RCM",
    problem:
      "Missed or incorrect charges mean lost revenue and rejected claims that slow your entire revenue cycle.",
    solution:
      "We enter charges accurately and completely with built-in edits, so claims are clean before they ever go out.",
    result:
      "No missed charges, fewer rejections and a faster path to reimbursement.",
    overview:
      "Nex Records captures every billable charge accurately and applies validation edits before claims are created. Clean charge entry prevents downstream rework and keeps your revenue cycle moving.",
    features: [
      { title: "Complete Capture", desc: "Every billable service entered — nothing missed." },
      { title: "Validation Edits", desc: "Automated checks catch errors before submission." },
      { title: "Modifier Accuracy", desc: "Correct modifiers applied for clean claims." },
      { title: "Fee Schedule Checks", desc: "Charges validated against current fee schedules." },
      { title: "Fast Turnaround", desc: "Same-day charge entry keeps claims moving." },
      { title: "Quality Assurance", desc: "QA sampling maintains consistent accuracy." },
    ],
    benefits: [
      "No missed charges",
      "Fewer claim rejections",
      "Faster claim creation",
      "Accurate modifiers",
      "Reduced downstream rework",
      "Consistent, high accuracy",
    ],
    steps: [
      { title: "Receive Encounters", desc: "Superbills and encounter data collected." },
      { title: "Enter Charges", desc: "Accurate, complete charge entry." },
      { title: "Validate", desc: "Edits and modifier checks applied." },
      { title: "Release", desc: "Clean charges released to billing." },
    ],
    metrics: [
      { value: "99%", label: "Charge accuracy" },
      { value: "24h", label: "Entry turnaround" },
      { value: "0", label: "Missed charges" },
    ],
    faqs: [
      { q: "How fast is charge entry?", a: "We target same-day or 24-hour turnaround to keep claims moving." },
      { q: "Do you catch missing charges?", a: "Yes, our process is built to ensure no billable service is missed." },
      { q: "Do you handle modifiers?", a: "Yes, correct modifier application is part of clean charge entry." },
      { q: "How do you ensure accuracy?", a: "Validation edits plus QA sampling keep accuracy consistently high." },
    ],
    metaTitle: "Charge Entry Services for Medical Billing | Nex Records",
    metaDescription:
      "Accurate charge entry services from Nex Records. Complete charge capture, modifier accuracy and validation edits for cleaner, faster claims.",
  },
  {
    slug: "revenue-analytics",
    name: "Revenue Cycle Analytics & Reporting",
    icon: "BarChart3",
    tagline: "Turn your revenue cycle data into decisions with live dashboards.",
    eyebrow: "Intelligence",
    problem:
      "Without clear visibility, revenue leaks go unnoticed and leaders make decisions on gut feel instead of data.",
    solution:
      "We deliver real-time dashboards and reporting on collections, denials, A/R and KPIs across your practice.",
    result:
      "Complete financial visibility, faster problem detection and confident, data-driven decisions.",
    overview:
      "Nex Records gives you a live view of your financial performance — collections, denial trends, A/R aging, payer behavior and provider productivity — so you always know exactly where revenue stands and where to act.",
    features: [
      { title: "Live Dashboards", desc: "Real-time KPIs on collections, A/R and denials." },
      { title: "Denial Analytics", desc: "Trends by reason, payer and provider." },
      { title: "A/R Insights", desc: "Aging analysis and recovery tracking." },
      { title: "Payer Performance", desc: "See which payers pay fast — and which don't." },
      { title: "Provider Productivity", desc: "Encounter and revenue metrics by provider." },
      { title: "Custom Reports", desc: "Reporting tailored to your leadership's needs." },
    ],
    benefits: [
      "Complete financial visibility",
      "Faster problem detection",
      "Data-driven decisions",
      "Early revenue-leak alerts",
      "Benchmarked performance",
      "Executive-ready reporting",
    ],
    steps: [
      { title: "Connect Data", desc: "We aggregate data from your systems." },
      { title: "Build Dashboards", desc: "Custom KPI dashboards configured." },
      { title: "Monitor", desc: "Continuous tracking of key metrics." },
      { title: "Act", desc: "Insights turned into revenue actions." },
    ],
    metrics: [
      { value: "360°", label: "Revenue visibility" },
      { value: "Real-time", label: "KPI dashboards" },
      { value: "100%", label: "Transparency" },
    ],
    faqs: [
      { q: "What metrics do you track?", a: "Collections, denial rates, days in A/R, payer performance, provider productivity and more." },
      { q: "Are reports customizable?", a: "Yes, we tailor dashboards and reports to your leadership's needs." },
      { q: "How current is the data?", a: "Dashboards provide real-time and near-real-time visibility." },
      { q: "Can this be added to other services?", a: "Yes, analytics is included with our full RCM service and available standalone." },
    ],
    metaTitle: "Revenue Cycle Analytics & Reporting | Nex Records",
    metaDescription:
      "Revenue cycle analytics from Nex Records. Real-time dashboards for collections, denials, A/R and KPIs that drive data-driven financial decisions.",
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);