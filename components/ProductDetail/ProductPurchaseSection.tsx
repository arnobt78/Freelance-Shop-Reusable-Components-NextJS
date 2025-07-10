

import React from "react";
import { useCart } from "@/context/CartContext";
import type { StockStatus } from "../ProductCard/SingleProductCard";

import { ProductQuantityDropdownSelect } from "./ProductQuantityDropdownSelect";
import { ProductQuantityImageSection } from "./ProductQuantityImageSection";
import StockStatusLabel from "./Purchase/StockStatusLabel";
import PriceDisplay from "./Purchase/PriceDisplay";
import GuaranteeShippingReturns from "./Purchase/GuaranteeShippingReturns";
import ShippingOptions from "./Purchase/ShippingOptions";
import ProductPurchaseActions from "./Purchase/ProductPurchaseActions";


interface ProductPurchaseSectionProps {
  productName: string;
  productImage: string;
  brand: string;
  productId: number;
  slug: string;
  stockStatus: StockStatus;
  salePrice: string;
  originalPrice: string;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onBuyNow: () => void;
  onAddToCart: () => void;
}


export const ProductPurchaseSection: React.FC<ProductPurchaseSectionProps> = ({
  productName,
  productImage,
  brand,
  productId,
  slug,
  stockStatus,
  salePrice,
  originalPrice,
  quantity,
  onQuantityChange,
  onBuyNow,
  onAddToCart,
}) => {
  const { setCartItems, setCartOpen } = useCart();


  // Helper to parse price string (e.g., "€ 3,60") to number (3.60)
  function parsePrice(price: any) {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      const cleaned = price.replace(/[^0-9,.-]+/g, "").replace(",", ".");
      const num = parseFloat(cleaned);
      return isNaN(num) ? 0 : num;
    }
    return 0;
  }


  // Add to cart handler
  const handleAddToCart = () => {
    setCartItems((prev: any[]) => {
      const id = productId;
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: id,
            name: productName,
            price: parsePrice(salePrice || originalPrice),
            quantity: quantity,
            image: productImage,
            brand: brand,
            slug: slug,
          },
        ];
      }
    });
    setCartOpen(true);
    if (onAddToCart) onAddToCart();
  };
  return (
    <div className="w-full max-w-[687px] flex flex-col gap-6 px-2 sm:px-0">
      {/* Product Name & Stock Status Centered */}
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="font-medium text-[30px] leading-[40px] text-black -tracking-[0.01em] break-words">{productName}</span>
        <div className="flex flex-row items-center gap-2 flex-wrap justify-center mt-2">
          <StockStatusLabel stockStatus={stockStatus} />
        </div>
      </div>

      {/* Quantity and Price */}
      <div className="flex flex-row items-center mt-2 flex-wrap justify-between">
        <div className="flex flex-row w-full items-center justify-between">
          {/* Quantity Dropdown Left */}
          <div className="relative">
            <ProductQuantityDropdownSelect
              value={quantity}
              onChange={onQuantityChange}
              salePrice={salePrice}
              originalPrice={originalPrice}
            />
          </div>
          {/* Price Area Right (duplicated from dropdown for layout, but hidden in dropdown) */}
          {(salePrice || originalPrice) && (
             <PriceDisplay salePrice={salePrice} originalPrice={originalPrice} quantity={quantity} />
          )}

        </div>
      </div>

      {/* Quantity Item Images */}
      <ProductQuantityImageSection
        selected={quantity}
        onSelect={onQuantityChange}
      />
      
      {/* Action Buttons */}
      <ProductPurchaseActions onBuyNow={onBuyNow} onAddToCart={handleAddToCart} />

      {/* Guarantee/Shipping/Returns */}
      <GuaranteeShippingReturns />

      {/* Shipping/Express/Pickup with icons */}
      <ShippingOptions />
    </div>
  );
};
