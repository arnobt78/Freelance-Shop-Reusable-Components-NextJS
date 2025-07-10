import { ListProductCard } from "@/components/ProductCard/ListProductCard";
import { products } from "@/data/products";
import ProductsSectionTitle from "@/components/Home/Products/ProductsSectionTitle";

export default function ProductsSection() {
  return (
    <section id="products-section" className="px-2 sm:px-4 py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        <ProductsSectionTitle />
        {/* Product Cards List */}
        <div className="flex justify-center w-full">
          {/* ListProductCard fetches and displays products from data/products.ts */}
          <ListProductCard products={products.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}
