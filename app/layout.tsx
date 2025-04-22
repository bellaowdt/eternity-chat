import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternity Chat",
  description: "Reconnect with Memories. Cherish the Moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
