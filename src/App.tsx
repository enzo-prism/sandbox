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
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ElevenLabsConvaiWidget } from "@/components/elevenlabs-convai-widget"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#contact" },
]

const quickFacts = [
  "New patients welcome",
  "Palo Alto",
  "Cosmetic + restorative",
]

const services: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Cleanings",
    description: "Routine exams and prevention.",
    icon: ShieldCheck,
  },
  {
    title: "Cosmetic",
    description: "Whitening, bonding, polish.",
    icon: Sparkles,
  },
  {
    title: "Restorative",
    description: "Repairs, crowns, planning.",
    icon: Smile,
  },
  {
    title: "Urgent care",
    description: "Fast help when needed.",
    icon: Clock3,
  },
]

const approach = [
  {
    title: "Calm",
    description: "Low-pressure visits.",
  },
  {
    title: "Clear",
    description: "Straightforward plans.",
  },
  {
    title: "Modern",
    description: "Digital tools, human pace.",
  },
]

const faqs = [
  {
    question: "Are you accepting new patients?",
    answer: "Yes. The office is set up for new patients in Palo Alto and nearby neighborhoods.",
  },
  {
    question: "Do you offer cosmetic care?",
    answer: "Yes. Whitening, bonding, and smile-focused treatment planning are part of the practice mix.",
  },
  {
    question: "How should I book?",
    answer: "Call or email for the quickest next step. The AI assistant can also help with simple questions after hours.",
  },
]

const officeHours = [
  { day: "Mon - Wed", hours: "8:00 AM - 5:00 PM" },
  { day: "Thu", hours: "7:30 AM - 3:00 PM" },
  { day: "Fri", hours: "By appointment" },
]

function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-[1.1rem] bg-primary text-sm font-semibold tracking-[0.18em] text-primary-foreground shadow-sm">
              DW
            </div>
            <div className="space-y-0.5">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase sm:text-sm">
                Dr. Wong Dental
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">Palo Alto</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
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

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild className="size-10 rounded-full border-border/80 bg-background/85 md:hidden">
              <a href="tel:+16505550148" aria-label="Call Dr. Wong Dental">
                <PhoneCall className="size-4" />
              </a>
            </Button>
            <Button size="sm" asChild className="h-10 rounded-full px-4 text-sm">
              <a href="#contact">Book</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-10">
            <div className="space-y-6">
              <Badge variant="secondary" className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Palo Alto dentist
              </Badge>

              <div className="space-y-4">
                <h1 className="max-w-xl text-[2.8rem] leading-[0.9] sm:text-5xl md:text-6xl">
                  Quiet, modern dental care.
                </h1>
                <p className="max-w-lg text-[15px] leading-7 sm:text-base">
                  Preventive, cosmetic, restorative, and urgent care with a calm neighborhood feel.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="h-12 rounded-full px-6 text-sm font-semibold">
                  <a href="#contact">
                    Request a visit
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 rounded-full px-6 text-sm">
                  <a href="tel:+16505550148">
                    <PhoneCall className="size-4" />
                    (650) 555-0148
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickFacts.map((fact) => (
                  <div
                    key={fact}
                    className="rounded-full border border-border/80 bg-card px-3 py-2 text-sm text-foreground shadow-[0_8px_20px_-18px_rgba(25,33,38,0.35)]"
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-[2rem] border-border/80 bg-card/88 py-0 shadow-[0_24px_60px_-42px_rgba(25,33,38,0.3)]">
              <CardHeader className="space-y-3 px-5 pt-5 pb-4 sm:px-6 sm:pt-6">
                <Badge variant="outline" className="w-fit rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                  Start here
                </Badge>
                <CardTitle className="text-[2rem] leading-none sm:text-4xl">Simple. Calm. Local.</CardTitle>
                <CardDescription className="text-base leading-7">
                  Designed for busy Palo Alto schedules and clear next steps.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-muted/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      <MapPin className="size-4" />
                      Palo Alto
                    </div>
                    <p className="mt-3 text-sm leading-6">Near Stanford and the mid-peninsula commute.</p>
                  </div>

                  <div className="rounded-[1.4rem] border border-border/70 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      <CalendarDays className="size-4" />
                      Visit style
                    </div>
                    <p className="mt-3 text-sm leading-6">Clear explanations and practical treatment pacing.</p>
                  </div>
                </div>

                <div className="grid gap-2">
                  {["Digital exams", "Clear treatment plans", "Emergency support"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 className="size-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6 md:py-16">
          <div className="space-y-5">
            <div className="space-y-3">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                Services
              </Badge>
              <h2 className="text-[2.2rem] sm:text-4xl">What we do</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <Card key={service.title} className="rounded-[1.6rem] border-border/80 bg-card/88 py-0">
                    <CardContent className="space-y-3 p-4 sm:p-5">
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-xl">{service.title}</h3>
                        <p className="text-sm leading-6">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
          <div className="grid gap-3 rounded-[2rem] border border-border/80 bg-card/72 p-4 sm:grid-cols-3 sm:p-5">
            {approach.map((item, index) => (
              <div key={item.title} className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">0{index + 1}</p>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-sm leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                FAQ
              </Badge>
              <h2 className="text-[2.2rem] sm:text-4xl">A few quick answers</h2>
              <p className="max-w-md text-sm leading-6">Enough to orient new patients without overwhelming the page.</p>
            </div>

            <Card className="rounded-[2rem] border-border/80 bg-card/88 py-0">
              <CardContent className="p-5 sm:p-6">
                <Accordion type="single" collapsible>
                  {faqs.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger className="py-5 text-left text-base hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 md:px-6">
          <div className="grid gap-5 rounded-[2.2rem] border border-border/80 bg-card/86 p-5 shadow-[0_24px_60px_-42px_rgba(25,33,38,0.24)] sm:p-6 lg:grid-cols-[1fr_0.88fr] lg:gap-8 lg:p-8">
            <div className="space-y-5">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                Visit
              </Badge>
              <div className="space-y-3">
                <h2 className="max-w-lg text-[2.2rem] sm:text-4xl">Book a calm first visit.</h2>
                <p className="max-w-md text-sm leading-6">
                  Call, email, or use the assistant in the corner for quick questions after hours.
                </p>
              </div>

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

            <Card className="rounded-[1.8rem] border-border/80 bg-background/75 py-0">
              <CardHeader className="space-y-2 px-5 pt-5 pb-4">
                <CardTitle className="text-3xl">Office</CardTitle>
                <CardDescription className="text-sm leading-6">
                  Palo Alto, California
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 px-5 pb-5">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 text-primary" />
                    <div className="space-y-1">
                      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Location</p>
                      <p className="text-sm leading-6">Downtown Palo Alto</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 size-5 text-primary" />
                    <div className="w-full space-y-1">
                      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Hours</p>
                      <div className="space-y-3 pt-2">
                        {officeHours.map((row, index) => (
                          <div key={row.day}>
                            <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
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
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-32 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6 md:pb-8">
        <p>Dr. Wong Dental</p>
        <p>Palo Alto, California</p>
      </footer>

      <ElevenLabsConvaiWidget />
    </div>
  )
}

export default App
