'use client'

import { useState } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ResourceTable from '@/components/ResourceTable'
import { PenTool } from 'lucide-react'

const technicalResources = [
  {
    id: 1,
    title: "Technical Writing Fundamentals",
    type: "Video Course",
    duration: "3h 30m",
    difficulty: "Beginner",
    rating: 4.8,
    progress: 0,
    link: "/courses/tech-writing-basics",
    students: 856,
    lastUpdated: "2024-02-20",
    certification: true,
    instructor: "Prof. Michael Chen"
  },
  {
    id: 2,
    title: "Business Documentation",
    type: "Interactive Course",
    duration: "2h 45m",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/courses/business-docs",
    students: 723,
    lastUpdated: "2024-02-18",
    certification: true,
    instructor: "Dr. Emily Watson"
  },
  {
    id: 3,
    title: "Technical Documentation Standards",
    type: "Video Course",
    duration: "4h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/courses/tech-docs-standards",
    students: 1567,
    lastUpdated: "2024-02-19",
    certification: true,
    instructor: "Dr. Richard Lee"
  },
  {
    id: 4,
    title: "API Documentation Workshop",
    type: "Workshop",
    duration: "3h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/workshops/api-docs",
    students: 1234,
    lastUpdated: "2024-02-18",
    certification: true,
    instructor: "Prof. David Miller"
  },
  {
    id: 5,
    title: "User Manual Writing",
    type: "Course",
    duration: "5h",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/courses/user-manuals",
    students: 987,
    lastUpdated: "2024-02-17",
    certification: true,
    instructor: "Dr. Jennifer White"
  },
  {
    id: 6,
    title: "Software Documentation Mastery",
    type: "Course",
    duration: "6h",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/courses/software-docs",
    students: 876,
    lastUpdated: "2024-02-16",
    certification: true,
    instructor: "Dr. Alan Smith"
  },
  {
    id: 7,
    title: "Technical Report Writing",
    type: "Workshop",
    duration: "4h",
    difficulty: "Intermediate",
    rating: 4.6,
    progress: 0,
    link: "/workshops/tech-reports",
    students: 654,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Prof. Maria Garcia"
  },
  {
    id: 8,
    title: "Documentation Project Management",
    type: "Course",
    duration: "5h",
    difficulty: "Advanced",
    rating: 4.7,
    progress: 0,
    link: "/courses/doc-management",
    students: 543,
    lastUpdated: "2024-02-14",
    certification: true,
    instructor: "Dr. Thomas Brown"
  },
  {
    id: 9,
    title: "Technical Editing Skills",
    type: "Workshop",
    duration: "3h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/workshops/tech-editing",
    students: 765,
    lastUpdated: "2024-02-13",
    certification: true,
    instructor: "Prof. Sarah Wilson"
  },
  {
    id: 10,
    title: "API Reference Writing",
    type: "Course",
    duration: "4h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/courses/api-writing",
    students: 432,
    lastUpdated: "2024-02-12",
    certification: true,
    instructor: "Dr. James Anderson"
  },
  {
    id: 11,
    title: "Technical Style Guides",
    type: "Video Course",
    duration: "2h",
    difficulty: "Beginner",
    rating: 4.7,
    progress: 0,
    link: "/courses/style-guides",
    students: 876,
    lastUpdated: "2024-02-11",
    certification: true,
    instructor: "Prof. Linda Martinez"
  },
  {
    id: 12,
    title: "Release Notes Writing",
    type: "Workshop",
    duration: "3h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/workshops/release-notes",
    students: 654,
    lastUpdated: "2024-02-10",
    certification: true,
    instructor: "Dr. Robert Wilson"
  },
  // Add more resources...
]

export default function TechnicalWritingPage() {
  const [activeItem, setActiveItem] = useState('technical-writing')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header with Gradient */}
            <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/15 bg-grid-16 mix-blend-overlay"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-3 flex items-center">
                    <PenTool className="w-8 h-8 mr-3" />
                    Technical Writing
                  </h1>
                  <p className="text-orange-50 text-lg max-w-2xl">
                    Master the art of technical documentation and business writing
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">{technicalResources.length}</div>
                  <div className="text-orange-50 text-sm">Available Resources</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Beginner Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {technicalResources.filter(r => r.difficulty === 'Beginner').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Intermediate Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {technicalResources.filter(r => r.difficulty === 'Intermediate').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Advanced Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {technicalResources.filter(r => r.difficulty === 'Advanced').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Total Duration</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(technicalResources.reduce((acc, r) => 
                    acc + parseFloat(r.duration.split('h')[0]), 0
                  ))}h
                </div>
              </div>
            </div>

            {/* Resource Table */}
            <ResourceTable
              title="Learning Resources"
              description="Enhance your technical writing skills with our comprehensive learning materials"
              resources={technicalResources}
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