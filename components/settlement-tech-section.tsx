const pillars = [
  { title: "Low-Latency", description: "Real-time ledger processing" },
  { title: "Deep Liquidity", description: "Multi-currency exchange" },
  { title: "Secure Auditing", description: "Continuous risk verification" },
]

export function SettlementTechSection() {
  return (
    <section id="settlement-tech" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-900 p-10">
        <p className="text-[11px] font-semibold tracking-[0.15em] text-emerald-300">ENTERPRISE TECHNOLOGY</p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold text-white">Advanced Settlement Architecture</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-emerald-100/90">
          Engineered for mission-critical institutional operations, unifying deep liquidity routing, automated ledger
          reconciliation, and multi-asset compliance.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-l-[3px] border-emerald-400 pl-4">
              <div className="font-heading text-base font-semibold text-white">{pillar.title}</div>
              <div className="mt-1 text-sm text-emerald-200">{pillar.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
