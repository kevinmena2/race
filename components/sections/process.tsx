"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Phone, Search, Wrench, HeartHandshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "A free 30-minute conversation to understand your practice, your risks, and your goals — no obligation.",
  },
  {
    number: "02",
    icon: Search,
    title: "Assessment",
    description: "I review your systems, security posture, and compliance gaps and hand you a clear, prioritized roadmap.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementation",
    description: "I put the right protections and tools in place with minimal disruption to your day-to-day operations.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "I stay available as your trusted IT partner, planning ahead so problems never catch you off guard.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">How I Work</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            A clear, four-step process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No guesswork. A simple, transparent path from where you are to where you need to be.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop only) */}
          <div
            className="absolute left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] top-7 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, hsl(174,95%,40%,0.3) 15%, hsl(174,95%,40%,0.5) 50%, hsl(174,95%,40%,0.3) 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex flex-col"
            >
              {/* Step bubble */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-heading text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(174,95%,40%) 0%, hsl(172,80%,56%) 100%)",
                  boxShadow: "0 6px 28px -6px hsl(174,95%,40%,0.65), 0 0 0 5px hsl(218,38%,96%)",
                }}
              >
                {step.number}
              </div>

              {/* Icon row */}
              <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10 border border-teal/20">
                <step.icon className="h-4 w-4 text-teal" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
