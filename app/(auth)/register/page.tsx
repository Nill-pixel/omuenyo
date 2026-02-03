"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FormField } from "@/src/components/form-field";
import { Button } from "@/src/components/button";
import { Card } from "@/src/components/card";
import { RegisterSchema } from "@/src/shared/utils/validators";
import { useValidation } from "@/src/shared/hooks/validation.hook";
import { showToast } from "@/src/shared/utils/toast";

export default function RegisterPage() {
  const router = useRouter();
  const { validate } = useValidation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validation = await validate(RegisterSchema, formData);

      if (!validation.success) {
        setErrors(validation.errors || {});
        showToast.error("Por favor, corrija os erros no formulário");
        setLoading(false);
        return;
      }

      showToast.success("Conta criada com sucesso!");
    } catch (error: any) {
      showToast.error(error.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border border-primary-100">
          <motion.div
            className="text-center mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-5xl mb-3">🌾</div>
            <h1 className="text-3xl font-bold text-primary-700 mb-2">
              Omuenyo
            </h1>
            <p className="text-gray-600 text-sm">Criar uma nova conta</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FormField
              label="Nome Completo"
              name="name"
              placeholder="João Silva"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <FormField
              label="Senha"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <FormField
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <motion.div
              className="mb-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-primary-600 rounded mt-0.5"
                  required
                />
                <span className="text-gray-600">
                  Concordo com os{" "}
                  <Link
                    href="/terms"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    termos de serviço
                  </Link>
                </span>
              </label>
            </motion.div>

            <Button type="submit" fullWidth loading={loading} className="mb-4">
              Criar Conta
            </Button>
          </motion.form>

          <motion.div
            className="relative mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Já tem conta?</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/login"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              Fazer login
            </Link>
          </motion.div>
        </Card>

        <motion.p
          className="text-center text-gray-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © 2026 Omuenyo. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}
