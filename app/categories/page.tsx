"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronDown, Plus } from 'lucide-react'

import { Pagination } from "@/components/Pagination/Pagination"
import { ListProductCard } from "@/components/ProductCard/ListProductCard"
import { CategoryFilterMenuBar } from "@/components/CategoryFilter/CategoryFilterMenuBar"
import { useInitialFilter } from "./useInitialFilter"
import { products as allProducts } from "../data/products"

// Use ProductData from data/products.ts
import type { ProductData } from "../data/products";

// Use real product data
const mockProducts: ProductData[] = allProducts;

const mockReviews = [
  {
    id: 1,
    rating: 5,
    text: "Very good, I always buy from here. Very long lasting and good quality.",
    author: "Anonymous",
  },
  {
    id: 2,
    rating: 4,
    text: "Good product, fast delivery. Recommended!",
    author: "Anonymous",
  },
  {
    id: 3,
    rating: 5,
    text: "Excellent quality and great customer service.",
    author: "Anonymous",
  },
  {
    id: 4,
    rating: 4,
    text: "Fast shipping and good packaging. Will order again.",
    author: "Anonymous",
  },
]

export default function CategoryPage() {
  const initialFilter = useInitialFilter();
  // All cart logic is now handled globally via CartContext
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([])
  
  const productsPerPage = 9
  // Extract unique brands, flavors, strengths from real data
  const brands = Array.from(new Set(allProducts.map(p => p.brand)));
  const flavors = Array.from(new Set(allProducts.map(p => p.flavor)));
  const strengths = Array.from(new Set(allProducts.map(p => p.strength)));

  const filteredProducts = mockProducts.filter(product => {
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
          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Reviews</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockReviews.map((review) => (
                <Card key={review.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? "fill-[#3AF0F7] text-[#3AF0F7]" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {review.text}
                    </p>
                    <p className="text-gray-500 text-xs font-medium">
                      - {review.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
