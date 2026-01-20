"use client";

import { useGetCoursesQuery } from "@/app/store/api/apiSlice";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { Suspense } from "react";
import Loading from "./loading";
import StatsCards from "@/components/layout/StatsCards";
import SearchAndFilter from "@/components/layout/SearchAndFilter";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CoursesPageContent />
    </Suspense>
  );
}

function CoursesPageContent() {
  const { data: courses = [], isLoading } = useGetCoursesQuery();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F7F6] min-h-screen">
      <div className="px-8 py-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-7">
          <h1 className="text-2xl text-[#202020] font-medium mb-3">
            Course Management
          </h1>
          <p className="text-[#636363] text-sm">
            Create, organize, and assign courses to teams and individuals
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        <div className="bg-white p-6 border-none rounded-md">
          {/* Search and Filters */}
          <SearchAndFilter />

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-6">
            <button className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1">
              Show 10/page
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1.5 text-gray-600 text-sm hover:text-gray-900 font-medium">
                Prev
              </button>
              <button className="w-8 h-8 bg-blue-600 text-white text-sm font-semibold rounded-full flex items-center justify-center">
                01
              </button>
              {[2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="w-8 h-8 text-gray-600 text-sm border-2 border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors font-medium"
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
              <span className="px-1 text-gray-400">...</span>
              <button className="w-8 h-8 text-gray-600 text-sm border-2 border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors font-medium">
                24
              </button>
              <button className="px-2 py-1.5 text-gray-600 text-sm hover:text-gray-900 font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
