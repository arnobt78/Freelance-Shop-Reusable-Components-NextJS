import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, Plus, Minus } from "lucide-react";

interface CartItemProps {
  item: any;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="group">
    <div className="flex items-start space-x-6">
      {/* Product Image */}
      <div className="relative">
        <div className="w-24 h-24 bg-gradient-to-br from-[#8cedf8]/30 via-white to-[#3AF0F7]/20 rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
          {typeof item.image === 'string' && item.image.startsWith('/') ? (
            <img
              src={item.image}
              alt={item.name}
              className="object-contain w-full h-full"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          ) : (
            <div className="text-3xl">{item.image}</div>
          )}
        </div>
      </div>
      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#3AF0F7] transition-colors duration-200">
                {item.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-500"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {item.brand}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-red-500"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-black"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-4 py-2 text-lg font-semibold text-gray-900 bg-white">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-black"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            €{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;
