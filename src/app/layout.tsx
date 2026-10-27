
import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-google-sans",
});

export const metadata: Metadata = {
  title: "Diego Rivera | Desarrollador de software",
  description:
    "Portafolio de Diego Rivera. Desarrollo de software y soluciones empresariales.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={googleSans.variable}>
      <body>{children}</body>
    </html>
  );
}
