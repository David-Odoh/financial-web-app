"use client";

import { useLocale } from "@/app/shared/locale-context";
import PaymentHistory from "./_history";
import { Send } from "../icons/send";
import Input from "../shared/form/input";

export default function QuickTransfer() {
  const { t } = useLocale();
  return (
    <>
      <section>
        <div className={`flex justify-between pb-4`}>
          <h1 className="font-semibold text-[18px] text-[--color-brand-1] dark:text-[--color-dark-2]">
            {t("components:transactions.quick-transfer")}
          </h1>
        </div>
      </section>

      <section className="flex w-full flex-col justify-center gap-3 sm:gap-2 shadow-card md:shadow-main bg-white dark:bg-[#171e2e]  rounded-[20px] px-4 sm:px-6 h-[220px]">
        <div>
          <PaymentHistory />
        </div>

        <div className="flex max-w-[280px] gap-3 mt-4">
          <div className="flex items-center whitespace-nowrap text-[#718EBF] text-[12px]">
            {t("components:transactions.write-amount")}
          </div>
          <div className="relative flex  bg-[#F5F7FA] w-full  items-center rounded-[100px] ltr:pl-4 rtl:pr-4 max-h-[38px] border-[#ecf2fc] border  dark:border-[#374151] dark:bg-[#171e2e]">
            <Input
              type="number"
              placeholder="525.50"
              inputClassName="flex flex-grow spin-button-hidden bg-transparent focus:!ring-0 max-h-[38px] placeholder:text-[#8BA3CB]"
              className="relative text-[--color-brand-1] "
            />
            <span className="relative overflow-hidden flex items-center gap-2 text-white bg-[--color-brand-3] dark:bg-brand rounded-3xl py-2 px-4 w-[150px]">
              <span className="text-[12px]">
                {t("components:transactions.send")}
              </span>
              <Send className="h-5 w-5 lg:h-6 lg:w-6" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
