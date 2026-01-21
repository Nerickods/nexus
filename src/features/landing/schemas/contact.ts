import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    company: z.string().optional(),
    message: z.string().min(10, "El mensaje debe ser más descriptivo").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
