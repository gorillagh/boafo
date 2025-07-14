
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useDashboard } from '@/context/DashboardContext'; // Import context hook
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ProfileSidebar from './ProfileSidebar'; // Import the new ProfileSidebar

export default function DashboardHeader({ toggleMobileSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useDashboard(); // Get user data from context
  const [profileOpen, setProfileOpen] = useState(false);

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle navigation"
      >
        <FiMenu className="h-6 w-6" />
      </button>

      {/* Spacer to push icons to the right */}
      <div className="flex-1" />

      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FiMoon className="h-5 w-5" /> : <FiSun className="h-5 w-5" />}
        </button>

        {/* Profile Avatar and Sidebar Trigger */}
        <Sheet open={profileOpen} onOpenChange={setProfileOpen}>
          <SheetTrigger asChild>
            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-80">
             <ProfileSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
