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
      <script async src="http://localhost:3001/public/clientjs" data-stellar-api-key="5499bfe497b626019f6b158e6c4c355d:fde3d172e4a66496a0edf28e1fff29ad9e707f816c0d16bfb6269b8ce305ff04"></script>
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
