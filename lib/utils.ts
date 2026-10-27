import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function words(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
