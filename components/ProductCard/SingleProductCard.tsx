"use client";

// import Image from "next/image";

import React from "react";
import TopBadges from "./Single/TopBadges";
import ProductImage from "./Single/ProductImage";
import ProductInfo from "./Single/ProductInfo";
import AddToCartButton from "./Single/AddToCartButton";

export type StockStatus = 'in_stock' | 'low_stock' | 'last_3' | 'no_stock';

interface SingleProductCardProps {
  productImage: string;
  productName: string;
  salePrice?: string;
  originalPrice: string;
  saleLabel?: string;
  shippingLabel: string;
  stockStatus: StockStatus;
  addToCart?: (e?: React.MouseEvent) => void;
  onCardClick?: () => void;
}

export const SingleProductCard: React.FC<SingleProductCardProps> = ({
  productImage,
  productName,
  salePrice,
  originalPrice,
  saleLabel,
  shippingLabel,
  stockStatus,
  addToCart,
  onCardClick,
}) => {
  return (
    <div
      className="relative w-[160px] h-[240px] sm:w-full sm:max-w-[248px] sm:h-[329px] rounded-[16px] mx-auto overflow-hidden shadow-lg flex-shrink hover:scale-[1.01] transition-transform duration-300 ease-in-out cursor-pointer"
      style={{
        background: "linear-gradient(180deg, #CEF6F8 0%, #F0F1F1 100%)",
        minWidth: 0,
      }}
      onClick={onCardClick}
    >
      {/* Top badges */}
      <TopBadges saleLabel={saleLabel} shippingLabel={shippingLabel} />

      {/* Product image */}
      <ProductImage productImage={productImage} productName={productName} />

      {/* Product name, prices, and Add to Basket (bottom area) */}
      <div className="absolute left-2 right-2 bottom-3 flex flex-row items-end justify-between">
        <ProductInfo productName={productName} salePrice={salePrice} originalPrice={originalPrice} />
        <AddToCartButton addToCart={addToCart} />
      </div>
    </div>
  );
};
