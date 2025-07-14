
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '@/pages/dashboard/Sidebar';
import DashboardHeader from '@/pages/dashboard/DashboardHeader';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Mobile Navigation Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-md shadow">
            <FiMenu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation Sidebar */}
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleMobileSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {/* Child routes will be rendered here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}