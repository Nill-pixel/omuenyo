"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  required?: boolean;
  children?: ReactNode;
  as?: "input" | "textarea" | "select";
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  disabled,
  required,
  children,
  as = "input",
}: FormFieldProps) {
  const Component = as;

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      {as === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-4 py-2 border rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            error ? "border-error" : "border-gray-300"
          } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
        >
          {children}
        </select>
      ) : Component === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            error ? "border-error" : "border-gray-300"
          } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"} resize-vertical min-h-25`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            error ? "border-error" : "border-gray-300"
          } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
        />
      )}

      {error && (
        <motion.p
          className="text-sm text-error mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
