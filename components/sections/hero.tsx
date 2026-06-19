"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck, MapPin, FileCheck2, UserRound, Zap, Clock, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const credibility = [
  { icon: ShieldCheck, label: "HIPAA-focused" },
  { icon: MapPin,      label: "DFW-local" },
  { icon: FileCheck2,  label: "BAA-ready" },
  { icon: UserRound,   label: "Direct access" },
]

const miniStats = [
  { icon: Clock,       value: "< 4 hr",  label: "avg response" },
  { icon: ShieldCheck, value: "100%",    label: "HIPAA rate" },
  { icon: TrendingUp,  value: "5+ yrs",  label: "enterprise IT" },
]

const floatingChecks = [
  { label: "HIPAA Compliant", done: true },
  { label: "BAA Signed",      done: true },
  { label: "Encrypted",       done: true },
  { label: "Monitoring Active", done: true },
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
          "linear-gradient(145deg, hsl(224,62%,8%) 0%, hsl(220,55%,13%) 60%, hsl(218,50%,15%) 100%)",
      }}
    >
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        className="gradient-orb pointer-events-none -top-32 right-[-8%] h-[700px] w-[700px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(174,95%,40%) 0%, hsl(210,100%,50%) 50%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="gradient-orb pointer-events-none bottom-[-30%] left-[-10%] h-[500px] w-[500px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(174,95%,40%) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="gradient-orb pointer-events-none top-1/2 left-1/3 h-[400px] w-[400px] opacity-10"
        style={{ background: "radial-gradient(circle, hsl(220,100%,60%) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-stretch">

          {/* ── Text column ── */}
          <div className="flex flex-col justify-center">

            {/* Announcement bar */}
            <motion.div custom={0} initial="hidden" animate="show" variants={fade}>
              <a
                href="#contact"
                className="announcement-bar group w-fit transition-all hover:border-teal/50 hover:bg-teal/20"
              >
                <Zap className="h-3.5 w-3.5 shrink-0 text-teal" />
                <span>Now Accepting New Clients · Dallas–Fort Worth</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-7 font-heading font-extrabold tracking-[-0.03em] text-balance leading-[1.04]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              Practical,{" "}
              <span className="text-gradient-brand">Secure IT</span>
              <br className="hidden sm:block" />
              {" "}for Medical Practices
              <br className="hidden sm:block" />
              {" "}in DFW
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-primary-foreground/65"
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
                className="group relative overflow-hidden rounded-xl bg-teal px-7 font-bold text-teal-foreground transition-all duration-300 hover:bg-teal-light hover:scale-[1.03] glow-teal-lg"
              >
                <a href="#contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl border-white/15 bg-white/5 text-primary-foreground backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
              >
                <a href="#services">
                  See My Services
                  <ArrowRight className="ml-2 h-4 w-4 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {miniStats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <s.icon className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>
                    <span className="text-sm font-bold text-white">{s.value}</span>
                    <span className="ml-1 text-sm text-primary-foreground/45">{s.label}</span>
                  </span>
                  {i < miniStats.length - 1 && (
                    <span className="hidden text-primary-foreground/15 sm:inline" aria-hidden="true">·</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              custom={5}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {credibility.map((item, i) => (
                <li key={item.label} className="flex items-center gap-1.5 text-sm text-primary-foreground/45">
                  <item.icon className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
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
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative min-h-[360px] lg:min-h-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "0 0 0 1px hsl(174,95%,40%,0.22), 0 32px 72px -12px hsl(174,95%,40%,0.28)" }}
            />

            {/* Image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-real.jpg"
                alt="Medical staff at a reception desk in a modern clinic"
                fill
                priority
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(224,62%,8%,0.7) 0%, transparent 55%), linear-gradient(135deg, transparent 50%, hsl(174,95%,40%,0.1) 100%)",
                }}
              />
            </div>

            {/* Floating metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-auto rounded-xl border border-white/12 bg-white/8 px-4 py-3.5 backdrop-blur-md"
            >
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/50">
                Practice Status
              </p>
              <ul className="space-y-1.5">
                {floatingChecks.map((c) => (
                  <li key={c.label} className="flex items-center gap-2.5 text-sm text-white">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal/20">
                      <ShieldCheck className="h-2.5 w-2.5 text-teal-light" />
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
