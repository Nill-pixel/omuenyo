"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

// Apple Liquid Glass Effect - Premium (iPhone Faithful)
export function AppleLiquidGlass({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-3xl overflow-hidden group ${className}`}>
      {/* Base glass layer - iPhone accurate */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-3xl saturate-180" />

      {/* Premium border with gradient - iPhone style */}
      <div className="absolute inset-0 rounded-3xl border border-white/80" />

      {/* Inner gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-white/20 to-white/5 pointer-events-none" />

      {/* Outer shadow for depth */}
      <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-black/20" />

      {/* Inner shadow for definition */}
      <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/40" />

      {/* Top light reflection - iPhone bright top */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/40 via-white/10 to-transparent rounded-t-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

      {/* Mid-tone reflection - subtle iPhone effect */}
      <div className="absolute top-1/4 inset-x-0 h-1/4 bg-linear-to-b from-transparent via-white/5 to-transparent opacity-30" />

      {/* Bottom depth shadow - iPhone depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-black/10 via-black/5 to-transparent rounded-b-3xl opacity-60" />

      {/* Content with proper z-index */}
      <div className="relative z-10 backdrop-blur-sm">{children}</div>

      {/* Animated liquid shimmer on hover - iPhone-like */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ willChange: "background" }}
        animate={{
          background: [
            "radial-gradient(ellipse 800px at 20% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse 800px at 80% 60%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse 800px at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse 800px at 20% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Glass Morphism Card
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({
  children,
  className = "",
  delay = 0,
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(74, 124, 89, 0.3)",
            }
      }
      className={`
        relative rounded-3xl overflow-hidden group
        bg-white/15 backdrop-blur-2xl border border-white/30
        hover:bg-white/20 hover:border-white/40
        transition-all duration-300
        shadow-2xl
        ${className}
      `}
    >
      {/* Top light reflection */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-linear-to-b from-white/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// 3D Rotating Icon
interface RotatingIconProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function RotatingIcon({
  children,
  className = "",
  duration = 8,
}: RotatingIconProps) {
  return (
    <motion.div
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 180],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Blob Shape Animated - Optimized
export function AnimatedBlob({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70%",
          "30% 60% 70% 40%",
          "70% 30% 40% 60%",
          "40% 70% 60% 30%",
          "60% 40% 30% 70%",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ willChange: "border-radius" }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}

// Text Gradient Animated
export function AnimatedGradientText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      <div
        className="bg-linear-to-r from-primary-600 via-primary-400 to-primary-800 bg-clip-text text-transparent animate-pulse"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientShift 3s ease infinite",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

// Number Counter
export function CountUp({
  from = 0,
  to = 100,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [displayValue, setDisplayValue] = React.useState(from);

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min(
        (time - startTime) / ((duration || 1) * 1000),
        1,
      );
      const current = Math.round((from || 0) + (to - (from || 0)) * progress);
      setDisplayValue(current);
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [from, to, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <span>
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </motion.span>
  );
}

// Smooth Reveal with Stagger
export function StaggerReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* For children */}
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}

// Shimmer Effect
export function ShimmerButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg
        bg-linear-to-r from-primary-600 to-primary-800
        text-white px-8 py-3 font-semibold
        transition-all duration-300
        hover:shadow-lg hover:shadow-primary-500/50
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{ opacity: 0.2 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Floating Particles Background - Optimized
export function ParticleBackground() {
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 3,
    left: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-400 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: "-10px",
            willChange: "transform, opacity",
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Glowing Border with Apple Liquid Glass
export function GlowingBorder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden rounded-3xl group ${className}`}>
      {/* Animated glow border - optimized for performance */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-primary-600 via-primary-400 to-primary-600 opacity-0 blur-2xl rounded-3xl"
        animate={
          shouldReduceMotion ? { opacity: 0.15 } : { opacity: [0, 0.6, 0] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{ willChange: "opacity" }}
      />

      {/* Inner liquid glass effect */}
      <div className="relative rounded-3xl overflow-hidden bg-white">
        {/* Glass layer */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-2xl" />

        {/* Premium border */}
        <div className="absolute inset-0 rounded-3xl border border-white/30 bg-linear-to-b from-white/20 to-white/5" />

        {/* Light reflection */}
        <div className="absolute top-0 inset-x-0 h-1/4 bg-linear-to-b from-white/30 to-transparent rounded-t-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

        {/* Content with padding and proper z-index */}
        <div className="relative z-10 p-8">{children}</div>
      </div>
    </div>
  );
}

export function LiquidButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-3 font-bold rounded-xl overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Leaf-like base gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, #356044 0%, #447055 45%, #5a9f84 100%)",
          backgroundSize: "200% 200%",
          willChange: "background-position",
        }}
      />

      {/* Leaf vein pattern */}
      <div
        className="absolute inset-0 rounded-xl opacity-35"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 10px)",
        }}
      />

      {/* Central vein glow */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/40 opacity-70" />

      {/* Soft top highlight */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-linear-to-b from-white/25 to-transparent rounded-t-xl opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Inset shadow for depth */}
      <div className="absolute inset-0 rounded-xl shadow-inner shadow-black/20" />

      {/* Text content */}
      <span className="relative z-10 text-white flex items-center gap-2 whitespace-nowrap drop-shadow-lg">
        {children}
      </span>

      {/* Subtle sheen on hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5 }}
        style={{ willChange: "transform" }}
      />
    </motion.button>
  );
}
