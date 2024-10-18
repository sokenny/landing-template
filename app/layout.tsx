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
      <script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="8df7668b2de9a6f264c82647a24330e2:c2991de330dae1bafa8556363a45b24d66a03833732755cde65324709207a147"/>
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
