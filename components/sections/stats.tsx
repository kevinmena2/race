"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

const stats = [
  { prefix: "",   num: 100, suffix: "%",    label: "HIPAA compliance rate", sub: "across all client engagements" },
  { prefix: "< ", num: 4,   suffix: " hrs", label: "Average response time", sub: "for active client issues" },
  { prefix: "",   num: 5,   suffix: "+",    label: "Years enterprise IT",   sub: "security & compliance experience" },
  { prefix: "",   num: 50,  suffix: "+",    label: "Security policies",     sub: "configured & deployed" },
]

function CountUp({ target, prefix, suffix, inView }: { target: number; prefix: string; suffix: string; inView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, { duration: 1.8, ease: [0.16, 1, 0.3, 1] })
    return controls.stop
  }, [inView, target, count])

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`
    })
  }, [rounded, prefix, suffix])

  return (
    <span ref={ref} className="stat-number text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
      {prefix}0{suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: "linear-gradient(160deg, hsl(224,62%,8%) 0%, hsl(220,55%,13%) 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="gradient-orb pointer-events-none top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-12"
        style={{ background: "radial-gradient(circle, hsl(174,95%,40%) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-px lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.03] px-6 py-10 text-center"
            >
              <CountUp target={s.num} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              <span className="mt-1 text-sm font-semibold text-white/80">{s.label}</span>
              <span className="text-[11px] text-white/35">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
