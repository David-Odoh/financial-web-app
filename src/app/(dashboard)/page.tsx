import CreditCards from "@/components/credit-cards";
import RecentTransactions from "@/components/transactions/recent";
import BalanceHistory from "@/components/transactions/balance-history";
import QuickTransfer from "@/components/transactions/transfer";
import WeeklyActivities from "@/components/transactions/activities";
import ExpenseStatics from "@/components/transactions/expenses";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full flex-grow">
      <section className="flex w-full gap-6 sm:gap-8 justify-between flex-wrap md:flex-nowrap">
        <div className="overflow-hidden flex-grow ltr:md:pl-8 rtl:md:pr-8">
          <CreditCards />
        </div>

        <div className="w-full md:w-[380px] px-4 md:px-0 ltr:md:pr-8 rtl:md:pl-8">
          <RecentTransactions />
        </div>
      </section>

      <section className="flex w-full gap-6 sm:gap-8 justify-between flex-wrap md:flex-nowrap mt-8">
        <div className="overflow-hidden flex-grow ltr:md:pl-8 rtl:md:pr-8">
          <WeeklyActivities />
        </div>

        <div className="w-full md:w-[380px] px-4 md:px-0 ltr:md:pr-8 rtl:md:pl-8">
          <ExpenseStatics />
        </div>
      </section>

      <section className="flex w-full gap-6 sm:gap-8 justify-between flex-wrap md:flex-nowrap mt-8">
        <div className="px-4 md:px-0 ltr:md:pl-8 rtl:md:pr-8">
          <QuickTransfer />
        </div>

        <div className="flex-grow px-4 md:px-0 ltr:md:pr-8 rtl:md:pl-8">
          <BalanceHistory />
        </div>
      </section>
    </div>
  );
}
