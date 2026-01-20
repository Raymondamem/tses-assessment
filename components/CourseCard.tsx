import Link from "next/link";

// Course data with real images
export default function CourseCard({
  course,
}: {
  course: {
    id: string;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
  };
}) {
  return (
    <Link key={course.id} href={`/courses/${course.id}`}>
      <div className="bg-[#F6F7F6] rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 cursor-pointer group h-full flex flex-col">
        {/* Course Image */}
        <div className="relative w-full h-32 bg-gray-200 overflow-hidden rounded-t-lg shrink-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Course Info */}
        <div className="p-4 flex flex-col grow">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 text-sm">
            {course.title}
          </h3>
          <p className="text-gray-600 text-xs mb-4 line-clamp-2 leading-5 grow">
            {course.description}
          </p>

          <div className="mt-auto">
            <span className="inline-block text-xs font-medium px-3 py-1 bg-[#E8E8E8] text-[#636363] rounded-full">
              {course.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
