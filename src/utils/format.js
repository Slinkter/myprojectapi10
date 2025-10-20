// Helper para formatear precios de forma segura y reutilizable
export function formatPrice(price) {
    return typeof price === "number" ? `$${price.toFixed(2)}` : "—";
}
