import { Facebook, Linkedin, Github, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-50 dark:bg-black text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.18),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),transparent_18%)]" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/80 p-8 shadow-md dark:shadow-none shadow-slate-950/40 backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500 ring-1 ring-yellow-500/20">
                  <span className="text-xl font-black">L</span>
                </div>
                <div>
                  <span className="font-montserrat font-bold text-xl text-slate-900 dark:text-white">LeadAdzMedia</span>
                  <p className="text-sm text-slate-400">Performance marketing for ambitious brands.</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Growth-focused digital campaigns, analytics-led SEO, and revenue-driving ad strategies crafted for modern lead generation.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    href: "https://facebook.com/LeadAdzMedia",
                    label: "Facebook",
                    icon: Facebook,
                  },
                  {
                    href: "https://linkedin.com/company/LeadAdzMedia",
                    label: "LinkedIn",
                    icon: Linkedin,
                  },
                  {
                    href: "https://twitter.com/LeadAdzMedia",
                    label: "Twitter",
                    icon: Twitter,
                  },
                  {
                    href: "https://instagram.com/LeadAdzMedia",
                    label: "Instagram",
                    icon: Instagram,
                  },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/15 bg-yellow-500/5 text-yellow-400 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500/15 hover:text-yellow-500"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-montserrat font-semibold text-lg text-slate-900 dark:text-white">Services</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Conversion-focused ads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    SEO performance audits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Paid media scaling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Analytics & reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Lead generation systems
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-montserrat font-semibold text-lg text-slate-900 dark:text-white">Company</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="/about" className="hover:text-yellow-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-yellow-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-500 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-yellow-500 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-yellow-500 transition-colors">
                    Resource Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-montserrat font-semibold text-lg text-slate-900 dark:text-white">Contact</h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <span>Leadadsmedia8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <span>+1 (888) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span>Remote-first, global lead generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/10 mt-12 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
            <span>© {currentYear} LeadAdzMedia. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/privacy" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </a>
              <span className="text-slate-600 dark:text-slate-300">|</span>
              <span>
                Crafted for high-velocity B2B growth teams.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
