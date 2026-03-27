import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#contact" },
]

const heroHighlights: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Prevention-first care",
    description: "Cleanings, exams, and long-term plans that keep small issues small.",
    icon: ShieldCheck,
  },
  {
    title: "Cosmetic and restorative planning",
    description: "Whitening, bonding, repairs, and smile design explained in plain English.",
    icon: Sparkles,
  },
  {
    title: "Urgent visits when life happens",
    description: "Tooth pain, chips, and surprises handled quickly when the schedule allows.",
    icon: Clock3,
  },
]

const services: Array<{
  title: string
  description: string
  eyebrow: string
  icon: LucideIcon
}> = [
  {
    title: "Preventive dentistry",
    description: "Routine cleanings, digital exams, gum health check-ins, and thoughtful maintenance plans.",
    eyebrow: "Everyday care",
    icon: ShieldCheck,
  },
  {
    title: "Cosmetic refreshes",
    description: "Whitening, bonding, contouring, and smile upgrades that stay natural and understated.",
    eyebrow: "Smile design",
    icon: Sparkles,
  },
  {
    title: "Restorative treatment",
    description: "Tooth-colored repairs, crowns, implant planning, and full-picture treatment sequencing.",
    eyebrow: "Repair and rebuild",
    icon: Smile,
  },
  {
    title: "Emergency appointments",
    description: "Same-week triage for pain, fractures, swelling, and unexpected dental setbacks whenever possible.",
    eyebrow: "Fast support",
    icon: CalendarDays,
  },
]

const practicePillars = [
  {
    title: "A calm appointment rhythm",
    description: "Every visit starts with conversation, not pressure. Questions are part of the appointment, not a delay.",
  },
  {
    title: "Clarity before commitment",
    description: "Dr. Wong walks through options, timing, and priorities so you can make decisions without guesswork.",
  },
  {
    title: "Modern tools, human pacing",
    description: "Digital imaging and streamlined workflows help reduce repeat visits while keeping treatment precise.",
  },
]

const faqs = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes. The practice is positioned as a welcoming office for Palo Alto adults, families, and nearby professionals who want a long-term dental home.",
  },
  {
    question: "What kinds of visits does the practice handle?",
    answer:
      "The site is set up around cleanings, preventive exams, cosmetic improvements, restorative planning, and urgent visits when the schedule allows.",
  },
  {
    question: "Is this practice kid-friendly?",
    answer:
      "The messaging supports family care, so the office can comfortably present itself as a good fit for parents who want one trusted local practice.",
  },
  {
    question: "How should patients book?",
    answer:
      "The primary calls to action push people toward phone or email, which keeps the single-page site lightweight while still feeling actionable.",
  },
]

const officeHours = [
  { day: "Monday - Wednesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "7:30 AM - 3:00 PM" },
  { day: "Friday", hours: "By appointment" },
]

const serviceAreas = ["Palo Alto", "Stanford", "Menlo Park", "Los Altos"]

function App() {
  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-[1.25rem] bg-primary text-sm font-semibold tracking-[0.22em] text-primary-foreground shadow-sm">
              DW
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-primary uppercase">Dr. Wong Dental</p>
              <p className="text-sm text-muted-foreground">Palo Alto, California</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
              <a href="tel:+16505550148">(650) 555-0148</a>
            </Button>
            <Button size="lg" asChild className="h-11 rounded-full px-5 text-sm">
              <a href="#contact">
                Book a consultation
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-12 size-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-0 top-0 size-80 rounded-full bg-secondary/70 blur-3xl" />
            <div className="absolute bottom-8 left-1/3 h-40 w-40 rounded-full bg-accent/70 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-18 pt-14 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                Welcoming new patients in Palo Alto
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-2xl text-5xl leading-[0.96] md:text-6xl lg:text-7xl">
                  Thoughtful dentistry with a calm, neighborhood feel.
                </h1>
                <p className="max-w-xl text-base leading-8 md:text-lg">
                  Dr. Wong's practice is designed for Palo Alto families, professionals, and anyone who wants modern dental care without the rushed atmosphere.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="h-12 rounded-full px-6 text-sm font-semibold shadow-sm">
                  <a href="#contact">
                    Request an appointment
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 rounded-full px-6 text-sm">
                  <a href="tel:+16505550148">
                    <PhoneCall className="size-4" />
                    Call the office
                  </a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = item.icon

                  return (
                    <Card
                      key={item.title}
                      className="rounded-[1.65rem] border-white/70 bg-white/70 shadow-[0_18px_45px_-28px_rgba(33,60,57,0.45)] backdrop-blur"
                    >
                      <CardContent className="space-y-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-xl leading-tight">{item.title}</h2>
                          <p>{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[34rem]">
              <div className="absolute inset-x-10 top-10 h-72 rounded-[2.5rem] bg-primary/15 blur-3xl" />

              <Card className="relative overflow-hidden rounded-[2.4rem] border-white/80 bg-white/78 py-0 shadow-[0_35px_90px_-35px_rgba(37,76,73,0.45)] backdrop-blur-xl">
                <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-foreground/80">
                  Comfort-first care
                </div>
                <CardHeader className="space-y-3 px-6 pt-7 pb-5">
                  <Badge variant="outline" className="w-fit rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                    What visits feel like
                  </Badge>
                  <CardTitle className="max-w-sm text-4xl leading-none">Clear next steps before you leave the chair.</CardTitle>
                  <CardDescription className="max-w-md text-base leading-7">
                    The experience is built around explanation, gentle pacing, and treatment plans that make sense for busy Bay Area schedules.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5 px-6 pb-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-muted/80 p-5">
                      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Usually includes</p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                          Digital imaging and exam review
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                          A preventive or cosmetic game plan
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                          Practical guidance on timing and priorities
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                        <MapPin className="size-4" />
                        Downtown Palo Alto
                      </div>
                      <p className="mt-4 text-base leading-7 text-muted-foreground">
                        Near Stanford and the Caltrain corridor, with appointment times shaped for school drop-offs, commutes, and work blocks.
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock3 className="size-4 text-primary" />
                        Early and midday visit windows available
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Digital exams", "Low-pressure consults", "Personalized follow-up"].map((chip) => (
                      <div
                        key={chip}
                        className="rounded-full border border-border/70 bg-background/80 px-4 py-3 text-center text-sm font-medium text-foreground"
                      >
                        {chip}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-6 left-4 hidden w-64 rounded-[1.8rem] border-primary/10 bg-primary py-0 text-primary-foreground shadow-[0_24px_60px_-30px_rgba(35,80,76,0.75)] md:block">
                <CardContent className="space-y-3 p-5">
                  <p className="text-xs font-semibold tracking-[0.24em] text-primary-foreground/70 uppercase">New patient start</p>
                  <p className="font-heading text-2xl leading-tight text-primary-foreground">
                    A calm first visit with time to talk through what matters.
                  </p>
                  <p className="text-sm leading-6 text-primary-foreground/80">
                    Call or email to find the best time for a cleaning, consult, or urgent concern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
          <div className="grid gap-4 rounded-[2rem] border border-border/70 bg-white/60 p-5 shadow-[0_18px_45px_-30px_rgba(33,60,57,0.35)] backdrop-blur md:grid-cols-[1.15fr_auto_1fr_auto_1fr] md:items-center">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Practice focus</p>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                A single-page experience that positions Dr. Wong as the local choice for preventive, cosmetic, restorative, and urgent dental care.
              </p>
            </div>
            <Separator className="hidden md:block" orientation="vertical" />
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Best fit patients</p>
              <p className="text-sm leading-7 text-muted-foreground">Families, professionals, and neighbors who want clarity and consistency.</p>
            </div>
            <Separator className="hidden md:block" orientation="vertical" />
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Signature tone</p>
              <p className="text-sm leading-7 text-muted-foreground">Warm, precise, and modern without looking corporate or over-styled.</p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                Services
              </Badge>
              <h2 className="text-4xl md:text-5xl">Care that keeps everyday dentistry in one trusted place.</h2>
            </div>
            <p className="max-w-xl text-base leading-8">
              The service mix is broad enough to feel like a true local practice, while the language stays focused on comfort, clarity, and thoughtful decision-making.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Card
                  key={service.title}
                  className="rounded-[1.8rem] border-border/70 bg-white/72 py-0 shadow-[0_20px_45px_-32px_rgba(33,60,57,0.45)] backdrop-blur"
                >
                  <CardHeader className="space-y-4 px-5 pt-5 pb-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">{service.eyebrow}</p>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 pb-6">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <div className="grid gap-10 rounded-[2.4rem] border border-border/70 bg-white/66 p-6 shadow-[0_24px_60px_-36px_rgba(33,60,57,0.38)] backdrop-blur lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
            <div className="space-y-6">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                The practice approach
              </Badge>
              <h2 className="max-w-xl text-4xl md:text-5xl">Modern dentistry for people who want precision without pressure.</h2>
              <p className="max-w-2xl text-base leading-8">
                This concept positions Dr. Wong as the kind of dentist patients recommend because appointments feel calm, options are explained clearly, and treatment is paced around real priorities instead of sales energy.
              </p>

              <div className="rounded-[1.9rem] border border-border/70 bg-background/70 p-5">
                {practicePillars.map((pillar, index) => (
                  <div key={pillar.title} className="space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        0{index + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl">{pillar.title}</h3>
                        <p>{pillar.description}</p>
                      </div>
                    </div>
                    {index < practicePillars.length - 1 ? <Separator className="my-4" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-[1.9rem] border-primary/10 bg-primary py-0 text-primary-foreground md:col-span-2">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase">
                    <Star className="size-4" />
                    Patient experience
                  </div>
                  <p className="font-heading text-3xl leading-tight text-primary-foreground md:text-4xl">
                    "He explains what matters, never rushes the room, and the office feels unexpectedly calm."
                  </p>
                  <p className="text-sm leading-7 text-primary-foreground/80">Example testimonial copy for the concept site.</p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.8rem] bg-background/75">
                <CardContent className="space-y-4 p-5">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="text-2xl">Built for the peninsula routine</h3>
                  <p>Messaging is tuned for school runs, Stanford neighbors, and professionals who want dependable dental care close to home.</p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.8rem] bg-background/75">
                <CardContent className="space-y-4 p-5">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-accent text-foreground">
                    <PhoneCall className="size-5" />
                  </div>
                  <h3 className="text-2xl">Direct and actionable</h3>
                  <p>The site keeps conversion simple with clear phone and email actions, which works well for a premium neighborhood practice.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Card className="rounded-[2.1rem] border-border/70 bg-white/70 py-0 shadow-[0_24px_60px_-38px_rgba(33,60,57,0.45)] backdrop-blur">
              <CardHeader className="space-y-4 px-6 pt-6 pb-4">
                <Badge variant="outline" className="w-fit rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                  Why this page works
                </Badge>
                <CardTitle className="text-4xl md:text-5xl">A strong first impression without adding booking complexity.</CardTitle>
                <CardDescription className="text-base leading-8">
                  The single page gives Dr. Wong a polished digital front door while keeping the practice information easy to scan and easy to trust.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-6">
                <div className="grid gap-3">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center justify-between rounded-full border border-border/70 bg-background/75 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-foreground">{area}</span>
                      <MapPin className="size-4 text-primary" />
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.6rem] border border-border/70 bg-muted/55 p-5">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Brand note</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The palette, typography, and layout are intentionally warm and grounded so the practice feels premium, approachable, and locally rooted instead of sterile.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="max-w-2xl space-y-4">
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                  FAQ
                </Badge>
                <h2 className="text-4xl md:text-5xl">Questions the site can answer upfront.</h2>
                <p className="text-base leading-8">
                  These FAQs keep expectations clear for new visitors while reinforcing the positioning of a calm, modern Palo Alto dental practice.
                </p>
              </div>

              <Card className="rounded-[2rem] border-border/70 bg-white/72 py-0 shadow-[0_24px_60px_-38px_rgba(33,60,57,0.38)] backdrop-blur">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    {faqs.map((item) => (
                      <AccordionItem key={item.question} value={item.question}>
                        <AccordionTrigger className="py-5 text-base hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-base leading-8 text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.93),rgba(231,244,241,0.94))] p-6 shadow-[0_28px_70px_-40px_rgba(33,60,57,0.5)] lg:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 top-0 size-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -left-20 bottom-0 size-56 rounded-full bg-accent/80 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                  Contact and visit
                </Badge>
                <h2 className="max-w-xl text-4xl md:text-5xl">Ready for a cleaner, calmer dental experience in Palo Alto?</h2>
                <p className="max-w-2xl text-base leading-8">
                  Use this section as the conversion close: one clear phone number, one email, a simple service area reference, and office hours that make the next step feel obvious.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="h-12 rounded-full px-6 text-sm font-semibold">
                    <a href="tel:+16505550148">
                      <PhoneCall className="size-4" />
                      (650) 555-0148
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild className="h-12 rounded-full px-6 text-sm font-semibold">
                    <a href="mailto:hello@drwongdental.com?subject=New%20patient%20consultation">
                      hello@drwongdental.com
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="rounded-[2rem] border-white/80 bg-white/82 py-0 shadow-[0_24px_60px_-38px_rgba(33,60,57,0.45)] backdrop-blur">
                <CardHeader className="space-y-3 px-6 pt-6 pb-4">
                  <CardTitle className="text-3xl">Office snapshot</CardTitle>
                  <CardDescription className="text-base leading-7">
                    Downtown Palo Alto office serving nearby neighborhoods, Stanford, and the mid-peninsula.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 size-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Location</p>
                        <p className="mt-1">Palo Alto, California</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-1 size-5 text-primary" />
                      <div className="w-full">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hours</p>
                        <div className="mt-3 space-y-3">
                          {officeHours.map((row, index) => (
                            <div key={row.day}>
                              <div className="flex items-center justify-between gap-4 text-sm">
                                <span className="font-medium text-foreground">{row.day}</span>
                                <span className="text-muted-foreground">{row.hours}</span>
                              </div>
                              {index < officeHours.length - 1 ? <Separator className="mt-3" /> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>Dr. Wong Dental concept site for Palo Alto.</p>
        <p>Built as a single-page shadcn/ui experience.</p>
      </footer>
    </div>
  )
}

export default App
