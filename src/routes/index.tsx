import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  Wrench,
  Layers,
  Handshake,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  FileText,
  Calendar,
  Users,
  AlertTriangle,
} from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-flooring.jpg";
import serviceHardwood from "@/assets/service-hardwood.jpg";
import serviceBuff from "@/assets/service-buff.jpg";
import serviceLvp from "@/assets/service-lvp.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Top Pro Flooring | Trusted Flooring Subcontractor — NC & SC" },
      {
        name: "description",
        content:
          "Reliable, fully insured flooring subcontractor for general contractors, builders & remodelers across North & South Carolina. Hardwood, refinishing, buff & coat, LVP. On time. On budget. Done right.",
      },
    ],
  }),
});

const PHONE_DISPLAY = "+1 (704) 241-0592";
const PHONE_HREF = "tel:+17042410592";

function Header() {
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Layers className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-primary">TOP PRO</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Flooring LLC
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-semibold text-primary md:flex"
          >
            <Phone className="h-4 w-4 text-accent" />
            {PHONE_DISPLAY}
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#quote">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroImg}
        alt="Professional flooring contractor refinishing hardwood floor in a luxury home"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            Fully Licensed & Insured • NC & SC
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Reliable Flooring Partner for Your Next Project
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            Professional Hardwood Installation, Refinishing, and Buff &amp; Coat Services for
            Contractors Across North &amp; South Carolina.
          </p>
          <p className="mt-4 text-base font-semibold text-accent">
            👉 On time. On budget. Done right.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#quote">
                GET A PARTNER QUOTE <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={PHONE_HREF}>
                <Phone className="mr-1 h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Ready to provide proof of General Liability — fast.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="ml-auto grid max-w-md gap-3">
            {[
              { icon: ShieldCheck, t: "General Liability Insured", s: "Proof on request" },
              { icon: Clock, t: "On-Schedule Delivery", s: "Synced to your build phase" },
              { icon: Sparkles, t: "Dustless Sanding System", s: "Protects fresh paint & HVAC" },
              { icon: MapPin, t: "NC & SC Coverage", s: "GCs, builders, remodelers" },
            ].map((b) => (
              <div
                key={b.t}
                className="flex items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 backdrop-blur"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{b.t}</div>
                  <div className="text-sm text-primary-foreground/70">{b.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Full General Liability & Proof of Insurance",
      desc: "Documentation delivered straight to your project managers before we step on site.",
    },
    {
      icon: Award,
      title: "Licensed & Trained Crews",
      desc: "Built for active job sites — every site condition, every spec.",
    },
    {
      icon: MapPin,
      title: "Serving NC & SC",
      desc: "Active partner for general contractors, builders, and remodelers across the Carolinas.",
    },
  ];
  return (
    <section className="border-b border-border bg-secondary/60 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Trust & Credentials
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Built to Meet Contractor Standards
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            We don&apos;t just lay floors; we protect your reputation. Top Pro Flooring is fully
            structured to sync with your building schedule, providing clear communication and
            instant access to our compliance documentation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" /> The Contractor&apos;s Risk
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Tired of Subcontractors Ghosting Your Timeline?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A delayed floor means a delayed handover. Don&apos;t let unreliable crews ruin your
            client relationship.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-foreground/80">
            Every day a sub-contractor is late or leaves a mess on site, it costs you money and
            dampens your company&apos;s reputation. Common issues like airborne dust settling on
            fresh paint or lack of proper insurance can stall your entire project validation. You
            need a flooring partner who respects your milestones as much as you do.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Missed handover dates",
              "Sub-grade finish quality",
              "Missing insurance docs",
              "Dust on freshly painted walls",
            ].map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3"
              >
                <AlertTriangle className="h-4 w-4 shrink-0 text-destructive" />
                <span className="text-sm font-medium text-foreground/80">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.16_55_/_0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          The Seamless Subcontractor Solution
        </div>
        <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
          Your Trusted Subcontractor for Every Flooring Job
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-primary-foreground/80">
          We work seamlessly with general contractors, builders, and remodelers — delivering
          precision, efficiency, and a flawless finish every time. Our work helps your work shine.
          We step in exactly when scheduled, execute to commercial-grade standards, and clear out
          without leaving a trace of dust, keeping your project moving forward smoothly.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#quote">
              REQUEST A QUOTE <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      img: serviceHardwood,
      title: "Hardwood Installation & Refinishing",
      desc: "Premium hardwood floor installation and comprehensive sand-and-finish services tailored for high-end remodels and custom home builds.",
      benefit: "Dustless Sanding System guarantees zero airborne mess on your job site.",
    },
    {
      img: serviceBuff,
      title: "Buff & Coat Services",
      desc: "Fast-turnaround surface preparation and protective topcoat application to revive wood floors without a full sanding process.",
      benefit: "Ideal for quick project turnarounds and final punch-list completions.",
    },
    {
      img: serviceLvp,
      title: "LVP & Engineered Hardwood",
      desc: "High-efficiency installation of all modern engineered timber and click-lock / glue-down LVP systems.",
      benefit: "Precise layout planning and rapid execution for high-traffic multi-room projects.",
    },
    {
      img: serviceRepair,
      title: "Hardwood Floor Repair",
      desc: "Seamless integration, board replacements, and fixing localized water, fire, or construction damage before handover.",
      benefit: "Restores integrity perfectly to match the existing floor profile.",
    },
  ];
  return (
    <section id="services" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Specialized Commercial & Residential Flooring Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            High-quality workmanship that reflects your company&apos;s reputation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-start gap-2 rounded-md border-l-4 border-accent bg-accent/10 px-3 py-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm font-medium text-foreground">{s.benefit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
          <Phone className="h-5 w-5 text-accent" />
          <span className="text-base text-foreground">
            Need a fast quote for an active job?
          </span>
          <a
            href={PHONE_HREF}
            className="text-base font-bold text-primary underline-offset-4 hover:underline"
          >
            Call us at {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Wrench,
      t: "Full-Service Expertise",
      d: "Installation, Refinishing, Buff & Coat, and Repair handled by one specialized team.",
    },
    {
      icon: Users,
      t: "Professional Team",
      d: "Licensed, insured, and thoroughly trained for demanding job site conditions.",
    },
    {
      icon: Clock,
      t: "Reliable Scheduling",
      d: "Fast turnaround and strict timeline adherence to keep your building phases on track.",
    },
    {
      icon: Sparkles,
      t: "Dustless System",
      d: "Clean, modern refinishing technology that leaves zero mess for your cleaning crew.",
    },
    {
      icon: Handshake,
      t: "Flexible Subcontracting",
      d: "Options engineered per project or for ongoing, long-term partnerships.",
    },
    {
      icon: DollarSign,
      t: "Transparent Pricing",
      d: "Clear communication, accurate estimations, and no hidden line-items.",
    },
  ];
  return (
    <section id="why" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Choose Us
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Why Contractors Choose Top Pro Flooring
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: FileText,
      t: "Submit Project Details",
      d: "Send your blueprints, specs, or project scope online.",
    },
    {
      icon: DollarSign,
      t: "Transparent Partner Quote",
      d: "Receive a detailed pricing breakdown aligned with your project budget.",
    },
    {
      icon: Calendar,
      t: "Seamless Scheduling & Verification",
      d: "We sync with your timeline and dispatch our fully insured, licensed crew.",
    },
    {
      icon: CheckCircle2,
      t: "Flawless Execution & Handover",
      d: "Precision delivery backed by our Dustless System, helping your project shine.",
    },
  ];
  return (
    <section id="process" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            How We Work
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Our 4-Step Partnership Process
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <s.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote:
        "Top Pro Flooring is our go-to sub for all custom builds in the Carolinas. They show up on time, provide proof of insurance instantly, and their dustless system saves my crew hours of cleanup. Flawless work every single time.",
      name: "Marcus V.",
      role: "General Contractor — Charlotte, NC",
    },
    {
      quote:
        "Transparent pricing and absolute respect for scheduling milestones. They just completed a heavy hardwood refinishing job on a tight schedule, keeping our remodeling project exactly on track.",
      name: "Sarah D.",
      role: "Residential Remodeler — South Carolina",
    },
  ];
  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What Our Partners Say
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            What Other Builders Say About Us
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.map((x) => (
            <figure
              key={x.name}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="absolute -top-4 left-6 text-6xl leading-none text-accent">“</div>
              <blockquote className="relative text-lg leading-relaxed text-foreground/90">
                {x.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-bold text-primary">{x.name}</div>
                <div className="text-sm text-muted-foreground">{x.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do you carry General Liability Insurance?",
      a: "Yes. We are fully licensed and insured. We can provide official proof of General Liability insurance directly to your project managers before we step on site.",
    },
    {
      q: "What geographic areas do you cover?",
      a: "We actively service general contractors, builders, and remodelers across North Carolina and South Carolina.",
    },
    {
      q: "How does your Dustless Refinishing System work?",
      a: "We utilize advanced, modern dust containment systems during our sanding and refinishing processes. This prevents wood dust from becoming airborne, protecting nearby wet paint, countertops, and HVAC systems from contamination.",
    },
    {
      q: "Do you offer ongoing subcontracting partnerships or just single-project jobs?",
      a: "We offer flexible subcontracting options tailored to your pipeline. We work on single per-project layouts as well as ongoing, long-term trade partnerships.",
    },
    {
      q: "What flooring systems do you support?",
      a: "We fully support all major hardwood installations, engineered timber, LVP (Luxury Vinyl Plank) systems, refinishing, and professional repairs.",
    },
  ];
  return (
    <section id="faq" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border px-6 last:border-b-0">
              <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Quote request sent. We'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,oklch(0.72_0.16_55_/_0.25),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Secure Your Flooring Partner
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
            On Time. On Budget. Done Right. Let&apos;s Build Together.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Connect with an insured, reliable flooring subcontractor that respects your schedule
            and safeguards your reputation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  Call directly for active projects
                </div>
                <div className="font-bold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a
              href="mailto:info@gmail.com"
              className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  Email
                </div>
                <div className="font-bold">info@gmail.com</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-accent/40 bg-accent/15 p-4 text-accent transition-colors hover:bg-accent/25"
            >
              <ShieldCheck className="h-5 w-5" />
              <div>
                <div className="font-bold">
                  Need immediate proof of insurance for a bid?
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Click here — we&apos;ll send your COI today.
                </div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-background p-6 text-foreground shadow-xl md:col-span-3 md:p-8"
        >
          <h3 className="text-xl font-bold text-primary">Request a Partner Quote</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your project — we reply within one business day.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="company">Company Name*</Label>
              <Input id="company" name="company" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="name">Your Name*</Label>
              <Input id="name" name="name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input id="email" name="email" type="email" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone*</Label>
              <Input id="phone" name="phone" type="tel" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="type">Type of Project*</Label>
              <Select name="type" required>
                <SelectTrigger id="type" className="mt-1.5">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-build">Custom Build</SelectItem>
                  <SelectItem value="remodel">Remodel</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="ongoing">Ongoing Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="start">Estimated Start Date</Label>
              <Input id="start" name="start" type="date" className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Project Scope / Notes</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1.5"
                placeholder="Square footage, location, materials, deadlines..."
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {submitting ? "Sending..." : "GET A PARTNER QUOTE"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Fully Licensed & Insured • Ready to Provide Proof of General Liability
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Layers className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight text-primary">TOP PRO</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                Flooring LLC
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The flooring subcontractor that protects your schedule, your budget, and your
            reputation.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#why" className="hover:text-accent">Why Us</a></li>
            <li><a href="#process" className="hover:text-accent">Process</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            <li><a href="#quote" className="hover:text-accent">Request a Quote</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <a href={PHONE_HREF} className="hover:text-accent">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href="mailto:info@gmail.com" className="hover:text-accent">info@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>Serving North & South Carolina</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Credentials</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Fully Licensed & Insured
            </li>
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" /> Proof of General Liability
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" /> Dustless Sanding System
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>© 2026 Top Pro Flooring LLC. All Rights Reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
