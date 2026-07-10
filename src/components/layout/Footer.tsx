import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <Container className="flex h-14 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {year} Prueba Técnica</p>
        <p>Next.js + React + Tailwind</p>
      </Container>
    </footer>
  );
}
