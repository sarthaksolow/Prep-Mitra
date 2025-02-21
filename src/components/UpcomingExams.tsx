export function UpcomingExams() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Upcoming Exams</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-medium">JEE Mains 2024</h3>
              <p className="text-sm text-gray-600">April 15, 2024</p>
              <div className="mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  75 days left
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }