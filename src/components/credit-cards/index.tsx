"use client";

import CreditCard from "./_card";
import ActiveLink from "../shared/links/active-link";
import { useState } from "react";
import { SIDEBAR_WIDTH_PX } from "@/lib/constants";
import DraggableWrapper from "@/lib/draggable-wrapper";
import { useLocale } from "@/app/shared/locale-context";

export default function CreditCards({
  numOfCards = 4,
  noWrap = true,
}: {
  numOfCards?: number;
  noWrap?: boolean; // If true, cards will not wrap when reaching the end of the container.
}) {
  const { t } = useLocale();
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <>
      <section>
        <div className={`flex justify-between pb-4 px-4 md:px-0`}>
          <h1 className="font-semibold text-[18px] text-[--color-brand-1] dark:text-[--color-dark-2]">
            {t("components:credit-cards.my-cards")}
          </h1>

          <ActiveLink href="#">
            <h3 className="font-semibold text-[14px] text-[--color-brand-1] dark:text-[--color-dark-2]">
              {t("components:credit-cards.see-all")}
            </h3>
          </ActiveLink>
        </div>
      </section>

      <section>
        <DraggableWrapper>
          <div
            className={`flex relative gap-2 sm:gap-8 ltr:pl-8 rtl:pr-8 ltr:md:pl-0 rtl:md:pr-0 ${
              noWrap ? "flex-nowrap" : "flex-wrap"
            }`}
            style={{
              width: `calc(100vw - 310px - 9rem - ${SIDEBAR_WIDTH_PX}px )`,
            }}
          >
            {[...Array(numOfCards).keys()].map((cardIndex) => (
              <CreditCard
                key={cardIndex}
                active={activeCardIndex === cardIndex}
                onClick={() => handleCardClick(cardIndex)}
              />
            ))}
          </div>
        </DraggableWrapper>
      </section>
    </>
  );
}
