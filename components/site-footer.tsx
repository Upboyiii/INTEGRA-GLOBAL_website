const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Compliance", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-slate-500">
          &copy; 2026 Integra Global Industries Limited. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-500 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
