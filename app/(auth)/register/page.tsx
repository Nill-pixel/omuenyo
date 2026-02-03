"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Mail, Phone, Lock, Eye } from "lucide-react";
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { Label } from "@/src/shared/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{
          backgroundImage: "url(/auth-pattern.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-700/80" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">AgroHealth</h1>
              <p className="text-primary-100">ovikula</p>
            </div>
          </div>
          <p className="text-xl mb-4">
            Junte-se a milhares de agricultores que confiam em nossa tecnologia
          </p>
          <p className="text-lg opacity-90">
            Comece a proteger suas culturas com diagnósticos precisos e rápidos.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-primary-700 rounded-xl p-2">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary-700">
                AgroHealth
              </span>
            </div>
          </div>

          <div className="bg-transparent">
            <div className="px-0 gap-2 p-4">
              <h2 className="text-4xl font-medium text-[#424242]">Registrar</h2>
              <div className="h-1 w-20 bg-primary-700 rounded-full mt-2" />
            </div>
            <div className="px-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-base font-medium text-[#616161]"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#616161]">
                      <Mail className="h-4 w-4" />
                      <div className="h-2 w-px bg-[#616161]" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="demo@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="pl-10 border-0 border-b-2 border-primary-700 rounded-none focus-visible:ring-0 focus-visible:border-primary-700"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="phone"
                    className="text-base font-medium text-[#616161]"
                  >
                    Telefone
                  </Label>
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#616161]">
                      <Phone className="h-4 w-4" />
                      <div className="h-2 w-px bg-[#616161]" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+244 000-000-000"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="pl-10 border-0 border-b-2 border-primary-700 rounded-none focus-visible:ring-0 focus-visible:border-primary-700"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="password"
                    className="text-base font-medium text-[#616161]"
                  >
                    Senha
                  </Label>
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#bdbdbd]">
                      <Lock className="h-4 w-4" />
                      <div className="h-2 w-px bg-[#bdbdbd]" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Inserir sua Senha"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      className="pl-10 border-0 border-b-2 border-[#bdbdbd] rounded-none focus-visible:ring-0 focus-visible:border-primary-700"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <Eye className="h-4 w-4 text-[#bdbdbd]" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-base font-medium text-[#616161]"
                  >
                    Confirma Senha
                  </Label>
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#bdbdbd]">
                      <Lock className="h-4 w-4" />
                      <div className="h-2 w-px bg-[#bdbdbd]" />
                    </div>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirmar sua Senha"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      className="pl-10 border-0 border-b-2 border-[#bdbdbd] rounded-none focus-visible:ring-0 focus-visible:border-primary-700"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <Eye className="h-4 w-4 text-[#bdbdbd]" />
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Criar conta
                </Button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-sm text-[#9e9e9e]">
                  Já tem uma conta!{" "}
                </span>
                <button
                  onClick={() => router.push("/login")}
                  className="text-sm text-primary-700 hover:underline font-medium"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
