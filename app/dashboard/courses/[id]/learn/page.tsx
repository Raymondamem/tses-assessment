"use client";

import { use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useGetLessonsQuery,
} from "@/app/store/api/apiSlice";
import VideoBanner from "@/components/Video";
import CoursesWrapper from "@/components/layout/CoursesWrapper";
// import CourseLayoutSidebar from "@/components/layout/CourseLayoutSidebar";

interface PageProps {
  params: Promise<{ id: string }>;
}

const courseImages = ["/thumbnail.png", "/thumbnail.png", "/thumbnail.png"];

const lessonContent = {
  title: "Welcome Message",
  intro: `Welcome to 'Communicate with Confidence'! In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial. This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.`,
  sections: [
    {
      title: "Why Communication Matters",
      content: `Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount. This course aims to illuminate the significance of communication and provide you with the tools necessary to master it.`,
    },
    {
      title: "What You'll Learn",
      content: `Throughout this course, you will delve into various aspects of communication, each designed to build upon the last, creating a robust foundation for your skills:\n\n1. Clear Articulation: You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.\n\n2. Active Listening: Developing the ability to listen actively is crucial. You will practice techniques that enhance your listening skills, enabling you to fully engage with others and respond thoughtfully.\n\n3. Confident Conversations: Navigating challenging discussions can be daunting. This course will provide you with strategies to approach these conversations with poise and assurance, transforming potential conflicts into constructive dialogues.\n\n4. Non-Verbal Communication: Communication is not just about words. You will explore the nuances of non-verbal cues, such as body language and facial expressions, and learn how to utilize them to reinforce your message.`,
    },
    {
      title: "Building a Collaborative Environment",
      content: `Mastering these skills will not only enhance your personal communication but also contribute to building stronger interpersonal relationships within your team. A collaborative work environment is vital for team success, and effective communication is the key to fostering this atmosphere. You will learn how to create an inclusive environment where ideas can flourish, and everyone feels valued.`,
    },
    {
      title: "Course Outcomes",
      content: `By the end of this transformative course, you will be equipped to:\n\n- Communicate effectively in any situation, whether in meetings, presentations, or casual conversations.\n- Navigate complex challenges with confidence, turning potential obstacles into opportunities for growth.\n- Contribute significantly to your organization's success through improved communication practices, fostering a culture of openness and collaboration.\n\nJoin us on this journey to transform your communication skills and unlock new heights in your career! Together, we will explore the depths of effective communication, ensuring that you emerge not just as a better communicator, but as a leader in your field.`,
    },
  ],
};

const lessonSections = [
  {
    name: "Introduction",
    expanded: true,
    lessons: [
      { id: "1", title: "Welcome Message", completed: true },
      { id: "2", title: "A Note on Style", completed: false },
      { id: "3", title: "What You'll Learn", completed: false },
      { id: "4", title: "Meet Your Instructor", completed: false },
    ],
  },
  {
    name: "Setting Up Your Workspace",
    expanded: false,
    lessons: [],
  },
  {
    name: "Navigating the Course",
    expanded: false,
    lessons: [],
  },
  {
    name: "Course Resources",
    expanded: false,
    lessons: [],
  },
  {
    name: "Getting Started",
    expanded: false,
    lessons: [],
  },
];

export default function CourseLearnPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;
  const [activeTab, setActiveTab] = useState<"content" | "feedback">("content");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Introduction",
  ]);

  const { data: course, isLoading: courseLoading } =
    useGetCourseByIdQuery(courseId);
  const { data: lessons = [], isLoading: lessonsLoading } =
    useGetLessonsQuery(courseId);

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

  const courseIndex = parseInt(courseId) % 3;
  const courseImage = courseImages[courseIndex];

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName],
    );
  };

  return (
    <>
      {/* Content Wrapper */}
      <CoursesWrapper
        lessonSections={lessonSections}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        courseId={courseId}
        course={course}
      >
        {/* Main Content - Scrollable */}
        <div className="lg:col-span-2 space-y-6 overflow-y-auto h-full pr-4">
          {/* Video Banner */}
          <VideoBanner courseImage={courseImage} course={course} />

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
                Course Content
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
            <div>
              {activeTab === "content" && (
                <div className="space-y-6">
                  <div className="bg-white border-none rounded-lg">
                    <h2 className="px-6 py-3 text-md font-medium text-gray-900 mb-4 border-b border-[#F0F0F0]">
                      Lesson 1 - {lessonContent.title}
                    </h2>
                    <p className="px-6 text-[#636363] text-sm leading-relaxed mb-6">
                      {lessonContent.intro}
                    </p>

                    {lessonContent.sections.map((section, index) => (
                      <div key={index} className="px-6">
                        <h3 className="text-[#636363] text-md font-medium mb-3">
                          {section.title}
                        </h3>
                        <p className="text-[#636363] text-sm leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 p-6">
                    <button
                      onClick={() => router.push(`/dashboard/courses/${courseId}/assessments`)}
                      className="block ml-auto mr-0 px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors text-sm"
                    >
                      Mark as complete
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "feedback" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Reviews & Feedback
                  </h2>
                  <p className="text-gray-600 text-sm">
                    No feedback yet. Be the first to review this course!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CoursesWrapper>
    </>
  );
}
