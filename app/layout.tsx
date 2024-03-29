import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import React from "react";

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
    <html lang="en" >
      <body className={`${redHatText.className} bg-[hsl(234,_17%,_12%)] bg-stars `}>{children}</body>
    </html>
  )
export default RootLayout;