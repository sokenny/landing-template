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
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="c43ac7d1e852145da0034208e87609f9:1c9f4c8266ee52bd4d5dbe17355d28cc8033618b3ba951eace0bc5627ce0b144"/>

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
