"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Star } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: "url(/images/hero-car.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-gold fill-current" />
            ))}
            <span className="ml-3 text-white/80 font-medium">Premium Mobile Detailing</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 text-balance leading-tight">
            Luxury <span className="gradient-text">Detailing</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Comes to You</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
            We come to you with convenience and flawless quality every time
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-gold hover-glow px-10 py-5 text-xl font-semibold tracking-wide"
            >
              Book Your Detail
            </Button>
            <a
              href="tel:484-957-7895"
              className="flex items-center space-x-3 text-white hover:text-gold transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-gold/20 transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-xl font-medium">(484) 957-7895</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white/80 hover:text-white transition-colors">
            <MapPin className="h-6 w-6 text-gold" />
            <span className="text-lg">Bethlehem, PA & Surrounding Areas</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center hover:border-gold transition-colors cursor-pointer">
          <div className="w-1.5 h-4 bg-gold rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
