'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function SubjectivePage() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('subjective')
  const [inputText, setInputText] = useState('')
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
    setWordCount(e.target.value.trim().split(/\s+/).filter(Boolean).length)
  }

  const handleGenerateQuestions = () => {
    // Add your question generation logic here
    console.log('Generating questions for:', inputText)
  }

  const handleAIReview = () => {
    // Add your AI review logic here
    console.log('Requesting AI review for:', inputText)
  }

  const handleEditResponse = () => {
    // Add your edit response logic here
    console.log('Editing response for:', inputText)
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Subjective Writing
              </h1>
              <p className="text-gray-600">
                Improve your writing with AI
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6">
                {/* Input Options */}
                <div className="flex space-x-4 mb-4">
                  <button className="px-4 py-2 text-pink-500 bg-pink-50 rounded-full text-sm font-medium">
                    Context
                  </button>
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium">
                    Topic
                  </button>
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium">
                    Link
                  </button>
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium">
                    Media
                  </button>
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium">
                    PDF
                  </button>
                </div>

                {/* Text Input Area */}
                <div className="relative">
                  <textarea
                    className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Enter your text here..."
                    value={inputText}
                    onChange={handleTextChange}
                  />
                  
                  {/* Text Editing Tools */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-3 bg-white px-3 py-1.5 rounded-lg border shadow-sm">
                    <button className="text-gray-600 hover:text-gray-900" title="Bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h8a4 4 0 100-8H6v8zm0 0h8a4 4 0 110 8H6v-8z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" title="Italic">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" title="Copy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" title="Paste">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </button>
                    <div className="text-sm text-gray-500 ml-2 pl-2 border-l">
                      {wordCount} words
                    </div>
                  </div>
                </div>

                {/* Bottom Controls with Updated Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </button>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleAIReview}
                      className="px-6 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      AI Review
                    </button>
                    <button 
                      onClick={handleEditResponse}
                      className="px-6 py-2 text-pink-500 border border-pink-500 rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit Response
                    </button>
                  </div>
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