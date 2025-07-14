// src/components/dashboard/DashboardHeader.jsx
import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'

export default function DashboardHeader({ toggleSidebar }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <FiMenu className="h-6 w-6" />
      </button>

      {/* filler to keep title centered on desktop */}
      <div className="flex-1 text-center md:text-right">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </header>
  )
}
