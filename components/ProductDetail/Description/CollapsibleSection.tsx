import React from "react";

interface CollapsibleSectionProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  sectionId: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, open, onToggle, children, sectionId }) => (
  <div className="flex flex-col gap-5 border-b border-[#C4C4C4] pb-8 pt-8">
    <button
      className="flex flex-row items-center justify-between w-full bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={sectionId}
    >
      <span className="font-semibold text-[24px] leading-[29px] text-black">{title}</span>
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-in-out ${open ? '' : 'rotate-180'}`}
        style={{ transformOrigin: '50% 50%' }}
      >
        <path d="M1 1L10 9L19 1" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    <div
      id={sectionId}
      className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      aria-hidden={!open}
    >
      {children}
    </div>
  </div>
);

export default CollapsibleSection;
