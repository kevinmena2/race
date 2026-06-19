const platforms = [
  "Microsoft 365",
  "Google Workspace",
  "Microsoft Entra ID",
  "Windows",
  "macOS",
  "Azure",
]

export function Platforms() {
  return (
    <section className="border-b border-border bg-background py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground/55">
          Enterprise-grade platforms, configured for you
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {platforms.map((name) => (
            <span
              key={name}
              className="rounded-full border border-border bg-secondary px-5 py-2 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:border-teal/40 hover:bg-teal/5 hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-muted-foreground/40">
          Tools I work with, not clients or endorsers
        </p>
      </div>
    </section>
  )
}
