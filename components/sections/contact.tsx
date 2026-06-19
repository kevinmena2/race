"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendlyEmbed } from "@/components/calendly-embed"

const CALENDLY_URL = "https://calendly.com/racewonder/30min"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Photo accent */}
        <div className="relative mb-12 overflow-hidden rounded-2xl aspect-[21/6] hidden md:block">
          <Image
            src="/images/team-meeting.jpg"
            alt="Professional consulting meeting with documents and planning"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 0px, 100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, hsl(0,0%,100%,0.92) 0%, hsl(0,0%,100%,0.55) 50%, transparent 100%)" }}
            aria-hidden="true"
          />
          {/* CTA text overlaid on photo */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <span className="pill-label w-fit">Contact</span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary text-balance leading-[1.08] max-w-lg">
              Ready to protect
              <br />
              <span className="text-gradient-brand">your practice?</span>
            </h2>
          </div>
        </div>

        {/* Bold CTA header — mobile fallback (no photo) */}
        <div className="max-w-2xl md:hidden">
          <span className="pill-label">Contact</span>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary text-balance leading-[1.08]">
            Ready to protect
            <br />
            <span className="text-gradient-brand">your practice?</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            Book a free 30-minute discovery call. No pressure, no obligation. Just a straight conversation about
            your risks and what you actually need.
          </p>
          {/* Urgency note */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/8 px-3.5 py-1.5 text-sm font-medium text-amber-600">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Currently accepting new clients. Limited availability in Q3 2026.
          </div>
        </div>

        {/* Description + urgency — desktop only (heading is on photo) */}
        <div className="hidden md:block mb-8 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            Book a free 30-minute discovery call. No pressure, no obligation. Just a straight conversation about
            your risks and what you actually need.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/8 px-3.5 py-1.5 text-sm font-medium text-amber-600">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Currently accepting new clients. Limited availability in Q3 2026.
          </div>
        </div>

        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 ring-1 ring-teal/25">
                  <ArrowRight className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Thanks for reaching out!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Connect this form to an email service (Resend, Formspree, or a server action) to receive real messages.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@practice.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Practice / Company</Label>
                  <Input id="company" name="company" placeholder="Bright Smile Dental" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(214) 555-0123" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">What can I help with?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me a bit about your practice and what you're looking for…"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group bg-teal font-semibold text-teal-foreground transition-all hover:bg-teal-light hover:scale-[1.02] glow-teal-lg"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact details + booking embed */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-secondary p-6 md:p-7">
              <h3 className="text-base font-semibold text-primary">Get in touch directly</h3>
              <ul className="mt-4 space-y-3.5 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-teal shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">Dallas–Fort Worth, TX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-teal shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:hello@racewonder.online"
                    className="text-muted-foreground hover:text-teal transition-colors"
                  >
                    hello@racewonder.online
                  </a>
                </li>
              </ul>
            </div>

            <CalendlyEmbed url={CALENDLY_URL} className="flex-1 shadow-card" />
          </div>
        </div>
      </div>
    </section>
  )
}
