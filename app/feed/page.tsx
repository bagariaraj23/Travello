'use client';

import { PostCard } from '@/components/post/post-card';
import { PostEditor } from '@/components/post/post-editor';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeedPage() {
    // Dummy data for demonstration
    const posts = [
        {
            id: 1,
            user: {
                name: 'Sarah Parker',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
            },
            content: 'Just arrived in Bali! The sunset at Uluwatu Temple was absolutely breathtaking. 🌅',
            images: [
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
                'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800',
            ],
            location: 'Uluwatu Temple, Bali',
            likes: 124,
            comments: 23,
            timestamp: '2h ago',
        },
        {
            id: 2,
            user: {
                name: 'Mike Ross',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
            },
            content: 'Day 3 of my Japan adventure! Exploring the ancient streets of Kyoto. The architecture here is incredible, and the local food... simply amazing! 🍜 #JapanTravel #Kyoto',
            images: [
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
            ],
            location: 'Kyoto, Japan',
            likes: 89,
            comments: 12,
            timestamp: '5h ago',
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-6 max-w-2xl">
                {/* Create Post Section */}
                <PostEditor />

                {/* Feed */}
                <div className="space-y-6 mt-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Floating Action Button for Mobile */}
            <Button
                className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg md:hidden"
                size="icon"
            >
                <Plus className="h-6 w-6" />
            </Button>
        </main>
    );
}