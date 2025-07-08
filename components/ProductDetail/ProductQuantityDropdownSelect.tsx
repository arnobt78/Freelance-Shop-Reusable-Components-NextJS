import React from "react";

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
  const listRef = React.useRef<HTMLDivElement>(null);
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

  // Helper to multiply price strings (e.g. "12.99") by quantity and format as string
  function multiplyPrice(priceStr?: string, qty: number = 1) {
    if (!priceStr) return '';
    // Remove any non-numeric except dot and comma
    const normalized = priceStr.replace(/[^\d.,]/g, '').replace(',', '.');
    const num = parseFloat(normalized);
    if (isNaN(num)) return priceStr;
    // Keep 2 decimals, add currency if present
    const currency = priceStr.replace(/[\d.,\s]/g, '');
    return (num * qty).toFixed(2) + (currency ? ' ' + currency : '');
  }


  return (
    <div className="flex flex-row items-center gap-4 select-none" style={{ minWidth: 60 }}>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex flex-row items-center w-75px] h-[51px] bg-white border border-black/15 rounded-xl px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#8EF7FB] cursor-pointer"
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
                onClick={() => { onChange(q); setOpen(false); }}
                tabIndex={0}
              >
                {q}x
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic price display to the right of dropdown */}
      {/* {(salePrice || originalPrice) && (
        <div className="flex flex-row items-center gap-2">
          {salePrice ? (
            <>
              <span className="font-normal text-[12px] leading-[13px] text-black line-through">
                {multiplyPrice(originalPrice, value)}
              </span>
              <span className="font-normal text-[18px] leading-[14px] text-[#C02929]">
                {multiplyPrice(salePrice, value)}
              </span>
            </>
          ) : (
            <span className="font-normal text-[18px] leading-[14px] text-black">
              {multiplyPrice(originalPrice, value)}
            </span>
          )}
        </div>
      )} */}
    </div>
  );
};
