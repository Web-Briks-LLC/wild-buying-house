import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google"; // Import Poppins and Inter
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // CSS variable name
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter", // CSS variable name
});

export const metadata: Metadata = {
  title: "WILD | Clothing Sourcing Partner",
  description: "Premium Ready-Made Garments in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}