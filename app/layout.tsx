import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ParticlesComponent from "@/components/particles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera Muslim Youth Jemea",
  description: "Empowering the Next Generation through Faith, Knowledge, and Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ParticlesComponent id="tsparticles" />
        <Header />
        <main className="container mx-auto p-4 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
