"use client";

import { motion } from "framer-motion";

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[oklch(0.05_0_0)]">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto mb-8"></div>
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-2xl mx-auto mb-12"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-full w-32"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-full w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIChatSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 md:p-8 min-h-[500px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg ml-auto w-3/4"></div>
              </div>
              <div className="flex gap-3 mb-6">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
              <div className="pt-6">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-3"></div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="relative py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FullPageSkeleton() {
  return (
    <main className="relative">
      <HeroSkeleton />
      <AboutSkeleton />
      <SkillsSkeleton />
      <ProjectsSkeleton />
      <ExperienceSkeleton />
      <AIChatSkeleton />
      <ContactSkeleton />
    </main>
  );
}

