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



<link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net"/>
<link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net"/>
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net"/>
<link rel="preload" href="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" as="script"/>
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="76de1eabbcec7dad3adea7ccf6b787ea:d4558fe0dc0635387d5254b264bcb55652f1b314e72b8a70f430b4cd7bdddc7d"/>

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
