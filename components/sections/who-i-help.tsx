"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const audiences = [
  {
    title: "Independent Medical & Dental Practices",
    description:
      "You handle patient care; I handle the technology and compliance behind it.",
    bullets: [
      "HIPAA assessments & gap remediation",
      "Secure patient data backups & encryption",
      "BAA-ready from day one",
    ],
    image: "/images/dental-real.jpg",
    alt: "Modern dental office with professional chair and equipment",
    cta: { label: "Learn about HIPAA compliance", href: "#services" },
  },
  {
    title: "Fast-Growing DFW Startups",
    description:
      "Scaling fast? I help you build secure, scalable IT from the very start.",
    bullets: [
      "Identity, SSO & access management",
      "Device management & onboarding (MDM)",
      "Fractional vCIO & strategic IT planning",
    ],
    image: "/images/startup-real.jpg",
    alt: "Diverse startup team collaborating around a table with laptops",
    cta: { label: "See startup services", href: "#services" },
  },
]

export function WhoIHelp() {
  return (
    <section id="who-i-help" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">Who I Help</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            Two audiences.{" "}
            <span className="text-gradient-brand">One specialist.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Built around the businesses I know best, where security isn&apos;t optional.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {audiences.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group overflow-hidden rounded-2xl border border-border bg-card card-glow"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, hsl(220,55%,13%,0.72) 0%, transparent 55%)",
                  }}
                  aria-hidden="true"
                />
                {/* Title overlay on image */}
                <h3 className="absolute bottom-4 left-5 right-5 font-heading text-xl font-bold text-white text-balance leading-snug drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal/12">
                        <Check className="h-2.5 w-2.5 text-teal" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.cta.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
                >
                  {item.cta.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
