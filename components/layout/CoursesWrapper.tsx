import ArrowDown from "@/components/icons/ArrowDown";
import TickIcon from "@/components/icons/TickIcon";
import CoursesHeader from "@/components/layout/CoursesHeader";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  instructor: string;
  enrollments: number;
  progress: number;
}

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface LessonSection {
  name: string;
  expanded?: boolean;
  lessons: Lesson[];
}

interface CoursesWrapperProps {
  children: React.ReactNode;
  lessonSections: LessonSection[];
  expandedSections: string[];
  toggleSection: (sectionName: string) => void;
  courseId: string;
  course: Course;
}

export default function CoursesWrapper({
  children,
  lessonSections,
  expandedSections,
  toggleSection,
  courseId,
  course,
}: CoursesWrapperProps) {
  const completedLessons = lessonSections.reduce(
    (total, section) =>
      total + section.lessons.filter((l) => l.completed).length,
    0,
  );
  const totalLessons = lessonSections.reduce(
    (total, section) => total + section.lessons.length,
    0,
  );

  return (
    <>
      <div className="bg-[#F6F7F6] min-h-screen flex flex-col">
        {/* Header - Fixed */}
        <CoursesHeader title={course.title} />
        {/* Content body */}
        <div className="bg-[#F6F7F6] min-h-screen">
          <div className="flex-1 overflow-hidden px-8 pb-6 max-w-7xl mx-auto w-full">
            <div className="flex items-start justify-between gap-2 h-full">
              {/* Main Content Area */}
              {children}
              {/* Sidebar - Lessons - Fixed */}
              <div className="min-w-77! sticky! top-0! bg-white border border-[#F0F0F0] rounded-lg h-fit z-10">
                <div className="px-6 py-3 border-b border-[#F0F0F0]">
                  <h2 className="text-sm font-medium text-[#636363]">
                    Lessons ({completedLessons}/{totalLessons})
                  </h2>
                </div>

                {/* Lesson Sections */}
                <div className="divide-y divide-[#F0F0F0] max-h-[calc(100vh-200px)] overflow-y-auto">
                  {lessonSections.map((section) => (
                    <div key={section.name}>
                      <button
                        onClick={() => toggleSection(section.name)}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F6F7F6] transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {section.name}
                        </h3>
                        <ArrowDown
                          dir={
                            expandedSections.includes(section.name)
                              ? "up"
                              : "down"
                          }
                        />
                      </button>

                      {/* Lessons */}
                      {expandedSections.includes(section.name) &&
                        section.lessons.length > 0 && (
                          <div className="bg-[#F6F7F6] px-6 py-3 space-y-3">
                            {section.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-start gap-3 py-1"
                              >
                                <div className="grow">
                                  <p
                                    className={`text-sm font-medium leading-tight ${
                                      lesson.completed
                                        ? "text-gray-900"
                                        : "text-blue-600"
                                    }`}
                                  >
                                    {lesson.title}
                                  </p>
                                </div>
                                {lesson.id === "1" && (
                                  <TickIcon setIcon={lesson.completed} />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
