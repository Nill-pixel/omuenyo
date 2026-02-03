"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card } from "@/app/components/ui/card";
import { Leaf, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
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
            Diagnóstico inteligente de doenças em culturas agrícolas
          </p>
          <p className="text-lg opacity-90">
            Proteja suas plantações com tecnologia de ponta e análise de imagens
            precisa.
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
              <h2 className="text-4xl font-medium text-[#424242]">Entrar</h2>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="Inserir sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-0 border-b-2 border-[#bdbdbd] rounded-none focus-visible:ring-0 focus-visible:border-primary-700"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-primary-700 text-primary-700 focus:ring-primary-700"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium text-[#424242]"
                    >
                      Relembrar
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-semibold text-primary-700 hover:underline"
                  >
                    Esqueceu a Senha?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-sm text-[#9e9e9e]">
                  Não tem uma conta?{" "}
                </span>
                <button
                  onClick={() => router.push("/register")}
                  className="text-sm text-primary-700 hover:underline font-medium"
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
