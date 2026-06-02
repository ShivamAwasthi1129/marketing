"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Star, Zap, Shield, Clock, Users } from "lucide-react"
import { NavbarMain } from "@/components/navbar-main"
import { FloatingSocialBar } from "@/components/floating-social-bar"
import { Footer } from "@/components/footer"
import { PricingFAQ } from "@/components/pricing-faq"
import { PricingTestimonials } from "@/components/pricing-testimonials"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small agencies getting started",
    features: [
      "Up to 10 clients",
      "Basic SEO audits",
      "Standard reports",
      "Email support",
      "5GB storage",
      "Basic analytics",
    ],
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Most popular for growing agencies",
    features: [
      "Up to 50 clients",
      "Advanced SEO audits",
      "White-label reports",
      "Priority support",
      "Analytics dashboard",
      "50GB storage",
      "API access",
      "Custom branding",
    ],
    popular: true,
    color: "border-primary ring-2 ring-primary/20",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large agencies and teams",
    features: [
      "Unlimited clients",
      "Custom audits",
      "Advanced API access",
      "Dedicated support",
      "Custom integrations",
      "Unlimited storage",
      "Team collaboration",
      "Advanced analytics",
      "Custom reporting",
    ],
    popular: false,
    color: "border-gray-200",
  },
]

const comparisonFeatures = [
  { feature: "Client Management", starter: "10 clients", pro: "50 clients", enterprise: "Unlimited" },
  { feature: "SEO Audits", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Reports", starter: "Standard", pro: "White-label", enterprise: "Custom branded" },
  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
  { feature: "Storage", starter: "5GB", pro: "50GB", enterprise: "Unlimited" },
  { feature: "API Access", starter: "❌", pro: "✅", enterprise: "Advanced" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
      <NavbarMain />
      {/* <FloatingSocialBar /> */}

      <main className="pt-16 pb-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center text-slate-400 hover:text-yellow-400 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/80 p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]"
          >
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">Pricing</p>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">Pricing built for scalable lead generation.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Choose a plan that fits your growth goals. Every package includes our core launch, optimization,
                and reporting systems with transparent budgeting.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-yellow-500 text-white px-4 py-1 shadow-sm dark:shadow-none shadow-yellow-400/20">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <Card className={`h-full rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 p-6 shadow-md dark:shadow-none shadow-slate-100 ${plan.color}`}>
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">{plan.name}</CardTitle>
                      <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                      <div className="mt-6">
                        <span className="text-5xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                        <span className="text-lg text-slate-400">{plan.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                            <Check className="w-5 h-5 text-yellow-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="block">
                        <Button size="lg" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                          Start Your Project
                        </Button>
                      </Link>

                      <p className="text-center text-sm text-slate-400">
                        14-day free trial • No credit card required
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-black text-slate-900 dark:text-white text-center mb-10">
              Compare <span className="text-yellow-400">plan features</span>
            </h2>

            <Card className="overflow-hidden rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 shadow-md dark:shadow-none shadow-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-slate-600 dark:text-slate-300">
                  <thead>
                    <tr className="border-b border-yellow-500/10 bg-slate-50 dark:bg-black/80">
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">Starter</th>
                      <th className="text-center p-6 font-semibold text-yellow-400">Pro</th>
                      <th className="text-center p-6 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? "bg-slate-50 dark:bg-black/70" : "bg-white dark:bg-[#0a0a0a]/70"}>
                        <td className="p-6 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                        <td className="p-6 text-center text-slate-600 dark:text-slate-300">{row.starter}</td>
                        <td className="p-6 text-center text-yellow-400 font-semibold">{row.pro}</td>
                        <td className="p-6 text-center text-slate-600 dark:text-slate-300">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.section>

          <div className="mt-20 space-y-20">
            <PricingTestimonials />
            <PricingFAQ />
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 p-12 shadow-md dark:shadow-none shadow-slate-100"
          >
            <div className="text-center">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Need a custom growth package?</h3>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                If your campaign requires custom tracking, advanced audience stacks, or scaled lead generation, our team
                can build a bespoke plan around your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/seo-audit">
                  <Button size="lg" variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                    Preview Audit
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
