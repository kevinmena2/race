"use client"

import { ShieldCheck, HardDrive, Lock, UserPlus, KeyRound, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance Assessments & Remediation",
    description:
      "Know exactly where your practice stands. I find the gaps that put patient data — and your license — at risk, then fix them. No jargon, no scare tactics.",
  },
  {
    icon: HardDrive,
    title: "Device Encryption & Secure Backups",
    description:
      "Make sure a lost laptop never becomes a breach. Encrypted devices and tested backups so your data stays protected and recoverable.",
  },
  {
    icon: Lock,
    title: "Microsoft 365 & Google Workspace Security",
    description:
      "Lock down email and files the right way: MFA, safe sharing, and the security settings most offices miss.",
  },
  {
    icon: UserPlus,
    title: "Automated Employee Onboarding (MDM)",
    description:
      "New hires set up and secured on day one. Devices configured automatically so nothing slips through the cracks.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management (SSO)",
    description: "One secure login for everything. Easier for your team, harder for attackers.",
  },
  {
    icon: LineChart,
    title: "Fractional vCIO & Strategic IT Planning",
    description:
      "Enterprise-level IT guidance without a full-time hire. A clear roadmap and a partner who plans ahead with you.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">Services</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            Security and IT, made practical.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Everything a small practice or growing startup needs — nothing you don't.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 card-glow md:p-7"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 ring-1 ring-teal/20 transition-all duration-300 group-hover:from-teal/28 group-hover:to-teal/10">
                <service.icon className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-heading text-base font-semibold text-primary text-balance leading-snug">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground flex-1">
                {service.description}
              </p>

              {/* Bottom teal accent line on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
