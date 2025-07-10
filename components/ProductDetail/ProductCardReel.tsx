

import React from "react";
import { products as globalProducts } from "../../data/products";
import ProductReelGrid from "./Reel/ProductReelGrid";



interface ProductCardReelProps {
  products?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProductClick?: (product: any) => void;
}


export const ProductCardReel: React.FC<ProductCardReelProps> = ({ products, onProductClick }) => {
  // Use the same grid and card layout as ListProductCard for consistency
  // Show only 2 cards on mobile, 5 on desktop
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const cardsToShow = isMobile ? 2 : 5;

  // Use products prop if provided, otherwise fallback to globalProducts
  const productsToUse = products && products.length > 0 ? products : globalProducts;

  return (
    <div className="w-full flex flex-col items-center px-1 sm:px-0">
      <ProductReelGrid products={productsToUse} cardsToShow={cardsToShow} onProductClick={onProductClick} />
    </div>
  );
};
