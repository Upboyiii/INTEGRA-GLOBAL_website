import { ShieldCheck, Check } from "lucide-react"

const complianceItems = [
  "Multi-Jurisdictional Regulatory Alignment",
  "Audited Liquidity & Asset Management",
  "End-to-End Enterprise Risk Governance",
]

export function OverviewSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-emerald-600">EXECUTIVE OVERVIEW</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-slate-900">
            A Diversified Enterprise Built for Modern Scale
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Integra Global Industries Limited combines institutional financial precision with physical engineering and
            international trade networks. We manage high-complexity physical projects and digital transaction pipelines
            with strict regulatory compliance frameworks.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
            <div>
              <div className="font-heading text-2xl font-extrabold text-emerald-800">Multi-Market</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.08em] text-slate-500">
                CROSS-BORDER OPERATIONS
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-extrabold text-emerald-800">Tier-1</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.08em] text-slate-500">
                INSTITUTIONAL STANDARDS
              </div>
            </div>
          </div>
        </div>

        {/* Right column: compliance card */}
        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/60 p-8 shadow-[0_4px_24px_rgba(4,120,87,0.06)]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-emerald-950">
              Corporate Governance &amp; Compliance
            </h3>
          </div>
          <p className="mt-5 leading-relaxed text-slate-600">
            Every division functions under strict compliance mandates, comprehensive auditing processes, and robust
            operational frameworks ensuring seamless execution.
          </p>
          <ul className="mt-6 space-y-4">
            {complianceItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-3.5 w-3.5 text-emerald-700" />
                </span>
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
