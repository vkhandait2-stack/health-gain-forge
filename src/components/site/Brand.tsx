import { Link } from "@tanstack/react-router";

export function Brand({ dark = false }: { dark?: boolean }) {
  if (!dark) {
    return (
      <Link to="/" className="inline-flex items-center" aria-label="Nex Records home">
        <img src="/logo.png" alt="Nex Records" className="h-9 w-auto sm:h-10" width={304} height={72} />
      </Link>
    );
  }
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Nex Records home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M5 17V7l7 5 7-5v10"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className="text-lg font-bold tracking-tight text-navy-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Nex<span className="text-brand">Records</span>
      </span>
    </Link>
  );
}