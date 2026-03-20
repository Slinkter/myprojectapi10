/**
 * @description Formats a price to a string with a dollar sign and two decimal places.
 * @param {number} price - The price to format.
 * @returns {string} The formatted price.
 * @example
 * formatPrice(10) // "$10.00"
 */
export function formatPrice(price) {
  return typeof price === "number" ? `$${price.toFixed(2)}` : "—";
}

/**
 * Truncates text to a specified maximum length, adding ellipsis if truncated.
 * @param {string} text - The text to truncate.
 * @param {number} [max=100] - The maximum allowed length.
 * @returns {string} The truncated text.
 * @example
 * truncateText("Long description here", 10) // "Long descr..."
 */
export function truncateText(text, max = 100) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max) + "...";
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The string to capitalize.
 * @returns {string} The capitalized string.
 * @example
 * capitalize("hello") // "Hello"
 */
export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
