"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck, MapPin, FileCheck2, UserRound } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const credibility = [
  { icon: ShieldCheck, label: "HIPAA-focused" },
  { icon: MapPin,      label: "DFW-local" },
  { icon: FileCheck2,  label: "BAA-ready" },
  { icon: UserRound,   label: "Direct access to me" },
]

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-primary-foreground"
      style={{
        background:
          "linear-gradient(145deg, hsl(224,62%,8%) 0%, hsl(220,55%,13%) 50%, hsl(218,50%,16%) 100%)",
      }}
    >
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-100" aria-hidden="true" />

      {/* Radial teal glows */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(174,90%,38%,0.18) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(174,90%,38%,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-stretch">

          {/* ── Text column ── */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div custom={0} initial="hidden" animate="show" variants={fade}>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-teal-light uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-light opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-light" />
                </span>
                Now accepting clients · Dallas–Fort Worth
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-6 font-heading font-bold tracking-[-0.028em] text-balance leading-[1.06]"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 3.5rem)" }}
            >
              Practical,{" "}
              <span className="text-gradient-brand">Secure IT</span>
              <br className="hidden md:block" />
              {" "}for Medical Practices
              <br className="hidden md:block" />
              {" "}in DFW
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-5 max-w-lg text-base md:text-lg leading-relaxed text-primary-foreground/70"
            >
              I help clinics, dental offices, and startups stay HIPAA-compliant,
              secure, and running smoothly — with direct, personal service and none
              of the big-agency runaround.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-teal px-6 font-semibold text-teal-foreground transition-all duration-300 hover:bg-teal-light hover:scale-[1.03] hover:shadow-[0_8px_32px_-6px_hsl(174,90%,38%,0.65)]"
              >
                <a href="#contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/15 bg-white/5 text-primary-foreground backdrop-blur-sm hover:bg-white/10 hover:border-white/25"
              >
                <a href="#services">See My Services</a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              custom={4}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5"
            >
              {credibility.map((item, i) => (
                <li key={item.label} className="flex items-center gap-1.5 text-sm text-primary-foreground/55">
                  <item.icon className="h-3.5 w-3.5 shrink-0 text-teal-light" aria-hidden="true" />
                  {item.label}
                  {i < credibility.length - 1 && (
                    <span className="ml-1.5 hidden text-primary-foreground/20 sm:inline" aria-hidden="true">·</span>
                  )}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative min-h-[380px] lg:min-h-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "0 0 0 1px hsl(174,90%,38%,0.2), 0 24px 60px -12px hsl(174,90%,38%,0.25)" }}
            />

            {/* Image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-medical-office.png"
                alt="Clean, modern medical office reception and workspace"
                fill
                priority
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(224,62%,8%,0.55) 0%, transparent 50%), linear-gradient(to bottom-right, transparent 60%, hsl(174,90%,38%,0.12) 100%)",
                }}
              />
            </div>

            {/* Floating badge — HIPAA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-teal-light shrink-0" />
              <div>
                <p className="text-xs font-bold text-white leading-none">HIPAA-Focused</p>
                <p className="mt-0.5 text-[10px] text-white/60">BAA-ready from day one</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
