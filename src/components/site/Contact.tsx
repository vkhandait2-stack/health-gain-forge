import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, Clock, Linkedin, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
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
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const SPECIALTIES = [
  "Primary Care", "Behavioral Health", "Orthopedic", "Cardiology", "Physical Therapy",
  "Urgent Care", "Dental", "ASC", "Home Health", "Multi-Specialty", "Other",
];
const SIZES = ["1–3 providers", "4–10 providers", "11–25 providers", "26+ providers", "Hospital / Health System"];
const TIMES = ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–7pm)"];

export function Contact() {
  const [specialty, setSpecialty] = useState("");
  const [size, setSize] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Request received", {
      description: "A Nex Records revenue specialist will reach out within one business day.",
    });
    e.currentTarget.reset();
    setSpecialty("");
    setSize("");
    setTime("");
  };

  return (
    <section id="contact" className="section-pad scroll-mt-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Improve Your Revenue Cycle."
            subtitle="Book a free consultation, request a proposal, or talk to a revenue expert — whatever works best for you."
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <Reveal className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Button asChild variant="hero" size="lg"><a href="#contact-form">Book Free Consultation <ArrowRight className="h-4 w-4" /></a></Button>
              <Button asChild variant="outline" size="lg"><a href="#contact-form">Request Proposal</a></Button>
              <Button asChild variant="navy" size="lg"><a href="tel:+18005550199"><Phone className="h-4 w-4" /> Call Sales</a></Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-brand" /><span className="text-navy"><strong className="font-semibold">USA Business Hours</strong><br />Mon–Fri, 8am–7pm ET</span></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand" /><span className="text-navy"><strong className="font-semibold">Sales:</strong> sales@nexrecords.com</span></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand" /><span className="text-navy"><strong className="font-semibold">Support:</strong> support@nexrecords.com</span></li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand" /><span className="text-navy"><strong className="font-semibold">Phone:</strong> (800) 555-0199</span></li>
                <li className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-brand" /><span className="text-navy"><strong className="font-semibold">LinkedIn:</strong> /company/nexrecords</span></li>
              </ul>
              <div className="mt-5 flex items-start gap-2 rounded-xl bg-brand-soft/60 p-3 text-xs text-navy">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span><strong className="font-semibold">HIPAA Statement:</strong> Nex Records protects patient information with secure, HIPAA-conscious workflows at every stage of the revenue cycle.</span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <form
              id="contact-form"
              onSubmit={onSubmit}
              className="rounded-[1.6rem] border border-border bg-card p-7 shadow-card"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" required className="mt-1.5" placeholder="Jane Doe" />
                </div>
                <div>
                  <Label htmlFor="practice">Practice Name</Label>
                  <Input id="practice" name="practice" required className="mt-1.5" placeholder="Sunrise Medical Group" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="jane@practice.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-1.5" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label>Specialty</Label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select specialty" /></SelectTrigger>
                    <SelectContent>{SPECIALTIES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Practice Size</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent>{SIZES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="challenge">Current Billing Challenge</Label>
                  <Input id="challenge" name="challenge" className="mt-1.5" placeholder="e.g. High denial rate, slow collections" />
                </div>
                <div className="sm:col-span-2">
                  <Label>Preferred Contact Time</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a time" /></SelectTrigger>
                    <SelectContent>{TIMES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} className="mt-1.5" placeholder="Tell us about your goals..." />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="hero" size="lg" className="flex-1">Submit Request</Button>
                <Button type="submit" variant="outline" size="lg" className="flex-1"><Calendar className="h-4 w-4" /> Book Meeting</Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}