import { Mail, MapPin, ArrowRight, ShieldCheck, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "Process",    href: "#process" },
  { label: "Contact",    href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden text-primary-foreground"
      style={{
        background: "linear-gradient(160deg, hsl(220,55%,13%) 0%, hsl(224,62%,8%) 100%)",
      }}
    >
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

      {/* Final CTA band */}
      <div
        className="relative border-b"
        style={{ borderColor: "hsl(174,95%,40%,0.15)", background: "hsl(174,95%,40%,0.04)" }}
      >
        <div className="container relative mx-auto px-4 py-14 md:py-16">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                Start with a free 30-minute call.
              </p>
              <p className="mt-2 text-sm text-primary-foreground/55">
                No pressure. Just clarity on your risks and next steps.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="group shrink-0 rounded-xl bg-teal px-7 font-bold text-teal-foreground transition-all hover:bg-teal-light hover:scale-[1.03] glow-teal-lg"
            >
              <a href="#contact">
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container relative mx-auto px-4 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="md:max-w-xs">
            <a href="#top" className="inline-flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-white">
              <ShieldCheck className="h-5 w-5 text-teal shrink-0" aria-hidden="true" />
              Race Wonder <span className="text-teal-light">LLC</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/55">
              Practical, secure IT for DFW medical practices and startups. HIPAA compliance without the complexity.
            </p>
            {/* Social placeholders */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-primary-foreground/45 transition-colors hover:border-teal/30 hover:text-teal-light"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-primary-foreground/45 transition-colors hover:border-teal/30 hover:text-teal-light"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground/35">
              Quick links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-teal-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground/35">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                Dallas–Fort Worth, TX
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href="mailto:hello@racewonder.online"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-teal-light"
                >
                  hello@racewonder.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "hsl(255,255%,100%,0.07)" }}>
          <p className="text-xs text-primary-foreground/30">
            © 2026 Race Wonder LLC. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/25">
            Serving Dallas–Fort Worth, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
