import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";
import PlerdyScript from "@/components/PlerdyScript";

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
      {/* <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net"/>
      <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net"/>
      <link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net"/>
      <link rel="preload" href="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" as="script"/>
      <script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js" data-stellar-api-key="8df7668b2de9a6f264c82647a24330e2:c2991de330dae1bafa8556363a45b24d66a03833732755cde65324709207a147"/> */}
      

{/* <link rel="preconnect" href="http://localhost:3001/public/clientjs"/>
<link rel="preconnect" href="http://localhost:3001/public/clientjs"/>
<link rel="dns-prefetch" href="http://localhost:3001/public/clientjs"/>
<link rel="preload" href="http://localhost:3001/public/clientjs" as="script"/>
<script async src="http://localhost:3001/public/clientjs" data-stellar-api-key="bc694b3e75265312b3f4f75fd4330f60:4549a2b7ab806344f7dc520a6de6505a541b0c2bd98807ca2cba7b1df21d7d74"/> */}



      
      </head>
      <PlerdyScript />

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
