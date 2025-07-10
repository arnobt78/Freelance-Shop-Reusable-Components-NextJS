import React from "react";

export default function HeroRightImage() {
  return (
    <div className="flex items-center justify-end w-full h-auto object-cover mt-36 max-h-[200px] sm:max-h-[400px]">
      <img
        src="/group-32.svg"
        alt="Hero visual"
        className="object-contain drop-shadow-xl pointer-events-none relative top-[48px] sm:top-[108px] left-0"
        width="100%"
        height="100%"
        style={{ borderRadius: "692.17px", maxWidth: '100%', height: 'auto' }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}
