import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";


interface HeaderSearchInputProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  showSearchResults: boolean;
  setShowSearchResults: (show: boolean) => void;
  searchResults: any[];
  addToCart: (product: any) => void;
  setSearchFocused: (b: boolean) => void;
}

export default function HeaderSearchInput({
  searchQuery,
  setSearchQuery,
  showSearchResults,
  setShowSearchResults,
  searchResults,
  addToCart,
  setSearchFocused,
}: HeaderSearchInputProps) {
  return (
    <div className="relative hidden lg:block">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
        className="pl-8 pr-3 py-1.5 w-48 h-8 border border-gray-300 rounded-md bg-white transition-all duration-300 text-sm focus:outline-none focus:ring-0 focus:border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      {showSearchResults && (
        <div className="absolute top-full -right-8 mt-2 bg-white border border-gray-200 rounded-2xl z-50 w-[350px] max-h-[420px] overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-0">
              <div className="text-sm text-gray-500 m-4 border-b border-gray-200 pb-2 font-semibold text-center">
                {searchResults.length} Product Found{searchResults.length !== 1 ? "s" : ""}
              </div>
              <div className="space-y-2">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-2 hover:bg-[#3AF0F7]/10 rounded-xl cursor-pointer transition-all duration-300 group"
                    onClick={() => {
                      addToCart(product);
                      setSearchQuery("");
                      setShowSearchResults(false);
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8cedf8] to-[#3AF0F7]/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 overflow-hidden">
                      {product.productImage ? (
                        <img
                          src={product.productImage.startsWith('/') ? product.productImage : `/` + product.productImage}
                          alt={product.productName || 'Product'}
                          className="object-contain w-full h-full"
                          onError={e => { e.currentTarget.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="text-gray-400 text-xs justify-center">No Image</div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 justify-center">
                      <h4 className="font-semibold text-gray-900 text-sm truncate group-hover:text-[#3AF0F7] transition-colors max-w-[140px]" title={product.productName}>
                        {product.productName.length > 28 ? product.productName.slice(0, 28) + '…' : product.productName}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
                    </div>
                    <div className="flex flex-col items-end min-w-[70px] ml-2">
                      {product.salePrice ? (
                        <>
                          <span className="text-[#3AF0F7] font-bold text-sm">
                            €{parseFloat(product.salePrice.replace(/[^0-9,.-]+/g, '').replace(',', '.')).toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through text-xs">
                            €{parseFloat(product.originalPrice.replace(/[^0-9,.-]+/g, '').replace(',', '.')).toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-[#3AF0F7] font-bold text-sm">
                          €{parseFloat(product.originalPrice.replace(/[^0-9,.-]+/g, '').replace(',', '.')).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#3AF0F7] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110">
                        {/* Plus icon can be added here if needed */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setShowSearchResults(false);
                  }}
                  className="w-full text-center text-[#3AF0F7] hover:text-[#2de0e7] font-semibold text-sm py-2 hover:bg-[#3AF0F7]/5 rounded-lg transition-colors"
                >
                  View All Results →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No products found</p>
              <p className="text-gray-400 text-sm">Try searching for different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
