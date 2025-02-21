'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Box1 from '@/components/Box1'
import Box2 from '@/components/Box2'
import { useRouter } from 'next/navigation'

export default function StudyPlans() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('study-plans')
  const [ongoingCourses, setOngoingCourses] = useState([
    {
      id: 1,
      title: "Grammar Analysis",
      progress: 0,
      total: 150,
      icon: "/icons/grammar.png",
      bgColor: "bg-blue-600",
      iconColor: "bg-blue-500",
      isEnrolled: true
    },
    {
      id: 2,
      title: "Technical Writing",
      progress: 0,
      total: 64,
      icon: "/icons/writing.png",
      bgColor: "bg-orange-600",
      iconColor: "bg-orange-500",
      isEnrolled: false
    },
    {
      id: 3,
      title: "Descriptive Language",
      progress: 0,
      total: 42,
      icon: "/icons/language.png",
      bgColor: "bg-purple-600",
      iconColor: "bg-purple-500",
      isEnrolled: false
    }
  ])

  const featuredCourses = [
    {
      id: 4,
      title: "PrepMaster 75",
      subtitle: "Ace Competitive Exams with 75 Qs",
      icon: "/icons/exam.png",
      bgColor: "bg-blue-600"
    },
    {
      id: 5,
      title: "150 Topper Answers",
      subtitle: "Must-do List for Competitive Exams",
      icon: "/icons/trophy.png",
      bgColor: "bg-teal-600"
    },
    {
      id: 6,
      title: "Expert Analysis",
      subtitle: "8 Patterns, 42 Qs = Master BS",
      icon: "/icons/analysis.png",
      bgColor: "bg-purple-600"
    },
    {
      id: 7,
      title: "Grammar 50",
      subtitle: "Crack Grammar in 50 Qs",
      icon: "/icons/grammar-book.png",
      bgColor: "bg-cyan-600"
    }
  ]

  useEffect(() => {
    setIsClient(true)
    // Load saved progress from localStorage
    const savedProgress = localStorage.getItem('courseProgress')
    if (savedProgress) {
      setOngoingCourses(JSON.parse(savedProgress))
    }
  }, [])

  // Save progress whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('courseProgress', JSON.stringify(ongoingCourses))
    }
  }, [ongoingCourses, isClient])

  const handleCourseClick = (courseId: number) => {
    setOngoingCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, isEnrolled: true }
          : course
      )
    )
    // Navigate to course page
    router.push(`/dashboard/courses/${courseId}`)
  }

  const handleMyStudyPlan = () => {
    // Filter enrolled courses
    const enrolledCourses = ongoingCourses.filter(course => course.isEnrolled)
    // Navigate to study plan page with enrolled courses
    router.push({
      pathname: '/dashboard/my-study-plan',
      query: { courses: JSON.stringify(enrolledCourses) }
    })
  }

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
              <button 
                onClick={handleMyStudyPlan}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors"
              >
                My Study Plan
              </button>
            </div>

            {/* Ongoing Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ongoing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ongoingCourses.map((course) => (
                  <div 
                    key={course.id} 
                    onClick={() => handleCourseClick(course.id)}
                    className="cursor-pointer transform hover:scale-105 transition-transform"
                  >
                    <Box1 {...course} />
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {featuredCourses.map((course) => (
                  <div 
                    key={course.id}
                    onClick={() => handleCourseClick(course.id)}
                    className="cursor-pointer transform hover:scale-105 transition-transform"
                  >
                    <Box2 {...course} />
                  </div>
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