import React from "react";

interface AddToCartButtonProps {
  addToCart?: (e?: React.MouseEvent) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ addToCart }) => (
  <div className="relative flex flex-row items-end gap-1 min-w-[40px] justify-end">
    <div className="w-[36px] h-[36px] rounded-full bg-[#CCEBE5] z-0 absolute right-0 bottom-0" />
    <div className="w-[28px] h-[28px] rounded-full bg-[#DDFFF8] z-0 absolute right-1 bottom-1" />
    <button
      className="w-[28px] h-[28px] flex items-center justify-center z-10 focus:outline-none absolute right-1 bottom-1 cursor-pointer rounded-full hover:bg-[#fff] active:bg-[#B2E0DF] scale-105 transition-transform duration-300 ease-in-out"
      onClick={e => { e.stopPropagation(); addToCart && addToCart(e); }}
      aria-label="Add to Basket"
      type="button"
    >
      {/* Simple basket icon SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <rect width="15" height="14" fill="url(#pattern0_7817_2152)"/>
        <defs>
          <pattern id="pattern0_7817_2152" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_7817_2152" transform="matrix(0.0103704 0 0 0.0111111 0.0333333 0)"/>
          </pattern>
          <image id="image0_7817_2152" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTklEQVR4nO2dzasOURzHP9drUkKIq6ysbGRlIy/5D5SFssHKy4biYWXpykUKC2VjQXaSjeR6yU5KkWzFJa/lKroLjs5tpq7rOXOfZ+bMOWfmfj/13TzdM3Pm07nz/ObMzHmgXWwArgKfgG/ARWBB7E61ibXAXcB0yeXYnWsLR4BfDsk2P4CB2J1sMnOAKwWC84zF7miTGQCu9yDZ5kLszjaZkz0I/gkMA/Nid7apbAL+THNOPgEsjd3RJjMXeFEg+SmwJnYn28DeAsmPgYWxO9gWnjkkvwWWxe5cm676jCM7YneuTRx1SH6lCxK/3HaIPuZ5PzOe1w7RG2e8Gc98cYhWveyZ3w7Rs3zvaKZjHBESnR5ne5yJKxM7sSQmTXteq0HyTZ3D/8dOZ97zKPkhML/LfgSwCHjuQfJLYImMFjMIvKkg+Z2mSntnXfa4QL+SvwPr+9iPADZPc3d7asaB7TJXjp0FV4STY29t7S65D5FxoAfRh/M/FtUYLpB8puK2xSTsxNGNLpLtZ5pUquGC5jzwNcs5PbMhhBBCCNFvOXUaeF/DhLxpWUaBobLl5lACB2AaFuusbzSS6Vv0hzKiY48O09BINBJN7FGoEU18cTp1EF+qztE0SPRoAqPDNCz2UYe+0QULfYs+VUb0vEy2Rjb1XoJP5aOHf63x7J2TwSyd7LOU2xbFrgvinREPHet02W4n8bZFeVCD54nVXKp2bFWX7a5MvG1RrJMoD7JMFxcpty2KdeKdrRLNVNFb6hBt37XWiOYfB8upCfstq1MHEw5sFVYb9ltWoqmv4si5JNHUWnHkHJRoctH76xRdtfJwkXLboBWHr8rDRcptg1ccPioPFym3DV5x5NgXJWe66BECUKXycJFy2+AVh4/Kw0XKbYNXHDnbJBr7DmTtrJBogq2xV7byGOyyrdWJt41ScVStPDpdtnU88bZRKo6qlcd4dtBl7/vFaBul4sg5VLKTpgUJUnH4qDxMwxOk4vBReZiGJ/iqvp8TOGgTOEErjpw7CRy4CZxbMUTvSuDATeDYhVqCY5dveJTAwZtAuR9zyQq70u2TBCSYmmMH1GIS+IWffdmPGYwlIMV4ylgmeA8wO7ZkIYQQQgghhBBCCBLiL+jG5pQWk0kFAAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
    </button>
  </div>
);

export default AddToCartButton;
