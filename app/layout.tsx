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
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="26847004ee5410d3208fa7f997a39cc1:6e75ca837aca6e092c333a322fe78d42ec3c745391a1949f6d05d9f1f2fc1fd8"/>

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
