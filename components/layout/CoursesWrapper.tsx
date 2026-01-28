import CoursesHeader from "@/components/layout/CoursesHeader";
import CoursesSidebar from "./CourseSidebar";

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
      <div className="bg-[#F6F7F6] min-h-screen flex flex-col px-6">
        {/* Header - Fixed */}
        <CoursesHeader title={course.title} />
        {/* Content body */}
        <div className="bg-[#F6F7F6] min-h-screen">
          <div className="flex items-start justify-between gap-2 h-full">
            {/* Main Content Area */}
            {children}
            {/* Sidebar - Lessons - Fixed */}
            <CoursesSidebar
              completedLessons={completedLessons}
              totalLessons={totalLessons}
              lessonSections={lessonSections}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
          </div>
        </div>
      </div>
    </>
  );
}
