import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import "./globals.css";

const title = "Python Norte 2025";
const description = "O Python Norte 2025 é o evento da linguagem de programação Python direcionada à região Norte do país organizado pela própria comunidade para difundir a linguagem e criar a conexão de diversas áreas e culturas através da tecnologia.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: "https://2025.pythonnorte.org/",
    type: "website",
    title: title,
    description: description,
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <GoogleTagManager gtmId="G-VRV0920911" />
      {children}
    </html>
  );
}

