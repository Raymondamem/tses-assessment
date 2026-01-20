"use client";

import NavLink from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  Users,
  ClipboardList,
  Award,
  Settings,
} from "lucide-react";
import Logo from "@/components/icons/Logo";
import SidebarHomeIcon from "@/components/icons/SidebarHomeIcon";
import SidebarBookIcon from "@/components/icons/SidebarBookIcon";
import SidebarClassIcon from "@/components/icons/SidebarClassIcon";
import SidebarAssesIcon from "@/components/icons/SidebarAssesIcon";
import SidebarCertIcon from "@/components/icons/SidebarCertIcon";
import SidebarSettIcon from "@/components/icons/SidebarSettIcon";


const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: (bg: boolean) => <SidebarHomeIcon bg={bg} />,
  },
  {
    name: "Courses/Materials",
    href: "/courses",
    icon: (bg: boolean) => <SidebarBookIcon bg={bg} />,
  },
  {
    name: "Classes",
    href: "#",
    icon: (bg: boolean) => <SidebarClassIcon bg={bg} />,
  },
  {
    name: "Assessments",
    href: "#",
    icon: (bg: boolean) => <SidebarAssesIcon bg={bg} />,
  },
  {
    name: "My Certification",
    href: "#",
    icon: (bg: boolean) => <SidebarCertIcon bg={bg} />,
  },
  {
    name: "Settings",
    href: "#",
    icon: (bg: boolean) => <SidebarSettIcon bg={bg} />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52.5 bg-white h-screen flex flex-col sticky top-0">
      {/* Logo Section */}
      <div className="p-4 h-[4.570rem]">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 border border-[#F0F0F0]">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <NavLink
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 px-2 py-2.5 text-sm text-[#636363]! font-light! transition-all duration-200 ${
                isActive
                  ? "font-semibold bg-blue-50 pl-[calc((0.5rem)-2px)] text-blue-600 border-l-2 border-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              {Icon(isActive)}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
