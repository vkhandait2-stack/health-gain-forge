import { Brand } from "./Brand";

const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Case Studies", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: ["Medical Billing", "Medical Coding", "Denial Management", "Revenue Analytics"],
  },
  {
    title: "Industries",
    links: ["Primary Care", "Behavioral Health", "Orthopedics", "Physical Therapy"],
  },
  {
    title: "Resources",
    links: ["Privacy Policy", "Terms", "HIPAA Compliance", "Client Portal"],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Brand dark />
            <p className="mt-4 max-w-xs text-sm text-navy-foreground/60">
              An enterprise Healthcare Revenue Cycle Management company helping U.S. providers
              increase revenue, reduce denials and get paid faster.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-navy-foreground">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#contact" className="text-sm text-navy-foreground/60 transition-colors hover:text-brand-glow">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nex Records. All rights reserved.</p>
          <p>HIPAA-conscious workflows · Enterprise security · USA-based revenue specialists</p>
        </div>
      </div>
    </footer>
  );
}