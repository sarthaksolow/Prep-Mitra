'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  const footerSections = {
    features: {
      title: 'Features',
      links: [
        { name: 'Smart Dashboard', href: '/dashboard' },
        { name: 'Study Material', href: '/study' },
        { name: 'Practice Tests', href: '/practice' },
        { name: 'Community', href: '/community' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    social: {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com/prepmaster' },
        { name: 'LinkedIn', href: 'https://linkedin.com/company/prepmaster' },
        { name: 'Facebook', href: 'https://facebook.com/prepmaster' },
        { name: 'Instagram', href: 'https://instagram.com/prepmaster' },
      ],
    },
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              PrepMaster helps students prepare for their exams with comprehensive study materials and tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/guides" className="text-gray-400 hover:text-white">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PrepMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}