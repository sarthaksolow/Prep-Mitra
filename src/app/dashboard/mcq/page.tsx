'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import CreateMCQ from '@/components/CreateMCQ'

interface MCQTest {
  id: number;
  title: string;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  lastAttempted: string | null;
  score: number;
  totalQuestions: number;
  timeLimit: number; // in minutes
}

export default function MCQPage() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('mcq')

  const tests: MCQTest[] = [
    // English Language Tests
    {
      id: 1,
      title: "Basic Grammar MCQ Test",
      subject: "English",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 25,
      timeLimit: 30
    },
    {
      id: 2,
      title: "Vocabulary Builder Test",
      subject: "English",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 30,
      timeLimit: 35
    },
    {
      id: 3,
      title: "Advanced English Comprehension",
      subject: "English",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 40,
      timeLimit: 50
    },
    // General Knowledge Tests
    {
      id: 4,
      title: "Basic Current Affairs",
      subject: "General Knowledge",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 25,
      timeLimit: 25
    },
    {
      id: 5,
      title: "World History Test",
      subject: "General Knowledge",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 35,
      timeLimit: 40
    },
    {
      id: 6,
      title: "International Relations",
      subject: "General Knowledge",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 45,
      timeLimit: 55
    },
    // Mathematics Tests
    {
      id: 7,
      title: "Basic Arithmetic Test",
      subject: "Mathematics",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 20,
      timeLimit: 25
    },
    {
      id: 8,
      title: "Algebra & Geometry",
      subject: "Mathematics",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 30,
      timeLimit: 45
    },
    {
      id: 9,
      title: "Advanced Calculus",
      subject: "Mathematics",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 35,
      timeLimit: 60
    },
    // Reasoning Tests
    {
      id: 10,
      title: "Basic Logical Reasoning",
      subject: "Reasoning",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 20,
      timeLimit: 20
    },
    {
      id: 11,
      title: "Verbal & Non-verbal Reasoning",
      subject: "Reasoning",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 30,
      timeLimit: 35
    },
    {
      id: 12,
      title: "Advanced Analytical Reasoning",
      subject: "Reasoning",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 40,
      timeLimit: 50
    },
    // Computer Knowledge Tests
    {
      id: 13,
      title: "Basic Computer Concepts",
      subject: "Computer Knowledge",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 25,
      timeLimit: 30
    },
    {
      id: 14,
      title: "MS Office & Internet",
      subject: "Computer Knowledge",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 35,
      timeLimit: 40
    },
    {
      id: 15,
      title: "Programming & Networking",
      subject: "Computer Knowledge",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 45,
      timeLimit: 55
    },
    // Science Tests
    {
      id: 16,
      title: "Basic Physics MCQ",
      subject: "Science",
      difficulty: "Easy",
      lastAttempted: null,
      score: 0,
      totalQuestions: 25,
      timeLimit: 30
    },
    {
      id: 17,
      title: "Chemistry Fundamentals",
      subject: "Science",
      difficulty: "Medium",
      lastAttempted: null,
      score: 0,
      totalQuestions: 30,
      timeLimit: 40
    },
    {
      id: 18,
      title: "Advanced Biology",
      subject: "Science",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalQuestions: 40,
      timeLimit: 50
    }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                MCQ Tests
              </h1>
              <p className="text-gray-600">
                Practice and test your knowledge with our comprehensive MCQ tests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test) => (
                <div 
                  key={test.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{test.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      test.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      test.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {test.difficulty}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Subject: {test.subject}</p>
                    <p>Questions: {test.totalQuestions}</p>
                    <p>Time Limit: {test.timeLimit} minutes</p>
                    {test.lastAttempted && (
                      <p>Last Attempted: {new Date(test.lastAttempted).toLocaleDateString()}</p>
                    )}
                    {test.score > 0 && (
                      <p>Last Score: {test.score}%</p>
                    )}
                  </div>

                  <button 
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {test.lastAttempted ? 'Retake Test' : 'Start Test'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
} 