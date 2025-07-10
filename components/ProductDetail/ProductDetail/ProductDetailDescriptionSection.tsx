import { ProductCardDescriptionSection } from "../ProductCardDescriptionSection";
import React from "react";

interface ProductDetailDescriptionSectionProps {
  product: any;
  className?: string;
}

export default function ProductDetailDescriptionSection({ product, className = "" }: ProductDetailDescriptionSectionProps) {
  return (
    <div className={`relative bg-white overflow-visible ${className}`}>
      <div className="relative z-10 p-6">
        <ProductCardDescriptionSection
          brand={product.brand}
          flavor={product.flavor}
          strength={product.strength}
          nicotinePerPouch={product.nicotinePerPouch}
          description={product.description}
          howToUse={product.howToUse}
        />
      </div>
    </div>
  );
}
