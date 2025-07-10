import { SingleProductCard } from "../SingleProductCard";
import React from "react";

interface ListProductCardItemProps {
  product: any;
  idx: number;
  handleAddToCart: (product: any) => void;
  onCardClick: () => void;
}

export default function ListProductCardItem({ product, idx, handleAddToCart, onCardClick }: ListProductCardItemProps) {
  return (
    <div className="w-full flex justify-center">
      <SingleProductCard
        {...product}
        addToCart={e => {
          if (e && e.stopPropagation) e.stopPropagation();
          handleAddToCart(product);
        }}
        onCardClick={onCardClick}
      />
    </div>
  );
}
