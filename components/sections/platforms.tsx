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
    <section className="border-b border-border bg-background py-10 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
          Tools &amp; platforms I work with
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {platforms.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-muted-foreground/60 transition-colors duration-200 hover:text-muted-foreground md:text-base"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-muted-foreground/50">
          These are tools I work with — not clients or partners.
        </p>
      </div>
    </section>
  )
}
