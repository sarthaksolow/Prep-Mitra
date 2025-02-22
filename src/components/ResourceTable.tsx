'use client'

import React from 'react'
import { BookOpen, Clock, Star, BarChart, Users, Calendar, Trophy, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Resource {
  id: number
  title: string
  type: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  rating: number
  progress?: number
  link: string
  students?: number
  lastUpdated?: string
  certification?: boolean
  instructor?: string
}

interface ResourceTableProps {
  title: string
  description: string
  resources: Resource[]
}

const getDifficultyColor = (difficulty: Resource['difficulty']) => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-500 bg-green-50 border-green-100'
    case 'Intermediate':
      return 'text-yellow-500 bg-yellow-50 border-yellow-100'
    case 'Advanced':
      return 'text-red-500 bg-red-50 border-red-100'
  }
}

export default function ResourceTable({ title, description, resources }: ResourceTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Resource</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Type</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Duration</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Difficulty</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Students</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Rating</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Last Updated</th>
                {resources.some(r => r.progress !== undefined) && (
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Progress</th>
                )}
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <tr 
                  key={resource.id} 
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-pink-500 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">{resource.title}</div>
                        {resource.instructor && (
                          <div className="text-sm text-gray-500">by {resource.instructor}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-600">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                        {resource.type}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {resource.duration}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {resource.students || 0}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-gray-600">{resource.rating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {resource.lastUpdated || 'Recently'}
                    </div>
                  </td>
                  {resources.some(r => r.progress !== undefined) && (
                    <td className="py-4 px-4">
                      {resource.progress !== undefined && (
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-pink-500 rounded-full transition-all duration-300"
                              style={{ width: `${resource.progress}%` }}
                            />
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{resource.progress}%</span>
                        </div>
                      )}
                    </td>
                  )}
                  <td className="py-4 px-4 text-right">
                    <Link
                      href={resource.link}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <span className="mr-2">Start Learning</span>
                      <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      {resource.certification && (
                        <Trophy className="w-4 h-4 ml-2 text-yellow-300" />
                      )}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 