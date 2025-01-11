"use client";

import { useLocale } from "@/app/shared/locale-context";
import ActivitiesChart from "./_activities-chart";

export default function WeeklyActivities() {
  const { t } = useLocale();
  return (
    <>
      <section>
        <div className={`flex justify-between pb-4`}>
          <h1 className="font-semibold text-[18px] text-[--color-brand-1] dark:text-[--color-dark-2]">
            {t("components:transactions.weekly-activities")}
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full gap-3 sm:gap-2 shadow-card md:shadow-main bg-white dark:bg-[#171e2e]  rounded-[20px] px-4 py-2 sm:px-6 h-[250px]">
        <ActivitiesChart />
      </section>
    </>
  );
}
