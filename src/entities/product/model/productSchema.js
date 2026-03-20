import { z } from "zod";

/**
 * Esquema de validación para un Producto individual.
 * Asegura que los datos provenientes de la API cumplan con los tipos esperados por la UI.
 */
export const productSchema = z.object({
  id: z.number().int().positive("El ID debe ser un número entero positivo"),
  title: z.string().min(1, "El título no puede estar vacío"),
  price: z.number().positive("El precio debe ser un número positivo"),
  description: z.string().optional(),
  category: z.string().optional(),
  image: z.string().url("La imagen debe ser una URL válida").optional(),
  rating: z
    .object({
      rate: z.number().min(0).max(5).optional(),
      count: z.number().int().nonnegative().optional(),
    })
    .optional(),
});

/**
 * Esquema de validación para una lista (Array) de Productos.
 */
export const productListSchema = z.array(productSchema);
