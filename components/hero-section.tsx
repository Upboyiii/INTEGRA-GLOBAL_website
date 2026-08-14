export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          <span className="text-[11px] font-semibold tracking-[0.1em] text-emerald-800">
            ENTERPRISE INFRASTRUCTURE &amp; GLOBAL TRADE
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance font-heading text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          Connecting Global Trade,{" "}
          <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Infrastructure &amp; Capital Flow
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-slate-600">
          Integra Global Industries Limited delivers large-scale civil development, multi-jurisdiction commodity
          trading, strategic technology advisory, and next-generation transaction settlement infrastructure.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#divisions"
            className="w-full rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            className="w-full rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-slate-50 sm:w-auto"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}
