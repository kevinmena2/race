"use client"

import { UserRound, ShieldCheck, MapPin, MessageSquare, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

const trustPoints = [
  { icon: UserRound,      label: "Direct, personal service", sub: "No teams or call centers" },
  { icon: ShieldCheck,    label: "HIPAA-focused",            sub: "For medical practices" },
  { icon: MapPin,         label: "DFW-local",                sub: "On-site when you need it" },
  { icon: MessageSquare,  label: "Plain-language solutions",  sub: "Practical, not preachy" },
]

const testimonials = [
  { name: "Placeholder Client", role: "Independent Practice", quote: "[Placeholder testimonial — replace with a real client quote once available]" },
  { name: "Placeholder Client", role: "DFW Startup",          quote: "[Placeholder testimonial — replace with a real client quote once available]" },
  { name: "Placeholder Client", role: "Dental Office",        quote: "[Placeholder testimonial — replace with a real client quote once available]" },
]

export function Trust() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">Why Work With Me</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            Premium service, without the big-firm overhead
          </h2>
        </Reveal>

        {/* Trust point cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group rounded-2xl border border-border bg-card p-5 card-glow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 ring-1 ring-teal/20">
                <point.icon className="h-4.5 w-4.5 text-teal h-[18px] w-[18px]" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold text-primary leading-tight">{point.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{point.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-secondary p-6"
            >
              <Quote className="h-5 w-5 text-teal/40 mb-3 shrink-0" aria-hidden="true" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">{t.quote}</p>
              <div className="mt-5 pt-4 border-t border-border/60">
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground/70">
          Testimonials shown are placeholders for a brand-new business and will be replaced with real client quotes.
        </p>
      </div>
    </section>
  )
}
