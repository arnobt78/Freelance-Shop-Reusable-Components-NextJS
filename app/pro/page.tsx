"use client"

// import Image from "next/image"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer"

export default function SnuzzProLanding() {
  const { cartItems, setCartItems, cartOpen, setCartOpen } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Sample products for search functionality
  const allProducts = [
    {
      id: 1,
      name: "Snuzz Classic",
      brand: "Snuzz",
      category: "Nicotine",
      price: 12.99,
      salePrice: 9.99,
      rating: 4.5,
      image: "SC",
    },
    {
      id: 2,
      name: "Snuzz Pro Edition",
      brand: "Snuzz",
      category: "Premium",
      price: 19.99,
      salePrice: 15.99,
      rating: 4.8,
      image: "SPE",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(ellipse at center, #d6fcff 0%, #e8fdff 50%, #ffffff 100%)",
      }}
    >
      {/* Header: Hide on any screen if cart is open */}
      {!cartOpen && <Header allProducts={allProducts} />}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-8 py-20 pt-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl">Take nicotine under control!</h1>

        <div className="space-y-2 mb-8">
          <p className="text-lg text-gray-700">Afraid of negative effects of nicotine on your health?</p>
          <p className="text-lg text-gray-700">Become professional snus user with snuzz PRO.</p>
        </div>

        <div className="flex items-center space-x-4 mb-20">
          <Button
            className="text-black font-medium px-8 py-3 rounded-md transition-all duration-300"
            style={{
              backgroundColor: "#22d3ee",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#06b6d4"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#22d3ee"
            }}
          >
            Try for free
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md transition-all duration-300"
          >
            Log in
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-black rounded-full p-2 mb-2">
            <ChevronDown className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm text-gray-600">Scroll Down</span>
        </div>
      </section>

      {/* Product Section */}
      <section className="flex flex-col items-center justify-center px-8 py-20 bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
          <div className="mb-8">
            <img
              src="/pro-logo.png"
              alt="Snuzz PRO"
              width={200}
              height={60}
              className="h-12 w-auto mx-auto mb-6"
              loading="lazy"
              draggable={false}
            />
            <div className="space-y-1 text-gray-500">
              <p>Unleash the Power of</p>
              <p>Knowledge with snuzz PRO</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-800">6+ hours of knowledge</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-800">Know the risks</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-800">Avoid addiction</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-800">Be healthy!</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-5xl font-bold text-gray-900">€10</span>
              <span className="text-gray-500 ml-2">per 14 days</span>
            </div>
          </div>

          <Button
            className="w-full bg-transparent border-2 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              borderColor: "#22d3ee",
              color: "#22d3ee",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(34, 211, 238, 0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            Try fro free
          </Button>
        </div>
      </section>
    </div>
  )
}
