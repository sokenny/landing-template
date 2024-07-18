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

<link rel="preconnect" href="http://localhost:3001"/>
<link rel="preconnect" href="http://localhost:3001"/>
<link rel="dns-prefetch" href="http://localhost:3001"/>
<link rel="preload" href="http://localhost:3001/client_js/stellar.js" as="script"/>
<script async src="http://localhost:3001/client_js/stellar.js" data-stellar-api-key="c5f5306173071fdf7d1bd7f97c0c5343:ceb5fcc639522df90b0984d495aa79508161a7eb27ab93ed1df90717c0788a8e"/>

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
