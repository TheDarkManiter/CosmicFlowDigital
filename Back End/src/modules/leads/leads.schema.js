import { z } from "zod";

export const leadSchema = z.object({
  package_slug: z.string().min(1),
  business: z.string().min(2),
  objective: z.enum([
    "Generar leads",
    "Vender en línea",
    "Posicionarme (SEO)",
    "Lanzar una campaña",
  ]),
  name: z.string().min(2),
  whatsapp: z.string().min(7).max(20),
  email: z.string().email().optional(),
  message: z.string().max(2000).optional(),
  consent: z.literal(true),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  source: z.string().max(200).optional().default("contact_form"),
});
