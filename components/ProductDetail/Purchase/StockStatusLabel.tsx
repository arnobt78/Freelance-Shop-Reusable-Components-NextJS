import React from "react";
import type { StockStatus } from "../../ProductCard/SingleProductCard";

interface StockStatusLabelProps {
  stockStatus: StockStatus;
}

const StockStatusLabel: React.FC<StockStatusLabelProps> = ({ stockStatus }) => {
  let color = '#15FF00';
  let shadow = '0 0 8px 2px #15FF00';
  let label = 'In stock';
  if (stockStatus === 'low_stock') {
    color = '#FFD600';
    shadow = '0 0 8px 2px #FFD600';
    label = 'Low stock';
  } else if (stockStatus === 'last_3') {
    color = '#FFD600';
    shadow = '0 0 8px 2px #FFD600';
    label = 'Last 3 cans';
  } else if (stockStatus === 'no_stock') {
    color = '#FF3B30';
    shadow = '0 0 8px 2px #FF3B30';
    label = 'No stock';
  }
  return (
    <>
      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: color, boxShadow: shadow }} />
      <span className="text-[17px] leading-[21px] text-black">{label}</span>
    </>
  );
};

export default StockStatusLabel;
