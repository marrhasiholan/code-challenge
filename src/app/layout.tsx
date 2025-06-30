import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import BackToTopButton from "@/components/backtotop/page";
import ScrollToTop from "@/components/scrolltotop/page";

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "Professional portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen text-white">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <BackToTopButton/>
      </body>
    </html>
  );
}
