import React from "react";

interface ProductPurchaseActionsProps {
  onBuyNow: () => void;
  onAddToCart: () => void;
}

const ProductPurchaseActions: React.FC<ProductPurchaseActionsProps> = ({ onBuyNow, onAddToCart }) => (
  <div className="flex flex-col gap-2 mt-2 sm:flex-row">
    <button
      className="flex-1 bg-[#8EF7FB] rounded-[3.3px] py-3 text-[19px] font-medium text-black hover:bg-[#6ee7f7] transition transform duration-300 cursor-pointer active:bg-[#8EF7FB]"
      onClick={onBuyNow}
    >
      Buy now
    </button>
    <button
      className="flex-1 border-2 border-[#8EF7FB] bg-white rounded-[3.3px] py-3 text-[19px] font-medium text-black hover:bg-[#e0f7fa] transition transform duration-300 cursor-pointer active:bg-[#8EF7FB]"
      onClick={onAddToCart}
    >
      Add to cart
    </button>
  </div>
);

export default ProductPurchaseActions;
