// ... (previous imports remain the same)

export default function SubjectivePage() {
    // ... (previous state declarations remain the same)
  
    const [aiResponse, setAiResponse] = useState(''); // State to store AI-generated response
  
    // Simulate AI response generation (replace with actual API call)
    const generateAIResponse = () => {
      // Simulate an AI response based on the input text
      const response = `AI Response: Here is a refined version of your text:\n\n${inputText
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}.`;
      setAiResponse(response);
    };
  
    const handleAIReview = () => {
      setShowFeedback(true);
      generateAIResponse(); // Generate AI response when AI Review is clicked
      console.log('Requesting AI review for:', inputText);
    };
  
    // ... (rest of the component code remains the same until the textarea section)
  
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <NavBar2 />
        <div className="flex flex-1 pt-20">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
  
          <div className="ml-64 flex-1 p-8 pb-16">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Header Section with Animated Gradient */}
              <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-animate overflow-hidden">
                {/* ... (header content remains the same) */}
              </div>
  
              {/* Main Writing Section */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 transition-all duration-300 hover:shadow-xl">
                <div className="p-8">
                  {/* Input Options with Glass Effect */}
                  <div className="flex space-x-4 mb-8 p-2 bg-gray-50/50 backdrop-blur-sm rounded-xl">
                    {/* ... (input options content remains the same) */}
                  </div>
  
                  {/* Dynamic Input Section with Enhanced Styling */}
                  <div className="transition-all duration-300">
                    {renderInputSection()}
                  </div>
  
                  {/* Text Input Area with Modern Design */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur transition-all duration-300 group-hover:opacity-100 opacity-0"></div>
                    <textarea
                      className="relative w-full h-72 p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-700 text-lg leading-relaxed transition-all duration-200 group-hover:shadow-lg"
                      placeholder="Start writing your content here..."
                      value={inputText}
                      onChange={handleTextChange}
                    />
                    {/* Floating Editor Tools */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-lg">
                      {/* ... (editor tools content remains the same) */}
                    </div>
                  </div>
  
                  {/* AI Response Box */}
                  <div className="mt-8 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur transition-all duration-300 group-hover:opacity-100 opacity-0"></div>
                    <textarea
                      className="relative w-full h-72 p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-700 text-lg leading-relaxed transition-all duration-200 group-hover:shadow-lg"
                      placeholder="AI-generated response will appear here..."
                      value={aiResponse}
                      readOnly // Make the textarea read-only
                    />
                    <div className="absolute bottom-4 right-4 flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-lg">
                      <span className="text-sm text-gray-500">
                        AI Response
                      </span>
                    </div>
                  </div>
  
                  {/* Bottom Controls with Enhanced Buttons */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                    {/* ... (bottom controls content remains the same) */}
                  </div>
                </div>
              </div>
  
              {/* AI Feedback Section with Glass Morphism */}
              {showFeedback && (
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 transition-all duration-300 hover:shadow-xl">
                  {/* ... (AI feedback content remains the same) */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ml-64">
          <Footer />
        </div>
      </div>
    );
  }