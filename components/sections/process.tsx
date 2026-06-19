"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "A free 30-minute conversation to understand your practice, your risks, and your goals.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "I review your systems, security, and compliance gaps and give you a clear, prioritized picture.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "I put the right protections and tools in place, with minimal disruption to your day.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "I stay available as your trusted IT partner, planning ahead so problems don't catch you off guard.",
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
            No guesswork. Just a simple path from where you are to where you need to be.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-[1.75rem] hidden h-px lg:block"
            style={{
              background: "linear-gradient(to right, transparent 4%, hsl(174,90%,38%,0.25) 15%, hsl(174,90%,38%,0.4) 50%, hsl(174,90%,38%,0.25) 85%, transparent 96%)",
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
              className="relative"
            >
              {/* Step number bubble */}
              <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-teal-foreground"
                style={{
                  background: "linear-gradient(135deg, hsl(174,90%,38%) 0%, hsl(172,75%,53%) 100%)",
                  boxShadow: "0 6px 24px -6px hsl(174,90%,38%,0.6), 0 0 0 4px hsl(218,38%,96%)",
                }}
              >
                {step.number}
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
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
