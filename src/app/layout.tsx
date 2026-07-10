import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "International Finance Bank",
    template: "%s | International Finance Bank",
  },
  description:
    "Your World, Seamlessly Connected. International Finance Bank offers personalized banking solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-akkurat">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
