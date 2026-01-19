'use client';

import { useGetCoursesQuery } from '@/app/store/api/apiSlice';
import Link from 'next/link';
import { BookOpen, TrendingUp } from 'lucide-react';

export default function CoursesPage() {
  const { data: courses = [], isLoading } = useGetCoursesQuery();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
        <p className="text-gray-600">Create, organize, and assign courses to teams and individuals</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total courses</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">123</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Enrollments</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">11</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Avg Completion</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">99%</p>
              <p className="text-green-600 text-xs font-medium mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                12% up from last month
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search Course"
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
          Category
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
          >
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              {/* Course Thumbnail */}
              <div className="w-full h-40 bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <button className="text-gray-600 hover:text-gray-900">Show 10/page</button>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">Prev</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">01</button>
          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
            >
              {String(page).padStart(2, '0')}
            </button>
          ))}
          <span className="px-2">...</span>
          <button className="px-3 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
            24
          </button>
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
