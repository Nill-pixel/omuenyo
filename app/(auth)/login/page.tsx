"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { LoginSchema } from "@/src/shared/utils/validators";
import { useValidation } from "@/src/shared/hooks/validation.hook";
import { showToast } from "@/src/shared/utils/toast";
import { FormField } from "@/src/components";

export default function LoginPage() {
  const router = useRouter();
  const { validate } = useValidation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro ao começar a digitar
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
      // Validar dados
      const validation = await validate(LoginSchema, formData);

      if (!validation.success) {
        setErrors(validation.errors || {});
        showToast.error("Por favor, corrija os erros no formulário");
        setLoading(false);
        return;
      }

      // Aqui você chamaria sua API
      // const response = await api.post('/auth/login', validation.data);
      // localStorage.setItem('token', response.data.token);

      showToast.success("Login realizado com sucesso!");
      // router.push('/dashboard');
    } catch (error: any) {
      showToast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-100 via-white to-accent-pale flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border border-primary-100">
          {/* Logo/Header */}
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
            <p className="text-gray-600 text-sm">Gestão agrícola inteligente</p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
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

            {/* Remember & Forgot */}
            <motion.div
              className="flex justify-between items-center mb-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-primary-600 rounded"
                />
                <span className="text-gray-600">Lembrar-me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-primary-600 hover:text-primary-700"
              >
                Esqueci a senha
              </Link>
            </motion.div>

            {/* Submit Button */}
            <Button type="submit" fullWidth loading={loading} className="mb-4">
              Entrar
            </Button>
          </motion.form>

          {/* Divider */}
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
              <span className="px-2 bg-white text-gray-500">
                Novo por aqui?
              </span>
            </div>
          </motion.div>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/register"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              Criar uma conta
            </Link>
          </motion.div>
        </Card>

        {/* Footer Info */}
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
