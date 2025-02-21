'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">PrepMaster</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Dashboard
              </Link>
              <Link href="/study" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Study
              </Link>
              <Link href="/practice" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Practice
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Community
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="rounded-full bg-gray-100 p-2"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}