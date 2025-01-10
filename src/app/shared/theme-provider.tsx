"use client";

import { useDirection } from "@/hooks/use-direction";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useLocalStorage } from "react-use";

export function ThemeProvider({ children }: React.PropsWithChildren<object>) {
  const [direction] = useLocalStorage<string>("soar-direction");
  const [themeColor] = useLocalStorage<string>("soar-color");
  useDirection(direction ? direction : "ltr");
  useThemeColor(themeColor ? themeColor : "#343c6a");

  return (
    <NextThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      {children}
    </NextThemeProvider>
  );
}
