import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components /Header";
import Footer from "@/app/components /Footer";
import WhatsAppButton from "@/app/components /WhatsAppButton";

export const metadata: Metadata = {
  title: "Soluciones en Extranjería 360",
  description:
    "Asesoramiento en extranjería en Madrid: residencia, arraigo, reagrupación familiar, nacionalidad y renovaciones.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}