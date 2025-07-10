import React from "react";
import ProductReelCard from "./ProductReelCard";

interface ProductReelGridProps {
  products: any[];
  cardsToShow: number;
  onProductClick?: (product: any) => void;
}

const ProductReelGrid: React.FC<ProductReelGridProps> = ({ products, cardsToShow, onProductClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-7xl">
      {products.slice(0, cardsToShow).map((product, idx) => (
        <div className="w-full flex justify-center" key={idx}>
          <ProductReelCard product={product} onProductClick={onProductClick} products={products} />
        </div>
      ))}
    </div>
  );
};

export default ProductReelGrid;
