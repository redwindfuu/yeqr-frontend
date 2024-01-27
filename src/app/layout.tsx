import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BaseLayout } from '@shared/layouts/base';

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banana",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
