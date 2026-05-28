"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"
import { NavbarMain } from "@/components/navbar-main"
import { FloatingSocialBar } from "@/components/floating-social-bar"
import { Footer } from "@/components/footer"
import { storage, type ContactMessage } from "@/lib/storage"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function ContactFormContent() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const searchParams = useSearchParams()
  const sourceParam = searchParams.get("source")

  const source = sourceParam === "advertisers"
    ? "For Advertisers"
    : sourceParam === "publishers"
      ? "For Publishers & Traffic Sources"
      : "General Inquiry"

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    teamsId: "",
    email: "",
    message: "",
  })
  const [phone, setPhone] = useState<string | undefined>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const messages = storage.getMessages()
      const newMessage: any = {
        id: `msg_${Date.now()}`,
        name: formData.name,
        company: formData.company,
        teamsId: formData.teamsId,
        phone: phone || "",
        email: formData.email,
        source: source,
        message: formData.message,
        createdAt: new Date().toISOString(),
      }

      messages.push(newMessage)
      storage.setMessages(messages)

      setSuccess(true)
      setFormData({ name: "", company: "", teamsId: "", email: "", message: "" })
      setPhone("")
    } catch (error) {
      console.error("Failed to send message:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_0.9fr]">
      <section className="rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 p-8 shadow-md dark:shadow-none shadow-black/30">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Send a message</p>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Contact Us</h2>
        </div>

        {success && (
          <Alert className="mb-6 border-yellow-500/20 bg-yellow-500/5 text-yellow-100">
            <CheckCircle className="w-4 h-4 text-yellow-400" />
            <AlertDescription className="text-yellow-100">
              Thanks! Your message is received. We’ll reply within one business day.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Inquiry Source</Label>
            <Input
              readOnly
              value={source}
              className="h-12 bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-300 font-semibold cursor-not-allowed"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-12 bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={handleInputChange}
                className="h-12 bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="h-12 bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 rounded-md px-3 flex items-center focus-within:ring-1 focus-within:ring-yellow-500">
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  className="w-full text-slate-900 dark:text-slate-100 custom-phone-input"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamsId">Teams ID / Skype / Telegram</Label>
            <Input
              id="teamsId"
              name="teamsId"
              type="text"
              placeholder="Your handle for quick communication"
              value={formData.teamsId}
              onChange={handleInputChange}
              className="h-12 bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share your campaign goals and target audience"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="bg-white dark:bg-black border border-slate-300 dark:border-yellow-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>

          <Button type="submit" className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>

      <aside className="space-y-6">
        <div className="rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 p-8 shadow-md dark:shadow-none shadow-black/30">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">Quick contact</p>
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Call</p>
              <a href="tel:+91 92179 02658" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-yellow-400">
                +91 92179 02658
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
              <a href="mailto:Clixnovamedia@gmail.com" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-yellow-400">
                Clixnovamedia@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">Remote-first, global lead generation</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 p-8 shadow-md dark:shadow-none shadow-black/30">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">Our process</p>
          <ul className="space-y-4 text-slate-600 dark:text-slate-300">
            <li className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
              <span className="font-semibold text-slate-900 dark:text-white">1.</span> Strategy audit and campaign blueprint
            </li>
            <li className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
              <span className="font-semibold text-slate-900 dark:text-white">2.</span> Audience targeting and affiliate setup
            </li>
            <li className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
              <span className="font-semibold text-slate-900 dark:text-white">3.</span> Ongoing optimization and growth reporting
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
      <NavbarMain />
      <FloatingSocialBar />

      <main className="pt-16 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <section className="relative overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 p-10 shadow-md dark:shadow-none shadow-slate-200 mb-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Contact Clixnova Media</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white glitter-hover cursor-default">
                  Start a performance-led growth campaign that moves your business forward.
                </h1>
                <p className="max-w-3xl text-slate-800 dark:text-slate-300 font-medium leading-relaxed text-lg">
                  Book a consultation with our affiliate and lead generation team to scale your ads, optimize conversions, and improve ROI.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+18885550123"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-white font-semibold shadow-sm dark:shadow-none shadow-yellow-400/20 hover:bg-yellow-400 transition"
                  >
                    Call Sales
                  </a>
                  <a
                    href="mailto:Clixnovamedia@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-yellow-500/20 bg-slate-50 dark:bg-black/70 px-5 py-3 text-yellow-400 font-semibold hover:bg-yellow-500/10 transition"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-slate-50 dark:bg-black p-8">
                <div className="space-y-6">
                  <div className="rounded-3xl bg-white dark:bg-[#0a0a0a]/80 p-6 border border-yellow-500/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-2">Quick response</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">Replies in 24 hours</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white dark:bg-[#0a0a0a]/80 p-5 border border-yellow-500/10">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Strategy</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">Affiliate-first lead campaigns.</p>
                    </div>
                    <div className="rounded-3xl bg-white dark:bg-[#0a0a0a]/80 p-5 border border-yellow-500/10">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Performance</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">Real-time analytics for every campaign.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Suspense fallback={<div>Loading form...</div>}>
            <ContactFormContent />
          </Suspense>

        </div>
      </main>

      <Footer />
    </div>
  )
}
