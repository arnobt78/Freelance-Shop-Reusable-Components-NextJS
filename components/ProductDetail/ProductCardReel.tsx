

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "../ProductCard/SingleProductCard";
import { products as globalProducts } from "../../data/products";


interface ProductCardReelProps {
  products?: Array<React.ComponentProps<typeof SingleProductCard>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProductClick?: (product: any) => void;
}


export const ProductCardReel: React.FC<ProductCardReelProps> = ({ products, onProductClick }) => {
  // Use the same grid and card layout as ListProductCard for consistency
  // Show only 2 cards on mobile, 5 on desktop
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const cardsToShow = isMobile ? 2 : 5;

  // Use products prop if provided, otherwise fallback to globalProducts
  const productsToUse = products && products.length > 0 ? products : globalProducts;

  // Helper: get product index for navigation (assumes unique productName)
  const getProductIndex = (product: any) => {
    return productsToUse.findIndex((p: any) => p.productName === product.productName);
  };

  return (
    <div className="w-full flex flex-col items-center px-1 sm:px-0">
      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-7xl"
      >
        {productsToUse.slice(0, cardsToShow).map((product: any, idx: number) => (
          <div className="w-full flex justify-center" key={idx}>
            <div
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                if (typeof onProductClick === 'function') {
                  onProductClick(product);
                } else {
                  // Default: navigate to product detail page using idx
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
          </div>
        ))}
      </div>
    </div>
  );
};
