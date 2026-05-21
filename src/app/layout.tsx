import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List | Built with Next.js",
  description: "A Todo List web app built with Next.js by Thomas Cheung",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full bg-zinc-50 antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
