import React from "react";

interface ProductDescriptionDetailsProps {
  brand: string;
  flavor: string;
  strength: string;
  nicotinePerPouch: string;
}

const ProductDescriptionDetails: React.FC<ProductDescriptionDetailsProps> = ({ brand, flavor, strength, nicotinePerPouch }) => (
  <>
    <div className="flex flex-row items-center text-[#343232] text-[19px] leading-[29px] font-normal">
      <span>Brand:</span>
      <span className="flex-1 border-b border-dotted border-[#343232] mx-2 h-[1px]" style={{marginTop: 14}}></span>
      <span className="ml-2">{brand}</span>
    </div>
    <div className="flex flex-row items-center text-[#343232] text-[19px] leading-[29px] font-normal">
      <span>Flavor:</span>
      <span className="flex-1 border-b border-dotted border-[#343232] mx-2 h-[1px]" style={{marginTop: 14}}></span>
      <span className="ml-2">{flavor}</span>
    </div>
    <div className="flex flex-row items-center text-[#343232] text-[19px] leading-[29px] font-normal">
      <span>Strength:</span>
      <span className="flex-1 border-b border-dotted border-[#343232] mx-2 h-[1px]" style={{marginTop: 14}}></span>
      <span className="ml-2">{strength}</span>
    </div>
    <div className="flex flex-row items-center text-[#343232] text-[19px] leading-[29px] font-normal">
      <span>Nicotine per pouch:</span>
      <span className="flex-1 border-b border-dotted border-[#343232] mx-2 h-[1px]" style={{marginTop: 14}}></span>
      <span className="ml-2">{nicotinePerPouch}</span>
    </div>
  </>
);

export default ProductDescriptionDetails;
