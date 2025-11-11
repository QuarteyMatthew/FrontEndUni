import { Geist, Geist_Mono, Libre_Bodoni } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
});

export const metadata = {
  title: "UniTogheter",
  description: "Trova il tuo modo di vivere la TUA università",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${libreBodoni.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
