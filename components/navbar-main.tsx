"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserMenu } from "@/components/user-menu"
import { ServicesDropdown } from "@/components/services-dropdown"
import { getCurrentUser } from "@/lib/auth"
import { ThemeToggle } from "@/components/theme-toggle"

export function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState(getCurrentUser())
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const scrollY = window.scrollY

      setIsScrolled(scrollY > 10)
      lastScrollY = scrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setUser(getCurrentUser())
  }, [pathname])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const handleUserLogout = () => {
    setUser(null)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-in-out overflow-x-hidden ${
        isScrolled
          ? "bg-white/95 dark:bg-black/80 backdrop-blur-xl shadow-md dark:shadow-none shadow-slate-200/50 border-b border-slate-200 dark:border-yellow-500/10"
          : "bg-white/90 dark:bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 max-w-full">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="LeadAdsMedia" width={75} height={50} className="object-contain block dark:hidden" />
            <Image src="/logo1.png" alt="LeadAdsMedia" width={75} height={50} className="object-contain hidden dark:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 text-slate-700 dark:text-slate-200 hover:text-yellow-500 flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-yellow-500 after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-yellow-400 after:rounded-full"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919958241284"
              className="inline-flex items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-yellow-400 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-500/15 hover:text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <ThemeToggle />
            {user ? <UserMenu user={user} onLogout={handleUserLogout} /> : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 bg-white dark:bg-[#0a0a0a]/70 rounded-lg border border-yellow-500/20 transition-colors flex-shrink-0 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 text-slate-900 dark:text-slate-100 ${isMenuOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"}`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 text-slate-900 dark:text-slate-100 ${isMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[28rem] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-yellow-500/10 pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 text-slate-700 dark:text-slate-200 hover:text-yellow-500 hover:translate-x-2 ${
                    pathname === item.href ? "text-yellow-500" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-yellow-500/10">
                <a
                  href="tel:+919958241284"
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-yellow-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">Call Support</span>
                </a>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  {user ? <UserMenu user={user} onLogout={handleUserLogout} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
