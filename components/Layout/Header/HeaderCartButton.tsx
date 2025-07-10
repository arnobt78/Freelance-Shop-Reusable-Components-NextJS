import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeaderCartButton() {
  const { cartItems, setCartOpen } = useCart();
  return (
    <button
      className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
      onClick={() => setCartOpen(true)}
      aria-label="Open cart"
    >
      <ShoppingCart className="w-6 h-6 text-gray-900" />
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {cartItems.length}
        </span>
      )}
    </button>
  );
}
