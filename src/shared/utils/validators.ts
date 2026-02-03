import { z } from "zod";

// Auth Schemas
export const LoginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .min(1, "Senha é obrigatória"),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    password: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres")
      .min(1, "Senha é obrigatória"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

// Product Schemas
export const ProductSchema = z.object({
  name: z
    .string()
    .min(1, "Nome do produto é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.number().positive("Preço deve ser maior que 0"),
  category: z.string().min(1, "Categoria é obrigatória"),
});

// Export types
export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type ProductInput = z.infer<typeof ProductSchema>;
