"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight, TrendingUp, Users, Target, Award, ChartLine } from "lucide-react"

const heroPillars = [
  { icon: TrendingUp, label: "PERFORMANCE" },
  { icon: Users, label: "TRUSTED" },

  { icon: Target, label: "RESULTS" },
  { icon: Award, label: "GROWTH" },
]

const heroRow = [
  { icon: TrendingUp, title: "Affiliate Marketing" },
  { icon: Users, title: "Lead Generation" },
  { icon: Target, title: "Campaign Management" },
  { icon: ChartLine, title: "Performance Optimization" },
]

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-pillars",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
          )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 bg-scroll md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-50/75 dark:bg-black/80 z-0" />

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl z-0 hidden md:block" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-yellow-500/10 blur-3xl z-0 hidden md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-white dark:bg-[#0a0a0a]/70 px-4 py-3 text-sm text-yellow-400 shadow-sm dark:shadow-none shadow-slate-100">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-500 text-white font-black">LA</span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">LeadAdzMedia</p>
                <p className="text-[11px] uppercase tracking-[0.4em] text-yellow-400/80">Affiliate & Performance Marketing</p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="hero-title max-w-3xl text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[0.95] hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors duration-300">
                Quality traffic.
                <span className="block text-yellow-600 dark:text-yellow-500">Better leads.</span>
                <span className="block">Real results.</span>
              </h1>
              <p className="hero-copy max-w-2xl text-lg leading-8 text-slate-800 dark:text-slate-200 font-medium sm:text-xl">
                At LeadAdzMedia, we connect brands with high-quality traffic sources to deliver measurable growth, real users, and performance-focused results. From affiliate marketing to media buying and lead generation, we help businesses scale faster with data-driven strategies and global reach.
              </p>
            </div>

            <div className="hero-actions flex flex-row gap-2 sm:gap-4 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-md dark:shadow-none shadow-yellow-400/20 transition-transform duration-300 hover:-translate-y-0.5 flex-1 sm:flex-none"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-500/40 bg-white dark:bg-[#0a0a0a]/70 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-yellow-400 transition hover:border-yellow-500 hover:bg-yellow-500/10 flex-1 sm:flex-none"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroPillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={index}
                    className="hero-pillars rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-5 text-center backdrop-blur-xl transition-colors duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/10"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">{pillar.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hero-image relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]/80 p-4 shadow-md dark:shadow-none shadow-slate-200 sm:p-6">
            <Image
              src="/laptop.jpg"
              alt="LeadAdzMedia dashboard preview"
              width={900}
              height={560}
              className="w-full rounded-[1.5rem]"
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-full border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/80 p-4 shadow-sm dark:shadow-none shadow-slate-100">
          <div className="grid gap-3 sm:gap-3 grid-cols-2 sm:grid-cols-4">
            {heroRow.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 dark:bg-black/70 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 transition group hover:bg-yellow-500/10 hover:text-yellow-600 dark:hover:text-white">
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/15 flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-center sm:text-left block text-[11px] sm:text-sm leading-tight">{item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
