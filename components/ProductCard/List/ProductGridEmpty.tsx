import React from "react";

const ProductGridEmpty: React.FC = () => (
  <div className="col-span-full flex flex-col items-center justify-center w-full min-h-[180px] py-8">
    <span className="text-lg sm:text-xl font-semibold text-gray-500 text-center">
      No products matched your category filter.
    </span>
  </div>
);

export default ProductGridEmpty;
