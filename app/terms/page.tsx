import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service | Integra Global Industries Limited",
  description:
    "Terms and Conditions of Service for Integra Global Industries Limited.",
}

const sections = [
  {
    title: "1. Introduction & Acceptance of Terms",
    paragraphs: [
      'These Terms and Conditions ("Terms", "Agreement") govern your access to and engagement with the corporate services, platforms, interfaces, and commercial frameworks operated by Integra Global Industries Limited ("Company", "we", "us", or "our").',
      'By executing a commercial agreement, accessing our digital settlement gateways, engaging our consultancy services, or participating in international trade operations facilitated by the Company, you ("Client", "Partner", or "Institutional Counterparty") agree to be bound by these Terms. If you do not agree to these Terms, you must not access or utilize our services.',
    ],
  },
  {
    title: "2. Scope of Operational Divisions",
    paragraphs: [
      "The Company provides multi-disciplinary enterprise solutions across four primary operational verticals:",
    ],
    bullets: [
      "Infrastructure & Development Construction: Execution of civil engineering projects, physical asset procurement, construction management, and turnkey infrastructure delivery.",
      "Project & Security Consulting Services: Technical architecture optimization, organizational risk mitigation, cloud security configuration, and strategic project management advisory.",
      "International Trading & Global Commerce: Facilitation of multi-currency cross-border trade, bulk commodity/service transactions, logistics coordination, and international supply chain management.",
      "Crypto-Fiat Settlement & Gateway Infrastructure: Provision of high-volume digital asset gateway architectures, stablecoin rails, liquidity routing, and real-time ledger settlement capabilities.",
    ],
  },
  {
    title: "3. Institutional Eligibility & Regulatory Compliance (KYC / KYB)",
    bullets: [
      "Entity Verification: Services are offered exclusively to verified corporate entities, institutional counterparties, and qualified partners.",
      "Compliance & AML Protocols: Clients must provide all required Know Your Customer (KYC), Know Your Business (KYB), source of funds documentation, and Ultimate Beneficial Owner (UBO) disclosures required by applicable international regulatory authorities prior to service activation.",
      "Prohibited Activities: Clients shall not utilize the Company's trade facilities, advisory channels, or digital settlement infrastructure for any unlawful purpose, including but not limited to sanctions evasion, terrorist financing, money laundering, or unauthorized financial intermediation.",
    ],
  },
  {
    title: "4. Commercial Contracts & Engagement Structure",
    bullets: [
      "Statements of Work (SOW): Specific service deliverables, project milestones, pricing models, and technical scopes will be executed via standalone Master Services Agreements (MSA), Statements of Work (SOW), or Commercial Invoices. In the event of a direct conflict between these Terms and a signed MSA/SOW, the executed SOW shall prevail.",
      "Construction & Engineering Deliverables: All physical development projects are subject to mutually agreed engineering specifications, site access permissions, force majeure provisions, and local statutory building codes.",
    ],
  },
  {
    title: "5. Settlement, Pricing & Multi-Currency Clearing",
    bullets: [
      "Invoicing & Payment Terms: Unless otherwise specified in an applicable agreement, all invoices are due and payable in the designated fiat currency or approved stablecoin asset within the timeframe specified on the invoice.",
      "Digital Asset Settlement: Where transaction routing or digital settlement gateways are deployed, settlement values, network fees, liquidity slippage tolerances, and ledger confirmations are finalized at the exact timestamp of execution on the underlying network ledger.",
      "Taxes & Cross-Border Duties: The Client remains solely responsible for all applicable local, cross-border, customs, withholding, or value-added taxes (VAT) related to trade shipments, commercial deliveries, or financial transactions.",
    ],
  },
  {
    title: "6. Intellectual Property & Technical Specifications",
    bullets: [
      "Proprietary Rights: All proprietary settlement routing algorithms, software architectures, digital APIs, corporate marks, technical documentation, and project frameworks remain the exclusive property of Integra Global Industries Limited.",
      "Limited License: Subject to compliance with these Terms, the Company grants the Client a revocable, non-exclusive, non-transferable license to integrate and utilize provided settlement endpoints or proprietary documentation strictly for agreed operational purposes.",
    ],
  },
  {
    title: "7. Confidentiality & Non-Disclosure",
    bullets: [
      "Protected Information: Each party agrees to protect the confidentiality of all proprietary data, financial figures, customer records, technical architectures, and trade secrets disclosed by the other party with the same degree of care it uses for its own confidential information.",
      "Exceptions: Confidentiality obligations do not apply to information that is publicly known through no breach of this Agreement or is required to be disclosed by a court of competent jurisdiction or authorized regulatory body.",
    ],
  },
  {
    title: "8. Limitation of Liability & Warranties",
    bullets: [
      '"As-Is" Operational Architecture: Digital interfaces, settlement tools, and data routing channels are provided on an "as-is" and "as-available" basis without warranties of uninterrupted availability.',
      "Consequential Damages Waiver: To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages, including loss of profits, trade disruptions, or market volatility losses.",
      "Aggregate Liability Cap: The total aggregate liability of Integra Global Industries Limited arising out of or related to these Terms or any engagement thereunder shall not exceed the total fees paid by the Client to the Company in the three (3) months preceding the event giving rise to liability.",
    ],
  },
  {
    title: "9. Termination & Suspension",
    paragraphs: [
      "The Company reserves the right to suspend or terminate services, gateway routing access, or project engagements immediately upon written notice if:",
    ],
    bullets: [
      "The Client materially breaches these Terms or any active commercial contract.",
      "The Client fails compliance or risk screening checks.",
      "Continued service provision would cause the Company to violate applicable domestic or international trade and financial laws.",
    ],
  },
  {
    title: "10. Governing Law & Dispute Resolution",
    bullets: [
      "Jurisdiction: These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of the Company's jurisdiction of incorporation.",
      "Arbitration: Any controversy or claim arising out of or relating to this Agreement shall be resolved by final and binding arbitration in accordance with recognized international commercial arbitration rules before a single arbitrator.",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.15em] text-emerald-600">LEGAL</p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Terms and Conditions of Service
        </h1>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Integra Global Industries Limited
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Effective Date: July 16, 2026 &nbsp;|&nbsp; Last Updated: August 14, 2026
        </p>

        <div className="mt-12 space-y-10 border-t border-border pt-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-lg font-bold text-slate-900">
                {section.title}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                  {section.bullets.map((item) => (
                    <li key={item.slice(0, 48)} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
