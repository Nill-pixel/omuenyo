// Utility hooks for common operations

"use client";

import { useCallback, useState } from "react";
import React from "react";

/**
 * Hook for smooth scrolling to elements
 * @param behavior - scroll behavior (smooth or auto)
 * @returns function to scroll to element by ID
 */
export function useSmoothScroll(behavior: ScrollBehavior = "smooth") {
  return useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior,
          block: "start",
        });
      }
    },
    [behavior],
  );
}

/**
 * Hook for managing form submission state
 * @returns state and handlers for form submission
 */
export function useFormSubmit(onSuccess?: () => void) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (callback: () => Promise<void>) => {
      try {
        setLoading(true);
        setError(null);
        await callback();
        setSubmitted(true);
        onSuccess?.();
        setTimeout(() => setSubmitted(false), 3000);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [onSuccess],
  );

  return { submitted, loading, error, handleSubmit };
}

/**
 * Hook for managing mobile menu state
 * @returns menu open state and toggle function
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  return { isOpen, toggle, close, open };
}
