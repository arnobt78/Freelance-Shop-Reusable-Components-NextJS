import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CartHeaderProps {
  totalItems: number;
}

const CartHeader: React.FC<CartHeaderProps> = ({ totalItems }) => (
  <div className="flex items-center justify-between mb-10">
    <div className="flex items-center space-x-6">
      <Link href="/">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Button>
      </Link>
      <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Shopping Cart</h1>
        <p className="text-gray-600 mt-1">Review your items and proceed to checkout</p>
      </div>
    </div>
    <div className="text-right">
      <div className="text-2xl font-bold text-gray-900">{totalItems}</div>
      <div className="text-sm text-gray-500">items</div>
    </div>
  </div>
);

export default CartHeader;
