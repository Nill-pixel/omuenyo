import * as React from "react";

import { cn } from "@/src/shared/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white text-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
