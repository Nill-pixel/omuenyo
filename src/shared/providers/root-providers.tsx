"use client";

import { ErrorBoundary } from "@/src/shared/components/error-boundary";
import { ToastProvider } from "@/src/shared/components/toast-provider";
import { ReactNode } from "react";

interface RootProvidersProps {
  children: ReactNode;
}

export function RootProviders({ children }: RootProvidersProps) {
  return (
    <ErrorBoundary>
      <ToastProvider>{children}</ToastProvider>
    </ErrorBoundary>
  );
}
