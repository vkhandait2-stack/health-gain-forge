import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function LiveNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = performance.now();
    const startVal = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(startVal + (value - startVal) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <>
      {prefix}
      {display.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </>
  );
}

function Field({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-navy">{label}</label>
        <span className="rounded-md bg-brand-soft px-2 py-0.5 text-sm font-semibold text-brand">{display}</span>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
        aria-label={label}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [claims, setClaims] = useState(2500);
  const [claimValue, setClaimValue] = useState(180);
  const [denialRate, setDenialRate] = useState(12);
  const [collectionRate, setCollectionRate] = useState(82);
  const [growth, setGrowth] = useState(15);

  const out = useMemo(() => {
    const monthlyBilled = claims * claimValue;
    const improvedCollection = Math.min(collectionRate + 12, 98);
    const monthlyRecovery = monthlyBilled * ((improvedCollection - collectionRate) / 100);
    const denialTarget = Math.max(denialRate * 0.4, 2);
    const denialClaimsSaved = claims * ((denialRate - denialTarget) / 100);
    const monthlySavings = denialClaimsSaved * claimValue * 0.6;
    const annualIncrease = (monthlyRecovery + monthlySavings) * 12 * (1 + growth / 100);
    return {
      monthlyRecovery,
      monthlySavings,
      annualIncrease,
      denialReduction: denialRate - denialTarget,
    };
  }, [claims, claimValue, denialRate, collectionRate, growth]);

  return (
    <section className="section-pad" aria-labelledby="roi-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="roi-heading">
          <SectionHeading
            eyebrow="ROI Calculator"
            title="Estimate Your Revenue Opportunity"
            subtitle="Adjust your numbers to see how much revenue Nex Records could help you recover."
          />
        </div>
        <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.6rem] border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-brand">
              <Calculator className="h-5 w-5" />
              <span className="text-sm font-semibold">Your current numbers</span>
            </div>
            <div className="mt-6 space-y-6">
              <Field label="Monthly Claims" value={claims} display={claims.toLocaleString()} min={200} max={20000} step={100} onChange={setClaims} />
              <Field label="Average Claim Value" value={claimValue} display={`$${claimValue}`} min={50} max={1000} step={10} onChange={setClaimValue} />
              <Field label="Current Denial Rate" value={denialRate} display={`${denialRate}%`} min={2} max={30} step={1} onChange={setDenialRate} />
              <Field label="Current Collection Rate" value={collectionRate} display={`${collectionRate}%`} min={50} max={95} step={1} onChange={setCollectionRate} />
              <Field label="Expected Growth" value={growth} display={`${growth}%`} min={0} max={50} step={1} onChange={setGrowth} />
            </div>
          </div>

          <div className="flex flex-col rounded-[1.6rem] bg-gradient-navy p-7 text-navy-foreground shadow-float">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-glow">Your projected results</span>
            <div className="mt-6 grid flex-1 grid-cols-2 gap-4">
              <div className="glass-dark rounded-2xl p-5">
                <p className="text-xs text-navy-foreground/70">Est. Revenue Recovery / mo</p>
                <p className="mt-1 text-2xl font-bold"><LiveNumber value={out.monthlyRecovery} prefix="$" /></p>
              </div>
              <div className="glass-dark rounded-2xl p-5">
                <p className="text-xs text-navy-foreground/70">Est. Monthly Savings</p>
                <p className="mt-1 text-2xl font-bold"><LiveNumber value={out.monthlySavings} prefix="$" /></p>
              </div>
              <div className="glass-dark rounded-2xl p-5">
                <p className="text-xs text-navy-foreground/70">Est. Annual Revenue Increase</p>
                <p className="mt-1 text-2xl font-bold text-brand-glow"><LiveNumber value={out.annualIncrease} prefix="$" /></p>
              </div>
              <div className="glass-dark rounded-2xl p-5">
                <p className="text-xs text-navy-foreground/70">Est. Reduction in Denials</p>
                <p className="mt-1 text-2xl font-bold"><LiveNumber value={out.denialReduction} decimals={1} suffix="%" /></p>
              </div>
            </div>
            <Button asChild variant="hero" size="lg" className="mt-6 w-full">
              <a href="#contact">Book Free Revenue Assessment <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}