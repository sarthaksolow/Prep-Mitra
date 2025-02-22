'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export default function NavBar2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Updated navItems with correct paths
  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
  ]

  const examOptions = [
    { id: 1, name: 'SSC CGL', href: '/exams/ssc-cgl', externalLink: 'https://ssc.gov.in/' },
    { id: 2, name: 'CLAT', href: '/exams/clat', externalLink: 'https://consortiumofnlus.ac.in/' },
    { id: 3, name: 'UPSC', href: '/exams/upsc', externalLink: 'https://upsc.gov.in/' },
    { id: 4, name: 'CAT', href: '/exams/cat', externalLink: 'https://cgat.gov.in/' },
    { id: 5, name: 'JEE Mains/Adv', href: '/exams/jee', externalLink: 'https://jeemain.nta.nic.in/' }
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-7xl">
      <div className="bg-white rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="text-xl font-bold text-blue-600">
              PrepMitra
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              >
                <span>Exams</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                  {examOptions.map((exam) => (
                    <div key={exam.id} className="flex flex-col">
                      <Link
                        href={exam.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {exam.name}
                      </Link>
                      <a 
                        href={exam.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-1 text-xs text-gray-500 hover:text-blue-600 ml-4"
                      >
                        Official Website →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  )
}