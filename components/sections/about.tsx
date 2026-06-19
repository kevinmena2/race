"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text column */}
          <Reveal>
            <span className="pill-label">About</span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              A real person handling your IT —{" "}
              <span className="text-gradient-brand">not a faceless agency</span>
            </h2>

            <div className="mt-6 h-px w-14 bg-gradient-to-r from-teal to-transparent" />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Race Wonder LLC started in June 2026 with a simple idea: small medical practices and
              growing startups deserve serious IT and security help without hiring a big firm or a
              full-time team. When you work with me, you work with{" "}
              <em className="font-medium text-foreground not-italic">me</em> — not a call center or
              a rotating cast of technicians.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              I focus on practical, compliant solutions that protect your patients and your
              business, explained in plain language you can actually act on.
            </p>

            {/* Founder card */}
            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-border bg-secondary px-6 py-4 shadow-sm">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-teal/40 ring-offset-2 ring-offset-secondary">
                <Image
                  src="/images/headshot.jpg"
                  alt="Kevin Mena, Founder of Race Wonder LLC"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-lg font-bold leading-tight text-primary">Kevin Mena</p>
                <p className="mt-0.5 text-sm text-muted-foreground">Founder &amp; Principal Consultant</p>
              </div>
            </div>
          </Reveal>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <Image
                src="/images/it-consultant.jpg"
                alt="IT consultant working at a multi-monitor workstation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 50vw"
              />
              {/* Subtle teal gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(220,55%,13%,0.35) 0%, transparent 50%), linear-gradient(135deg, hsl(174,95%,40%,0.08) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating detail card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card px-5 py-4 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Focus areas</p>
              <ul className="mt-2 space-y-1 text-sm font-medium text-primary">
                <li>HIPAA Compliance</li>
                <li>Identity & Access</li>
                <li>Device Security</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
