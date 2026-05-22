"use client"

import { motion } from "framer-motion"
import { NavbarMain } from "@/components/navbar-main"
import { FloatingSocialBar } from "@/components/floating-social-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  BarChart3,
  Globe,
  Users,
  TrendingUp,
  FileText,
  Zap,
  Shield,
  Target,
  Smartphone,
  Mail,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your website's visibility and rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      href: "/seo-audit",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced website performance monitoring and detailed analytics reporting.",
      features: ["PageSpeed Analysis", "Core Web Vitals", "Performance Monitoring", "Custom Reports"],
      color: "text-yellow-500",
      bgColor: "bg-blue-50",
      href: "/dashboard",
    },
    {
      icon: Globe,
      title: "Website Audits",
      description: "Complete website analysis covering performance, SEO, accessibility, and best practices.",
      features: ["Technical Audits", "Accessibility Testing", "Security Analysis", "Mobile Optimization"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "/seo-audit",
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Streamlined client onboarding and project management for digital marketing agencies.",
      features: ["Client Dashboard", "Project Tracking", "Team Collaboration", "White-label Reports"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      href: "/clients",
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Data-driven marketing strategies to accelerate your business growth and conversions.",
      features: ["Conversion Optimization", "A/B Testing", "Growth Hacking", "Marketing Automation"],
      color: "text-red-600",
      bgColor: "bg-red-50",
      href: "/contact",
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Professional, branded reports that you can share with clients and stakeholders.",
      features: ["White-label Branding", "PDF Export", "Automated Reports", "Custom Metrics"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      href: "/reports",
    },
  ]

  const additionalServices = [
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Make your website lightning fast with our performance optimization services.",
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security analysis to protect your website from vulnerabilities.",
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Increase your conversion rates with data-driven optimization strategies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your website performs perfectly on all mobile devices.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Effective email campaigns that engage your audience and drive results.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
      <NavbarMain />
      <FloatingSocialBar />

      <main className="pt-16 pb-20">
        <section className="relative overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 px-4 py-20 shadow-md dark:shadow-none shadow-slate-200">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="mx-auto max-w-6xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">Services</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">LeadAdsMedia service suite for data-driven growth.</h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                Build campaigns, scale paid media performance, and convert more leads with a modern service experience designed for growth teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                {/* <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                    Explore Pricing
                  </Button>
                </Link> */}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Core Services</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Solutions engineered for high-velocity growth.</h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From affiliate lead systems to analytics frameworks, these services are built to deliver more qualified demand and better returns.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="h-full rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/80 p-8 shadow-md dark:shadow-none shadow-slate-100 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white dark:bg-[#0a0a0a]">
                      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="h-2 w-2 rounded-full bg-yellow-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Link href={"#"} className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-slate-900 dark:text-white">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-slate-50 dark:bg-black">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Supporting Services</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">The tactical services that power every campaign.</h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From speed and mobile optimization to email funnels, these add-on services broaden your digital advantage.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/80 p-6 shadow-sm dark:shadow-none shadow-slate-100 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white dark:bg-[#0a0a0a]">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Ready to build the next high-converting funnel?</h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Talk to our growth team and map the right service package for your business with performance-first planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                    Talk to Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                {/* <Link href="/seo-audit">
                  <Button size="lg" variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                    Start Audit
                  </Button>
                </Link> */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
