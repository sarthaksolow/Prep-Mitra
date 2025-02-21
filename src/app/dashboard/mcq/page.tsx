'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import CreateMCQ from '@/components/CreateMCQ'

interface MCQQuestion {
  id: number;
  question: string;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  lastAttempted: string | null;
  score: number;
  totalAttempts: number;
}

export default function MCQPage() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('mcq')

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      subject: "Geography",
      difficulty: "Easy",
      lastAttempted: "2024-02-15",
      score: 85,
      totalAttempts: 3
    },
    {
      id: 2,
      question: "What is the speed of light?",
      subject: "Physics",
      difficulty: "Medium",
      lastAttempted: "2024-02-14",
      score: 75,
      totalAttempts: 2
    },
    {
      id: 3,
      question: "Solve the quadratic equation: x² + 5x + 6 = 0",
      subject: "Mathematics",
      difficulty: "Hard",
      lastAttempted: null,
      score: 0,
      totalAttempts: 0
    },
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
                Practice and test your knowledge
              </p>
            </div>

            <CreateMCQ questions={questions} />
          </div>
        </div>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
} 