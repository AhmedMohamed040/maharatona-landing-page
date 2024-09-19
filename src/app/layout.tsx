import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';


export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  title: "Maharatona",
  description: "Maharatona",
  
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/favicon/favicon.ico?v=4' },
    { rel: 'icon', type:"image/x-icon", url: '/favicon/favicon.ico?v=4', sizes:'any'},
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png?v=4' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png?v=4' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png?v=4' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
