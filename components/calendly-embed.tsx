"use client"

import { useEffect } from "react"

type CalendlyEmbedProps = {
  url: string
  className?: string
}

export function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  useEffect(() => {
    const id = "calendly-widget-script"
    if (document.getElementById(id)) return
    const script = document.createElement("script")
    script.id = id
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className={`calendly-inline-widget w-full overflow-hidden rounded-2xl border border-border bg-card ${className ?? ""}`}
      data-url={url}
      style={{ minWidth: "320px", minHeight: "650px" }}
      aria-label="Calendly scheduling"
    />
  )
}
