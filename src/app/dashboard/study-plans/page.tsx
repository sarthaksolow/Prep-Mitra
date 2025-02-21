'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Box1 from '@/components/Box1'
import Box2 from '@/components/Box2'

export default function StudyPlans() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('study-plans')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const ongoingCourses = [
    {
      title: "Top Interview 150",
      progress: 8,
      total: 150,
      icon: "/icons/target.png",
      bgColor: "bg-blue-600",
      iconColor: "bg-blue-500"
    },
    {
      title: "Graph Theory",
      progress: 0,
      total: 64,
      icon: "/icons/graph.png",
      bgColor: "bg-orange-600",
      iconColor: "bg-orange-500"
    },
    {
      title: "Binary Search",
      progress: 0,
      total: 42,
      icon: "/icons/binary.png",
      bgColor: "bg-purple-600",
      iconColor: "bg-purple-500"
    }
  ]

  const featuredCourses = [
    {
      title: "LeetCode 75",
      subtitle: "Ace Coding Interview with 75 Qs",
      icon: "/icons/leetcode.png",
      bgColor: "bg-blue-600"
    },
    {
      title: "Top Interview 150",
      subtitle: "Must-do List for Interview Prep",
      icon: "/icons/top150.png",
      bgColor: "bg-teal-600"
    },
    {
      title: "Binary Search",
      subtitle: "8 Patterns, 42 Qs = Master BS",
      icon: "/icons/binary.png",
      bgColor: "bg-purple-600"
    },
    {
      title: "SQL 50",
      subtitle: "Crack SQL Interview in 50 Qs",
      icon: "/icons/sql.png",
      bgColor: "bg-cyan-600"
    }
  ]

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50">Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Study Plan</h1>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors">
                My Study Plan
              </button>
            </div>

            {/* Ongoing Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ongoing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ongoingCourses.map((course, index) => (
                  <Box1 key={index} {...course} />
                ))}
              </div>
            </section>

            {/* Featured Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {featuredCourses.map((course, index) => (
                  <Box2 key={index} {...course} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
} 