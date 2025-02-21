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
    return <div className="min-h-screen bg-gray-50">Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="ml-64 flex-1 p-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                User Profile
              </h1>
              <p className="text-gray-600">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img 
                      src={userProfile.profilePic} 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full border-4 border-white"
                    />
                    <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-lg hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-white">
                    <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                    <p className="text-white/80">@{userProfile.username}</p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-pink-500">{userProfile.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-500">{userProfile.mcqsSolved}</div>
                  <div className="text-sm text-gray-600">MCQs Solved</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-500">Top 10%</div>
                  <div className="text-sm text-gray-600">Ranking</div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6 border-t">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          value={userProfile.name}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
                        <input 
                          type="text" 
                          value={userProfile.username}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input 
                          type="email" 
                          value={userProfile.email}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Mobile Number</label>
                        <input 
                          type="tel" 
                          value={userProfile.mobile}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                        <input 
                          type="text" 
                          value={userProfile.country}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors"
                    >
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                    {isEditing && (
                      <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
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