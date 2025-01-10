"use client";

import { useLocale } from "@/app/shared/locale-context";
import { DollarCoin } from "../icons/dollar-coin";
import { DoubleCard } from "../icons/double-card";
import { PayPal } from "../icons/paypal";

export default function RecentTransactions() {
  const { t } = useLocale();
  return (
    <>
      <section>
        <div className={`flex justify-between pb-4`}>
          <h1 className="font-semibold text-[18px] text-[--color-brand-1] dark:text-[--color-dark-2]">
            {t("components:transactions.recent")}
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full gap-3 sm:gap-2 shadow-card md:shadow-main bg-white dark:bg-[#171e2e]  rounded-[20px] px-4 sm:px-6 h-[210px]">
        <div className="flex gap-5 sm:gap-7 justify-between items-center">
          <div className="flex gap-4 sm:gap-6">
            <div className="flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[100px] bg-[#FFF5D9]">
              <DoubleCard className="w-[22px] sm:w-[28px]" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-[#232323] text-[15px] dark:text-white font-medium ">
                {t("components:transactions.type-1")}
              </div>
              <div className="text-[14px] text-[--color-brand-2]">
                28 January 2021
              </div>
            </div>
          </div>
          <div className="text-[--color-accent-red] text-[14px]">-$850</div>
        </div>

        <div className="flex gap-5 sm:gap-7 justify-between items-center">
          <div className="flex gap-4 sm:gap-6 items-center">
            <div className="flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[100px] bg-[#E7EDFF]">
              <PayPal className="w-[22px] sm:w-[28px]" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-[#232323] text-[15px] dark:text-white font-medium ">
                {t("components:transactions.type-2")}
              </div>
              <div className="text-[14px] text-[--color-brand-2]">
                25 January 2021
              </div>
            </div>
          </div>

          <div className="text-[--color-accent-green] text-[14px]">+$2,500</div>
        </div>

        <div className="flex gap-5 sm:gap-7 justify-between items-center">
          <div className="flex gap-4 sm:gap-6">
            <div className="flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[100px] bg-[#DCFAF8]">
              <DollarCoin className="w-[22px] sm:w-[28px]" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-[#232323] text-[15px] dark:text-white font-medium ">
                Jemi Wilson
              </div>
              <div className="text-[14px] text-[--color-brand-2]">
                21 January 2021
              </div>
            </div>
          </div>

          <div className="text-[--color-accent-green] text-[14px]">+$5,400</div>
        </div>
      </section>
    </>
  );
}
