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


      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body > * {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,2e3)}();
            `,
        }}
      />
      <link rel="preconnect" href="http://localhost:3001" />
      <link rel="dns-prefetch" href="http://localhost:3001" />
      <script
        async
        src="http://localhost:3001/public/clientjs?apiKey=7992e892e0a1fb614265013d30287d56:0d4def7264ff2a5bf000be101868605c026a662e3ae571f27fcfe7c09b85662c"
      ></script> */}

        
  <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,2e3)}();
            `,
        }}
      />
  
  <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=d009a86fc28156b4946ad2c26a18bf0f:8d8beeef8cca66856034625e6ddbacf60f5dc371bb533b6e4e8eaae660447f32"></script>
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
