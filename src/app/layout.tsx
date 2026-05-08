import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Elements of Story",
  description:
    "A field guide to story craft, literary terms, reader-facing effects, and publishing vocabulary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-8 text-xs uppercase tracking-wide text-neutral-500">
            The Elements of Story
          </div>
        </footer>
      </body>
    </html>
  );
}
