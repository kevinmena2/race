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
    badge: "Most Popular",
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
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-32 text-primary-foreground"
      style={{ background: "linear-gradient(160deg, hsl(224,62%,8%) 0%, hsl(220,55%,13%) 100%)" }}
    >
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden="true" />

      {/* Orb */}
      <div
        className="gradient-orb pointer-events-none -bottom-40 right-[-10%] h-[500px] w-[500px] opacity-15"
        style={{ background: "radial-gradient(circle, hsl(174,95%,40%) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4">

        <Reveal className="max-w-2xl">
          <span className="pill-label">Services</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Everything your practice needs.{" "}
            <span className="text-gradient-brand">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/55 text-pretty">
            Security and IT made practical — built for small practices and growing startups in DFW.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="feature-card-dark group relative flex flex-col rounded-2xl p-6 md:p-7"
            >
              {/* Popular badge */}
              {service.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-teal/15 border border-teal/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                  {service.badge}
                </span>
              )}

              {/* Icon box */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, hsl(174,95%,40%,0.22) 0%, hsl(174,95%,40%,0.06) 100%)", border: "1px solid hsl(174,95%,40%,0.25)" }}>
                <service.icon className="h-5 w-5 text-teal-light" aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-heading text-base font-semibold text-white text-balance leading-snug">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/50 flex-1">
                {service.description}
              </p>

              {/* Bottom teal accent line */}
              <div className="absolute inset-x-0 bottom-0 h-px rounded-b-2xl bg-gradient-to-r from-teal/0 via-teal/60 to-teal/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
