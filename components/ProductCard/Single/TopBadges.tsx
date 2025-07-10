import React from "react";

interface TopBadgesProps {
  saleLabel?: string;
  shippingLabel: string;
}

const TopBadges: React.FC<TopBadgesProps> = ({ saleLabel, shippingLabel }) => (
  <div className="absolute flex flex-row w-full justify-between top-[8px] left-0 px-2 z-0">
    {/* Sale badge (conditionally render) */}
    {saleLabel ? (
      <div className="bg-white rounded-[6px] w-[54px] h-[18px] flex items-center justify-center">
        <span className="italic font-semibold text-[10px] leading-[12px] text-[#C02929]">{saleLabel}</span>
      </div>
    ) : <div className="w-[54px] h-[18px]" />}
    {/* Free shipping badge */}
    <div className="bg-white rounded-[6px] w-[74px] h-[18px] flex items-center justify-center">
      <span className="italic font-semibold text-[10px] leading-[12px] text-black">{shippingLabel}</span>
    </div>
  </div>
);

export default TopBadges;
