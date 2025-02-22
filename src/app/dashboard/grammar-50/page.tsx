'use client'

import { useState } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ResourceTable from '@/components/ResourceTable'
import { BookText } from 'lucide-react'

const grammar50Resources = [
  {
    id: 1,
    title: "50 Essential Grammar Rules",
    type: "Video Course",
    duration: "5h",
    difficulty: "Intermediate",
    rating: 4.9,
    progress: 0,
    link: "/courses/essential-grammar",
    students: 2345,
    lastUpdated: "2024-02-24",
    certification: true,
    instructor: "Dr. Sarah Williams"
  },
  {
    id: 2,
    title: "Quick Grammar Practice",
    type: "Practice Set",
    duration: "2h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/practice/quick-grammar",
    students: 1876,
    lastUpdated: "2024-02-22",
    certification: true,
    instructor: "Prof. John Davis"
  },
  // Add more resources...
]

export default function Grammar50Page() {
  const [activeItem, setActiveItem] = useState('grammar-50')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header with Gradient */}
            <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/15 bg-grid-16 mix-blend-overlay"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-3 flex items-center">
                    <BookText className="w-8 h-8 mr-3" />
                    Grammar 50
                  </h1>
                  <p className="text-cyan-50 text-lg max-w-2xl">
                    Master essential grammar rules with our focused 50-question approach
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">{grammar50Resources.length}</div>
                  <div className="text-cyan-50 text-sm">Available Resources</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Beginner Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammar50Resources.filter(r => r.difficulty === 'Beginner').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Intermediate Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammar50Resources.filter(r => r.difficulty === 'Intermediate').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Advanced Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammar50Resources.filter(r => r.difficulty === 'Advanced').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Total Duration</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(grammar50Resources.reduce((acc, r) => 
                    acc + parseFloat(r.duration.split('h')[0]), 0
                  ))}h
                </div>
              </div>
            </div>

            {/* Resource Table */}
            <ResourceTable
              title="Learning Resources"
              description="Master essential grammar rules with our focused learning approach"
              resources={grammar50Resources}
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