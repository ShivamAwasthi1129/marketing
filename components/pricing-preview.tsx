"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Growth",
    price: "₹39,999",
    period: "/month",
    description: "Ideal for startups and small brands in Delhi.",
    features: ["Paid media setup", "SEO foundation", "Creative ads", "Monthly reporting"],
    popular: false,
  },
  {
    name: "Scale",
    price: "₹79,999",
    period: "/month",
    description: "Best for growth-focused businesses ready to scale.",
    features: ["Multi-channel campaigns", "Conversion optimization", "Data dashboards", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large brands and agencies.",
    features: ["Dedicated team", "Custom integrations", "Advanced analytics", "Brand growth roadmap"],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Transparent pricing for real digital growth
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty">
            Choose the right package for your brand, or request a custom plan built around your Delhi marketing goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
                </div>
              )}

              <Card className={`h-full border-0 shadow-md dark:shadow-none transition-all duration-300 ${plan.popular ? "ring-2 ring-cyan-400" : "bg-white dark:bg-[#0a0a0a]"}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-montserrat font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-300">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-700 dark:text-slate-200">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="block">
                    <Button
                      className="w-full group"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Talk to us
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">Need a tailored enterprise solution? Let's design it together.</p>
          <Link href="/contact">
            <Button variant="outline">Schedule a Strategy Call</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
