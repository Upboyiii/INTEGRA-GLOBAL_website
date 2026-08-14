import { HardHat, LineChart, Globe, Cpu, type LucideIcon } from "lucide-react"

type Division = {
  icon: LucideIcon
  title: string
  description: string
}

const divisions: Division[] = [
  {
    icon: HardHat,
    title: "Infrastructure & Construction",
    description:
      "Comprehensive management for infrastructure projects, civil development, and engineering execution. Maintaining strict structural standards, reliable supply lines, and turnkey project delivery.",
  },
  {
    icon: LineChart,
    title: "Project & Security Consulting",
    description:
      "Specialized advisory for large-scale initiatives, technical architecture optimization, organizational risk mitigation, policy compliance management, and complex digital transformation frameworks.",
  },
  {
    icon: Globe,
    title: "International Trading & Commerce",
    description:
      "Facilitating multi-currency cross-border trade, commodity movement, and commercial contracts. Leveraging counterparty networks to reduce trade frictions and streamline global logistics.",
  },
  {
    icon: Cpu,
    title: "Crypto-Fiat Gateway & Settlement",
    description:
      "High-capacity digital asset settlement engines, liquidity routing layers, stablecoin rails, and real-time ledger settlement architecture optimized for high-volume enterprise clearing.",
  },
]

export function DivisionsSection() {
  return (
    <section id="divisions" className="border-y border-border bg-emerald-50/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.15em] text-emerald-600">CORE OPERATIONS</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">Our Four Divisions</h2>
          <p className="mt-3 leading-relaxed text-slate-500">
            Integrated physical and technological frameworks built to support institutional enterprise demand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {divisions.map((division) => {
            const Icon = division.icon
            return (
              <div
                key={division.title}
                className="rounded-2xl border border-border bg-white p-7 shadow-[0_4px_20px_rgba(4,120,87,0.05)] transition-shadow hover:shadow-[0_8px_28px_rgba(4,120,87,0.1)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">{division.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{division.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
