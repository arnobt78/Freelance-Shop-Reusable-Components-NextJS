import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "@/components/ProductCard/SingleProductCard";

interface ProductReelCardProps {
  product: any;
  onProductClick?: (product: any) => void;
  products: any[];
}

const ProductReelCard: React.FC<ProductReelCardProps> = ({ product, onProductClick, products }) => {
  const router = useRouter();

  // Helper: get product index for navigation (assumes unique productName)
  const getProductIndex = (product: any) => {
    return products.findIndex((p: any) => p.productName === product.productName);
  };

  return (
    <div
      className="w-full flex justify-center cursor-pointer"
      onClick={() => {
        if (typeof onProductClick === 'function') {
          onProductClick(product);
        } else {
          const index = getProductIndex(product);
          if (index !== -1) {
            router.push(`/product-detail?idx=${index}`);
          }
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.productName}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (typeof onProductClick === 'function') {
            onProductClick(product);
          } else {
            const index = getProductIndex(product);
            if (index !== -1) {
              router.push(`/product-detail?idx=${index}`);
            }
          }
        }
      }}
    >
      <SingleProductCard {...product} />
    </div>
  );
};

export default ProductReelCard;
