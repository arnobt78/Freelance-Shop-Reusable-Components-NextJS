"use client";

import HeroSection from "@/components/Home/HeroSection";
import ProductsSection from "@/components/Home/ProductsSection";
import FeatureCard from "@/components/FeatureCard";
import ReviewCard from "@/components/ReviewCard";
import AnimationsAndStyles from "@/components/Home/AnimationsAndStyles";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-[18px] w-full overflow-x-hidden">
      {/* Header and CartSidebar are now global in layout.tsx */}
      <HeroSection />
      <FeatureCard />
      <ProductsSection />
      <ReviewCard />
      <AnimationsAndStyles />
    </div>
  );
}

