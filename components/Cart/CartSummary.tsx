import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  appliedPromo: string | null;
  applyPromoCode: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount,
  shipping,
  tax,
  total,
  promoCode,
  setPromoCode,
  appliedPromo,
  applyPromoCode,
}) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
    <h2 className="text-xl font-semibold mb-6 text-gray-900">Order Summary</h2>
    <div className="space-y-4">
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>€{subtotal.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-€{discount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Tax</span>
        <span>€{tax.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 my-4" />
      <div className="flex justify-between text-lg font-bold text-gray-900">
        <span>Total</span>
        <span>€{total.toFixed(2)}</span>
      </div>
    </div>
    <div className="mt-6">
      <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
        Promo Code
      </label>
      <div className="flex">
        <Input
          id="promo"
          value={promoCode}
          onChange={e => setPromoCode(e.target.value)}
          placeholder="Enter code"
          className="rounded-l-md"
        />
        <Button
          type="button"
          onClick={applyPromoCode}
          className="rounded-r-md bg-gradient-to-r from-[#3AF0F7] to-[#8ef7fb] text-black font-semibold"
          disabled={appliedPromo === "SAVE10"}
        >
          {appliedPromo === "SAVE10" ? "Applied" : "Apply"}
        </Button>
      </div>
      {appliedPromo === "SAVE10" && (
        <div className="text-green-600 text-sm mt-2">10% discount applied!</div>
      )}
    </div>
  </div>
);

export default CartSummary;
