import { StudyProgress } from '@/components/StudyProgress'
import { UpcomingExams } from '@/components/UpcomingExams'
import { RecommendedResources } from '@/components/RecommendedResources'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Study Timer</h2>
            <div className="text-4xl font-bold text-center text-blue-600">
              25:00
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">
              Start Focus Session
            </button>
          </div>
          
          <StudyProgress />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
            {/* Add schedule content */}
          </div>
          
          <RecommendedResources />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <UpcomingExams />
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Study Streak</h2>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-600">7</span>
              <p className="text-gray-600">days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}