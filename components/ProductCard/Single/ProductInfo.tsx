import React from "react";

interface ProductInfoProps {
  productName: string;
  salePrice?: string;
  originalPrice: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productName, salePrice, originalPrice }) => (
  <div className="flex flex-col gap-1">
    <span className="font-normal text-[12px] leading-[14px] text-black truncate">{productName}</span>
    <div className="flex items-center gap-2">
      {salePrice ? (
        <>
          <span className="font-normal text-[12px] leading-[14px] text-[#C02929]">{salePrice}</span>
          <span className="font-normal text-[11px] leading-[13px] text-black line-through">{originalPrice}</span>
        </>
      ) : (
        <span className="font-normal text-[12px] leading-[14px] text-black">{originalPrice}</span>
      )}
    </div>
  </div>
);

export default ProductInfo;
