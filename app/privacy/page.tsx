import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Integra Global Industries Limited",
  description:
    "Privacy Policy for Integra Global Industries Limited.",
}

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Integra Global Industries Limited ("Company", "we", "us", or "our") is committed to protecting the privacy and security of all personal information processed in connection with our enterprise services, digital platforms, and commercial operations.',
      "This Privacy Policy explains how we collect, use, disclose, retain, and safeguard your personal data when you access our websites, settlement gateways, advisory services, or engage with us in any professional capacity.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect and process the following categories of personal data:",
    ],
    bullets: [
      "Identity Data: Full legal name, date of birth, nationality, government-issued identification documents, and corporate officer details.",
      "Contact Data: Email address, telephone numbers, registered business address, and correspondence records.",
      "Financial Data: Bank account details, transaction records, digital wallet addresses, settlement references, and payment history.",
      "Technical Data: IP address, browser type and version, device identifiers, time zone settings, operating system, and access logs.",
      "Compliance Data: Know Your Customer (KYC) documentation, Know Your Business (KYB) filings, source of funds declarations, and Ultimate Beneficial Owner (UBO) disclosures.",
      "Usage Data: Information about how you interact with our platforms, including pages visited, features accessed, and session duration.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    bullets: [
      "Service Delivery: To provide, operate, and maintain our enterprise infrastructure, consulting, trading, and settlement services.",
      "Identity Verification: To conduct KYC/KYB checks, verify counterparty eligibility, and comply with anti-money laundering (AML) regulations.",
      "Transaction Processing: To process payments, execute trades, settle digital asset transactions, and maintain accurate ledger records.",
      "Communication: To respond to inquiries, deliver service notifications, and provide technical or account-related support.",
      "Legal Compliance: To comply with applicable laws, regulatory requirements, court orders, and requests from governmental authorities.",
      "Security & Fraud Prevention: To detect, investigate, and prevent unauthorized access, fraud, and other security threats.",
      "Analytics & Improvement: To analyze usage patterns and improve the performance, reliability, and user experience of our platforms.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    paragraphs: [
      "We process personal data on the following legal grounds:",
    ],
    bullets: [
      "Contractual Necessity: Processing required to perform or enter into a contract with you or your organization.",
      "Legal Obligation: Processing necessary to comply with applicable regulatory and legal requirements.",
      "Legitimate Interest: Processing necessary for our legitimate business interests, including fraud prevention, network security, and service optimization, provided these interests do not override your fundamental rights.",
      "Consent: Where we rely on your consent for specific processing activities, you may withdraw consent at any time without affecting the lawfulness of prior processing.",
    ],
  },
  {
    title: "5. Data Sharing & Disclosure",
    paragraphs: [
      "We do not sell personal data. We may share information with:",
    ],
    bullets: [
      "Affiliated Entities: Companies within our corporate group for operational, compliance, and administrative purposes.",
      "Service Providers: Vetted third-party processors who assist with identity verification, payment processing, cloud hosting, security monitoring, and analytics — all bound by contractual data protection obligations.",
      "Regulatory Authorities: Government agencies, financial regulators, law enforcement, or courts when required by law or in response to valid legal process.",
      "Professional Advisors: External legal counsel, auditors, and compliance consultants under appropriate confidentiality agreements.",
    ],
  },
  {
    title: "6. International Data Transfers",
    paragraphs: [
      "Given the international scope of our operations, personal data may be transferred to and processed in jurisdictions outside your country of residence. Where such transfers occur, we implement appropriate safeguards, including standard contractual clauses, adequacy determinations, or binding corporate rules, to ensure your data receives an equivalent level of protection.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain personal data only for as long as necessary to fulfill the purposes described in this Policy, or as required to comply with legal, regulatory, audit, or contractual obligations. When data is no longer required, it is securely deleted or anonymized in accordance with our data retention schedules.",
    ],
  },
  {
    title: "8. Data Security",
    paragraphs: [
      "We implement robust technical and organizational security measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These measures include, but are not limited to, encryption at rest and in transit, access controls, regular vulnerability assessments, and continuous monitoring.",
    ],
  },
  {
    title: "9. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the right to:",
    ],
    bullets: [
      "Access the personal data we hold about you and request a copy.",
      "Rectify inaccurate or incomplete personal data.",
      "Erase personal data where there is no compelling reason for continued processing.",
      "Restrict processing in certain circumstances.",
      "Object to processing based on legitimate interests or direct marketing.",
      "Data Portability: Receive your data in a structured, commonly used, machine-readable format.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or business operations. The updated version will be indicated by the \"Last Updated\" date at the top of this page. We encourage you to review this Policy periodically.",
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, wish to exercise your data rights, or have a complaint about how your data is handled, please contact us through our website inquiry form or at the registered address of Integra Global Industries Limited.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.15em] text-emerald-600">LEGAL</p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Integra Global Industries Limited
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Effective Date: July 16, 2026 &nbsp;|&nbsp; Last Updated: September 11, 2026
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
