import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Maharatona",
  description: "Maharatona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
