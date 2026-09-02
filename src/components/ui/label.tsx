import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-[0.16em] text-ocean/80 uppercase",
        className,
      )}
      {...props}
    />
  );
}
