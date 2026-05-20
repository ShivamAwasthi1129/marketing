"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Globe, Users, Target, TrendingUp, Zap, BarChart } from "lucide-react"

const specialties = [
  { icon: Globe, title: "Affiliate Marketing" },
  { icon: TrendingUp, title: "Performance Campaigns" },
  { icon: Users, title: "Lead Generation" },
  { icon: Target, title: "User Acquisition" },
  { icon: Zap, title: "Media Buying" },
  { icon: BarChart, title: "Global Traffic Solutions" },
]

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
      gsap.from(".feature-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
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
    <section id="services" ref={sectionRef} className="relative py-24 px-4 bg-slate-50 dark:bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="feature-header text-center mb-16 space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-600 dark:text-yellow-500 font-semibold">About Us</p>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors duration-300">
            Leadadzmedia is a fast-growing <span className="text-yellow-600 dark:text-yellow-500">performance marketing and affiliate network</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
            Focused on helping advertisers and publishers achieve sustainable growth. Our team works closely with brands, agencies, and traffic partners to create campaigns that maximize ROI, improve conversions, and build long-term partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="feature-card group relative">
                <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a] rounded-xl border border-yellow-500/20 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5 transition-all duration-300" />
                <div className="relative p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
