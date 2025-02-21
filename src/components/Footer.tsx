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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-white mb-4 md:mb-0">
              PrepMaster
            </div>
            <div className="text-sm">
              © {currentYear} PrepMaster. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}