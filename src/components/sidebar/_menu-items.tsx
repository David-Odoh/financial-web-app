import routes from "@/config/routes";
import { Home } from "../icons/home";
import { SettingsSolid } from "../icons/settings-solid";
import { MenuItems } from "@/types";
import { DollarPhone } from "../icons/dollar-phone";
import { User } from "../icons/user";
import { EconomicInvestment } from "../icons/economic-investment";
import { CreditCard } from "../icons/credit-card";
import { Loan } from "../icons/loan";
import { Service } from "../icons/service";
import { Econometrics } from "../icons/econometrics";

export const defaultMenuItems: MenuItems[] = [
  {
    name: "components:sidebar.dashboard",
    icon: <Home className="w-[20px]" />,
    href: routes.dashboard,
  },
  {
    name: "components:sidebar.transactions",
    icon: <DollarPhone className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.accounts",
    icon: <User className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.investments",
    icon: <EconomicInvestment className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.credit-cards",
    icon: <CreditCard className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.loans",
    icon: <Loan className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.services",
    icon: <Service className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.my-privileges",
    icon: <Econometrics className="w-[20px]" />,
    href: routes.others,
  },
  {
    name: "components:sidebar.settings",
    icon: <SettingsSolid className="w-[20px]" />,
    href: routes.settings,
  },
];
