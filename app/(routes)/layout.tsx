import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mickael Neves",
  description:
    "Mickael Neves is a senior front-end engineer who builds products and delivers top-notch user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-screen-lg px-4 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
