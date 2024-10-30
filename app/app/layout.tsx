import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Wrapper } from "./components/Wrapper";
import SideBar from "./components/SideBar";

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
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  );
}
