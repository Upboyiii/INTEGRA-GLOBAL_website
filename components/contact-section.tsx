"use client"

import { FormEvent, useEffect, useState } from "react"
import { CheckCircle2, X } from "lucide-react"

export function ContactSection() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setOpen(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.15em] text-emerald-600">INSTITUTIONAL INQUIRIES</p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold text-slate-900">Initiate a Formal Partnership</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-8 shadow-[0_4px_24px_rgba(4,120,87,0.06)]"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Corporate Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Corporate Email"
              className="w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="interest" className="sr-only">
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            className="w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="" disabled>
              Area of Interest
            </option>
            <option value="infrastructure">Infrastructure</option>
            <option value="consulting">Consulting</option>
            <option value="trading">Trading</option>
            <option value="settlement">Settlement</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Submit Formal Inquiry
        </button>
      </form>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 px-6 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-success-title"
            className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h3 id="inquiry-success-title" className="mt-5 font-heading text-xl font-extrabold text-slate-900">
              Inquiry Received
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Thank you for your submission. Our institutional desk will review your inquiry and respond shortly.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
