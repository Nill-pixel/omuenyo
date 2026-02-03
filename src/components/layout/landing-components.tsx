"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientBoxProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientBox({
  children,
  className = "",
  animate = true,
}: GradientBoxProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 ${className}`}
      whileHover={animate ? { scale: 1.02, y: -10 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Feature card with icon
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ translateY: -8 }}
      className="group rounded-xl bg-white/90 backdrop-blur-sm p-8 border border-primary-100 shadow-lg hover:shadow-xl transition-all"
    >
      <motion.div
        className="text-5xl mb-4 inline-block"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Floating element
export function FloatingElement({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation
export function PulseElement({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(74, 124, 89, 0.7)",
          "0 0 0 10px rgba(74, 124, 89, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
