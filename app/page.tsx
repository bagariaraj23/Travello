"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Map, Mountain, Plane } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Share Your Travel Stories
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Create beautiful travel memories with AI-powered storytelling. Document your journeys, share experiences, and inspire others.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/explore">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                      Explore Stories
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                      alt="Nature landscape"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                      alt="Mountain sunset"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
                      alt="Beach sunset"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7"
                      alt="City view"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features that Make Travel Stories Better
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to create and share memorable travel experiences
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <Plane className="h-8 w-8" />
                <h3 className="text-xl font-bold">Trip Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Plan your trips with AI-powered suggestions and itineraries
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Map className="h-8 w-8" />
                <h3 className="text-xl font-bold">Route Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Track and share your journey with interactive maps
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Mountain className="h-8 w-8" />
                <h3 className="text-xl font-bold">Story Creation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create beautiful stories with AI-enhanced content
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Compass className="h-8 w-8" />
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Connect with fellow travelers and share experiences
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}