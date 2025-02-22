'use client'

import { useState, useEffect } from 'react'
import NavBar2 from '@/components/NavBar2'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

interface UserProfile {
  name: string;
  username: string;
  email: string;
  mobile: string;
  country: string;
  rating: number;
  mcqsSolved: number;
  profilePic: string;
}

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false)
  const [activeItem, setActiveItem] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  const userProfile: UserProfile = {
    name: "Hello World",
    username: "1234567",
    email: "hello@gmail.com",
    mobile: "1234 567 890",
    country: "India",
    rating: 0,
    mcqsSolved: 0,
    profilePic: "/default-avatar.png" // Add a default avatar image to your public folder
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-purple-200 mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 relative">
                User Profile
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></span>
              </h1>
              <p className="text-gray-600 mt-4">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                  <div className="relative group">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={userProfile.profilePic} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-white text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-1">{userProfile.name}</h2>
                    <p className="text-white/80 flex items-center justify-center md:justify-start gap-2">
                      <span className="text-white/70">@{userProfile.username}</span>
                      {userProfile.rating > 100 && (
                        <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Premium</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 -mt-8">
                <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="text-4xl font-bold text-pink-500 mb-2">{userProfile.rating}</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Rating</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="text-4xl font-bold text-purple-500 mb-2">{userProfile.mcqsSolved}</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">MCQs Solved</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="text-4xl font-bold text-indigo-500 mb-2">Top 10%</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Ranking</div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-8 border-t">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={userProfile.name}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border ${isEditing ? 'border-purple-300 bg-white' : 'border-gray-200 bg-gray-50'} rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                          />
                          {!isEditing && <div className="absolute inset-0 cursor-not-allowed"></div>}
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={userProfile.username}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border ${isEditing ? 'border-purple-300 bg-white' : 'border-gray-200 bg-gray-50'} rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                          />
                          {!isEditing && <div className="absolute inset-0 cursor-not-allowed"></div>}
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            value={userProfile.email}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border ${isEditing ? 'border-purple-300 bg-white' : 'border-gray-200 bg-gray-50'} rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                          />
                          {!isEditing && <div className="absolute inset-0 cursor-not-allowed"></div>}
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Mobile Number</label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            value={userProfile.mobile}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border ${isEditing ? 'border-purple-300 bg-white' : 'border-gray-200 bg-gray-50'} rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                          />
                          {!isEditing && <div className="absolute inset-0 cursor-not-allowed"></div>}
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={userProfile.country}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border ${isEditing ? 'border-purple-300 bg-white' : 'border-gray-200 bg-gray-50'} rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                          />
                          {!isEditing && <div className="absolute inset-0 cursor-not-allowed"></div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isEditing 
                          ? 'border border-gray-300 text-gray-600 hover:bg-gray-50' 
                          : 'border border-purple-500 text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                    {isEditing && (
                      <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                        Save Changes
                      </button>
                    )}
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