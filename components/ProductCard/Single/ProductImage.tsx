import React from "react";

interface ProductImageProps {
  productImage: string;
  productName: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ productImage, productName }) => (
  <div className="absolute left-1/2 top-[20px] sm:top-[38px] -translate-x-1/2 w-[80px] h-[80px] w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] flex items-center justify-center">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={productImage}
      alt={productName}
      
      className="object-contain rounded-[12px] w-full h-full"
      loading="lazy"
      draggable={false}
    />
  </div>
);

export default ProductImage;
