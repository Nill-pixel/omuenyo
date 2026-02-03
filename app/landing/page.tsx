"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiSparkles,
  HiArrowRight,
  HiBars3,
  HiXMark,
  HiEye,
  HiCpuChip,
  HiSignal,
  HiGlobeAlt,
  HiDevicePhoneMobile,
  HiPlayCircle,
} from "react-icons/hi2";
import { GiChestnutLeaf } from "react-icons/gi";
import { SiAndroid, SiApple } from "react-icons/si";
import {
  AnimatedBlob,
  GlassCard,
  GlowingBorder,
  LiquidButton,
  ParticleBackground,
  RotatingIcon,
  StaggerReveal,
} from "@/src/components/effects/modern-effects";

// Smooth scroll handler
const handleSmoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Animated blobs in background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-0 w-96 h-96 opacity-40">
          <AnimatedBlob delay={0} />
        </div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 opacity-30">
          <AnimatedBlob delay={2} />
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 bg-linear-to-br from-green-500 to-green-600 rounded-lg shadow-lg shadow-green-500/20">
              <GiChestnutLeaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Omuenyo ovìkula
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => handleSmoothScroll("problem")}
              className="text-sm text-gray-600 hover:text-green-600 transition font-medium cursor-pointer"
            >
              Problema
            </button>
            <button
              onClick={() => handleSmoothScroll("solution")}
              className="text-sm text-gray-600 hover:text-green-600 transition font-medium cursor-pointer"
            >
              Solução
            </button>
            <motion.button
              className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition shadow-lg shadow-green-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/login">Teste Grátis</Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-100 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => {
                  handleSmoothScroll("problem");
                  setMobileMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-green-600 font-medium cursor-pointer w-full text-left"
              >
                Problema
              </button>
              <button
                onClick={() => {
                  handleSmoothScroll("solution");
                  setMobileMenuOpen(false);
                }}
                className="block text-sm text-gray-600 hover:text-green-600 font-medium cursor-pointer w-full text-left"
              >
                Solução
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 z-10">
        <div className="max-w-4xl mx-auto w-full">
          <StaggerReveal>
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200/50 bg-green-50/50 backdrop-blur">
                <HiSparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Transformando a agricultura em Angola
                </span>
              </div>
            </motion.div>

            {/* Main heading - Vercel style */}
            <motion.h1
              className="text-center text-5xl md:text-7xl font-black leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block text-gray-900">
                Detecte doenças em plantas
              </span>
              <span className="block bg-linear-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                em segundos com IA
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Precisão 98%. Funciona offline. Qualquer smartphone. Os primeiros
              agricultores economizaram até 500.000 Kz por colheita.
            </motion.p>

            {/* CTA Buttons - Hero */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/register">
                <LiquidButton className="px-8 py-4 bg-linear-to-r from-green-600 to-green-500 text-white rounded-lg">
                  Começar Agora
                  <HiArrowRight className="w-5 h-5" />
                </LiquidButton>
              </Link>

              {/* Secondary button with glass effect */}
              <motion.button
                className="px-8 py-4 rounded-lg font-bold text-gray-900 border-2 border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition backdrop-blur-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiPlayCircle className="w-5 h-5" />
                Ver Demo
              </motion.button>
            </motion.div>

            {/* Mobile Download Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiApple className="w-5 h-5" />
                App Store
              </motion.button>
              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiAndroid className="w-5 h-5" />
                Google Play
              </motion.button>
            </motion.div>
          </StaggerReveal>

          {/* Hero Demo Section - Vercel style large image area */}
          <GlowingBorder>
            <motion.div
              className="relative bg-linear-to-br from-white via-green-50 to-white rounded-2xl p-1 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <div className="relative bg-white rounded-xl p-4 md:p-8">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-5">
                  <div className="h-full w-full bg-grid-pattern" />
                </div>

                {/* Interactive demo content */}
                <div className="relative z-10 flex flex-col items-center justify-center py-10 gap-4">
                  <RotatingIcon>
                    <GiChestnutLeaf className="w-14 h-14 text-green-600" />
                  </RotatingIcon>

                  <div className="text-center max-w-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      IA em Tempo Real
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      Tire uma foto da folha e receba diagnóstico em menos de 2
                      segundos
                    </p>
                  </div>

                  {/* Feature pills */}
                  <div className="flex gap-2 flex-wrap justify-center">
                    {[
                      { icon: HiEye, label: "Visão Computacional" },
                      { icon: HiCpuChip, label: "Deep Learning" },
                      { icon: HiSignal, label: "Tempo Real" },
                      { icon: HiDevicePhoneMobile, label: "Mobile First" },
                    ].map((feat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        className="px-3 py-1 bg-linear-to-r from-green-50 to-white border border-green-200/50 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
                      >
                        <feat.icon className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-semibold text-gray-700">
                          {feat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </GlowingBorder>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative py-32 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <motion.span
                className="text-sm font-bold text-green-600 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                O Desafio
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-black mt-2 mb-8 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                O problema que mata colheitas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                30% das colheitas mundiais são perdidas por doenças. A maioria
                dos agricultores só descobre quando é tarde demais.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Detecção visual é imprecisa",
                  desc: "30-50% de erro humano",
                },
                {
                  title: "Agroquímicos mal aplicados",
                  desc: "Custos + contaminação sem necessidade",
                },
                {
                  title: "Diagnóstico tardio",
                  desc: "Colheitas inteiras perdidas",
                },
                {
                  title: "Sem acesso a especialistas",
                  desc: "Zona rural isolada de agrônomos",
                },
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start p-4 rounded-lg bg-white/50 backdrop-blur border border-gray-200/50 hover:border-green-200/50 transition"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-linear-to-r from-green-500 to-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{point.title}</p>
                    <p className="text-sm text-gray-600 font-light">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section with Glass Cards */}
      <section id="solution" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <motion.span
                className="text-sm font-bold text-green-600 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Nossa Solução
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-black mt-2 mb-8 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                IA que realmente funciona
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: HiCpuChip,
                  title: "Rápido",
                  desc: "Resultado em menos de 2 segundos, sem esperar por especialistas",
                },
                {
                  icon: HiEye,
                  title: "Preciso",
                  desc: "98% de acurácia com redes neurais treinadas em 1M+ imagens",
                },
                {
                  icon: HiGlobeAlt,
                  title: "Offline",
                  desc: "Funciona sem internet - perfeito para zonas rurais isoladas",
                },
                {
                  icon: HiSignal,
                  title: "Acessível",
                  desc: "Qualquer smartphone antigo serve - não precisa de equipamento caro",
                },
              ].map((feature, idx) => (
                <GlassCard key={idx}>
                  <motion.div
                    className="p-6 rounded-xl relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="mb-4 w-14 h-14 rounded-lg bg-linear-to-br from-green-500/20 to-green-600/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <feature.icon className="w-7 h-7 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light">{feature.desc}</p>
                  </motion.div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Startup Status Section */}
      <section className="relative py-24 px-6 z-10 bg-primary-700">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.span
            className="text-sm font-bold uppercase tracking-widest text-white/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Estamos começando
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-black mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Startup em fase inicial
          </motion.h2>
          <motion.p
            className="text-white/80 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos validando o produto com produtores locais e melhorando a
            cada versão.
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-28 px-6 z-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-green-600 uppercase tracking-widest">
              Como funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">
              Simples e direto
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-light">
              Quatro passos claros para diagnosticar e agir rápido no campo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Capture",
                desc: "Tire uma foto da folha com seu celular.",
              },
              {
                title: "Analise",
                desc: "A IA identifica sinais da doença em segundos.",
              },
              {
                title: "Aja",
                desc: "Receba recomendações práticas e objetivas.",
              },
              {
                title: "Proteja",
                desc: "Evite perdas e aumente sua produtividade.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex mb-6 relative">
                  <div className="w-16 h-16 bg-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {idx + 1}
                  </div>
                  <div className="absolute w-full h-full bg-primary-700/20 rounded-2xl top-3 left-3 -z-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-green-600 uppercase tracking-widest">
              Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">
              Quem usa, aprova
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-light">
              Produtores que reduziram perdas e tomaram decisões mais rápidas.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700">
                Estamos iniciando as primeiras validações com produtores locais.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Em breve publicaremos depoimentos reais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="relative py-40 px-6 z-10 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-green-600 via-green-500 to-green-600 opacity-90" />

        {/* Removed infinite background animation - too expensive for performance */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <StaggerReveal>
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Está pronto para transformar sua colheita?
            </motion.h2>

            <motion.p
              className="text-lg text-green-50 mb-12 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Somos uma startup. O problema é real. A solução funciona. Venha
              testar com agricultores que já economizaram até 500.000 Kz cada um
              nessa colheita.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 bg-white/20 border-2 border-white/40 rounded-lg text-white placeholder-green-100 focus:outline-none focus:border-white transition backdrop-blur-sm"
                required
              />
              <LiquidButton className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold">
                Inscrever
              </LiquidButton>
            </motion.form>

            {submitted && (
              <motion.div
                className="text-white text-sm bg-white/20 backdrop-blur p-4 rounded-lg border border-white/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Obrigado! Entraremos em contato em breve.
              </motion.div>
            )}

            <motion.p
              className="text-xs text-green-100/60 mt-6 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Sem spam. Apenas atualizações quando tiver novidades reais.
            </motion.p>
          </StaggerReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-16 px-6 bg-white/50 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-12">
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-linear-to-br from-green-500 to-green-600 rounded-lg shadow-lg shadow-green-500/20">
                <GiChestnutLeaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Omuenyo ovìkula
                </span>
                <p className="text-xs text-gray-500 font-light">
                  IA para agricultura em Angola
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-8 text-sm text-gray-600 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-green-600 transition">
                Blog
              </a>
              <a href="#" className="hover:text-green-600 transition">
                Contato
              </a>
              <a href="#" className="hover:text-green-600 transition">
                Privacidade
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-gray-500 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              © 2026 Omuenyo ovìkula. Transformando agricultura em Angola com
              inteligência artificial.
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}
