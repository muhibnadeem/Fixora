import type { Metadata } from "next";
import { LiveHelpButton } from "@/components/LiveHelpButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixora",
  description: "Fixora Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <LiveHelpButton />
      </body>
    </html>
  );
}
