import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-ocean text-ivory shadow-[0_1px_0_color-mix(in_oklab,white_16%,transparent)_inset] hover:bg-ocean-deep",
        secondary:
          "bg-paper text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)] hover:bg-ivory",
        ghost: "bg-transparent text-ivory hover:bg-ivory/10",
        wax: "bg-wax text-ivory hover:opacity-90",
      },
      size: {
        default: "h-11 min-h-11 px-5 text-sm",
        lg: "h-12 min-h-12 px-6 text-sm",
        sm: "h-10 min-h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
