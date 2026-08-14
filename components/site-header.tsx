const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Settlement Tech", href: "/#settlement-tech" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-gradient-to-br from-emerald-500 to-emerald-700 font-heading text-xl font-extrabold text-white">
            I
          </div>
          <div className="leading-tight">
            <div className="font-heading text-[15px] font-extrabold tracking-[0.12em] text-emerald-950">
              INTEGRA GLOBAL
            </div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-emerald-600">
              INDUSTRIES LIMITED
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Inquire
        </a>
      </div>
    </header>
  )
}
