import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

// Load fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Navbar component
function Navbar() {
  return (
    <ul className="flex justify-center gap-5">
      <Link href="/category/world"><li className="text-blue-500 text-2xl p-2">World</li></Link>
      <Link href="/category/pakistan"><li className="text-purple-500 text-2xl p-2">Pakistan</li></Link> 
      <Link href="/category/sports"><li className="text-pink-500 text-2xl p-2">Sports</li></Link>
      <Link href="/category/aboutus"><li className="text-red-500 text-2xl p-2">About Us</li></Link>
      <Link href="/category/contact"><li className="text-yellow-500 text-2xl p-2">Contact Us</li></Link>
    </ul>
  );
}

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
