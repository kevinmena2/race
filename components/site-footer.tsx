import { Mail, MapPin, ArrowRight } from "lucide-react"

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
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      <div className="container relative mx-auto px-4 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="md:max-w-xs">
            <p className="font-heading text-lg font-bold tracking-tight">
              Race Wonder{" "}
              <span className="text-teal-light">LLC</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Practical, secure IT for DFW medical practices and startups.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light transition-colors hover:text-white"
            >
              Book a free consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground/40">
              Quick links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-teal-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/65">
                <MapPin className="h-4 w-4 shrink-0 text-teal-light" aria-hidden="true" />
                Dallas–Fort Worth, TX
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-light" aria-hidden="true" />
                <a
                  href="mailto:hello@racewonder.online"
                  className="text-sm text-primary-foreground/65 transition-colors hover:text-teal-light"
                >
                  hello@racewonder.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t pt-6" style={{ borderColor: "hsl(255,255%,100%,0.08)" }}>
          <p className="text-xs text-primary-foreground/35">
            © 2026 Race Wonder LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
