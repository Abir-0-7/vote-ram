import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

const title = "Vote RAM: Md Abdullah Al Mamun for General Secretary";
const description =
  "PCIU Computer Club, 4th Committee. Fifteen commitments, each with a target you can check. Vote on 29 October.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
