"use client";

import { useBreakpoint } from "@/hooks/use-breakpoint";
import { SIDEBAR_WIDTH_PX } from "@/lib/constants";
import { useEffect, useState } from "react";
import AnchorLink from "../shared/links/anchor-link";
import { Settings } from "../icons/settings";
import { Notification } from "../icons/notification";
import { useLocale } from "@/app/shared/locale-context";
import Input from "../shared/form/input";
import { MagnifyingGlass } from "../icons/magnifying-glass";

import Image from "@/components/shared/image";
import user from "@/assests/images/user-2.png";
import Hamburger from "../icons/hamburger";
import { useMenu } from "@/context/MenuContext";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [headerWidth, setHeaderWidth] = useState(0);
  const { toggleMenu, isMenuOpen } = useMenu();
  const breakpoint = useBreakpoint();
  const { t } = useLocale();

  useEffect(() => {
    // Mark the component as client-rendered
    setIsClient(true);

    const updateWidth = () => {
      setHeaderWidth(window.innerWidth - SIDEBAR_WIDTH_PX);
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // If not client, render nothing
  if (!isClient) return null;

  return (
    <header
      className="flex flex-col justify-center h-auto py-4 md:py-0 md:h-[64px] md:shadow-main flex-grow bg-white md:border-b md:border-b-[#E6EFF5] dark:md:border-b-gray-700 dark:bg-brand"
      style={{
        width: `${
          headerWidth > 0 && ["xs", "sm", "md"].indexOf(breakpoint) === -1
            ? headerWidth + "px"
            : "100vw"
        }`,
      }}
    >
      <div className="flex justify-between w-full items-center px-4 sm:px-8">
        <div
          className="flex items-center justify-center lg:hidden text-[--color-brand-1] dark:text-white"
          onClick={toggleMenu}
        >
          <Hamburger isOpen={isMenuOpen} />
        </div>

        <h1 className="text-[20px] md:text-[22px] font-semibold text-[var(--color-brand-1)] dark:text-[--color-dark-2]">
          {t("components:navbar.overview")}
        </h1>

        <div className="flex items-center gap-[15px]">
          <div className="hidden md:flex items-center justify-center">
            <SearchInput />
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-[15px]">
              <li>
                <AnchorLink
                  href="#"
                  className="flex justify-center items-center bg-[#F5F7FA] w-[40px] h-[40px] rounded-[100px] border-[#ecf2fc] border  dark:border-[#374151] dark:bg-[#171e2e]"
                >
                  <Settings className="text-[#718EBF] w-[17px] dark:text-white" />
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#"
                  className="flex justify-center items-center bg-[#F5F7FA] w-[40px] h-[40px] rounded-[100px] border-[#ecf2fc] border  dark:border-[#374151] dark:bg-[#171e2e]"
                >
                  <Notification className="text-[#396AFF]  w-[18px] dark:text-white" />
                </AnchorLink>
              </li>
            </ul>
          </nav>
          <div className="max-w-[34px] max-h-[34px] md:max-w-[40px] md:max-h-[40px] rounded-[100px] overflow-hidden">
            <Image src={user} alt="user" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:hidden mt-5 w-screen px-4 sm:px-8">
        <SearchInput />
      </div>
    </header>
  );
}

const SearchInput = () => {
  const { t } = useLocale();

  return (
    <div className="flex bg-[#F5F7FA] w-full  items-center rounded-[100px] ltr:pl-4 rtl:pr-4 max-h-[38px] border-[#ecf2fc] border  dark:border-[#374151] dark:bg-[#171e2e]">
      <MagnifyingGlass className="w-[16px] scale-[1.1] text-[#718EBF]" />
      <Input
        type="text"
        placeholder={t("components:navbar.search")}
        inputClassName="flex flex-grow spin-button-hidden bg-transparent focus:!ring-0 max-h-[38px] placeholder:text-[#8BA3CB]"
        className="relative w-full text-[--color-brand-1] "
      />
    </div>
  );
};
