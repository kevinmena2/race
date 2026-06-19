"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const audiences = [
  {
    title: "Independent Medical & Dental Practices",
    description:
      "You handle patient care; I handle the technology and compliance behind it. From HIPAA assessments to secure backups, I help you protect patient data and avoid costly mistakes without slowing your team down.",
    image: "/images/medical-dental-clinic.png",
    alt: "Modern independent dental and medical practice treatment room interior",
    cta: { label: "Learn about HIPAA compliance", href: "#services" },
  },
  {
    title: "Fast-Growing DFW Startups",
    description:
      "Scaling fast? I help you build secure, scalable IT from the start — identity, devices, cloud, and onboarding that grow with you, so security keeps pace with your business instead of holding it back.",
    image: "/images/startup-workspace.png",
    alt: "Modern startup office workspace with open plan desks and laptops",
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
            Built for the businesses I know best
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {audiences.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
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
                    background: "linear-gradient(to top, hsl(220,55%,13%,0.5) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="font-heading text-xl font-semibold text-primary text-balance">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
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
