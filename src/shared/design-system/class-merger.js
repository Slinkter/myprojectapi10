import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge.
 * @param {...import('clsx').ClassValue} inputs - Class values to combine
 * @returns {string} The merged class string
 */
export const cn = (...inputs) => twMerge(clsx(inputs));
