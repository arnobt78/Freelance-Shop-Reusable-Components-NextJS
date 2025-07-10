import { Plus, Minus, Trash2 } from "lucide-react";
import React from "react";

interface CartSidebarItemProps {
  item: any;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

export default function CartSidebarItem({ item, updateQuantity, removeFromCart }: CartSidebarItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
      <div className="flex-1">
        {item.slug ? (
          <a
            href={`/product-detail/${item.slug}`}
            className="font-semibold text-gray-900 hover:text-[#3AF0F7] transition-colors duration-300 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              window.location.assign(`/product-detail/${item.slug}`);
            }}
          >
            {item.name}
          </a>
        ) : (
          <div className="font-semibold text-gray-900">{item.name}</div>
        )}
        <div className="text-gray-500 text-sm">{item.brand}</div>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded bg-gray-100 hover:bg-gray-200">
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-2">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded bg-gray-100 hover:bg-gray-200">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
        <button onClick={() => removeFromCart(item.id)} className="mt-2 text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
