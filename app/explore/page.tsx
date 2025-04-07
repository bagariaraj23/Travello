"use client";

import { Card } from "@/components/ui/card";

export default function ExplorePage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold tracking-tight">Explore</h1>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Featured Content</h2>
                        <p className="text-muted-foreground">
                            Discover trending and popular content from our community.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Latest Updates</h2>
                        <p className="text-muted-foreground">
                            Stay up to date with the newest additions and changes.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Categories</h2>
                        <p className="text-muted-foreground">
                            Browse content by topic and interest areas.
                        </p>
                    </Card>
                </div>
            </div>
        </main>
    );
}