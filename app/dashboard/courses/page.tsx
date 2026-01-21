"use client";

import { useGetCoursesQuery } from "@/app/store/api/apiSlice";
import { Suspense } from "react";
import Loading from "./loading";
import StatsCards from "@/components/layout/StatsCardsComponent";
import SearchAndFilter from "@/components/layout/SearchAndFilter";
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/layout/Pagination";

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
          <Pagination />
        </div>
      </div>
    </div>
  );
}
