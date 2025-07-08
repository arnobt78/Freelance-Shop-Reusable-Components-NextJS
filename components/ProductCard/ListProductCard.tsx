"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "./SingleProductCard";
import { useProductPagination } from "./useProductPagination";
import { Pagination } from "../Pagination/Pagination";
import { useCart } from "@/context/CartContext";

interface ListProductCardProps {
  products: any[];
  addToCart?: (product: any) => void;
}

export const ListProductCard: React.FC<ListProductCardProps> = ({ products, addToCart }) => {
  const { setCartItems } = useCart();
  // Use the provided addToCart or fallback to global context
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

  // Helper to get a unique id for a product (fallback to name+brand+image if missing)
  function getProductId(product: any) {
    if (typeof product.id === 'number' || typeof product.id === 'string') return product.id;
    return `${product.name || product.productName}_${product.brand}_${product.image || product.productImage}`;
  }

  const handleAddToCart = addToCart || ((product: any) => {
    const id = getProductId(product);
    setCartItems((prev: any[]) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id,
            name: product.name || product.productName,
            price: parsePrice(product.salePrice ?? product.price ?? product.originalPrice),
            quantity: 1,
            image: product.image || product.productImage,
            brand: product.brand,
          },
        ];
      }
    });
  });

  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full lg:px-2 sm:px-0">
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-5xl mt-6 sm:px-2 min-h-[200px]"
      >
        {products.length > 0 ? (
          products.map((product, idx) => (
            <div
              className="w-full flex justify-center"
              key={product.id || idx}
            >
              <SingleProductCard
                {...product}
                addToCart={e => {
                  if (e && e.stopPropagation) e.stopPropagation();
                  handleAddToCart(product);
                }}
                onCardClick={() => router.push(`/product-detail?idx=${product.id ?? idx}`)}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center w-full min-h-[180px] py-8">
            <span className="text-lg sm:text-xl font-semibold text-gray-500 text-center">
              No products matched your category filter.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
