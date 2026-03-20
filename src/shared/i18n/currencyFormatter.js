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
