import ArrowDown from "@/components/icons/ArrowDown";
import TickIcon from "@/components/icons/TickIcon";

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

interface CourseSidebarProps {
  completedLessons: number;
  totalLessons: number;
  lessonSections: LessonSection[];
  expandedSections: string[];
  toggleSection: (sectionName: string) => void;
}

export default function CoursesSidebar({
  completedLessons,
  totalLessons,
  lessonSections,
  expandedSections,
  toggleSection,
}: CourseSidebarProps) {
  return (
    <div className="min-w-77! sticky! top-23! bg-white border border-[#F0F0F0] rounded-lg h-fit z-10">
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
              className="w-full flex items-center justify-between px-6 py-4"
            >
              <h3 className="font-semibold text-gray-900 text-sm">
                {section.name}
              </h3>
              <ArrowDown
                dir={expandedSections.includes(section.name) ? "up" : "down"}
              />
            </button>

            {/* Lessons */}
            {expandedSections.includes(section.name) &&
              section.lessons.length > 0 && (
                <div className="px-5 py-3 space-y-3">
                  {section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-3 py-1 bg-blue-600/10 px-1 rounded-sm"
                    >
                      <div className="grow">
                        <p
                          className={`text-xs font-medium leading-tight ${
                            lesson.completed ? "text-blue-600" : "text-[#636363] py-1"
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
  );
}
