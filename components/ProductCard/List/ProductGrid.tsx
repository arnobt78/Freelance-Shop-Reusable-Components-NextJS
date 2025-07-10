import React from "react";
import ListProductCardItem from "./ListProductCardItem";
import ProductGridEmpty from "./ProductGridEmpty";

interface ProductGridProps {
  products: any[];
  handleAddToCart: (product: any) => void;
  onCardClick: (product: any, idx: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, handleAddToCart, onCardClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-5xl mt-6 sm:px-2 min-h-[200px]">
    {products.length > 0 ? (
      products.map((product, idx) => (
        <ListProductCardItem
          key={product.id || idx}
          product={product}
          idx={idx}
          handleAddToCart={handleAddToCart}
          onCardClick={() => onCardClick(product, idx)}
        />
      ))
    ) : (
      <ProductGridEmpty />
    )}
  </div>
);

export default ProductGrid;
