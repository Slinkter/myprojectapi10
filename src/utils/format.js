/**
 * @description Formats a price to a string with a dollar sign and two decimal places.
 * @param {number} price - The price to format.
 * @returns {string} The formatted price.
 */
export function formatPrice(price) {
    return typeof price === "number" ? `$${price.toFixed(2)}` : "—";
}
