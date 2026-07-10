export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Acerca de", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
];
