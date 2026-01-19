'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useGetCourseByIdQuery, useGetLessonsQuery } from '@/app/store/api/apiSlice';
import { ChevronLeft, Check } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = params as any;
  const courseId = resolvedParams.id;
  const [activeTab, setActiveTab] = useState<'content' | 'feedback'>('content');

  const { data: course, isLoading: courseLoading } = useGetCourseByIdQuery(courseId);
  const { data: lessons = [], isLoading: lessonsLoading } = useGetLessonsQuery(courseId);

  if (courseLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-6">
        <div className="text-gray-600">Course not found</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/courses"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Course Video/Banner */}
          <div className="bg-gradient-to-br from-teal-200 to-teal-400 rounded-lg overflow-hidden mb-6 h-96 flex items-center justify-center relative">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <button className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
              <div className="w-0 h-0 border-l-10 border-r-0 border-t-6 border-b-6 border-l-blue-600 border-t-transparent border-b-transparent ml-1"></div>
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('content')}
                className={`py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'content'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent'
                }`}
              >
                Course Content
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'feedback'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent'
                }`}
              >
                Review/Feedbacks
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'content' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lesson 1 - Welcome Message</h2>
              <div className="prose prose-sm text-gray-600 space-y-4">
                <p>
                  Welcome to 'Communicate with Confidence'! In an era where the pace of work is ever-increasing and the
                  demands on our time are relentless, the ability to communicate effectively has never been more crucial.
                  This comprehensive course is meticulously crafted to equip you with the essential skills that will not only
                  enhance your communication abilities but also empower you to thrive in any professional environment you
                  find yourself in.
                </p>
                <h3 className="font-semibold text-gray-900 mt-6">Why Communication Matters</h3>
                <p>
                  Effective communication is the cornerstone of success in the workplace. It is the bridge that connects
                  individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and
                  dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount. This
                  course aims to illuminate the significance of communication and provide you with the tools necessary to
                  master it.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Reviews & Feedback</h2>
              <div className="text-gray-600">
                <p>No feedback yet. Be the first to review this course!</p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Lessons */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Lessons (0/32)</h2>

          {/* Lesson Groups */}
          <div className="space-y-2">
            {/* Introduction Section */}
            <div className="border-b border-gray-200 pb-4">
              <button className="w-full text-left font-semibold text-gray-900 flex items-center justify-between py-2">
                Introduction
                <span>▲</span>
              </button>
              <div className="space-y-2 mt-2">
                {lessons.slice(0, 4).map((lesson) => (
                  <div key={lesson.id} className="flex items-start gap-3 py-2">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      lesson.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                    }`}>
                      {lesson.completed && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{lesson.title}</p>
                      <p className="text-xs text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {['Setting Up Your Workspace', 'Navigating the Course', 'Course Resources', 'Assessment'].map((section) => (
              <div key={section} className="border-b border-gray-200 pb-4">
                <button className="w-full text-left font-semibold text-gray-900 flex items-center justify-between py-2">
                  {section}
                  <span>▼</span>
                </button>
              </div>
            ))}
          </div>

          {/* Mark as Complete Button */}
          <button className="w-full mt-6 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Mark as complete
          </button>
        </div>
      </div>
    </div>
  );
}
