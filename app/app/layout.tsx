import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyThemeContextProvider } from "./context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blend Optimizer Model",
  description: "Make blends and do procurement plannings to manage the concentrates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
