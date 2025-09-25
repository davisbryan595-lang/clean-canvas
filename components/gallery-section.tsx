"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    before: "/images/before-after-1.jpg",
    after: "/images/hero-car.jpg",
    title: "Full Detail Transformation",
    description: "Complete exterior and interior restoration",
  },
  {
    before: "/images/before-after-2.jpg",
    after: "/images/ceramic-coating.jpg",
    title: "Ceramic Coating Application",
    description: "Long-lasting protection with incredible gloss",
  },
  {
    before: "/images/paint-correction.jpg",
    after: "/images/hero-car.jpg",
    title: "Paint Correction Results",
    description: "Swirl and scratch removal for perfect finish",
  },
  {
    before: "/images/interior-detail.jpg",
    after: "/images/interior-detail.jpg",
    title: "Interior Deep Clean",
    description: "Professional interior restoration and protection",
  },
]

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            See the incredible transformations we achieve with our premium detailing services. Every vehicle tells a
            story of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 sm:h-80">
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.title} - Before`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Before</span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.title} - After`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">After</span>
                    </div>
                  </div>
                </div>

                {/* Overlay Content */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Ready to see your vehicle transformed?{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-gold hover:text-gold-dark font-semibold underline"
            >
              Book your detail today
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
