'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Box1 from '@/components/Box1'
import { useRouter } from 'next/navigation'

interface Course {
  id: number;
  title: string;
  progress: number;
  total: number;
  isEnrolled: boolean;
  icon?: string;
  bgColor?: string;
  iconColor?: string;
}

export default function Dashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([])

  useEffect(() => {
    setIsClient(true)
    const savedProgress = localStorage.getItem('courseProgress')
    if (savedProgress) {
      try {
        const allCourses = JSON.parse(savedProgress)
        const enrolled = allCourses.filter((course: Course) => course.isEnrolled)
        setEnrolledCourses(enrolled)
      } catch (error) {
        console.error('Error parsing course progress:', error)
        setEnrolledCourses([])
      }
    }
  }, [])

  const handleCourseClick = (courseId: number) => {
    router.push(`/dashboard/courses/${courseId}`)
  }

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50">Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

            {/* Enrolled Study Plans Section */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Enrolled Study Plans</h2>
                <button 
                  onClick={() => router.push('/dashboard/study-plans')}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors"
                >
                  Browse More Plans
                </button>
              </div>

              {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {enrolledCourses.map((course) => (
                    <div 
                      key={course.id}
                      onClick={() => handleCourseClick(course.id)}
                      className="cursor-pointer transform hover:scale-105 transition-transform"
                    >
                      <Box1 {...course} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <p className="text-gray-600 mb-4">You haven't enrolled in any study plans yet.</p>
                  <button 
                    onClick={() => router.push('/dashboard/study-plans')}
                    className="px-6 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors"
                  >
                    Explore Study Plans
                  </button>
                </div>
              )}
            </section>

            {/* Quick Stats Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Enrolled Plans</h3>
                  <p className="text-3xl font-bold text-pink-500">{enrolledCourses.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Total Progress</h3>
                  <p className="text-3xl font-bold text-blue-500">
                    {Math.round(
                      enrolledCourses.reduce((acc, course) => 
                        acc + (course.progress / course.total) * 100, 0
                      ) / (enrolledCourses.length || 1)
                    )}%
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Questions Solved</h3>
                  <p className="text-3xl font-bold text-green-500">
                    {enrolledCourses.reduce((acc, course) => acc + course.progress, 0)}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Total Questions</h3>
                  <p className="text-3xl font-bold text-purple-500">
                    {enrolledCourses.reduce((acc, course) => acc + course.total, 0)}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Contribution Calendar Section */}
      <div className="ml-64 px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">0</span>
              <span className="text-gray-600">subjective answers written in the last year</span>
            </div>

            {/* Months row */}
            <div className="flex mb-2 text-xs text-gray-500">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <div key={month} className="flex-1 text-center">{month}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="w-full h-24 grid grid-cols-52 gap-[2px]">
              {[...Array(52)].map((_, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-[2px]">
                  {[...Array(7)].map((_, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="w-[8px] h-[8px] rounded-[2px] bg-gray-100 hover:ring-2 hover:ring-gray-300 transition-all"
                      title="No contributions"
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center text-xs text-gray-500 justify-end gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-[8px] h-[8px] bg-gray-100 rounded-[2px]"></div>
                <div className="w-[8px] h-[8px] bg-green-100 rounded-[2px]"></div>
                <div className="w-[8px] h-[8px] bg-green-300 rounded-[2px]"></div>
                <div className="w-[8px] h-[8px] bg-green-500 rounded-[2px]"></div>
                <div className="w-[8px] h-[8px] bg-green-700 rounded-[2px]"></div>
              </div>
              <span>More</span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600 border-t pt-4">
              <div className="flex items-center gap-4">
                <div>
                  Total active days: <span className="font-medium">0</span>
                </div>
                <div>
                  Max streak: <span className="font-medium">0</span>
                </div>
              </div>
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