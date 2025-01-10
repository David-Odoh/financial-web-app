import { useEffect } from "react";
import { atom, useAtom } from "jotai";

const directionAtom = atom("");

export function useDirection(layout: string) {
  const [exposeDirection, updateDirection] = useAtom(directionAtom);

  useEffect(() => {
    document.documentElement.dir = layout;
    updateDirection(layout);
  }, [layout, updateDirection]);

  return exposeDirection;
}
