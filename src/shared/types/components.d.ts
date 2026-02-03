// Component prop types

import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RotatingIconProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

type AppleLiquidGlassProps = {
  children: ReactNode;
  className?: string;
};

type LiquidButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
};

type GlowingBorderProps = {
  children: ReactNode;
  className?: string;
};

type StaggerRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

type ShimmerButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

type CountUpProps = {
  start: number;
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

type AnimatedBlobProps = {
  delay?: number;
  className?: string;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
};
