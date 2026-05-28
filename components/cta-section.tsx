import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8 text-slate-900 dark:text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-50/95 dark:bg-[#0a0a0a]/95 z-0" />

      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Ready To Grow Your Business?</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Partner with <span className="text-yellow-500">Clixnova Media</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed text-xl">
            Scale your campaigns, reach quality audiences, and achieve measurable results through performance marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold shadow-md dark:shadow-none transition-all duration-300 hover:scale-105 rounded-full px-8 h-14 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/60 rounded-full px-8 h-14 text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
