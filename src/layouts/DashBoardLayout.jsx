// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { FiMenu } from 'react-icons/fi'
import Sidebar from '@/pages/dashboard/Sidebar'
import DashboardHeader from '@/pages/dashboard/DashboardHeader'

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile Drawer */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          {/* you could hide this if you only want header to open it */}
          <button className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-md shadow">
            <FiMenu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Pass toggle to header so it can open the drawer on mobile */}
        <DashboardHeader toggleSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  )
}
