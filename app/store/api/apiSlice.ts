import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  instructor: string;
  enrollments: number;
  progress: number;
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
  duration: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      queryFn: async () => {
        // Mock data - replace with actual API call
        const mockCourses: Course[] = [
          {
            id: '1',
            title: 'Effective Workplace Communication',
            description: 'Master communication skills in professional settings',
            category: 'Soft Skill',
            thumbnail: '/placeholder-course-1.jpg',
            instructor: 'Sarah Smith',
            enrollments: 1223,
            progress: 45,
          },
          {
            id: '2',
            title: 'Mastering Interpersonal Skills',
            description: 'Build stronger relationships and collaboration',
            category: 'Compliance & Policy',
            thumbnail: '/placeholder-course-2.jpg',
            instructor: 'John Doe',
            enrollments: 856,
            progress: 60,
          },
          {
            id: '3',
            title: 'Strengthening Team Cohesion',
            description: 'Create a cohesive and productive team environment',
            category: 'Soft Skill',
            thumbnail: '/placeholder-course-3.jpg',
            instructor: 'Emma Wilson',
            enrollments: 945,
            progress: 30,
          },
        ];
        return { data: mockCourses };
      },
    }),

    getCourseById: builder.query<Course, string>({
      queryFn: async (id) => {
        const mockCourse: Course = {
          id,
          title: 'Effective Workplace Communication',
          description: 'Master communication skills in professional settings',
          category: 'Soft Skill',
          thumbnail: '/placeholder-course-detail.jpg',
          instructor: 'Sarah Smith',
          enrollments: 1223,
          progress: 45,
        };
        return { data: mockCourse };
      },
    }),

    getLessons: builder.query<Lesson[], string>({
      queryFn: async (courseId) => {
        const mockLessons: Lesson[] = [
          { id: '1', title: 'Welcome Message', completed: true, duration: '5:30' },
          { id: '2', title: 'A Note on Style', completed: true, duration: '8:15' },
          { id: '3', title: 'What You\'ll Learn', completed: true, duration: '6:45' },
          { id: '4', title: 'Meet Your Instructor', completed: false, duration: '10:20' },
          { id: '5', title: 'Setting Up Your Workspace', completed: false, duration: '12:00' },
          { id: '6', title: 'Navigating the Course', completed: false, duration: '7:30' },
        ];
        return { data: mockLessons };
      },
    }),

    getUserProfile: builder.query<UserProfile, string>({
      queryFn: async (userId) => {
        const mockProfile: UserProfile = {
          id: userId,
          name: 'Madison Greg',
          email: 'madison.reertr@example.com',
          avatar: '/placeholder-avatar.jpg',
        };
        return { data: mockProfile };
      },
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetLessonsQuery,
  useGetUserProfileQuery,
} = apiSlice;
