"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-linear-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4"
    >
      <div className="text-center max-w-md">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-7xl mb-6"
        >
          🌾
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          className="text-6xl font-bold text-primary-700 mb-2"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.p
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Página não encontrada
        </motion.p>

        <motion.p
          className="text-gray-600 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Desculpe, a página que você está procurando não existe ou foi movida.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            ← Voltar ao início
          </Link>
          <Link
            href="/login"
            className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition"
          >
            Fazer login
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
