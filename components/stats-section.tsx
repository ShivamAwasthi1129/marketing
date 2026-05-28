"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CheckCircle } from "lucide-react"

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const reasons = [
    "Performance-focused strategies",
    "Trusted global partnerships",
    "Transparent communication",
    "Advanced tracking solutions",
    "Scalable growth opportunities",
    "Experienced affiliate marketing team"
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-header-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".reason-item", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-4 py-24 sm:px-6 lg:px-8 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-50/95 dark:bg-[#0a0a0a]/95 z-0" />

      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">The Clixnova Media Advantage</p>
          <h2 className="stats-header-title text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
            Why <span className="text-yellow-500">Choose Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-yellow-500/20">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item flex items-center gap-4 group p-4 rounded-xl hover:bg-yellow-500/10 transition-colors">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
