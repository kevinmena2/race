"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendlyEmbed } from "@/components/calendly-embed"

const CALENDLY_URL = "https://calendly.com/racewonder/30min"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // NOTE: This form is front-end only. Wire `handleSubmit` to an email
  // service (e.g. Resend, Formspree, or a server action) to actually
  // deliver messages before going live.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Contact</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary text-balance">
            Schedule a Free 30-Minute Discovery Call
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            No pressure and no obligation — just a straightforward conversation about your practice, your risks, and how
            I can help. Send a message or grab a time that works for you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-primary">Thanks for reaching out!</h3>
                <p className="mt-2 text-muted-foreground">
                  This is a demo form — connect it to an email service to receive real messages.
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
                  className="bg-teal text-teal-foreground transition-all hover:bg-teal-light hover:scale-[1.02] hover:shadow-[0_8px_24px_-6px_hsl(var(--teal)/0.5)]"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact details + booking embed */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-secondary p-6 md:p-8">
              <h3 className="text-lg font-semibold text-primary">Get in touch directly</h3>
              <ul className="mt-5 space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal" aria-hidden="true" />
                  <span className="text-muted-foreground">Dallas–Fort Worth, TX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal" aria-hidden="true" />
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
