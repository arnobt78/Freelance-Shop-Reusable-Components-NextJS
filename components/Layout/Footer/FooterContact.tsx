import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterContactProps {
  open: boolean;
  onToggle: () => void;
}

export default function FooterContact({ open, onToggle }: FooterContactProps) {
  return (
    <div className="text-center sm:text-left">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full sm:pointer-events-none"
      >
        <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 text-base md:text-lg">Contact Us</h4>
        <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-1 sm:block ${open ? 'block' : 'hidden sm:block'}`}>
        <Button 
          variant="ghost" 
          className="h-auto px-2 sm:px-6 py-1 sm:py-2 border border-teal-400 rounded-sm text-gray-600 hover:text-gray-900 font-normal text-xs sm:text-sm md:text-base justify-center sm:justify-start group"
        >
          Contact support
          <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
