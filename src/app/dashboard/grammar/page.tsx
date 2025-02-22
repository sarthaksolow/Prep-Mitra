'use client'

import { useState } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ResourceTable from '@/components/ResourceTable'
import { BookOpen, GraduationCap } from 'lucide-react'

const grammarResources = [
  {
    id: 1,
    title: "Basic English Grammar Fundamentals",
    type: "Video Course",
    duration: "2h 30m",
    difficulty: "Beginner",
    rating: 4.8,
    progress: 0,
    link: "/courses/basic-grammar",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    title: "Advanced Grammar Rules & Usage",
    type: "Interactive Tutorial",
    duration: "1h 45m",
    difficulty: "Advanced",
    rating: 4.5,
    progress: 0,
    link: "/courses/advanced-grammar",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 3,
    title: "Tenses Mastery Course",
    type: "Video Series",
    duration: "3h 15m",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/courses/tenses",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 4,
    title: "Common Grammar Mistakes & Fixes",
    type: "Article Series",
    duration: "45m",
    difficulty: "Beginner",
    rating: 4.6,
    progress: 0,
    link: "/articles/grammar-mistakes",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 5,
    title: "Sentence Structure Workshop",
    type: "Interactive Workshop",
    duration: "2h",
    difficulty: "Intermediate",
    rating: 4.9,
    progress: 0,
    link: "/workshops/sentence-structure",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 6,
    title: "Punctuation Rules Deep Dive",
    type: "Video Course",
    duration: "1h 30m",
    difficulty: "Beginner",
    rating: 4.7,
    progress: 0,
    link: "/courses/punctuation",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 7,
    title: "Verb Forms & Conjugation",
    type: "Practice Set",
    duration: "2h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/practice/verbs",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 8,
    title: "Advanced Writing Techniques",
    type: "Masterclass",
    duration: "4h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/masterclass/writing",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 9,
    title: "Grammar for Competitive Exams",
    type: "Study Material",
    duration: "5h",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/competitive/grammar",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 10,
    title: "Prepositions Made Easy",
    type: "Quick Guide",
    duration: "1h",
    difficulty: "Beginner",
    rating: 4.6,
    progress: 0,
    link: "/guides/prepositions",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 11,
    title: "Articles & Determiners",
    type: "Practice Set",
    duration: "1h 15m",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/practice/articles",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 12,
    title: "Modals & Auxiliaries",
    type: "Video Tutorial",
    duration: "2h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/tutorials/modals",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 13,
    title: "Reported Speech Mastery",
    type: "Interactive Course",
    duration: "1h 45m",
    difficulty: "Advanced",
    rating: 4.6,
    progress: 0,
    link: "/courses/reported-speech",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 14,
    title: "Conditional Sentences",
    type: "Video Series",
    duration: "2h 30m",
    difficulty: "Advanced",
    rating: 4.7,
    progress: 0,
    link: "/series/conditionals",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 15,
    title: "Active & Passive Voice",
    type: "Practice Set",
    duration: "1h 30m",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/practice/voice",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 16,
    title: "Subject-Verb Agreement",
    type: "Quick Guide",
    duration: "45m",
    difficulty: "Beginner",
    rating: 4.5,
    progress: 0,
    link: "/guides/subject-verb",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 17,
    title: "Phrasal Verbs Dictionary",
    type: "Reference",
    duration: "3h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/reference/phrasal-verbs",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 18,
    title: "Grammar Practice Tests",
    type: "Assessment",
    duration: "2h",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/tests/grammar",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 19,
    title: "Error Detection Skills",
    type: "Workshop",
    duration: "1h 30m",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/workshop/error-detection",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 20,
    title: "Grammar Rules Handbook",
    type: "E-Book",
    duration: "4h",
    difficulty: "Beginner",
    rating: 4.6,
    progress: 0,
    link: "/ebooks/grammar-handbook",
    students: 1234,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Dr. Sarah Johnson"
  },
  {
    id: 21,
    title: "Parts of Speech Mastery",
    type: "Video Course",
    duration: "2h 30m",
    difficulty: "Beginner",
    rating: 4.7,
    progress: 0,
    link: "/courses/parts-of-speech",
    students: 1890,
    lastUpdated: "2024-02-20",
    certification: true,
    instructor: "Prof. Emma Thompson"
  },
  {
    id: 22,
    title: "Sentence Structure Basics",
    type: "Interactive Course",
    duration: "3h",
    difficulty: "Beginner",
    rating: 4.6,
    progress: 0,
    link: "/courses/sentence-structure",
    students: 1567,
    lastUpdated: "2024-02-19",
    certification: true,
    instructor: "Dr. Michael Brown"
  },
  {
    id: 41,
    title: "Advanced Verb Tenses",
    type: "Workshop",
    duration: "4h",
    difficulty: "Intermediate",
    rating: 4.8,
    progress: 0,
    link: "/workshops/verb-tenses",
    students: 1234,
    lastUpdated: "2024-02-18",
    certification: true,
    instructor: "Dr. James Wilson"
  },
  {
    id: 42,
    title: "Complex Sentence Formation",
    type: "Practice Set",
    duration: "2h 30m",
    difficulty: "Intermediate",
    rating: 4.7,
    progress: 0,
    link: "/practice/complex-sentences",
    students: 987,
    lastUpdated: "2024-02-17",
    certification: true,
    instructor: "Prof. Laura Martinez"
  },
  {
    id: 81,
    title: "Advanced Grammar Patterns",
    type: "Masterclass",
    duration: "5h",
    difficulty: "Advanced",
    rating: 4.9,
    progress: 0,
    link: "/masterclass/advanced-patterns",
    students: 756,
    lastUpdated: "2024-02-16",
    certification: true,
    instructor: "Dr. Robert Chen"
  },
  {
    id: 82,
    title: "Grammar for Academic Writing",
    type: "Course",
    duration: "6h",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/courses/academic-grammar",
    students: 654,
    lastUpdated: "2024-02-15",
    certification: true,
    instructor: "Prof. Sarah Adams"
  },
  {
    id: 121,
    title: "Business Grammar Essentials",
    type: "Course",
    duration: "4h",
    difficulty: "Advanced",
    rating: 4.8,
    progress: 0,
    link: "/courses/business-grammar",
    students: 543,
    lastUpdated: "2024-02-14",
    certification: true,
    instructor: "Dr. William Parker"
  },
  {
    id: 122,
    title: "Technical Writing Grammar",
    type: "Workshop",
    duration: "3h",
    difficulty: "Advanced",
    rating: 4.7,
    progress: 0,
    link: "/workshops/technical-grammar",
    students: 432,
    lastUpdated: "2024-02-13",
    certification: true,
    instructor: "Prof. Elizabeth Taylor"
  }
]

export default function GrammarPage() {
  const [activeItem, setActiveItem] = useState('grammar')

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
                    <BookOpen className="w-8 h-8 mr-3" />
                    Grammar Resources
                  </h1>
                  <p className="text-blue-50 text-lg max-w-2xl">
                    Master English grammar with our comprehensive collection of learning resources
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">{grammarResources.length}</div>
                  <div className="text-blue-50 text-sm">Available Resources</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Beginner Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammarResources.filter(r => r.difficulty === 'Beginner').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Intermediate Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammarResources.filter(r => r.difficulty === 'Intermediate').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Advanced Resources</div>
                <div className="text-2xl font-bold text-gray-900">
                  {grammarResources.filter(r => r.difficulty === 'Advanced').length}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Total Duration</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(grammarResources.reduce((acc, r) => 
                    acc + parseFloat(r.duration.split('h')[0]), 0
                  ))}h
                </div>
              </div>
            </div>

            {/* Resource Table */}
            <ResourceTable
              title="Learning Resources"
              description="Enhance your grammar skills with our carefully curated collection of learning materials"
              resources={grammarResources}
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