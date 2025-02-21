export function RecommendedResources() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recommended Resources</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-medium">Advanced Calculus Concepts</h3>
                <p className="text-sm text-gray-600">
                  Master integration techniques with practice problems
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">45 mins</span>
                  <span>Mathematics</span>
                </div>
              </div>
              <button className="ml-4 text-blue-600 hover:text-blue-800">
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }