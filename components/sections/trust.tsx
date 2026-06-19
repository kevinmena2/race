"use client"

import { UserRound, ShieldCheck, MapPin, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

const trustPoints = [
  { icon: UserRound,      label: "Direct, personal service", sub: "No teams or call centers. You talk to me." },
  { icon: ShieldCheck,    label: "HIPAA-focused",            sub: "Built specifically for medical practices" },
  { icon: MapPin,         label: "DFW-local",                sub: "On-site visits whenever you need them" },
  { icon: MessageSquare,  label: "Plain-language solutions",  sub: "No jargon, no scare tactics. Just clarity." },
]

const testimonials = [
  {
    initials: "SM",
    color: "from-teal/30 to-teal/10",
    name: "Dr. Sarah M.",
    role: "Independent Practice Owner, DFW",
    quote: "Kevin made our HIPAA compliance process feel manageable for the first time. Clear, methodical, and always reachable.",
  },
  {
    initials: "JR",
    color: "from-blue-500/30 to-blue-500/10",
    name: "James R.",
    role: "Founder & CEO, DFW SaaS Startup",
    quote: "We went from zero IT structure to a fully secured, MDM-managed team in weeks. Exactly what a fast-growing startup needs.",
  },
  {
    initials: "LP",
    color: "from-violet-500/30 to-violet-500/10",
    name: "Dr. Lisa P.",
    role: "Dental Office Manager, Dallas",
    quote: "Switched from a big MSP to Race Wonder and immediately felt the difference: personal, fast, and no hidden fees.",
  },
]

export function Trust() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">Why Work With Me</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            Premium service,{" "}
            <span className="text-gradient-brand">without the overhead</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The expertise of a big firm. The responsiveness of someone who genuinely cares about your business.
          </p>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 ring-1 ring-teal/20 transition-all duration-300 group-hover:from-teal/28 group-hover:to-teal/10">
                <point.icon className="h-[18px] w-[18px] text-teal" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold text-primary leading-tight">{point.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{point.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 card-glow"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} className="h-4 w-4 fill-teal text-teal" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                {/* Avatar */}
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-teal`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-muted-foreground/50">
          * Testimonials are representative of the expected client experience for a newly launched business.
        </p>
      </div>
    </section>
  )
}
