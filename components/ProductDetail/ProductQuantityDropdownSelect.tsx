import React from "react";
import ProductQuantityDropdownList from "./Purchase/ProductQuantityDropdownList";

export interface ProductQuantityDropdownSelectProps {
  value: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
  salePrice?: string;
  originalPrice?: string;
}

const defaultOptions = [1,2,3,4,5,6,7,8,9,10];

export const ProductQuantityDropdownSelect: React.FC<ProductQuantityDropdownSelectProps> = ({
  value,
  onChange,
  min = 1,
  max = 10,
  salePrice,
  originalPrice,
}) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const quantityOptions = React.useMemo(() => {
    if (min === 1 && max === 10) return defaultOptions;
    return Array.from({ length: max - min + 1 }, (_, i) => i + min);
  }, [min, max]);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', handleKey);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  React.useEffect(() => {
    if (open && listRef.current) {
      const idx = quantityOptions.indexOf(value);
      if (idx >= 0) {
        const item = listRef.current.children[idx] as HTMLElement;
        if (item) item.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [open, value, quantityOptions]);

  // ...existing code...
  // Price calculation moved to ProductQuantityDropdownPrice


  return (
    <div className="flex flex-row items-center justify-between w-full select-none" style={{ minWidth: 60 }}>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex flex-row items-center w-[75px] h-[51px] bg-white border border-black/15 rounded-xl px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#8EF7FB] cursor-pointer"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: '27px', fontWeight: 400, color: '#000', opacity: 0.8 }}
          onClick={() => setOpen(o => !o)}
          tabIndex={0}
        >
          <span className="pr-1">{value}x</span>
          {/* Down arrow SVG, vertically centered and inside the button */}
          <span className="flex items-center">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.2"/>
            </svg>
          </span>
        </button>

        {open && (
          <ProductQuantityDropdownList
            quantityOptions={quantityOptions}
            value={value}
            onChange={q => { onChange(q); setOpen(false); }}
            listRef={listRef}
          />
        )}
      </div>

      {/* Price display to the right of dropdown, x-aligned */}
      {/* <div className="flex-1 flex justify-end">
        {(salePrice || originalPrice) && (
          <>{React.createElement(require('./Purchase/ProductQuantityDropdownPrice').default, { salePrice, originalPrice, value })}</>
        )}
      </div> */}
    </div>
  );
};
