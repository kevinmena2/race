import Image from "next/image"
import { UserRound } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="pill-label">About</span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
            A real person handling your IT —{" "}
            <span className="text-gradient-brand">not a faceless agency</span>
          </h2>

          {/* Teal accent */}
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-teal to-transparent" />

          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            Race Wonder LLC started in June 2026 with a simple idea: small medical practices and
            growing startups deserve serious IT and security help without hiring a big firm or a
            full-time team. When you work with me, you work with{" "}
            <em className="font-medium text-foreground not-italic">me</em> — not a call center or
            a rotating cast of technicians. I focus on practical, compliant solutions that protect
            your patients and your business, explained in plain language you can actually act on.
          </p>

          {/* Founder card */}
          <div className="mx-auto mt-10 inline-flex items-center gap-4 rounded-2xl border border-border bg-secondary px-6 py-4 shadow-sm">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-teal/40 ring-offset-2 ring-offset-secondary">
              <Image
                src="/images/headshot.jpg"
                alt="Kevin Mena, Founder of Race Wonder LLC"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-heading text-lg font-bold leading-tight text-primary">Kevin Mena</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Founder &amp; Principal Consultant</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
