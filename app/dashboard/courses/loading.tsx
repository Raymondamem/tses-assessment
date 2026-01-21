export default function Loading() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-gray-200 rounded-lg w-1/3 mb-2 animate-pulse"></div>
        <div className="h-5 bg-gray-100 rounded-lg w-1/2 animate-pulse"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters Skeleton */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex-1 max-w-md">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Course Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-5">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3 mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
