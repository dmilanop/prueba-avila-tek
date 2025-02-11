import type { Metadata } from "next";
import { geistMono, geistSans } from "@/app/fonts/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Prueba AvilaTek",
  description: "Prueba de AvilaTek",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
