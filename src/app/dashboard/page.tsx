'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

interface SidebarItem {
  id: string;
  name: string;
  color: string;
}

interface DashboardCard {
  title: string;
  bgColor: string;
  content: string;
}

interface ContributionDay {
  date: string;
  count: number;
}

interface MCQSubmission {
  date: string;
  score: number;
  totalQuestions: number;
}

interface MCQAttempt {
  title: string;
  score: number;
  totalQuestions: number;
  timeAgo: string;
}

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50">Loading...</div>
  }

  const sidebarItems: SidebarItem[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      color: 'text-blue-600'
    },
    {
      id: 'subjective',
      name: 'Subjective Writing',
      color: 'text-purple-600'
    },
    {
      id: 'mcq',
      name: 'MCQ Tests',
      color: 'text-green-600'
    },
    {
      id: 'study-plans',
      name: 'Study Plans',
      color: 'text-orange-600'
    },
    {
      id: 'profile',
      name: 'User Profile',
      color: 'text-indigo-600'
    },
    {
      id: 'about',
      name: 'About Us',
      color: 'text-pink-600'
    }
  ]

  // Sample MCQ submissions data - replace this with your actual data
  const mcqSubmissions: MCQSubmission[] = [
    { date: '2024-02-01', score: 8, totalQuestions: 10 },
    { date: '2024-02-03', score: 7, totalQuestions: 10 },
    // Add more submission data as needed
  ]

  const generateContributionData = (): ContributionDay[] => {
    const data: ContributionDay[] = []
    const today = new Date()
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(today.getFullYear() - 1)

    // Initialize all days with 0 submissions
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0]
      const submissions = mcqSubmissions.filter(sub => sub.date === dateStr).length
      data.push({
        date: dateStr,
        count: submissions
      })
    }
    return data
  }

  const contributionData = generateContributionData()
  const totalSubmissions = mcqSubmissions.length
  const averageScore = mcqSubmissions.length > 0
    ? Math.round((mcqSubmissions.reduce((acc, sub) => acc + (sub.score / sub.totalQuestions * 100), 0) / mcqSubmissions.length))
    : 0

  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100'
    if (count === 1) return 'bg-green-200'
    if (count === 2) return 'bg-green-300'
    if (count === 3) return 'bg-green-400'
    return 'bg-green-500'
  }

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
  }

  const activeItemData = sidebarItems.find(item => item.id === activeItem)

  const dashboardCards = [
    {
      title: 'Total Submissions',
      bgColor: 'bg-blue-50',
      content: `${totalSubmissions} MCQ tests completed`
    },
    {
      title: 'Average Score',
      bgColor: 'bg-green-50',
      content: `${averageScore}% correct answers`
    },
    {
      title: 'Current Streak',
      bgColor: 'bg-purple-50',
      content: 'Keep practicing daily!'
    },
    {
      title: 'Next Challenge',
      bgColor: 'bg-orange-50',
      content: 'Try a new MCQ test'
    }
  ]

  const recentMCQs: MCQAttempt[] = [
    {
      title: "Data Structures: Linked Lists",
      score: 8,
      totalQuestions: 10,
      timeAgo: "2 days ago"
    },
    {
      title: "Array Manipulation Problems",
      score: 7,
      totalQuestions: 10,
      timeAgo: "4 days ago"
    },
    {
      title: "Binary Search Algorithms",
      score: 9,
      totalQuestions: 10,
      timeAgo: "1 week ago"
    },
    {
      title: "Dynamic Programming Basics",
      score: 6,
      totalQuestions: 10,
      timeAgo: "2 weeks ago"
    },
    {
      title: "Graph Theory Fundamentals",
      score: 8,
      totalQuestions: 10,
      timeAgo: "2 weeks ago"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Track your progress and performance
              </p>
            </div>
            
            {activeItem === 'dashboard' && (
              <>
                {/* Contribution Graph */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        MCQ Submissions
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Your test submissions over the past year
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {totalSubmissions}
                    </div>
                  </div>
                  <div className="contribution-graph">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                          <div key={month} className="flex-1 text-xs text-gray-500 text-center">
                            {month}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {contributionData.map((day, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} transition-colors`}
                            title={`${day.date}: ${day.count} ${day.count === 1 ? 'submission' : 'submissions'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>Less</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-gray-100" />
                          <div className="w-3 h-3 rounded-sm bg-green-200" />
                          <div className="w-3 h-3 rounded-sm bg-green-300" />
                          <div className="w-3 h-3 rounded-sm bg-green-400" />
                          <div className="w-3 h-3 rounded-sm bg-green-500" />
                        </div>
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dashboardCards.map((card, index) => (
                    <div 
                      key={index}
                      className={`${card.bgColor} rounded-lg shadow-sm overflow-hidden transition-transform duration-200 hover:scale-[1.02] hover:shadow-md`}
                    >
                      <div className="p-6">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
                          <p className="text-gray-600 mt-1">{card.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent MCQ Attempts */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">
                        Recent MCQ Attempts
                      </h2>
                      <Link 
                        href="/dashboard/mcq" 
                        className="text-sm text-pink-500 hover:text-pink-600 font-medium flex items-center"
                      >
                        View all
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      {recentMCQs.map((mcq, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                mcq.score >= 8 ? 'bg-green-100 text-green-600' :
                                mcq.score >= 6 ? 'bg-yellow-100 text-yellow-600' :
                                'bg-red-100 text-red-600'
                              }`}>
                                {mcq.score}/{mcq.totalQuestions}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900">
                                {mcq.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                Attempted {mcq.timeAgo}
                              </p>
                            </div>
                          </div>
                          <button 
                            className="text-sm text-pink-500 hover:text-pink-600 font-medium"
                            onClick={() => console.log('Reviewing:', mcq.title)}
                          >
                            Review
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
}