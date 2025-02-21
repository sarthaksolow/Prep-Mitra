'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Pricing() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="pt-20 min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Choose the plan that best fits your needs
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
              {/* Free Plan */}
              <div className="rounded-lg shadow-lg bg-white p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Free</h3>
                <p className="mt-4 text-gray-600">Perfect to get started</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Basic features</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Limited access</span>
                  </li>
                </ul>
                <button 
                  onClick={() => router.push('/auth/signup')}
                  className="mt-8 w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700"
                >
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="rounded-lg shadow-lg bg-white p-8 border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-4 text-gray-600">For serious learners</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$29</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">All Free features</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Premium content</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Priority support</span>
                  </li>
                </ul>
                <button 
                  onClick={() => router.push('/auth/signup')}
                  className="mt-8 w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700"
                >
                  Subscribe Now
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg shadow-lg bg-white p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
                <p className="mt-4 text-gray-600">For teams and organizations</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$99</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Team management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">Custom solutions</span>
                  </li>
                </ul>
                <button 
                  onClick={() => router.push('/auth/signup')}
                  className="mt-8 w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 