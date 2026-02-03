import { useCallback } from "react";
import { z } from "zod";

export function useValidation() {
  const validate = useCallback(
    async <T>(
      schema: z.ZodSchema,
      data: unknown,
    ): Promise<{
      success: boolean;
      data?: T;
      errors?: Record<string, string>;
    }> => {
      try {
        const validatedData = await schema.parseAsync(data);
        return { success: true, data: validatedData as T };
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errors: Record<string, string> = {};
          error.issues.forEach((err) => {
            const path = err.path.join(".");
            errors[path] = err.message;
          });
          return { success: false, errors };
        }
        return {
          success: false,
          errors: { general: "Erro ao validar dados" },
        };
      }
    },
    [],
  );

  return { validate };
}
