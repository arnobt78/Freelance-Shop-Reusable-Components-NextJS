
import React from "react";

interface PriceDisplayProps {
  salePrice?: string;
  originalPrice?: string;
  quantity?: number;
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

const PriceDisplay: React.FC<PriceDisplayProps> = ({ salePrice, originalPrice, quantity = 1 }) => {
  const currency = getCurrency(salePrice || originalPrice);
  const sale = parsePrice(salePrice);
  const original = parsePrice(originalPrice);
  const totalSale = sale * quantity;
  const totalOriginal = original * quantity;
  const showDiscount = salePrice && sale < original;

  return (
    <div className="flex flex-row items-end min-w-[60px]">
      {showDiscount ? (
        <>
        <span className="text-[18px] text-gray-400 line-through mr-2">
            {currency} {totalOriginal.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-[22px] font-semibold text-red-500 leading-[28px]">
            {currency} {totalSale.toFixed(2).replace(".", ",")}
          </span>
          
        </>
      ) : (
        <span className="text-[22px] font-semibold text-[#0A0A0A] leading-[28px]">
          {currency} {totalOriginal.toFixed(2).replace(".", ",")}
        </span>
      )}
      {/* {quantity > 1 && (
        <span className="text-[14px] text-gray-500">({currency} {(showDiscount ? sale : original).toFixed(2).replace(".", ",")} x {quantity})</span>
      )} */}
    </div>
  );
};

export default PriceDisplay;
