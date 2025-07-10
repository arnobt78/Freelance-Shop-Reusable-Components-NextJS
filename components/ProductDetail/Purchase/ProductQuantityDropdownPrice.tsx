
import React from "react";

interface ProductQuantityDropdownPriceProps {
  salePrice?: string;
  originalPrice?: string;
  value?: number; // quantity
}

// Helper to parse price string (e.g., "€ 3,60") to number (3.60)
function parsePrice(price: string | undefined): number {
  if (!price) return 0;
  const cleaned = price.replace(/[^0-9,.-]+/g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

// Helper to extract currency symbol (defaults to "€")
function getCurrency(price: string | undefined): string {
  if (!price) return "€";
  const match = price.match(/[^\d.,\s]+/);
  return match ? match[0] : "€";
}

const ProductQuantityDropdownPrice: React.FC<ProductQuantityDropdownPriceProps> = ({ salePrice, originalPrice, value = 1 }) => {
  const currency = getCurrency(salePrice || originalPrice);
  const sale = parsePrice(salePrice);
  const original = parsePrice(originalPrice);
  const totalSale = sale * value;
  const totalOriginal = original * value;
  const showDiscount = salePrice && sale < original;

  return (
    <div className="flex flex-row items-center justify-end min-w-[120px] gap-2">
      {showDiscount ? (
        <>
          <span className="text-[18px] font-semibold text-[#C02929] leading-[24px]">
            {currency} {totalSale.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-[16px] text-black line-through">
            {currency} {totalOriginal.toFixed(2).replace(".", ",")}
          </span>
        </>
      ) : (
        <span className="text-[18px] font-semibold text-black leading-[24px]">
          {currency} {totalOriginal.toFixed(2).replace(".", ",")}
        </span>
      )}
      {/* {value > 1 && (
        <span className="text-[12px] text-gray-500 ml-2">({currency} {(showDiscount ? sale : original).toFixed(2).replace(".", ",")} x {value})</span>
      )} */}
    </div>
  );
};

export default ProductQuantityDropdownPrice;
