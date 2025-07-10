import { Menu, X } from "lucide-react";
import React from "react";

interface HeaderMobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HeaderMobileMenuButton({ open, onClick }: HeaderMobileMenuButtonProps) {
  return (
    <button
      className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
    </button>
  );
}
