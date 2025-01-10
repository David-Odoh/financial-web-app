"use client";

import React from "react";
import FullPageLoadingScreen from "@/components/shared/load-screen";
import { useLocale } from "./locale-context";

const ClientLocaleWrapper = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useLocale();

  if (loading) {
    return <FullPageLoadingScreen />;
  }

  return <>{children}</>;
};

export default ClientLocaleWrapper;
