"use client"

import { CheckCircle2, Megaphone, MonitorPlay } from "lucide-react"
import Link from "next/link"

export function HowWeWork() {
  return (
    <section className="relative bg-white dark:bg-[#050505] px-4 py-24 sm:px-6 lg:px-8 border-y border-yellow-500/10">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Advertisers */}
          <Link href="/contact?source=advertisers" className="partner-card block relative rounded-3xl border border-yellow-500/20 bg-slate-50 dark:bg-[#0a0a0a] p-8 sm:p-12 shadow-sm dark:shadow-none transition-all duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/5 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-500">
              <Megaphone className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">For Advertisers</h3>
            <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-500 mb-4">Reach The Right Audience At Scale</p>
            <p className="text-slate-800 dark:text-slate-300 font-medium leading-relaxed mb-8">
              We help advertisers connect with premium traffic sources and high-intent users across multiple verticals and geographies. Whether your goal is app installs, lead generation, sales, or brand awareness — we deliver performance that matters.
            </p>
            <div className="space-y-3">
              <p className="font-bold text-slate-900 dark:text-white mb-4">What We Offer:</p>
              {[
                "High-quality leads & conversions",
                "Global publisher network",
                "CPA / CPL / CPI / RevShare models",
                "Real-time campaign optimization",
                "Fraud monitoring & quality checks",
                "Dedicated account management"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium dark:font-normal dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </Link>

          {/* Publishers */}
          <Link href="/contact?source=publishers" className="partner-card block relative rounded-3xl border border-yellow-500/20 bg-slate-50 dark:bg-[#0a0a0a] p-8 sm:p-12 shadow-sm dark:shadow-none transition-all duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/5 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-500">
              <MonitorPlay className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">For Publishers & Traffic Sources</h3>
            <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-500 mb-4">Monetize Your Traffic With Top-Converting Offers</p>
            <p className="text-slate-800 dark:text-slate-300 font-medium leading-relaxed mb-8">
              Join our growing network of affiliates and media partners to access exclusive campaigns, competitive payouts, and reliable support. We value long-term partnerships and help our publishers scale with stable and profitable campaigns.
            </p>
            <div className="space-y-3">
              <p className="font-bold text-slate-900 dark:text-white mb-4">Why Work With Us:</p>
              {[
                "Daily & weekly campaigns",
                "Competitive payouts",
                "Multiple verticals & GEOs",
                "Fast tracking & reporting",
                "Dedicated affiliate managers",
                "Timely payments"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium dark:font-normal dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}
