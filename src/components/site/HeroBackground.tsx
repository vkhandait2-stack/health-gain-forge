export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-hero">
      <div
        className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.16 250 / 0.35), transparent 70%)",
          animation: "float-slow 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.13 200 / 0.3), transparent 70%)",
          animation: "float-slow 11s ease-in-out infinite",
        }}
      />
      {/* slow-drifting mesh light */}
      <div
        className="animate-mesh-drift absolute left-1/3 top-0 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.17 268 / 0.28), transparent 68%)",
        }}
      />
      {/* network lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
        <defs>
          <pattern id="netgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="oklch(0.55 0.2 257)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#netgrid)" />
      </svg>
    </div>
  );
}