'use client'

import { useState } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ResourceTable from '@/components/ResourceTable'
import { GraduationCap } from 'lucide-react'

const prepMitra75Resources = [
  {
    id: 1,
    title: "Competitive Exam Strategy",
    type: "Master Course",
    duration: "5h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/courses/exam-strategy",
    students: 2456,
    lastUpdated: "2024-02-25",
    certification: true,
    instructor: "Dr. Rajesh Kumar"
  },
  {
    id: 2,
    title: "75 Most Important Questions",
    type: "Practice Set",
    duration: "3h",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/practice/important-75",
    students: 1892,
    lastUpdated: "2024-02-23",
    certification: true,
    instructor: "Prof. Amit Sharma"
  }
]

export default function PrepMitra75Page() {
  const [activeItem, setActiveItem] = useState('prep-mitra-75')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header with Gradient */}
            <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/15 bg-grid-16 mix-blend-overlay"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-3 flex items-center">
                    <GraduationCap className="w-8 h-8 mr-3" />
                    PrepMitra 75
                  </h1>
                  <p className="text-blue-50 text-lg max-w-2xl">
                    Master competitive exams with our curated collection of 75 essential questions
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">{prepMitra75Resources.length}</div>
                  <div className="text-blue-50 text-sm">Available Resources</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Beginner Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {prepMitra75Resources.filter(r => r.difficulty === 'Beginner').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Intermediate Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {prepMitra75Resources.filter(r => r.difficulty === 'Intermediate').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Advanced Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {prepMitra75Resources.filter(r => r.difficulty === 'Advanced').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Total Duration</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(prepMitra75Resources.reduce((acc, r) => 
                    acc + parseFloat(r.duration.split('h')[0]), 0
                  ))}h
                </div>
              </div>
            </div>

            {/* Resource Table */}
            <ResourceTable
              title="Learning Resources"
              description="Ace your competitive exams with our carefully curated collection of questions"
              resources={prepMitra75Resources}
            />
          </div>
        </div>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
} 