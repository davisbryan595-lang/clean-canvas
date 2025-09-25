"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Car, Sparkles, Shield, Wrench, Droplets, Zap, Eye, Settings } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Basic Detail",
    description: "Complete interior and exterior cleaning for a fresh, clean look",
    image: "/images/hero-car.jpg",
  },
  {
    icon: Sparkles,
    title: "Full Service Detail",
    description: "Comprehensive interior and exterior detailing with premium products",
    image: "/images/interior-detail.jpg",
  },
  {
    icon: Shield,
    title: "Ceramic Coatings",
    description: "Long-lasting protection with superior gloss and hydrophobic properties",
    image: "/images/ceramic-coating.jpg",
  },
  {
    icon: Wrench,
    title: "Paint Correction",
    description: "Professional paint restoration to remove swirls, scratches, and imperfections",
    image: "/images/paint-correction.jpg",
  },
  {
    icon: Droplets,
    title: "Wax & Tire Dressing",
    description: "Premium wax application and tire conditioning for lasting shine",
    image: "/images/hero-car.jpg",
  },
  {
    icon: Zap,
    title: "Decontamination",
    description: "Deep cleaning to remove embedded contaminants and restore paint clarity",
    image: "/images/ceramic-coating.jpg",
  },
  {
    icon: Eye,
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to oxidized and yellowed headlights",
    image: "/images/paint-correction.jpg",
  },
  {
    icon: Settings,
    title: "Engine Bay Cleaning",
    description: "Professional engine bay detailing for a pristine under-hood appearance",
    image: "/images/engine-bay.jpg",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            From basic maintenance to advanced paint correction, we offer comprehensive mobile detailing services that
            bring showroom quality to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover-lift cursor-pointer overflow-hidden border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
