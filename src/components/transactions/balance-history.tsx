"use client";

import { useLocale } from "@/app/shared/locale-context";
import HistoryChart from "./_history-chart";

export default function BalanceHistory() {
  const { t } = useLocale();
  return (
    <>
      <section>
        <div className={`flex justify-between pb-4`}>
          <h1 className="font-semibold text-[18px] text-[--color-brand-1] dark:text-[--color-dark-2]">
            {t("components:transactions.balance-history")}
          </h1>
        </div>
      </section>

      <section className="flex w-full flex-col justify-center gap-3 sm:gap-2 shadow-card md:shadow-main bg-white dark:bg-[#171e2e]  rounded-[20px] px-2 sm:px-4 h-[220px]">
        <HistoryChart />
      </section>
    </>
  );
}
