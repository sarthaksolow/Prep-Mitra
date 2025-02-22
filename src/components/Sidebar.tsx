'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface SidebarItem {
  id: string;
  name: string;
  color: string;
  path: string;
}

export default function Sidebar({ activeItem, setActiveItem }: { 
  activeItem: string;
  setActiveItem: (id: string) => void;
}) {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const sidebarItems: SidebarItem[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      color: 'text-blue-600',
      path: '/dashboard'
    },
    {
      id: 'subjective',
      name: 'Subjective Writing',
      color: 'text-purple-600',
      path: '/dashboard/subjective'
    },
    {
      id: 'mcq',
      name: 'MCQ Tests',
      color: 'text-green-600',
      path: '/dashboard/mcq'
    },
    {
      id: 'study-plans',
      name: 'Study Plans',
      color: 'text-orange-600',
      path: '/dashboard/study-plans'
    },
    {
      id: 'profile',
      name: 'User Profile',
      color: 'text-indigo-600',
      path: '/dashboard/profile'
    },
    {
      id: 'about',
      name: 'About Us',
      color: 'text-pink-600',
      path: '/about'
    }
  ]

  const handleNavigation = (item: SidebarItem) => {
    setActiveItem(item.id)
    router.push(item.path)
  }

  useEffect(() => {
    // Update active item based on current path
    const currentPath = pathname
    const currentItem = sidebarItems.find(item => item.path === currentPath)
    if (currentItem) {
      setActiveItem(currentItem.id)
    }
  }, [pathname, setActiveItem])

  if (!isClient) {
    return <div className="w-64 bg-white h-[calc(100vh-5rem)] fixed left-0 shadow-lg" />
  }

  return (
    <div className="w-64 bg-white h-[calc(100vh-5rem)] fixed left-0 shadow-lg">
      <div className="p-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                activeItem === item.id
                  ? `${item.color} bg-opacity-10 bg-blue-50`
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => handleNavigation(item)}
            >
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}