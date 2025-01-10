"use client";

import Image from "@/components/shared/image";
import user1 from "@/assests/images/user-1.png";
import user3 from "@/assests/images/user-3.png";
import user4 from "@/assests/images/user-4.png";
import user5 from "@/assests/images/user-5.png";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import DraggableWrapper from "@/lib/draggable-wrapper";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useDirection } from "@/hooks/use-direction";
import { useBreakpoint } from "@/hooks/use-breakpoint";

type HistoryType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export default function PaymentHistory() {
  const [activeIndex, setActiveCardIndex] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const [direction] = useLocalStorage("soar-direction", "ltr");
  const liveDirection = useDirection(direction ? direction : "ltr");
  const breakpoint = useBreakpoint();

  useEffect(() => {}, [liveDirection]);

  const TxnHistory: HistoryType[] = [
    {
      image: user1,
      name: "Livia Bator",
      title: "CEO",
    },
    {
      image: user3,
      name: "Randy Press",
      title: "Director",
    },
    {
      image: user4,
      name: "Workman",
      title: "Designer",
    },
    {
      image: user5,
      name: "Joe Smith",
      title: "Developer",
    },
    {
      image: user1,
      name: "Livia Bator",
      title: "CEO",
    },
    {
      image: user3,
      name: "Randy Press",
      title: "Director",
    },
    {
      image: user4,
      name: "Workman",
      title: "Designer",
    },
    {
      image: user5,
      name: "Joe Smith",
      title: "Developer",
    },
  ];

  return (
    <>
      <section className="w-[calc(100vw-65px)] sm:max-w-[220px] relative">
        <DraggableWrapper
          skipSlide={75}
          navStyle={{
            minHeight: 0,
            height: "80px",
            paddingTop: "10px",
            ...(liveDirection === "ltr"
              ? ["xs", "sm"].indexOf(breakpoint) === -1
                ? { right: "-60px" }
                : { right: "10px" }
              : ["xs", "sm"].indexOf(breakpoint) === -1
              ? { left: "-60px" }
              : { left: "10px" }),
          }}
        >
          {/* ["xs", "sm", "md"].indexOf(breakpoint) === -1 */}
          <div className="flex gap-4 sm:w-full">
            {TxnHistory.map((txn, index) => (
              <div key={index} onClick={() => handleCardClick(index)}>
                <div className="flex justify-center mb-2">
                  <Image
                    src={txn.image}
                    alt=""
                    className="w-[50px] h-[50px] rounded-[100px]"
                  />
                </div>
                <div
                  className={`text-[--color-brand-2] text-center text-[12px]  ${
                    activeIndex == index ? "font-extrabold" : ""
                  }`}
                >
                  <div className="text-[#232323] dark:text-white">
                    {txn.name}
                  </div>
                  <div className="text-[--color-brand-2]">{txn.title}</div>
                </div>
              </div>
            ))}
          </div>
        </DraggableWrapper>
      </section>
    </>
  );
}
