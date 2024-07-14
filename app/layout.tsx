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
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="9801691ee7afaf634eb6597d21e20324:d15be932f33816830e610450c2c23e20274b3c4e3f409631eda2a365a12e5635"/>

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
