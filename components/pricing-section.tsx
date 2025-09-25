"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Essential",
    price: "$89",
    description: "Perfect for regular maintenance",
    features: ["Exterior wash & dry", "Interior vacuum", "Window cleaning", "Tire dressing", "Basic wax application"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$149",
    description: "Our most popular package",
    features: [
      "Everything in Essential",
      "Clay bar treatment",
      "Paint decontamination",
      "Interior deep clean",
      "Leather conditioning",
      "Premium wax protection",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$249",
    description: "Ultimate detailing experience",
    features: [
      "Everything in Premium",
      "Paint correction (1-step)",
      "Ceramic coating application",
      "Engine bay cleaning",
      "Headlight restoration",
      "6-month protection guarantee",
    ],
    popular: false,
  },
]

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Choose the perfect package for your vehicle. All services include mobile convenience with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative hover-lift ${
                plan.popular ? "border-gold shadow-xl scale-105" : "border-gray-200 shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">per service</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular ? "bg-gold hover:bg-gold-dark text-black" : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Custom packages available for fleet services and specialty vehicles</p>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
