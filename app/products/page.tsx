"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Star, ChevronDown, Plus } from 'lucide-react'
import ReviewSection from "@/components/Review/ReviewSection";

import { ListProductCard } from "@/components/ProductCard/ListProductCard"
import { CategoryFilterMenuBar } from "@/components/CategoryFilter/CategoryFilterMenuBar"
import { useInitialFilter } from "./useInitialFilter"
import { products, ProductData } from "@/data/products"



export default function CategoryPage() {
  const initialFilter = useInitialFilter();
  // All cart logic is now handled globally via CartContext
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([])
  
  const productsPerPage = 9
  // Extract unique brands, flavors, strengths from real data
  const brands = Array.from(new Set(products.map((p: ProductData) => p.brand)));
  const flavors = Array.from(new Set(products.map((p: ProductData) => p.flavor)));
  const strengths = Array.from(new Set(products.map((p: ProductData) => p.strength)));

  const filteredProducts = products.filter((product: ProductData) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const flavorMatch = selectedFlavors.length === 0 || selectedFlavors.includes(product.flavor)
    const strengthMatch = selectedStrengths.length === 0 || selectedStrengths.includes(product.strength)
    return brandMatch && flavorMatch && strengthMatch
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  return (
    <div className="min-h-screen bg-white">
      {/* Header and CartSidebar are now global in layout.tsx */}
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3AF0F7]/10 to-[#8ef7fb]/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best selling</h1>
            <p className="text-gray-600 text-lg">Discover our most popular nicotine products</p>
          </div>
        </section>

        {/* Category Filter, Product List, and Pagination (Reusable Components) */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Category Filter */}
          <div className="mb-8 flex justify-center w-full">
            <CategoryFilterMenuBar
              onFilterChange={({ brands, flavors, strength }) => {
                setSelectedBrands(brands);
                setSelectedFlavors(flavors);
                setSelectedStrengths(strength);
              }}
              initialFilter={initialFilter}
            />
          </div>
          
          {/* Product List */}
          <div className="mb-8">
            <ListProductCard products={currentProducts} />
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewSection />
      </main>
    </div>
  )
}
