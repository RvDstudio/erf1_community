import type { Metadata } from "next";

import "./globals.css";
import { Quicksand } from "next/font/google";
import { Toaster } from "sonner";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Erf1 Zuivel & Meer",
  description: "Erf1 Zuivel & Meer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${quicksand.variable} antialiased`} lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Flavors&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-quicksand">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
