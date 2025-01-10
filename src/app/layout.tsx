import type { Metadata } from "next";
import { inter } from "@/assests/fonts/fonts";

import cn from "@/utils/cn";
import "@/assests/css/globals.css";
import { LocaleProvider } from "./shared/locale-context";
import { ThemeProvider } from "./shared/theme-provider";
import { Suspense } from "react";
import LoadingScreen from "@/components/loader/loading-screen";
import ProgressBar from "@/components/progress-bar/progress-bar";
import { ToastConfig } from "@/lib/toast-config";
import { MenuProvider } from "@/context/MenuContext";
import ClientLocaleWrapper from "./shared/client-locale-wapper";

export const metadata: Metadata = {
  title: "Soar",
  description: "Welcome to Soar",
  icons: {
    icon: {
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = "en";

  return (
    <html
      lang={initialLocale}
      dir="ltr"
      className={cn("light", inter.className)}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LocaleProvider initialLocale={initialLocale}>
          <ThemeProvider>
            <MenuProvider>
              <ProgressBar />
              <ClientLocaleWrapper>{children}</ClientLocaleWrapper>
              <ToastConfig />
            </MenuProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
