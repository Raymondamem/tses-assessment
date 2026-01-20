# Soludesk - Professional Development Platform

A modern, responsive learning management system built with Next.js 16, React, TypeScript, and Tailwind CSS. Features Redux Toolkit for state management and RTK Query for data fetching.

## 🚀 Features

- **Course Management**: Browse, search, and enroll in professional development courses
- **Course Details**: View course content with structured lessons and progress tracking
- **Assessments**: Interactive quiz interface with multiple choice and short answer questions
- **Dashboard**: Overview of learning progress and key metrics
- **Responsive Design**: Mobile-first design that works on all devices
- **State Management**: Redux Toolkit with RTK Query for API calls
- **Type-Safe**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit
- **Data Fetching**: RTK Query
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
app/
├── (dashboard)/                 # Dashboard layout group
│   ├── layout.tsx              # Shared dashboard layout
│   ├── dashboard/              # Dashboard home page
│   ├── courses/                # Courses listing page
│   │   └── [id]/               # Course detail page
│   ├── assessments/            # Assessments/Quiz page
│   ├── classes/                # Classes page
│   ├── certification/          # Certifications page
│   └── settings/               # Settings page
├── store/                       # Redux store configuration
│   ├── store.ts               # Store configuration
│   ├── hooks.ts               # Typed Redux hooks
│   ├── slices/
│   │   └── userSlice.ts       # User state slice
│   └── api/
│       └── apiSlice.ts        # RTK Query API configuration
├── layout.tsx                  # Root layout with Providers
├── page.tsx                    # Root page (redirects to dashboard)
└── globals.css                 # Global styles

components/
├── layout/
│   ├── Sidebar.tsx            # Navigation sidebar
│   └── Header.tsx             # Top header with search and profile
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: use latest LTS)
- npm or yarn

### Installation

1. **Clone the repository** (or download the files)
```bash
git clone <your-repo-url>
cd tses-assessment
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Redux Store
The Redux store is configured in `app/store/store.ts` and includes:
- **User Slice**: Manages user authentication state
- **RTK Query API**: Configured for API calls (currently mocked)

### Adding Real API Integration
To connect to a real backend:

1. Update `app/store/api/apiSlice.ts` with your API endpoints
2. Replace `queryFn` implementations with actual API calls
3. Configure `baseQuery` with your API base URL

Example:
```typescript
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api.com/api',
  }),
  // ... endpoints
});
```

## 🎨 Customization

### Colors & Styling
- Design tokens are defined in `app/globals.css`
- Update CSS variables to change the color scheme
- All components use Tailwind CSS utility classes

### Adding New Pages
1. Create a new folder under `app/(dashboard)/`
2. Add `page.tsx` file
3. The page will be automatically routed based on the folder structure

### Adding New Components
1. Create components in the `components/` directory
2. Organize by feature (e.g., `components/courses/`, `components/common/`)
3. Use TypeScript interfaces for props

## 📊 Redux State Management

### User State
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    isAuthenticated: boolean;
  }
}
```

### Available Actions
- `setUser(user)` - Set user information
- `clearUser()` - Clear user data
- `login(credentials)` - Login user
- `logout()` - Logout user

### Using Redux in Components
```typescript
'use client';

import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/slices/userSlice';

export function MyComponent() {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{user?.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
```

## 🔌 RTK Query API Endpoints

### Available Endpoints
- `useGetCoursesQuery()` - Fetch all courses
- `useGetCourseByIdQuery(id)` - Fetch specific course
- `useGetLessonsQuery(courseId)` - Fetch lessons for a course
- `useGetUserProfileQuery(userId)` - Fetch user profile

### Example Usage
```typescript
'use client';

import { useGetCoursesQuery } from '@/app/store/api/apiSlice';

export function CourseList() {
  const { data: courses = [], isLoading } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
}
```

## 📝 TODO - Image/SVG Replacements

Replace the following placeholder images with your actual assets:

1. **Course Thumbnails**: `/public/placeholder-course-*.jpg`
2. **User Avatar**: `/public/placeholder-avatar.jpg`
3. **Logo/Soludesk Icon**: Update in `components/layout/Sidebar.tsx`

### Where to Add Images
- Place static images in the `public/` directory
- Update image paths in components (e.g., `src="/images/course-1.jpg"`)

## 🎯 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

### Environment Variables
If you add environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://your-api.com
```

## 📚 Development Tips

### Typing Redux State
Always use the typed hooks for Redux:
```typescript
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
```

### Creating New API Endpoints
```typescript
// In app/store/api/apiSlice.ts
export const apiSlice = createApi({
  // ... existing config
  endpoints: (builder) => ({
    // Existing endpoints...
    getNewData: builder.query<DataType, ParamType>({
      queryFn: async (params) => {
        // Your implementation
      },
    }),
  }),
});

// Export hooks automatically generated
export const { useGetNewDataQuery } = apiSlice;
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Redux DevTools
Redux DevTools are automatically enabled in development mode. Install the [Redux DevTools Browser Extension](https://github.com/reduxjs/redux-devtools-extension) to debug state.

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 📄 License

This project is created for the TSES Abuja Frontend Technical Assessment.

## 👨‍💻 Support

For questions or issues, please refer to the [Next.js Documentation](https://nextjs.org/docs) and [Redux Documentation](https://redux.js.org/usage/index).

---

**Happy coding! 🎉**
