import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "360Tampere",
  description: "Experience Tampere in 360° - Bringing the city to life, virtually anywhere, anytime!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold">360Tampere</span>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} 360Tampere. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
