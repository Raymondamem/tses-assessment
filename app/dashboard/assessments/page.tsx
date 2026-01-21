"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useGetLessonsQuery,
} from "@/app/store/api/apiSlice";
import PageHeader from "@/components/layout/PageHeader";
import ContentWrapper from "@/components/layout/ContentWrapper";

interface PageProps {
  params: Promise<{ id: string }>;
}

const assessmentContent = {
  title: "Assessment Quiz",
  intro: "Test your knowledge and understanding of the course material. Answer all questions carefully.",
};

const assessmentSections = [
  {
    name: "Assessment Questions",
    expanded: true,
    lessons: [
      { id: "1", title: "What is the purpose of React Hooks?", completed: false },
      { id: "2", title: "Which hook is used for side effects in React?", completed: false },
      { id: "3", title: "Explain the Virtual DOM and its benefits", completed: false },
    ],
  },
];

export default function AssessmentsPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const assessmentId = resolvedParams.id;
  const [activeTab, setActiveTab] = useState<"content" | "feedback">("content");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Assessment Questions",
  ]);

  const { data: course, isLoading: courseLoading } =
    useGetCourseByIdQuery(assessmentId);
  const { data: lessons = [], isLoading: lessonsLoading } =
    useGetLessonsQuery(assessmentId);

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
        <div className="text-gray-600">Assessment not found</div>
      </div>
    );
  }

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName],
    );
  };

  return (
    <div className="bg-[#F6F7F6] min-h-screen flex flex-col">
      {/* Header - Fixed */}
      <PageHeader
        title={`${course.title} - Assessment`}
        backHref={`/courses/${assessmentId}`}
      />

      {/* Content Wrapper */}
      <ContentWrapper
        lessonSections={assessmentSections}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        {/* Main Content - Scrollable */}
        <div className="lg:col-span-2 space-y-6 overflow-y-auto h-full pr-4">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("content")}
                className={`px-6 py-3 border-b-2 transition-colors text-sm ${
                  activeTab === "content"
                    ? "text-blue-600 border-blue-600 font-semibold"
                    : "text-[#636363] border-transparent hover:text-gray-900"
                }`}
              >
                Assessment
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={`px-6 py-3 border-b-2 transition-colors text-sm ${
                  activeTab === "feedback"
                    ? "text-blue-600 border-blue-600 font-semibold"
                    : "text-[#636363] border-transparent hover:text-gray-900"
                }`}
              >
                Review/Feedbacks
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="border border-[#F0F0F0] rounded-lg">
            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="bg-white border-none rounded-lg">
                  <h2 className="px-6 py-3 text-md font-medium text-gray-900 mb-4 border-b border-[#F0F0F0]">
                    {assessmentContent.title}
                  </h2>
                  <p className="px-6 text-[#636363] text-sm leading-relaxed mb-6">
                    {assessmentContent.intro}
                  </p>

                  <div className="space-y-8 px-6">
                    {assessmentSections[0].lessons.map((question, index) => (
                      <div
                        key={question.id}
                        className="border-b border-gray-200 pb-8 last:border-b-0"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">
                              {question.title}
                            </p>
                            <div className="flex gap-4 mt-2 text-xs">
                              <span className="text-gray-600">
                                Multiple Choice
                              </span>
                            </div>
                          </div>
                        </div>

                        {index < 2 ? (
                          <div className="space-y-2 ml-11">
                            {[
                              "A. To use state and other React features in functional components",
                              "B. To create class components",
                              "C. To style React components",
                              "D. To handle routing in React applications",
                            ].map((option, idx) => (
                              <label
                                key={idx}
                                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  className="w-4 h-4"
                                />
                                <span className="text-sm text-gray-700">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        ) : (
                          <div className="ml-11">
                            <textarea
                              placeholder="Enter your answer here"
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              rows={4}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-6">
                  <button
                    onClick={() => router.push("/dashboard/courses")}
                    className="block ml-auto mr-0 px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors text-sm"
                  >
                    Submit Assessment
                  </button>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Reviews & Feedback
                </h2>
                <p className="text-gray-600 text-sm">
                  No feedback yet. Complete the assessment to receive feedback!
                </p>
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
