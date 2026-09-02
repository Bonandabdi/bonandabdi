import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full min-h-12 rounded-md bg-paper px-4 text-base text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:shadow-[0_0_0_2px_var(--color-ocean)]",
        className,
      )}
      {...props}
    />
  );
}
