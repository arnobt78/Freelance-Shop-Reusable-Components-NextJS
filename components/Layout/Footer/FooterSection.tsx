import { ChevronDown } from "lucide-react";

interface FooterSectionProps {
  title: string;
  items: string[];
  open: boolean;
  onToggle: () => void;
  sectionKey: string;
}

export default function FooterSection({ title, items, open, onToggle, sectionKey }: FooterSectionProps) {
  return (
    <div className="text-center sm:text-left">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full sm:pointer-events-none"
      >
        <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 text-base md:text-lg">{title}</h4>
        <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul className={`space-y-2 md:space-y-3 text-gray-600 sm:block ${open ? 'block' : 'hidden sm:block'}`}>
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="transition-colors text-sm md:text-base hover:text-gray-900 block py-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
