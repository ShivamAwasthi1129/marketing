"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder",
    company: "Pulse eCom",
    content:
      "Clixnova Media transformed our affiliate performance. Their data-driven approach and real-time optimization helped us scale revenue while reducing customer acquisition costs by 40%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Kapoor",
    role: "Marketing Head",
    company: "Nova FMCG",
    content:
      "The analytics dashboard and conversion tracking from Clixnova Media gave us complete visibility into campaign performance. Our lead quality improved 3x within the first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rahul Verma",
    role: "Brand Manager",
    company: "TechReach Solutions",
    content:
      "Working with Clixnova Media was a game-changer. Their creative teams and performance optimization experts delivered measurable results that exceeded our ROI targets.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Testimonial cards display without animation
      gsap.set(".testimonial-card", { opacity: 1, y: 0 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-slate-50 dark:bg-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="testimonial-header text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">What Our Clients Say</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
            Trusted by <span className="text-yellow-500">growth leaders</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hear from the brands that transformed their performance with Clixnova Media's affiliate and lead generation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-white dark:bg-[#0a0a0a] p-8 shadow-sm dark:shadow-none shadow-slate-100 transition-all duration-300 hover:border-yellow-500/40 hover:bg-white dark:bg-[#0a0a0a] hover:shadow-md dark:shadow-none hover:shadow-yellow-400/10"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/5 blur-2xl transition-all duration-300 group-hover:bg-yellow-500/10" />

              <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-500" />
                  ))}
                </div>

                <blockquote className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-yellow-500/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-500/20"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role} at <span className="text-yellow-400">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
