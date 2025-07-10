"use client";

import React, { useState } from "react";
import ProductDescriptionDetails from "./Description/ProductDescriptionDetails";
import CollapsibleSection from "./Description/CollapsibleSection";

interface ProductCardDescriptionSectionProps {
  brand: string;
  flavor: string;
  strength: string;
  nicotinePerPouch: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description?: string;
  howToUse?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProductCardDescriptionSection: React.FC<ProductCardDescriptionSectionProps> = ({
  brand,
  flavor,
  strength,
  nicotinePerPouch,
  description,
  howToUse,
}) => {
  // Collapsible state for each section
  const [descOpen, setDescOpen] = useState(true);
  const [howToUseOpen, setHowToUseOpen] = useState(true);

  return (
    <div className="w-full max-w-[687px]">
      <CollapsibleSection
        title="Product Description"
        open={descOpen}
        onToggle={() => setDescOpen((prev) => !prev)}
        sectionId="product-desc-section"
      >
        <ProductDescriptionDetails
          brand={brand}
          flavor={flavor}
          strength={strength}
          nicotinePerPouch={nicotinePerPouch}
        />
      </CollapsibleSection>
      <CollapsibleSection
        title="How to Use"
        open={howToUseOpen}
        onToggle={() => setHowToUseOpen((prev) => !prev)}
        sectionId="how-to-use-section"
      >
        <div className="text-[#343232] text-[19px] leading-[29px] font-normal whitespace-pre-line text-justify">
          {howToUse || (
            <>
              <p>
                Open the can and take out a single pouch. Place the pouch between your upper lip and gum. Let the pouch rest and enjoy the flavor and nicotine release for up to 30 minutes. Dispose of the used pouch in a waste bin. Do not swallow or chew the pouch.
              </p>
              <p className="mt-2">
                For best results, do not eat or drink while using the pouch. Keep out of reach of children and store in a cool, dry place.
              </p>
              <p className="mt-2">
              Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.
              </p>
              <p className="mt-2">
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
              </p>
              <p className="mt-2">
              Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.
              </p>
              <p className="mt-2">
              This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.
              </p>
            </>
          )}
        </div>
      </CollapsibleSection>
    </div>
  );
};
