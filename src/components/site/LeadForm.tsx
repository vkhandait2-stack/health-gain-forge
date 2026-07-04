import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GOOGLE_SHEETS_WEBHOOK_URL, CONTACT_EMAIL } from "@/lib/site";

const SPECIALTIES = ["Primary Care", "Cardiology", "Behavioral Health", "Dental", "Urgent Care", "Other"] as const;
const PROVIDER_RANGES = ["1", "2–5", "6–10", "11–25", "26–50", "50+"] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  practice: z.string().trim().min(2, "Please enter your practice or organization").max(120),
  email: z.string().trim().email("Enter a valid work email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  specialty: z.enum(SPECIALTIES, { message: "Select a specialty" }),
  providers: z.enum(PROVIDER_RANGES, { message: "Select number of providers" }),
  claims: z.string().trim().max(20).optional().or(z.literal("")),
  software: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot — must stay empty.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({ compact = false, id }: { compact?: boolean; id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const specialty = watch("specialty");
  const providers = watch("providers");

  async function onSubmit(values: FormValues) {
    setSubmitError(null);
    if (values.company_website) return; // bot caught by honeypot

    const payload = {
      fullName: values.fullName,
      practice: values.practice,
      email: values.email,
      phone: values.phone,
      specialty: values.specialty,
      providers: values.providers,
      claims: values.claims ?? "",
      software: values.software ?? "",
      message: values.message ?? "",
    };

    try {
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
        setSubmitted(true);
        reset();
      } else {
        // Fallback until the Google Sheet endpoint is configured — never lose a lead.
        const body = Object.entries(payload)
          .map(([k, v]) => `${k}: ${v}`)
          .join("%0D%0A");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          "New RCM inquiry — " + values.practice,
        )}&body=${body}`;
        setSubmitted(true);
        reset();
      }
    } catch {
      setSubmitError("Something went wrong. Please email us directly at " + CONTACT_EMAIL + ".");
    }
  }

  if (submitted) {
    return (
      <div id={id} className="rounded-[1.6rem] border border-brand/30 bg-card p-8 text-center shadow-card">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">Thank you — we've got your details</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          A Nex Records revenue cycle specialist will reach out within one business day to schedule your free RCM
          assessment.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another inquiry
        </Button>
      </div>
    );
  }

  const err = "text-xs font-medium text-destructive";

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[1.6rem] border border-border bg-card p-6 shadow-card sm:p-8"
    >
      {/* Honeypot (hidden from users, catches bots) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="fullName">Full name *</Label>
          <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
          {errors.fullName && <p className={err}>{errors.fullName.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="practice">Practice / organization *</Label>
          <Input id="practice" autoComplete="organization" aria-invalid={!!errors.practice} {...register("practice")} />
          {errors.practice && <p className={err}>{errors.practice.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p className={err}>{errors.email.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p className={err}>{errors.phone.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="specialty">Specialty *</Label>
          <Select value={specialty} onValueChange={(v) => setValue("specialty", v as FormValues["specialty"], { shouldValidate: true })}>
            <SelectTrigger id="specialty" aria-invalid={!!errors.specialty}>
              <SelectValue placeholder="Select specialty" />
            </SelectTrigger>
            <SelectContent>
              {SPECIALTIES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.specialty && <p className={err}>{errors.specialty.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="providers">Number of providers *</Label>
          <Select value={providers} onValueChange={(v) => setValue("providers", v as FormValues["providers"], { shouldValidate: true })}>
            <SelectTrigger id="providers" aria-invalid={!!errors.providers}>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {PROVIDER_RANGES.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.providers && <p className={err}>{errors.providers.message}</p>}
        </div>

        {!compact && (
          <>
            <div className="grid gap-1.5">
              <Label htmlFor="claims">Avg monthly claims</Label>
              <Input id="claims" inputMode="numeric" placeholder="Optional" {...register("claims")} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="software">Current billing / EHR software</Label>
              <Input id="software" placeholder="Optional" {...register("software")} />
            </div>
            <div className="grid gap-1.5 sm:col-span-2">
              <Label htmlFor="message">Biggest challenge / message</Label>
              <Textarea id="message" rows={4} placeholder="Optional — tell us what's slowing your revenue cycle" {...register("message")} />
            </div>
          </>
        )}
      </div>

      {submitError && <p className="mt-4 text-sm font-medium text-destructive">{submitError}</p>}

      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Get a Free RCM Audit <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
        Please do not include any PHI (protected health information) in this form. We never collect patient data through
        our website.
      </p>
    </form>
  );
}
