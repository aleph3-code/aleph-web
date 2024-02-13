import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "~/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleph Code",
  description:
    "We are a team of developers who love to code and build amazing applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
