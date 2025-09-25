"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/logo.png" alt="Clean Canvas Detailing" width={40} height={40} className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">Clean Canvas</h3>
                <p className="text-sm text-gray-400">DETAILING</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium mobile detailing services in Bethlehem, PA. We bring professional car care directly to your
              location with convenience and flawless quality every time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:484-957-7895" className="text-gray-400 hover:text-gold transition-colors">
                  (484) 957-7895
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:Superman091212@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                  Superman091212@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-gray-400">Bethlehem, PA & Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Basic Detail</li>
              <li className="text-gray-400">Full Service Detail</li>
              <li className="text-gray-400">Ceramic Coatings</li>
              <li className="text-gray-400">Paint Correction</li>
              <li className="text-gray-400">Wax & Tire Dressing</li>
              <li className="text-gray-400">Decontamination</li>
              <li className="text-gray-400">Headlight Restoration</li>
              <li className="text-gray-400">Engine Bay Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Clean Canvas Detailing. All rights reserved. | Professional mobile detailing services in Bethlehem,
            PA
          </p>
        </div>
      </div>
    </footer>
  )
}
