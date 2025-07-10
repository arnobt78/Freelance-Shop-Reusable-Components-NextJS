import { Instagram, Facebook } from "lucide-react";

export default function FooterLogoSocial() {
  return (
    <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
      <img src="/logo.svg" alt="SNUZZ" className="h-8 md:h-10 w-auto mb-4 md:mb-6 mx-auto sm:mx-0 sm:mt-5 md:mt-8" />
      <div className="flex gap-3 sm:gap-2 md:gap-1 justify-center sm:justify-start">
        {[Instagram, Facebook].map((Icon, i) => (
          <div
            key={i}
            className="w-9 h-9 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer hover:bg-gray-100"
          >
            <Icon className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black" />
          </div>
        ))}
      </div>
    </div>
  );
}
