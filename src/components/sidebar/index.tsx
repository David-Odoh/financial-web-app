"use client";

import { SIDEBAR_WIDTH_PX } from "@/lib/constants";
import { SoarLogo } from "../icons/soar-logo";
import AnchorLink from "../shared/links/anchor-link";
import { useLocale } from "@/app/shared/locale-context";
import { defaultMenuItems } from "./_menu-items";
import { usePathname } from "next/navigation";
import Preferences from "../settings/preferences";
import { useMenu } from "@/context/MenuContext";
import { useEffect, useRef } from "react";

function SidebarLayout() {
  const { t } = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={`flex h-full shadow-main relative
        ltr:border-r-[var(--white-theme-card-border-color)] rtl:border-l-[var(--white-theme-card-border-color)]
         ltr:dark:border-r-gray-700 ltr:border-r rtl:dark:border-l-gray-700 rtl:border-l`}
      style={{ width: `${SIDEBAR_WIDTH_PX}px` }}
    >
      <div style={{ width: `${SIDEBAR_WIDTH_PX}px` }}>
        <div className="flex gap-2 p-4 w-full justify-center text-[]">
          <SoarLogo className="h-auto w-[18px] sm:w-[22px] text-[--color-brand-3] dark:text-[--color-dark-2]" />
          <h1 className="font-extrabold text-[18px] sm:text-[22px] text-[--color-brand-1] dark:text-[--color-dark]">
            Soar Task
          </h1>
        </div>
        <div>
          <nav className="mt-6">
            <ul className="flex flex-col gap-3">
              {defaultMenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <AnchorLink href={item.href}>
                      <div className="flex items-center gap-[10px] h-[40px]">
                        {pathname === item.href && (
                          <span className="block h-full ltr:rounded-r-lg rtl:rounded-l-lg w-[6px] bg-[--color-brand-3] dark:bg-white"></span>
                        )}

                        <div
                          className={`flex items-center gap-4 w-full flex-grow ${
                            pathname === item.href
                              ? "ltr:pl-6 rtl:pr-6 text-[--color-brand-3] dark:text-white"
                              : "ltr:pl-10 rtl:pr-10 text-[#B1B1B1] dark:text-[--color-dark-2]"
                          }`}
                        >
                          <span className="">{item.icon}</span>
                          <span>{t(item.name)}</span>
                        </div>
                      </div>
                    </AnchorLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-8">
          <Preferences />
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { isMenuOpen, closeMenu } = useMenu();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`block lg:hidden absolute top-0 h-full ltr:left-0 rtl:right-0 z-10 bg-white dark:bg-[#0d1321] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "ltr:translate-x-0 rtl:-translate-x-0"
            : "ltr:-translate-x-full rtl:translate-x-full"
        }`}
      >
        <SidebarLayout />
      </div>

      <div className="hidden lg:block h-full">
        <SidebarLayout />
      </div>
    </>
  );
}
