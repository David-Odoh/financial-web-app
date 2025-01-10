"use client";

import { useScrollableSlider } from "@/hooks/use-scrollable-slider";
import { Tab, TabItem, TabPanel, TabPanels } from "@/components/shared/tab";
import dynamic from "next/dynamic";
import LoaderComponent from "../shared/loader";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useLocale } from "@/app/shared/locale-context";

// Dynamic imports
const EditProfile = dynamic(
  () => import("@/components/settings/edit-profile"),
  {
    loading: () => <LoaderComponent />,
  }
);
const Dummy = dynamic(() => import("@/components/settings/dummy"), {
  loading: () => <LoaderComponent />,
});

export default function Settings() {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();
  const { t } = useLocale();

  return (
    <div className="h-full w-full rounded-[20px] bg-white p-4 pb-6 shadow-main  dark:bg-light-dark sm:px-6 2xl:px-8 2xl:pb-9">
      <Tab.Group>
        <div className="flex items-start">
          <button
            ref={sliderPrevBtn}
            onClick={() => scrollToTheLeft()}
            className="flex h-8 w-6 items-center justify-center bg-gradient-to-r from-white to-transparent text-dark dark:from-gray-800 xs:hidden"
          >
            <IoIosArrowBack className="w-4 dark:text-white" />
          </button>
          <div className="-mb-4 flex h-full min-h-[36px] w-full items-start overflow-hidden xs:mb-0">
            <Tab.List
              ref={sliderEl}
              className="settings-scrollbar relative border-b border-gray-200 dark:border-gray-800 flex w-full justify-between overflow-x-auto scroll-smooth text-sm min-[375px]:justify-start sm:gap-6 md:gap-10 xs:mb-0 2xl:gap-10"
            >
              <TabItem className="whitespace-nowrap capitalize text-gray-600 2xl:uppercase [&>span]:px-0 text-[--color-brand-3] dark:text-white">
                {t("components:settings.edit-profile")}
              </TabItem>
              <TabItem className="whitespace-nowrap px-0 capitalize text-gray-600 2xl:uppercase text-[--color-brand-2]">
                {t("components:settings.preferences")}
              </TabItem>
              <TabItem className="whitespace-nowrap px-0 capitalize text-gray-600 2xl:uppercase text-[--color-brand-2]">
                {t("components:settings.security")}
              </TabItem>
            </Tab.List>
          </div>
          <button
            ref={sliderNextBtn}
            onClick={() => scrollToTheRight()}
            className="flex h-8 w-6 items-center justify-center bg-gradient-to-l from-white to-transparent text-dark dark:from-gray-800 xs:hidden"
          >
            <IoIosArrowForward className="w-4 dark:text-white" />
          </button>
        </div>
        <TabPanels className="mt-4">
          <TabPanel className="focus:outline-none">
            <EditProfile />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <Dummy />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <Dummy />
          </TabPanel>
        </TabPanels>
      </Tab.Group>
    </div>
  );
}
