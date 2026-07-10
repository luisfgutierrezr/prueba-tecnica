import type { ButtonHTMLAttributes, ReactNode } from "react";

type GhostButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "light" | "dark";
};

export function GhostButton({
  children,
  variant = "light",
  className = "",
  ...props
}: GhostButtonProps) {
  const variants = {
    light:
      "border-white/80 text-white hover:bg-white/10",
    dark: "border-ifb-navy/30 text-ifb-navy hover:bg-ifb-navy/5",
  };

  return (
    <button
      type="button"
      className={`inline-flex h-11 items-center justify-center rounded-full border px-8 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
