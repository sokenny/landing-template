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
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,3e3)}();
            `,
        }}
      />  
  <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" /> */}
{/* <script async src="http://localhost:3001/public/clientjs?apiKey=efd8d5c46ebba908b3d937aa8c620905:2e696ce42ada9f662f76270be300f49991cb2423389b0bef9159b57a56c5bf86"></script> */}
 
 
<script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,3e3)}();
            `,
        }}
      />  
  {/* <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" /> */}
{/* <link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" /> */}
{/* <script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=d102e03a2c2ae7d23117c46abff4e70d:b62874df9ce5c4e41fe1b8ed6980bce18956cd3fc541fa2acddc24766652aa5e"></script> */}

{/* <script async src="http://localhost:3001/public/clientjs?apiKey=efd8d5c46ebba908b3d937aa8c620905:2e696ce42ada9f662f76270be300f49991cb2423389b0bef9159b57a56c5bf86"></script> */}
 

  <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=dfd454441f660e6f655ca6382900cd46:b60d3569452f7cdf5f9cbeecded893770e809bab065c32241ec60fe9f67054ec"></script>
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
