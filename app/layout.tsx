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
<script async src="http://localhost:3001/client_js/stellar.js" data-stellar-api-key="4d621b996364381bbddbe36c5c530bb1:fadde108021b2d40c493f0af28de009bba1a2e41faee7931319a363df6b86e0c"/>

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
