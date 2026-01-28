"use client";

import { use } from "react";
import Link from "next/link";
import { useGetCourseByIdQuery } from "@/app/store/api/apiSlice";
import StatsCard from "@/components/StatsCard";
import BackIcon from "@/components/icons/BackIcon";
import TotalEnrollIcon from "@/components/icons/TotalEnrollIcon";
import TotalApplied from "@/components/icons/TotalAppliedIcon";
import ColleguesTable from "@/components/layout/ColleguesTable";
import InnerHeadContentLayout from "@/components/layout/InnerHeadContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

const courseImages = [
  "/card-img1.webp",
  "/card-img1.webp",
  "/card-img1.webp",
  "/card-img1.webp",
  "/card-img1.webp",
];

const mockLearners = [
  {
    id: "1",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
    img: "/image135.svg",
  },
  {
    id: "2",
    name: "Meera Gonzalez",
    city: "Toronto",
    email: "meera.gonzalez@email.com",
    img: "/image135.svg",
  },
  {
    id: "3",
    name: "Monica Patel",
    city: "Paris",
    email: "monica.patel@email.com",
    img: "/image135.svg",
  },
  {
    id: "4",
    name: "Dinesh Kumar",
    city: "Tokyo",
    email: "dinesh.kumar@email.com",
    img: "/image135.svg",
  },
  {
    id: "5",
    name: "Karthik Subramanian",
    city: "London",
    email: "karthik.subramanian@email.com",
    img: "/image135.svg",
  },
  {
    id: "6",
    name: "Jagathesh Narayanan",
    city: "Berlin",
    email: "jagathesh.narayanan@email.com",
    img: "/image135.svg",
  },
  {
    id: "7",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
    img: "/image135.svg",
  },
  {
    id: "8",
    name: "Jagathesh Narayanan",
    city: "Tokyo",
    email: "dinesh.kumar@email.com",
    img: "/image135.svg",
  },
];

export default function CourseLandingPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;
  const { data: course, isLoading: courseLoading } =
    useGetCourseByIdQuery(courseId);

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

  const courseIndex = parseInt(courseId) % 5;
  const courseImage = courseImages[courseIndex];

  return (
    <InnerHeadContentLayout
      children1={
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-5 sticky!">
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/courses"
                className="rounded-lg transition-colors"
              >
                <BackIcon />
              </Link>
              <div className="flex items-center gap-3">
                <h1 className="text-[1.5rem] font-medium text-[#202020]">
                  {course.title}
                </h1>
                <span className="inline-block text-xs font-medium px-3 py-2 bg-[#E1F5FE] text-[#035177] rounded-full">
                  {course.category}
                </span>
              </div>
            </div>
            <Link
              href={`/dashboard/courses/${courseId}/learn`}
              className="flex items-center justify-center w-57 h-12 bg-[#0063EF] text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Learning
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-sm h-56">
            <img
              src={courseImage || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <StatsCard
              icon={<TotalApplied />}
              title="Total Applicants"
              value={1223}
            />

            <StatsCard
              icon={<TotalEnrollIcon />}
              title="Active Learners"
              value={13}
            />
          </div>
        </>
      }
      children2={
        <>
          {/* Learners Table */}
          <ColleguesTable mockLearners={mockLearners} />
        </>
      }
    />
  );
}
