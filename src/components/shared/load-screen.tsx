import React from "react";

const FullPageLoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-[--color-brand-1] dark:text-white bg-white dark:bg-brand bg-opacity-75 flex justify-center items-center z-50">
      <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
        <h1 className="font-extrabold text-[22px] sm:text-[32px] mb-[100px]">
          Soar Task
        </h1>
      </div>
    </div>
  );
};

export default FullPageLoadingScreen;
