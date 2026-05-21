"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServicesPage;
var framer_motion_1 = require("framer-motion");
var navbar_main_1 = require("@/components/navbar-main");
var floating_social_bar_1 = require("@/components/floating-social-bar");
var footer_1 = require("@/components/footer");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
function ServicesPage() {
    var services = [
        {
            icon: lucide_react_1.Search,
            title: "SEO Optimization",
            description: "Comprehensive search engine optimization to improve your website's visibility and rankings.",
            features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
            color: "text-green-600",
            bgColor: "bg-green-50",
            href: "/seo-audit",
        },
        {
            icon: lucide_react_1.BarChart3,
            title: "Performance Analytics",
            description: "Advanced website performance monitoring and detailed analytics reporting.",
            features: ["PageSpeed Analysis", "Core Web Vitals", "Performance Monitoring", "Custom Reports"],
            color: "text-yellow-500",
            bgColor: "bg-blue-50",
            href: "/dashboard",
        },
        {
            icon: lucide_react_1.Globe,
            title: "Website Audits",
            description: "Complete website analysis covering performance, SEO, accessibility, and best practices.",
            features: ["Technical Audits", "Accessibility Testing", "Security Analysis", "Mobile Optimization"],
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            href: "/seo-audit",
        },
        {
            icon: lucide_react_1.Users,
            title: "Client Management",
            description: "Streamlined client onboarding and project management for digital marketing agencies.",
            features: ["Client Dashboard", "Project Tracking", "Team Collaboration", "White-label Reports"],
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            href: "/clients",
        },
        {
            icon: lucide_react_1.TrendingUp,
            title: "Growth Marketing",
            description: "Data-driven marketing strategies to accelerate your business growth and conversions.",
            features: ["Conversion Optimization", "A/B Testing", "Growth Hacking", "Marketing Automation"],
            color: "text-red-600",
            bgColor: "bg-red-50",
            href: "/contact",
        },
        {
            icon: lucide_react_1.FileText,
            title: "Custom Reports",
            description: "Professional, branded reports that you can share with clients and stakeholders.",
            features: ["White-label Branding", "PDF Export", "Automated Reports", "Custom Metrics"],
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
            href: "/reports",
        },
    ];
    var additionalServices = [
        {
            icon: lucide_react_1.Zap,
            title: "Speed Optimization",
            description: "Make your website lightning fast with our performance optimization services.",
        },
        {
            icon: lucide_react_1.Shield,
            title: "Security Audits",
            description: "Comprehensive security analysis to protect your website from vulnerabilities.",
        },
        {
            icon: lucide_react_1.Target,
            title: "Conversion Optimization",
            description: "Increase your conversion rates with data-driven optimization strategies.",
        },
        {
            icon: lucide_react_1.Smartphone,
            title: "Mobile Optimization",
            description: "Ensure your website performs perfectly on all mobile devices.",
        },
        {
            icon: lucide_react_1.Mail,
            title: "Email Marketing",
            description: "Effective email campaigns that engage your audience and drive results.",
        },
    ];
    return (<div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
      <navbar_main_1.NavbarMain />
      <floating_social_bar_1.FloatingSocialBar />

      <main className="pt-16 pb-20">
        <section className="relative overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/70 px-4 py-20 shadow-md dark:shadow-none shadow-slate-200">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"/>
          <div className="mx-auto max-w-6xl text-center">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">Services</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">LeadAdzMedia service suite for data-driven growth.</h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                Build campaigns, scale paid media performance, and convert more leads with a modern service experience designed for growth teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <link_1.default href="/contact">
                  <button_1.Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                    Start Your Project
                    <lucide_react_1.ArrowRight className="w-4 h-4 ml-2"/>
                  </button_1.Button>
                </link_1.default>
                <link_1.default href="/pricing">
                  <button_1.Button size="lg" variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                    Explore Pricing
                  </button_1.Button>
                </link_1.default>
              </div>
            </framer_motion_1.motion.div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Core Services</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Solutions engineered for high-velocity growth.</h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From affiliate lead systems to analytics frameworks, these services are built to deliver more qualified demand and better returns.
              </p>
            </framer_motion_1.motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {services.map(function (service, index) {
            var Icon = service.icon;
            return (<framer_motion_1.motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6 }}>
                    <div className="h-full rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/80 p-8 shadow-md dark:shadow-none shadow-slate-100 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white dark:bg-[#0a0a0a]">
                      <div className={"mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500"}>
                        <Icon className="h-7 w-7"/>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                      <div className="space-y-3 mb-8">
                        {service.features.map(function (feature) { return (<div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="h-2 w-2 rounded-full bg-yellow-500"/>
                            {feature}
                          </div>); })}
                      </div>
                      <link_1.default href={"#"} className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-slate-900 dark:text-white">
                        Learn more
                        <lucide_react_1.ArrowRight className="h-4 w-4"/>
                      </link_1.default>
                    </div>
                  </framer_motion_1.motion.div>);
        })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-slate-50 dark:bg-black">
          <div className="mx-auto max-w-6xl">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Supporting Services</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">The tactical services that power every campaign.</h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From speed and mobile optimization to email funnels, these add-on services broaden your digital advantage.
              </p>
            </framer_motion_1.motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map(function (service, index) {
            var Icon = service.icon;
            return (<framer_motion_1.motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }} whileHover={{ scale: 1.02 }}>
                    <div className="rounded-[2rem] border border-yellow-500/15 bg-white dark:bg-[#0a0a0a]/80 p-6 shadow-sm dark:shadow-none shadow-slate-100 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white dark:bg-[#0a0a0a]">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500">
                        <Icon className="h-6 w-6"/>
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </framer_motion_1.motion.div>);
        })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Ready to build the next high-converting funnel?</h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Talk to our growth team and map the right service package for your business with performance-first planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <link_1.default href="/contact">
                  <button_1.Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm dark:shadow-none shadow-yellow-400/20">
                    Talk to Sales
                    <lucide_react_1.ArrowRight className="w-4 h-4 ml-2"/>
                  </button_1.Button>
                </link_1.default>
                <link_1.default href="/seo-audit">
                  <button_1.Button size="lg" variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                    Start Audit
                  </button_1.Button>
                </link_1.default>
              </div>
            </framer_motion_1.motion.div>
          </div>
        </section>
      </main>

      <footer_1.Footer />
    </div>);
}
