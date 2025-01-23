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
<link rel="preconnect" href="http://localhost:3001" />
<link rel="dns-prefetch" href="http://localhost:3001" />
{/* <script async src="http://localhost:3001/public/clientjs?apiKey=56c1c9f07ea1ccfd9e35cd83f4565f4e:0edc9300d50461ed7a3295aef2e228addb44e5872065287ca5f86d0a703f4c2d"></script> */}
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=fe65963970f8b88bb25a1ba2efbee978:31deec47ddcd4a13f90c5313a63b91291d9caf86e09c95390b0e9655d97e2871"></script>




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
