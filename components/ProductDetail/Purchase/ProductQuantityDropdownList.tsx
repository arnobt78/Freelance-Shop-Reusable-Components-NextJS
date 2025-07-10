import React from "react";

interface ProductQuantityDropdownListProps {
  quantityOptions: number[];
  value: number;
  onChange: (qty: number) => void;
  listRef: React.RefObject<HTMLDivElement>;
}

const ProductQuantityDropdownList: React.FC<ProductQuantityDropdownListProps> = ({ quantityOptions, value, onChange, listRef }) => (
  <div
    ref={listRef}
    className="absolute left-1/2 -translate-x-1/2 z-50 mt-1 w-[100px] max-h-[303px] bg-white border border-black/15 rounded-xl shadow-2xl overflow-y-auto mx-auto"
    style={{ boxShadow: '0px 30px 60px rgba(0,0,0,0.2)', minWidth: 60, width: 60 }}
    role="listbox"
    tabIndex={-1}
  >
    {quantityOptions.map((q, i) => (
      <button
        key={q}
        type="button"
        role="option"
        aria-selected={q === value}
        className={`w-full flex flex-row items-center px-4 py-4 text-[18px] font-normal text-black/80 focus:outline-none cursor-pointer ${q === value ? 'bg-[#8EF7FB]/10' : 'bg-white'} ${i === 0 ? 'rounded-t-xl' : ''} ${i === quantityOptions.length-1 ? 'rounded-b-xl' : ''} hover:bg-zinc-200`}
        style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '27px', borderBottom: i !== quantityOptions.length-1 ? '1px solid #EFEFEF' : undefined }}
        onClick={() => { onChange(q); }}
        tabIndex={0}
      >
        {q}x
      </button>
    ))}
  </div>
);

export default ProductQuantityDropdownList;
