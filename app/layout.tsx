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


     

      
<script
type="text/javascript"
dangerouslySetInnerHTML={{
  __html: `
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,3e3)}();
    `,
}}
/>  


  <link rel="preconnect" href="http://localhost:3001" />
<link rel="dns-prefetch" href="http://localhost:3001" />
<script async src="http://localhost:3001/public/clientjs?apiKey=29760eb8d05b14779a48eb98a6b330dc:65f2a8bfd7395da4025368b1a026a9ce8642c0f0ffaa22110190297ba918105b"></script>
  
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
