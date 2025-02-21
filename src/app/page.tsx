'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'dashboard',
      title: 'Smart Dashboard',
      description: 'Personalized study tracking and analytics',
      icon: '📊',
      path: '/dashboard',
      color: 'bg-blue-500'
    },
    {
      id: 'study',
      title: 'Study Material',
      description: 'AI-curated learning resources',
      icon: '📚',
      path: '/study',
      color: 'bg-green-500'
    },
    {
      id: 'practice',
      title: 'Practice Tests',
      description: 'Exam-specific mock tests',
      icon: '✍️',
      path: '/practice',
      color: 'bg-purple-500'
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Connect with fellow aspirants',
      icon: '👥',
      path: '/community',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Your Competitive Exams
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI-powered preparation platform designed specifically for Indian competitive exams
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/dashboard">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link href={feature.path} key={feature.id}>
              <motion.div
                className={`relative rounded-xl p-6 cursor-pointer ${
                  hoveredFeature === feature.id ? 'shadow-lg' : 'shadow-sm'
                } bg-white transition-all duration-300`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{
                    x: hoveredFeature === feature.id ? 0 : 10,
                    opacity: hoveredFeature === feature.id ? 1 : 0
                  }}
                >
                  →
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Practice Questions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have cracked their dream exams with PrepMaster
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/register">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                  Sign Up Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}