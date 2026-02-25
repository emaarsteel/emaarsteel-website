import type { Metadata } from "next";
import { Cairo, Almarai } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { LanguageProvider } from "@/context/LanguageContext";
import DirSync from "@/components/DirSync";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic", "latin"],
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة إعمار لمنتجات الحديد | Emaar Steel",
  description:
    "إعمار الشريك الأول لتوريد الحديد في المملكة العربية السعودية. مورد رائد وشامل لمنتجات الحديد للبناء والتصنيع وتجارة الحديد.",
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
      suppressHydrationWarning
      className={`${cairo.variable} ${almarai.variable}`}
    >
      <body className="bg-white text-ink antialiased overflow-x-hidden w-full">
        <LanguageProvider>
          <DirSync />
          {children}
          <ScrollRevealInit />
        </LanguageProvider>
      </body>
    </html>
  );
}
