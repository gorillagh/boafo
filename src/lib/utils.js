// src/lib/utils.js
import { clsx } from "clsx";

/**
 * Utility for conditional classNames.
 * Usage: cn("base", condition && "conditional", { "obj": true })
 */
export function cn(...args) {
  return clsx(...args);
}
