// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ProductPosterCard from "@/components/ProductDetail/ProductDetail/ProductPosterCard";
import ProductDetailDescriptionSection from "@/components/ProductDetail/ProductDetail/ProductDetailDescriptionSection";
import ProductDetailReviewsSection from "@/components/ProductDetail/ProductDetail/ProductDetailReviewsSection";
import { ProductPurchaseSection } from "./ProductPurchaseSection";
import { ProductCardReel } from "./ProductCardReel";

import { useSearchParams } from "next/navigation";
import { products } from "../../data/products";

// Get product index from query param, fallback to 0

interface ProductDetailLayoutProps {
  product?: any;
}

export const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({ product: propProduct }) => {
  const searchParams = useSearchParams();
  const idx = Number(searchParams.get("idx")) || 0;
  const product = propProduct || products[idx] || products[0];
  const [quantity, setQuantity] = useState(1);

const mockDescription = {
  brand: "Velo",
  flavor: "Mint",
  strength: "Medium",
  nicotinePerPouch: "6 mg",
  description: "",
  howToUse: "",
};

const mockReelProducts = Array(5).fill({
  productImage: "/product-image.png",
  productName: "Klint Artic Mint",
  salePrice: "€ 3,60",
  originalPrice: "€ 4,99",
  saleLabel: "Sale 30%",
  shippingLabel: "Free shipping",
});

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Main Content */}
      <div className="w-full max-w-[1440px] bg-white flex flex-col lg:flex-row gap-8 mx-auto pt-16 px-1 sm:px-32">
        {/* Left: Product Card and Description (on desktop), only Product Poster Card on mobile */}
        <div className="flex flex-col gap-8 w-full bg-white lg:w-[687px]">
          {/* Product Poster Card for Product Detail */}
          <ProductPosterCard product={product} />
          {/* Description Section with SVG background (hidden on mobile, shown on desktop) */}
          <ProductDetailDescriptionSection product={product} className="hidden sm:block" />
        </div>
        {/* Right: Purchase Section with SVG background - fixed on large screens */}
        <div className="flex-1 flex flex-col items-start min-w-full sm:min-w-[350px] max-w-full sm:max-w-[687px] mx-auto px-1 sm:px-0">
          <div className="relative w-full bg-white overflow-visible lg:sticky lg:top-0">
            <div className="relative z-10">
              <ProductPurchaseSection
                productName={product.productName}
                productImage={product.productImage}
                brand={product.brand}
                stockStatus={product.stockStatus}
                salePrice={product.salePrice || ""}
                originalPrice={product.originalPrice || ""}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onBuyNow={() => {}}
                onAddToCart={() => {}}
                productId={idx}
                slug={product.slug}
              />
            </div>
          </div>
          {/* Description Section for mobile only (below purchase section) */}
          <ProductDetailDescriptionSection product={product} className="block sm:hidden w-full" />
        </div>
      </div>
      {/* Product Card Reel */}
      <div className="w-full max-w-[1440px] mx-auto mt-16">
        <ProductCardReel products={products.slice(0, 6)} />
      </div>
      {/* Reviews Section */}
      <ProductDetailReviewsSection />
    </div>
  );
};
