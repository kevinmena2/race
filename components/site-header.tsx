"use client"

import { useEffect, useState } from "react"
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "Process",    href: "#process" },
  { label: "Contact",    href: "#contact" },
]

const BANNER_KEY = "rw-banner-dismissed-v1"

export function SiteHeader() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [bannerVisible, setBanner]     = useState(false)

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(BANNER_KEY)
    if (!dismissed) setBanner(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const dismissBanner = () => {
    setBanner(false)
    localStorage.setItem(BANNER_KEY, "1")
  }

  return (
    <>
      {/* Announcement strip */}
      {bannerVisible && (
        <div
          className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-sm"
          style={{
            background: "linear-gradient(90deg, hsl(174,95%,40%,0.12) 0%, hsl(220,55%,13%,0.95) 50%, hsl(174,95%,40%,0.12) 100%)",
            borderBottom: "1px solid hsl(174,95%,40%,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-teal animate-pulse" aria-hidden="true" />
          <span className="text-white/80">
            <span className="font-semibold text-teal-light">New:</span>{" "}
            HIPAA Compliance Fast-Track: get your practice assessed in 2 weeks.
          </span>
          <a
            href="#contact"
            className="hidden items-center gap-1 text-xs font-semibold text-teal-light transition-colors hover:text-white sm:inline-flex"
            onClick={dismissBanner}
          >
            Get started <ArrowRight className="h-3 w-3" />
          </a>
          <button
            type="button"
            onClick={dismissBanner}
            className="ml-auto flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white"
            aria-label="Dismiss banner"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <header
        className="fixed inset-x-0 z-50 transition-all duration-300"
        style={{
          top: bannerVisible ? "2.5rem" : "0",
          ...(scrolled
            ? {
                background: "hsl(220,55%,13%,0.88)",
                backdropFilter: "saturate(180%) blur(18px)",
                WebkitBackdropFilter: "saturate(180%) blur(18px)",
                borderBottom: "1px solid hsl(255,255%,100%,0.07)",
                boxShadow: "0 4px 24px -4px hsl(224,62%,8%,0.5)",
              }
            : {
                background: "transparent",
                backdropFilter: "none",
              }),
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between md:h-[4.5rem]">

            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2 font-heading text-base font-bold tracking-tight text-white transition-opacity hover:opacity-85 md:text-lg"
            >
              <ShieldCheck className="h-5 w-5 text-teal shrink-0" aria-hidden="true" />
              Race Wonder
              <span className="text-teal-light">LLC</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-white/65 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-teal after:to-teal-light after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="hidden rounded-lg bg-teal px-4 text-sm font-semibold text-teal-foreground transition-all hover:bg-teal-light hover:shadow-[0_4px_20px_-4px_hsl(174,95%,40%,0.75)] lg:inline-flex"
              >
                <a href="#contact">Free Consultation</a>
              </Button>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="border-t lg:hidden"
            style={{
              background: "hsl(220,55%,13%,0.97)",
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
              borderColor: "hsl(255,255%,100%,0.08)",
            }}
          >
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-3 w-full rounded-lg bg-teal font-semibold text-teal-foreground hover:bg-teal-light"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Book a Free Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
