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
  Handshake,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Calendar,
  Users,
  AlertTriangle,
  Quote,
  XCircle,
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
import parallaxFloor from "@/assets/parallax-floor.jpg";
import logoTopPro from "@/assets/logo-top-pro.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Top Pro Flooring | Flooring Services for NC & SC Homes" },
      {
        name: "description",
        content:
          "Beautiful, long-lasting floors for homeowners across North and South Carolina. Hardwood installation, refinishing, buff and coat, LVP, and repairs from a licensed and insured team.",
      },
    ],
  }),
});

const PHONE_DISPLAY = "+1 (704) 241-0592";
const PHONE_HREF = "tel:+17042410592";

/* ---------- HEADER ---------- */
function Header() {
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
        >
          <img
            src={logoTopPro}
            alt="Top Pro Flooring LLC"
            width={240}
            height={180}
            className="h-20 w-auto object-contain md:h-24"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[13px] font-semibold text-foreground/70 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-bold tracking-tight text-primary lg:flex"
          >
            <Phone className="h-4 w-4 text-accent-deep" />
            {PHONE_DISPLAY}
          </a>
          <Button
            asChild
            className="group h-10 rounded-lg bg-accent px-4 font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:bg-accent-deep hover:shadow-lg"
          >
            <a href="#quote">
              Free Estimate
              <ArrowRight className="ml-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroImg}
        alt="Flooring professional refinishing hardwood in a home"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/70" />
      <div className="absolute inset-0 bg-grid-faint opacity-40" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-12 md:px-6 md:py-28 lg:py-32">
        {/* Left */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Now Booking Home Projects Across NC &amp; SC · 2026
          </div>

          <h1 className="mt-6 text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[4.25rem]">
            Beautiful Floors{" "}
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              Made for the Way
            </span>{" "}
            You Live
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-primary-foreground/75 md:text-lg">
            Expert hardwood installation, refinishing, buff &amp; coat, LVP, and repairs for
            homeowners across North &amp; South Carolina.
          </p>

          {/* Pill matrix */}
          <div className="mt-7 flex flex-wrap gap-2">
            {["Beautiful finish.", "Less mess.", "Made to last."].map((p, i) => (
              <span
                key={p}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold tracking-tight ${
                  i === 2
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/30"
                    : "border border-white/15 bg-white/5 text-white backdrop-blur"
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {p}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="group h-14 rounded-xl bg-accent px-7 text-[15px] font-extrabold tracking-tight text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:scale-[1.02] hover:bg-accent-deep"
            >
              <a href="#quote">
                GET MY FREE ESTIMATE
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 rounded-xl border-white/20 bg-white/5 px-6 text-[15px] font-bold text-primary-foreground backdrop-blur hover:bg-white/10 hover:text-primary-foreground"
            >
              <a href={PHONE_HREF}>
                <Phone className="mr-1 h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          {/* Compliance pills */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { i: ShieldCheck, t: "Fully Licensed & Insured" },
              { i: Award, t: "Skilled Flooring Professionals" },
              { i: Sparkles, t: "Dustless Sanding System" },
            ].map((b) => (
              <div
                key={b.t}
                className="flex items-center gap-1.5 text-xs font-semibold text-white/75"
              >
                <b.i className="h-3.5 w-3.5 text-accent" />
                {b.t}
              </div>
            ))}
          </div>
        </div>

        {/* Right card stack */}
        <div className="hidden md:col-span-5 md:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
            <div className="relative space-y-3">
              {[
                {
                  icon: ShieldCheck,
                  t: "Licensed & Insured",
                  s: "Peace of mind from day one",
                  k: "01",
                },
                {
                  icon: Clock,
                  t: "Respectful Scheduling",
                  s: "Clear timing that works for your home",
                  k: "02",
                },
                {
                  icon: Sparkles,
                  t: "Dustless Sanding System",
                  s: "Less dust throughout your home",
                  k: "03",
                },
                {
                  icon: MapPin,
                  t: "NC & SC Service",
                  s: "Flooring care for local homeowners",
                  k: "04",
                },
              ].map((b, i) => (
                <div
                  key={b.t}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/20 backdrop-blur-xl transition-all hover:border-accent/40 hover:bg-white/[0.07]"
                  style={{ marginLeft: `${i * 14}px` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-primary shadow-lg shadow-accent/30">
                    <b.icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-accent">
                        {b.k}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="mt-1 font-bold tracking-tight">{b.t}</div>
                    <div className="text-sm text-white/60">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Licensed, Insured & Ready to Help",
      desc: "Professional protection and clear communication from your first estimate through the final walkthrough.",
      k: "01",
    },
    {
      icon: Award,
      title: "Skilled, Respectful Crews",
      desc: "Experienced flooring professionals who treat your rooms, furniture, and routine with care.",
      k: "02",
    },
    {
      icon: MapPin,
      title: "Serving NC & SC",
      desc: "Local flooring services for homeowners throughout North Carolina and South Carolina.",
      k: "03",
    },
  ];
  return (
    <section className="relative border-b border-border bg-surface-1 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Sticky left */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                <span className="h-px w-8 bg-accent-deep" /> Care &amp; Craftsmanship
              </div>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
                Care for Your Home.
                <br />
                <span className="text-accent-deep">Craftsmanship for Your Floors.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                New floors should make your home feel better, not make your life harder. Top Pro
                Flooring brings careful preparation, honest communication, and lasting workmanship
                to every room we enter.
              </p>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative md:col-span-7">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent" />
            <div className="space-y-5">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="group relative ml-0 rounded-2xl border border-border bg-card p-6 pl-16 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-xl"
                >
                  <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg ring-4 ring-background">
                    <it.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-accent-deep">
                      {it.k}
                    </span>
                    <div className="h-px w-6 bg-border" />
                  </div>
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-primary">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  const pains = [
    "Scratches, stains, and worn finish",
    "Outdated floors that age your rooms",
    "Loose, damaged, or uneven boards",
    "Dust and disruption inside your home",
  ];
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-rose-700">
            <AlertTriangle className="h-3.5 w-3.5" /> Common Flooring Frustrations
          </div>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
            Are Worn Floors Taking Away from the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Home You Love?</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-rose-200/70" />
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Your floors shape how every room looks and feels. You should not have to live with
            damage, dullness, or a style that no longer feels like you.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-1 to-background p-8 shadow-sm md:p-10">
            <p className="text-[17px] leading-relaxed text-foreground/85">
              Flooring problems do more than affect the look of a room. They can make your home feel
              tired, create safety concerns, and turn a simple update into a source of stress. You
              deserve clear answers, careful work, and a team that respects your space.{" "}
              <span className="font-semibold text-primary">
                We make it easier to move from worn or outdated floors to a finish you will be proud
                to live with every day.
              </span>
            </p>
            <div className="mt-8 space-y-2.5">
              {pains.map((p) => (
                <div
                  key={p}
                  className="group flex items-center gap-3 rounded-xl border border-rose-100 bg-rose-50/40 px-4 py-3.5 transition-colors hover:bg-rose-50"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-rose-100 text-rose-600">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <span className="text-[15px] font-semibold tracking-tight text-foreground/85">
                    {p}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-rose-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION (PARALLAX) ---------- */
function Solution() {
  return (
    <section
      className="relative overflow-hidden bg-parallax py-28 text-primary-foreground md:py-36"
      style={{ backgroundImage: `url(${parallaxFloor})` }}
    >
      {/* Burgundy overlay 78% with gradient depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.13 14 / 0.92) 0%, oklch(0.27 0.12 16 / 0.82) 50%, oklch(0.22 0.13 14 / 0.90) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-faint opacity-20" />
      <div className="absolute -left-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" />A Simpler Flooring Experience
        </div>
        <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-6xl">
          Trusted Flooring Care for{" "}
          <span className="bg-gradient-to-r from-accent to-amber-200 bg-clip-text text-transparent">
            Every Room You Love
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
          From your first conversation to the final walkthrough, we keep the experience clear,
          comfortable, and focused on your home. Our team helps you choose the right service, works
          with care, and leaves you with a beautiful finish designed for everyday life.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            asChild
            className="group h-14 rounded-xl bg-accent px-8 text-[15px] font-extrabold tracking-tight text-accent-foreground shadow-2xl shadow-accent/40 transition-all duration-300 hover:scale-[1.02] hover:bg-accent-deep"
          >
            <a href="#quote">
              GET MY FREE ESTIMATE
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    {
      img: serviceHardwood,
      title: "Hardwood Installation & Refinishing",
      desc: "Bring warmth and lasting character to your home with new hardwood or restore the natural beauty already under your feet.",
      benefit: "Our dust-containment system helps keep your home cleaner.",
    },
    {
      img: serviceBuff,
      title: "Buff & Coat Services",
      desc: "Refresh dull, lightly worn wood floors with a new protective coat, often without the time and cost of full refinishing.",
      benefit: "A smart refresh when your floors need renewed shine and protection.",
    },
    {
      img: serviceLvp,
      title: "LVP & Engineered Hardwood",
      desc: "Get the look you love with durable, easy-care flooring professionally installed for busy kitchens, living spaces, and more.",
      benefit: "Beautiful, practical options for active homes and everyday life.",
    },
    {
      img: serviceRepair,
      title: "Hardwood Floor Repair",
      desc: "Repair damaged boards, water spots, gaps, and localized wear while preserving the character of your existing floor.",
      benefit: "Careful color and board matching for a natural-looking result.",
    },
  ];
  return (
    <section id="services" className="bg-surface-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
              <span className="h-px w-8 bg-accent-deep" /> What We Do
            </div>
            <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
              Flooring Services That Make Your Home Feel New Again
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Thoughtful recommendations, skilled workmanship, and finishes chosen for the way your
            family lives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="absolute bottom-5 left-6 right-6 text-2xl font-extrabold leading-tight tracking-tight text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-start gap-2.5 border-t border-border pt-5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {s.benefit}
                  </p>
                </div>
                <a
                  href="#quote"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-bold tracking-tight text-primary"
                >
                  Get an estimate for this service
                  <ArrowRight className="h-4 w-4 text-accent-deep transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm sm:flex-row sm:gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
            <Phone className="h-5 w-5" />
          </div>
          <span className="text-center text-[15px] text-foreground sm:text-left">
            Ready to talk about your floors?
          </span>
          <a
            href={PHONE_HREF}
            className="text-base font-extrabold tracking-tight text-primary underline-offset-4 hover:underline"
          >
            Call us at {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US (balanced symmetric grid) ---------- */
function WhyUs() {
  const features = [
    {
      icon: Wrench,
      t: "Complete Flooring Care",
      d: "Installation, refinishing, buff & coat, and repairs handled by one experienced team from start to finish.",
    },
    {
      icon: Users,
      t: "A Team You Can Welcome In",
      d: "Licensed, insured, and respectful professionals who understand that your home is personal.",
    },
    {
      icon: Clock,
      t: "Scheduling That Respects You",
      d: "Clear arrival windows, dependable communication, and a plan built around your household.",
    },
    {
      icon: Sparkles,
      t: "Less Dust, Less Disruption",
      d: "Modern dust containment helps protect nearby rooms, countertops, furniture, and HVAC.",
    },
    {
      icon: Handshake,
      t: "Personalized Recommendations",
      d: "Honest guidance based on your rooms, your style, your routine, and your budget.",
    },
    {
      icon: DollarSign,
      t: "Clear, Upfront Pricing",
      d: "A detailed estimate before work begins, with no surprise charges or hidden fees.",
    },
  ];
  return (
    <section id="why" className="bg-surface-1 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            <span className="h-px w-8 bg-accent-deep" /> Why Choose Us
            <span className="h-px w-8 bg-accent-deep" />
          </div>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
            Why Homeowners Choose Top Pro Flooring
          </h2>
        </div>

        {/* Symmetric 3-column grid — perfectly balanced on desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((it, i) => (
            <div
              key={it.t}
              className={`group flex h-full flex-col rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 ${
                i === 0
                  ? "border-accent/30 bg-primary text-primary-foreground hover:border-accent/60 hover:shadow-primary/20"
                  : "border-border bg-card hover:border-accent/40 hover:shadow-primary/10"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  i === 0
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/40"
                    : "bg-accent/15 text-accent-deep ring-1 ring-accent/20 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-md"
                }`}
              >
                <it.icon className="h-6 w-6" />
              </div>
              <h3
                className={`mt-6 text-xl font-extrabold tracking-tight ${
                  i === 0 ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {it.t}
              </h3>
              <p
                className={`mt-2.5 flex-1 text-[15px] leading-relaxed ${
                  i === 0 ? "text-primary-foreground/75" : "text-muted-foreground"
                }`}
              >
                {it.d}
              </p>
              {i === 0 && (
                <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-white/10 pt-6">
                  {[
                    { n: "100%", l: "Insured" },
                    { n: "NC+SC", l: "Coverage" },
                    { n: "Less", l: "Dust" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center backdrop-blur"
                    >
                      <div className="text-base font-extrabold tracking-tight text-accent">
                        {s.n}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/65">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    {
      icon: FileText,
      t: "Tell Us About Your Floors",
      d: "Share your rooms, goals, and the service you are considering.",
    },
    {
      icon: DollarSign,
      t: "Receive a Clear Estimate",
      d: "Get straightforward recommendations and pricing for your home.",
    },
    {
      icon: Calendar,
      t: "Choose a Convenient Date",
      d: "We plan the work around your schedule and explain how to prepare.",
    },
    {
      icon: CheckCircle2,
      t: "Enjoy the Transformation",
      d: "We complete the work with care and finish with a final walkthrough.",
    },
  ];
  return (
    <section id="process" className="bg-surface-1 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            <span className="h-px w-8 bg-accent-deep" /> How We Work
            <span className="h-px w-8 bg-accent-deep" />
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
            Your New Floors in 4 Simple Steps
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.t} className="relative">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background ring-2 ring-accent">
                  <span className="text-base font-extrabold tracking-tight text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                    <s.icon className="h-2.5 w-2.5" />
                  </span>
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-base font-bold tracking-tight text-primary">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const t = [
    {
      quote:
        "Top Pro Flooring brought our hardwood floors back to life. The team explained every step, arrived when promised, and kept the dust far more controlled than we expected. Our home feels completely refreshed.",
      name: "Marcus V.",
      role: "Homeowner",
      loc: "Charlotte, NC",
      initials: "MV",
    },
    {
      quote:
        "The estimate was clear, the crew treated our home with care, and the finished floors are beautiful. We always knew what was happening and the project stayed right on schedule.",
      name: "Sarah D.",
      role: "Homeowner",
      loc: "South Carolina",
      initials: "SD",
    },
  ];
  return (
    <section id="testimonials" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            <span className="h-px w-8 bg-accent-deep" /> What Homeowners Say
            <span className="h-px w-8 bg-accent-deep" />
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
            Floors They Love. Experiences They Remember.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.map((x) => (
            <figure
              key={x.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-accent/15" />
              <blockquote className="text-[17px] font-medium leading-relaxed tracking-[-0.005em] text-foreground/90 md:text-lg">
                &ldquo;{x.quote}&rdquo;
              </blockquote>
              <div className="my-6 h-px w-full bg-border" />
              <figcaption className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-sm font-extrabold text-primary-foreground ring-2 ring-accent/30">
                  {x.initials}
                </div>
                <div>
                  <div className="font-bold tracking-tight text-primary">{x.name}</div>
                  <div className="text-xs font-semibold text-muted-foreground">
                    {x.role} · <span className="text-accent-deep">{x.loc}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Do you carry General Liability Insurance?",
      a: "Yes. We are fully licensed and insured, so you can feel confident about the team working in your home. Proof of coverage is available on request.",
    },
    {
      q: "What geographic areas do you cover?",
      a: "We provide residential flooring services for homeowners across North Carolina and South Carolina. Contact us with your ZIP code to confirm availability in your area.",
    },
    {
      q: "How does your Dustless Refinishing System work?",
      a: "We use modern dust-containment equipment during sanding and refinishing to capture dust at the source. This greatly reduces airborne dust and helps protect nearby rooms, countertops, furniture, and HVAC systems.",
    },
    {
      q: "How should I prepare my home before the work begins?",
      a: "Preparation depends on the service and rooms involved. During your estimate, we will explain furniture, access, pets, drying time, and anything else needed so you know exactly what to expect.",
    },
    {
      q: "What flooring systems do you support?",
      a: "We install and care for solid hardwood, engineered hardwood, and LVP (Luxury Vinyl Plank). We also provide refinishing, buff & coat services, and professional hardwood repairs.",
    },
  ];
  return (
    <section id="faq" className="bg-surface-2 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
              <span className="h-px w-8 bg-accent-deep" /> FAQ
            </div>
            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-primary md:text-5xl">
              Frequently
              <br /> Asked Questions
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Helpful answers so you can plan your flooring project with confidence.
            </p>
            <a
              href="#quote"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-bold tracking-tight text-accent-deep"
            >
              Still have questions? Talk to us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="space-y-3" defaultValue="item-0">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-sm transition-all data-[state=open]:border-accent/40 data-[state=open]:bg-card data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold tracking-tight text-primary hover:no-underline data-[state=open]:text-accent-deep">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- QUOTE FORM ---------- */
function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Estimate request sent. We'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-25" />
      <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Start Your Home Transformation
          </div>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Beautiful Floors.{" "}
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              Made Simple.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">
            Tell us what you want to change, and our licensed, insured team will help you find the
            right path for your home and budget.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all hover:border-accent/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Call to discuss your floors
                </div>
                <div className="font-bold tracking-tight">{PHONE_DISPLAY}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
            <a
              href="mailto:info@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all hover:border-accent/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Email
                </div>
                <div className="font-bold tracking-tight">info@gmail.com</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
            <a
              href="#quote"
              className="group flex items-center gap-4 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/20 to-accent/5 p-4 backdrop-blur-xl transition-all hover:from-accent/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-bold tracking-tight text-white">
                  Not sure which service you need?
                </div>
                <div className="text-sm text-white/70">
                  We&apos;ll help you choose the right option.
                </div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-3xl border border-border bg-background p-7 text-foreground shadow-2xl shadow-black/20 md:col-span-7 md:p-10"
        >
          <div className="absolute -top-3 left-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-deep shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Free Estimate Request
          </div>

          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-primary">
            Request Your Free Estimate
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your project — we reply within one business day.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label
                htmlFor="zip"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Project ZIP Code *
              </Label>
              <Input
                id="zip"
                name="zip"
                inputMode="numeric"
                required
                className="h-11 rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Your Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="h-11 rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Phone *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="h-11 rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="type"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Type of Project *
              </Label>
              <Select name="type" required>
                <SelectTrigger id="type" className="h-11 rounded-lg border-border bg-surface-1">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hardwood">Hardwood Installation</SelectItem>
                  <SelectItem value="refinishing">Refinishing / Buff &amp; Coat</SelectItem>
                  <SelectItem value="lvp">LVP / Engineered Hardwood</SelectItem>
                  <SelectItem value="repair">Floor Repair</SelectItem>
                  <SelectItem value="unsure">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="start"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Preferred Start Date
              </Label>
              <Input
                id="start"
                name="start"
                type="date"
                className="h-11 rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Tell Us About Your Floors
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border-border bg-surface-1 focus-visible:ring-accent"
                placeholder="Rooms, approximate square footage, current flooring, and what you would like to change..."
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="group mt-7 h-14 w-full rounded-xl bg-gradient-to-r from-accent-deep to-accent text-[15px] font-extrabold tracking-tight text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:scale-[1.01] hover:shadow-2xl"
          >
            {submitting ? "SENDING..." : "GET MY FREE ESTIMATE"}
            <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-deep" />
            Fully Licensed &amp; Insured · Serving Homeowners Across NC &amp; SC
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4 md:px-6">
        <div>
          <div className="inline-flex items-center justify-center">
            <img
              src={logoTopPro}
              alt="Top Pro Flooring LLC"
              width={320}
              height={240}
              className="h-28 w-auto object-contain md:h-32"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-foreground/70">
            Beautiful, lasting floors and a respectful experience for homeowners across North &amp;
            South Carolina.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
            <li>
              <a href="#services" className="transition-colors duration-300 hover:text-accent-deep">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="transition-colors duration-300 hover:text-accent-deep">
                Why Us
              </a>
            </li>
            <li>
              <a href="#process" className="transition-colors duration-300 hover:text-accent-deep">
                Process
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors duration-300 hover:text-accent-deep">
                FAQ
              </a>
            </li>
            <li>
              <a href="#quote" className="transition-colors duration-300 hover:text-accent-deep">
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent-deep" />
              <a
                href={PHONE_HREF}
                className="transition-colors duration-300 hover:text-accent-deep"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent-deep" />
              <a
                href="mailto:info@gmail.com"
                className="transition-colors duration-300 hover:text-accent-deep"
              >
                info@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent-deep" />
              <span>Serving North &amp; South Carolina</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Credentials
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-deep" /> Fully Licensed &amp; Insured
            </li>
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent-deep" /> Skilled Flooring Professionals
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent-deep" /> Dustless Sanding System
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-foreground/55 sm:flex-row">
          <div>© 2026 Top Pro Flooring LLC. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="transition-colors duration-300 hover:text-accent-deep">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-accent-deep">
              Terms &amp; Conditions
            </a>
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
