"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="Clean Canvas Detailing"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white tracking-tight">Clean Canvas</h1>
              <p className="text-sm text-gold font-medium -mt-1 tracking-widest">DETAILING</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-gold hover-glow px-6 py-3 text-base font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark border-t border-white/10 animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-all duration-300 w-full text-left rounded-lg font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-all duration-300 w-full text-left rounded-lg font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-all duration-300 w-full text-left rounded-lg font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-all duration-300 w-full text-left rounded-lg font-medium"
              >
                Contact
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="btn-gold w-full py-3 text-base font-semibold"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
