'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout = pathname === '/exploredemo';

  const closeMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.add('hidden');
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {!hideLayout && (
          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-[#002F6C]">360Tampere</span>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                  <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                  <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                </div>
                {/* Mobile Navigation Button */}
                <div className="md:hidden flex items-center">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={() => {
                      const mobileMenu = document.getElementById('mobile-menu');
                      mobileMenu?.classList.toggle('hidden');
                    }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Mobile Navigation Menu */}
              <div id="mobile-menu" className="hidden md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#services"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}

        <main className={hideLayout ? '' : 'pt-16'}>
          {children}
        </main>

        {!hideLayout && (
          <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} 360Tampere. All rights reserved.</p>
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
