'use client';

import { Search, Bell, Shield } from 'lucide-react';
import { useAppSelector } from '@/app/store/hooks';

export function Header() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search soludesk"
              className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-6">
          {/* Icons */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Shield className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
              <div className="text-xs text-gray-500">{user?.email || 'user@example.com'}</div>
            </div>
            <img
              src="/placeholder-avatar.jpg"
              alt="User avatar"
              className="w-10 h-10 rounded-full bg-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
