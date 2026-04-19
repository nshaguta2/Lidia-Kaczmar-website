import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "inline-block px-12 py-4 font-medium uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-none pointer-events-auto",
          variant === "primary" && "bg-stone-100 text-stone-950 hover:bg-stone-300",
          variant === "secondary" && "bg-transparent border border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-stone-950",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Button.displayName = "Button";
