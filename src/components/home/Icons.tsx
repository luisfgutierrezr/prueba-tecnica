import Image from "next/image";
import { assets } from "@/lib/assets";

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.5 16.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIconButton({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const variants = {
    light:
      "border-white/60 text-white hover:bg-white/10",
    dark: "border-black/60 text-black hover:bg-black/5",
  };

  return (
    <button
      type="button"
      aria-label="Search"
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${variants[variant]}`}
    >
      <SearchIcon />
    </button>
  );
}

export function LoginButton() {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-2 rounded-full bg-[#001A3F] px-5 font-akkurat text-[14px] text-white transition-colors hover:bg-[#002855]"
    >
      <span>Login</span>
      <ChevronDownIcon />
    </button>
  );
}

export function MenuButton({
  variant = "outline",
}: {
  variant?: "outline" | "filled";
}) {
  const variants = {
    outline:
      "border border-white/60 bg-transparent text-white hover:bg-white/10",
    filled:
      "border border-[#001A3F] bg-[#001A3F] text-white hover:bg-[#002855]",
  };

  return (
    <button
      type="button"
      className={`flex h-10 items-center gap-2.5 rounded-full px-5 font-akkurat text-[14px] transition-colors ${variants[variant]}`}
    >
      <span>Menu</span>
      <MenuIcon />
    </button>
  );
}

export function HeroCardArrow() {
  return (
    <span className="inline-flex shrink-0 text-white">
      <ArrowRight />
    </span>
  );
}

export function AccessibilityButton() {
  return (
    <button
      type="button"
      aria-label="Accessibility options"
      className="absolute bottom-0 right-0 z-20 flex h-8 w-8 items-center justify-center gap-[6.67px] rounded-bl-[32px] rounded-tl-[32px] bg-black/70 p-[6.67px] opacity-100 transition-colors hover:bg-black/90"
    >
      <Image
        src={assets.icons.accessibility}
        alt=""
        width={19}
        height={19}
        className="h-[18.66px] w-[18.66px] object-contain"
        aria-hidden
      />
    </button>
  );
}

export function CardArrowButton({
  className = "",
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "outline";
}) {
  const variants = {
    solid: "bg-white text-ifb-navy",
    outline: "border border-white bg-transparent text-white",
  };

  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${variants[variant]} ${className}`}
    >
      <ArrowUpRight />
    </span>
  );
}

export function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ifb-navy/20 text-ifb-navy transition-colors hover:border-ifb-cyan hover:text-ifb-cyan"
    >
      {children}
    </a>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.27h4.56V23.5H.22V8.27zM8.1 8.27h4.37v2.08h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V23.5h-4.56v-6.58c0-1.57-.03-3.58-2.18-3.58-2.18 0-2.51 1.7-2.51 3.46V23.5H8.1V8.27z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.9 2-1.9H17V2h-3.2C10.9 2 9 3.7 9 6.4V10H6v4h3v8h4z" />
    </svg>
  );
}
