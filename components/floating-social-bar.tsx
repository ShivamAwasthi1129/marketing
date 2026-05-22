"use client"

import { useState, useRef, useEffect } from "react"
import { Facebook, Linkedin, Github, Twitter, Instagram, Plus } from "lucide-react"

const socialLinks = [
  // { name: "Facebook", icon: Facebook, href: "https://facebook.com/onsmediagroup", color: "hover:text-yellow-500" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/LeadAdsMedia/",
    color: "hover:text-yellow-600",
  },
  // { name: "GitHub", icon: Github, href: "https://github.com/ShivamAwasthi1129", color: "hover:text-gray-900" },
  // { name: "Twitter", icon: Twitter, href: "https://twitter.com/onsmediagroup", color: "hover:text-blue-400" },
  // { name: "Instagram", icon: Instagram, href: "https://instagram.com/onsmediagroup", color: "hover:text-pink-600" },
]

export function FloatingSocialBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
        <div
          ref={containerRef}
          className="relative flex flex-col space-y-4 p-4 rounded-2xl backdrop-blur-md bg-white/50 dark:bg-black/50 border border-slate-300/50 dark:border-yellow-500/20 shadow-md dark:shadow-none"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            const iconElement = containerRef.current?.children[index] as HTMLElement
            let transform = ""

            if (iconElement) {
              const iconRect = iconElement.getBoundingClientRect()
              const containerRect = containerRef.current?.getBoundingClientRect()
              if (containerRect) {
                const iconCenterX = iconRect.left - containerRect.left + iconRect.width / 2
                const iconCenterY = iconRect.top - containerRect.top + iconRect.height / 2
                const distance = Math.sqrt(
                  Math.pow(mousePosition.x - iconCenterX, 2) + Math.pow(mousePosition.y - iconCenterY, 2),
                )

                if (distance < 60) {
                  const force = (60 - distance) / 60
                  const deltaX = (mousePosition.x - iconCenterX) * force * 0.3
                  const deltaY = (mousePosition.y - iconCenterY) * force * 0.3
                  transform = `translate(${deltaX}px, ${deltaY}px) scale(${1 + force * 0.2})`
                }
              }
            }

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full transition-all duration-200 bg-white/70 dark:bg-black/70 border border-transparent dark:border-yellow-500/20 ${social.color}`}
                style={{
                  transform,
                }}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-current transition-colors" />
              </a>
            )
          })}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden fixed left-4 bottom-4 z-30">
        <div className="relative">
          <div
            className={`flex flex-col space-y-2 mb-2 transition-all duration-300 ${
              isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors backdrop-blur-md bg-white/70 dark:bg-black/70 border border-slate-300/50 dark:border-yellow-500/20 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </a>
              )
            })}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-md dark:shadow-none border border-transparent dark:border-yellow-500/30 bg-gradient-to-br from-yellow-400 to-yellow-600"
            aria-label="Toggle social links"
          >
            <Plus className={`w-5 h-5 text-slate-900 dark:text-white transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </>
  )
}
