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
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="a299fd2af47e1080dadc2b7a7de31106:0ca394cf79edd1a9e65c4c92677254d3c1ba54f7c5afe97a95ffa0cd0c75b3cb"/>

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
