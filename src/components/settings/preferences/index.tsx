"use client";

import { useLocale } from "@/app/shared/locale-context";
import { LeftAlign } from "@/components/icons/left-align";
import { RightAlign } from "@/components/icons/right-align";
import { Moon } from "@/components/icons/moon";
import { Sun } from "@/components/icons/sun";
import { useDirection } from "@/hooks/use-direction";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useTheme } from "next-themes";

export default function Preferences() {
  const { theme, setTheme } = useTheme();
  const [direction, setDirection] = useLocalStorage("soar-direction", "ltr");
  useDirection(direction ? direction : "ltr");
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex w-full p-4 justify-start">
      <div className="flex gap-[10px]">
        <div
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12"
        >
          {theme == "dark" ? (
            <Sun className="h-auto w-4 sm:w-auto" />
          ) : (
            <Moon className="h-auto w-4 sm:w-auto" />
          )}
        </div>

        <div
          onClick={() =>
            direction == "rtl" ? setDirection("ltr") : setDirection("rtl")
          }
          className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12"
        >
          {direction == "ltr" ? (
            <RightAlign className="h-auto w-4 sm:w-auto" />
          ) : (
            <LeftAlign className="h-auto w-4 sm:w-auto" />
          )}
        </div>

        <div
          onClick={() => (locale == "en" ? setLocale("ar") : setLocale("en"))}
          className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12"
        >
          {locale == "ar" ? <span>EN</span> : <span>AR</span>}
        </div>
      </div>
    </div>
  );
}
