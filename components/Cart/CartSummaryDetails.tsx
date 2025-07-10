import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Lock, Shield, Truck, CreditCard } from "lucide-react";

interface CartSummaryDetailsProps {
  totalItems: number;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  appliedPromo: string | null;
  getDiscount: () => number;
  getShipping: () => number;
  getTax: () => number;
  getTotal: () => number;
}

const CartSummaryDetails: React.FC<CartSummaryDetailsProps> = ({
  totalItems,
  subtotal,
  discount,
  shipping,
  tax,
  total,
  appliedPromo,
  getDiscount,
  getShipping,
  getTax,
  getTotal,
}) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 sticky top-8 overflow-hidden">
    <div className="bg-gradient-to-r from-[#3AF0F7]/10 to-[#8ef7fb]/10 p-6 border-b border-gray-200/50">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-[#3AF0F7] to-[#8ef7fb] rounded-full flex items-center justify-center mr-3">
          <ShoppingBag className="w-4 h-4 text-black" />
        </div>
        Order Summary
      </h2>
    </div>
    <div className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-medium">Subtotal ({totalItems} items)</span>
          <span className="font-semibold">€{subtotal.toFixed(2)}</span>
        </div>
        {appliedPromo && (
          <div className="flex justify-between items-center text-green-600 bg-green-50 p-3 rounded-xl">
            <span className="font-medium">Discount ({appliedPromo})</span>
            <span className="font-bold">-€{getDiscount().toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-medium flex items-center">
            <Truck className="w-4 h-4 mr-2" />
            Shipping
          </span>
          <span className="font-semibold">
            {getShipping() === 0 ? (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Free</Badge>
            ) : (
              `€${getShipping().toFixed(2)}`
            )}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-medium">Tax</span>
          <span className="font-semibold">€{getTax().toFixed(2)}</span>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl">
          <Separator className="mb-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-[#3AF0F7]">€{getTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-[#3AF0F7] to-[#8ef7fb] hover:from-[#2de0e7] hover:to-[#7ee6ea] text-black font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl relative overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        <span className="relative flex items-center justify-center">
          <Lock className="w-5 h-5 mr-3" />
          Secure Checkout
        </span>
      </Button>
      {/* Trust Badges */}
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
            <span className="font-medium">256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Truck className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-medium">Free shipping on orders over €100</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <CreditCard className="w-4 h-4 text-purple-600" />
            </div>
            <span className="font-medium">All major cards accepted</span>
          </div>
        </div>
      </div>
      {/* Payment Methods */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">Accepted Payment Methods</p>
        <div className="grid grid-cols-4 gap-3">
          <div className="aspect-[3/2] bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">
            VISA
          </div>
          <div className="aspect-[3/2] bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">
            MC
          </div>
          <div className="aspect-[3/2] bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">
            AMEX
          </div>
          <div className="aspect-[3/2] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg text-black text-xs flex items-center justify-center font-bold shadow-lg">
            PP
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CartSummaryDetails;
