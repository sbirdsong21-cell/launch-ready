import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Ready | Business Formation + Funding Readiness",
  description: "Launch Ready helps founders form LLCs, prepare funding materials, manage compliance, and connect with capital opportunities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
