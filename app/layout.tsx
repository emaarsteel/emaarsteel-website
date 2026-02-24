import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة ملان لمنتجات الحديد | Molan Steel",
  description:
    "ملان الشريك الأول لتوريد الحديد في المملكة العربية السعودية. مورد رائد وشامل لمنتجات الحديد للبناء والتصنيع وتجارة الحديد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-ink antialiased overflow-x-hidden">
        {children}
        <ScrollRevealInit />
      </body>
    </html>
  );
}
