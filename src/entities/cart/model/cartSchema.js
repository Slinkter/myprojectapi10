import { z } from "zod";
import { productSchema } from "@/entities/product/model/productSchema";

/**
 * Esquema de validación para un ítem del carrito de compras.
 * Compone el esquema de producto validando también la cantidad seleccionada.
 */
export const cartItemSchema = z.object({
  product: productSchema,
  quantity: z.number().int().positive("La cantidad debe ser mayor a 0"),
});

/**
 * Esquema de validación para el estado completo del carrito (lista de ítems).
 */
export const cartItemListSchema = z.array(cartItemSchema);
