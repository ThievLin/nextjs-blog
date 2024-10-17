import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Adding Open Sans font for Latin text
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Khmer:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${openSans.className} font-serif`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
