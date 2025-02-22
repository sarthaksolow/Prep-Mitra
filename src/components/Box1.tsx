import React from 'react'

interface Box1Props {
  title: string;
  progress: number;
  total: number;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

export default function Box1({ title, progress, total, bgColor, iconColor }: Box1Props) {
  return (
    <div className={`${bgColor} rounded-lg p-4 flex items-center space-x-4 hover:scale-[1.02] transition-transform cursor-pointer`}>
      <div className={`${iconColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-white mb-1">{title}</h3>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-black/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2" 
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <span className="text-xs text-white/80">
            {progress}/{total}
          </span>
        </div>
      </div>
    </div>
  )
} 