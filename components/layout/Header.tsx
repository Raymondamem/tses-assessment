"use client";

import { useAppSelector } from "@/app/store/hooks";
import ArrowDown from "@/components/icons/ArrowDown";
import MessageIcon from "@/components/icons/MessageIcon";
import BellIcon from "@/components/icons/BellIcon";
import UserAvatar from "@/components/icons/UserAvater";
import SearchBar from "@/components/SearchBar";

export function Header() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="px-6 h-18 flex items-center justify-between">
        <SearchBar />
        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Shield Icon */}
          <button className="hover:bg-gray-100 rounded-lg transition-colors group">
            <MessageIcon />
          </button>
          {/* Bell Icon with Notification */}
          <button className="hover:bg-gray-100 rounded-lg transition-colors group relative">
            <BellIcon />
          </button>
          {/* User Profile */}
          <button className="flex items-center gap-3 hover:bg-gray-50 px-2 rounded-lg transition-colors group">
            <div className="w-fit h-fit rounded-full flex items-center justify-center text-white font-medium shrink-0">
              <UserAvatar />
            </div>
            <div className="text-left max-w-30">
              <div className="text-sm font-medium text-gray-900 group-hover:text-gray-950 truncate">
                {user?.name || "Madison Greg"}
              </div>
              <div className="text-sm text-[#636363] group-hover:text-gray-600 truncate">
                {user?.email || "madison.gregory@example.com"}
              </div>
            </div>
            <ArrowDown />
          </button>
        </div>
      </div>
    </header>
  );
}
