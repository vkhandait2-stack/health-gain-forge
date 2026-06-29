import { Building2, Hospital, Stethoscope, Brain, Smile, Activity, Bone, Ambulance } from "lucide-react";

const ITEMS = [
  { label: "Clinics", icon: Building2 },
  { label: "Hospitals", icon: Hospital },
  { label: "Medical Groups", icon: Stethoscope },
  { label: "Behavioral Health", icon: Brain },
  { label: "Dental", icon: Smile },
  { label: "ASC", icon: Activity },
  { label: "Physical Therapy", icon: Bone },
  { label: "Urgent Care", icon: Ambulance },
];

export function TrustBar() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-border bg-secondary/40 py-10" aria-label="Trusted by healthcare providers">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by Healthcare Providers Across the United States
      </p>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft"
            >
              <item.icon className="h-4 w-4 text-brand" />
              <span className="whitespace-nowrap text-sm font-semibold text-navy">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}