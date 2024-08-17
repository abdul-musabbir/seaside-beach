import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...rest: string[]) {
  return twMerge(clsx(rest));
}
