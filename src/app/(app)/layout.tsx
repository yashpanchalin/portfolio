import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Panchal",
  description: "Created By Yash Panchal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-full h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
