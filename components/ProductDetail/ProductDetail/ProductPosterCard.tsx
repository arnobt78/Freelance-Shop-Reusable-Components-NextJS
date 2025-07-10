import React from "react";

interface ProductPosterCardProps {
  product: any;
}

export default function ProductPosterCard({ product }: ProductPosterCardProps) {
  return (
    <div className="relative flex flex-col items-center shadow-lg bg-zinc-200 overflow-visible w-full aspect-square max-w-[640px] mx-auto">
      {/* Top badges */}
      <div className="absolute flex flex-row w-full justify-between top-4 left-0 px-4 z-10">
        {product.saleLabel ? (
          <div className="bg-white rounded-[6px] w-[70px] h-[24px] flex items-center justify-center shadow-sm">
            <span className="italic font-semibold text-[13px] leading-[16px] text-[#C02929]">{product.saleLabel}</span>
          </div>
        ) : <div className="w-[70px] h-[24px]" />}
        <div className="bg-white rounded-[6px] w-[110px] h-[24px] flex items-center justify-center shadow-sm">
          <span className="italic font-semibold text-[13px] leading-[16px] text-black">{product.shippingLabel}</span>
        </div>
      </div>
      {/* Product image as poster */}
      <div className="relative flex flex-col items-center justify-center w-full h-full z-0 ">
        <img
          src={product.productImage}
          alt={product.productName}
          className="object-contain w-full h-full mx-auto drop-shadow-xl"
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}
