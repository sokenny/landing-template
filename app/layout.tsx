import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convo | Language Learning",
  description: "Speech focused language learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
     
      <head>
      <script async src="http://localhost:3001/public/clientjs" data-stellar-api-key="d1e450b0c6d703bb36363e7803e49272:6e36fe6f9240323538d6c6445ac0b6dac8e05f17f4cc90b2f8dfe75a209dcbe1"></script>
      </head>

      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
