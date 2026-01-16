import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string('Nome é obrigatório')
    .min(1, 'Nome não pode estar vazio')
    .max(200, 'Nome muito longo'),
  email: z.string('Email é obrigatório').email('Email inválido'),
  phone: z.string().max(20, 'Telefone muito longo').optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormOutput = z.output<typeof contactSchema>;
