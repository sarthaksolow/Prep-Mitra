// components/NavBar.tsx
'use client';

import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary">
              PrepMitra
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/features' ? 'font-bold' : ''
              }`}
            >
              Features
            </Link>
            <Link
              href="/about"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/features' ? 'font-bold' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/pricing' ? 'font-bold' : ''
              }`}
            >
              Pricing
            </Link>

            {/* Authentication Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}