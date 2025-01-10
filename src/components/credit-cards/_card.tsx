import Image from "@/components/shared/image";
import chipCard from "@/assests/images/chip-card.svg";
import chipCardDark from "@/assests/images/chip-card-dark.svg";
import cn from "@/utils/cn";
import { lato } from "@/assests/fonts/fonts";
import { MasterCardSig } from "../icons/mastercard-sig";
import { maskCreditCard } from "@/utils/mask-creditcard";
import { useLocale } from "@/app/shared/locale-context";

export default function CreditCard({
  active = false,
  onClick,
}: {
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick}>{active ? <ActiveCard /> : <InactiveCard />}</div>
  );
}

function InactiveCard() {
  const { t } = useLocale();

  return (
    <div className="scale-[.9] sm:scale-[1]">
      <section>
        <div className="flex flex-col ">
          <div
            className={cn(
              lato.className,
              "min-w-[310px] flex flex-col gap-7 h-[210px] overflow-hidden rounded-[20px] border border-[#DFEAF2] bg-white dark:border-gray-700 dark:bg-transparent"
            )}
          >
            <div className="flex justify-between items-center px-6 mt-4">
              <div>
                <h3 className="text-[10px]">
                  {t("components:credit-cards.card.balance")}
                </h3>
                <p className="text-[18px] font-medium">$5,756</p>
              </div>
              <div>
                <Image src={chipCardDark} alt="credit card" />
              </div>
            </div>

            <div className="flex gap-[40px] px-6">
              <div>
                <div className="uppercase text-[10px] opacity-[.7]">
                  {t("components:credit-cards.card.card-holder")}
                </div>
                <div className="text-[14px]">Eddy Cusuma</div>
              </div>
              <div>
                <div className="uppercase text-[10px] opacity-[.7]">
                  {t("components:credit-cards.card.valid-thru")}
                </div>
                <div className="text-[14px]">12/22</div>
              </div>
            </div>

            <div className="flex justify-between items-center h-[60px] px-6  border-t border-t-[--white-theme-card-border-color] dark:border-t-gray-700">
              <div className="text-[19px] font-medium">
                {maskCreditCard("37784998334631234")}
              </div>
              <div>
                <MasterCardSig className="w-[40px] text-[#9199AF80]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function ActiveCard() {
  const { t } = useLocale();

  return (
    <div className="scale-[.9] sm:scale-[1]">
      <section>
        <div className="flex flex-col ">
          <div
            className={cn(
              lato.className,
              "min-w-[310px] flex flex-col gap-7 h-[210px] overflow-hidden rounded-[20px] text-white bg-gradient-to-r from-[#5B5A6F] to-[#000000] dark:bg-gradient dark:from-brand dark:to-brand"
            )}
          >
            <div className="flex justify-between items-center px-6 mt-4">
              <div>
                <h3 className="text-[10px]">
                  {t("components:credit-cards.card.balance")}
                </h3>
                <p className="text-[18px] font-medium">$5,756</p>
              </div>
              <div>
                <Image src={chipCard} alt="credit card" />
              </div>
            </div>

            <div className="flex gap-[40px] px-6">
              <div>
                <div className="uppercase text-[10px] opacity-[.7]">
                  {t("components:credit-cards.card.card-holder")}
                </div>
                <div className="text-[14px]">Eddy Cusuma</div>
              </div>
              <div>
                <div className="uppercase text-[10px] opacity-[.7]">
                  {t("components:credit-cards.card.valid-thru")}
                </div>
                <div className="text-[14px]">12/22</div>
              </div>
            </div>

            <div
              className="flex justify-between items-center h-[60px] px-6"
              style={{
                background: "linear-gradient(to right, #FFFFFF26, #FFFFFF00)",
              }}
            >
              <div className="text-[19px] font-medium">
                {maskCreditCard("37784998334631234")}
              </div>
              <div>
                <MasterCardSig className="w-[40px] text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
