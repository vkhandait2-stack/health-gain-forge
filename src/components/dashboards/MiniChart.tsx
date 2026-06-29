import { motion } from "motion/react";

export function Sparkline({
  data,
  color = "var(--brand)",
  className,
}: {
  data: number[];
  color?: string;
  className?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 32;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((d - min) / range) * h;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#g-${color})`} />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Bars({
  data,
  color = "var(--brand)",
  className,
}: {
  data: number[];
  color?: string;
  className?: string;
}) {
  const max = Math.max(...data) || 1;
  return (
    <div className={`flex items-end gap-1.5 ${className ?? ""}`} aria-hidden="true">
      {data.map((d, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ background: color, height: `${(d / max) * 100}%` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export function Donut({
  value,
  size = 64,
  color = "var(--brand)",
}: {
  value: number;
  size?: number;
  color?: string;
}) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (value / 100) * c }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}