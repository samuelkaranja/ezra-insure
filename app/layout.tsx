import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Body font
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EzraInsure",
  description: "Rental insurance platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
