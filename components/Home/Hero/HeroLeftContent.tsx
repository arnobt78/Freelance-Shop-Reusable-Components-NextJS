import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";

export default function HeroLeftContent() {
  return (
    <div className="flex flex-col justify-center items-start space-y-5 sm:space-y-6 md:space-y-8 w-full max-w-xl mx-auto lg:mx-0 pt-8 sm:pt-12 lg:pt-0">
      {/* Subheading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
      {/* Rating */}
      <div className="flex items-center space-x-2 mb-2">
        <Star className="w-5 h-5 text-black fill-black" />
        <span className="text-gray-700 font-medium text-sm">4.47 | 537 Reviews</span>
      </div>
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
        Never run out of snus again
      </h1>
      <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-2xl">
        Choose from huge sortiment of exclusive brands, flavors and strength for best price
        on market with free shipping.
      </p>
      {/* CTA Button */}
      <Link href="/products">
        <Button className="bg-[#3AF0F7] hover:bg-[#2de0e7] text-black font-medium px-7 py-6 rounded-xl text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          Buy now
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      {/* Stats with vertical dividers */}
      <HeroStats />
    </div>
  );
}
