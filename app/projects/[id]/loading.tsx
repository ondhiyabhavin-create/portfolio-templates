"use client";

export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[oklch(0.05_0_0)]">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            {/* Back button skeleton */}
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
            
            {/* Image skeleton */}
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-8"></div>
            
            {/* Title skeleton */}
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            
            {/* Meta info skeleton */}
            <div className="flex gap-4 mb-8">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            
            {/* Tech stack skeleton */}
            <div className="mb-8">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                ))}
              </div>
            </div>
            
            {/* Features skeleton */}
            <div className="mb-8">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                ))}
              </div>
            </div>
            
            {/* CTA buttons skeleton */}
            <div className="flex gap-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

