'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { MapPin, Heart, MessageCircle, Share2, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

interface PostCardProps {
    post: {
        id: number;
        user: {
            name: string;
            avatar: string;
        };
        content: string;
        images: string[];
        location: string;
        likes: number;
        comments: number;
        timestamp: string;
    };
}

export function PostCard({ post }: PostCardProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');

    // Dummy comments data
    const comments = [
        { id: 1, user: 'Alice', content: 'Amazing photos! 😍', timestamp: '1h ago' },
        { id: 2, user: 'Bob', content: 'Where exactly is this?', timestamp: '30m ago' },
    ];

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsGalleryOpen(true);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement comment submission
        setNewComment('');
    };

    return (
        <>
            <Card className="p-4">
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                        <img src={post.user.avatar} alt={post.user.name} />
                    </Avatar>
                    <div>
                        <h3 className="font-semibold">{post.user.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {post.location} • {post.timestamp}
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <p className="mb-4">{post.content}</p>

                {/* Post Images */}
                {post.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {post.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Travel photo ${index + 1}`}
                                className="rounded-lg w-full h-48 object-cover cursor-pointer"
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                )}

                {/* Post Actions */}
                <div className="flex items-center gap-4 pt-2 border-t">
                    <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)}>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                </div>

                {/* Comments Section */}
                {showComments && (
                    <div className="mt-4 space-y-4">
                        <ScrollArea className="h-[200px] rounded-md border p-4">
                            {comments.map((comment) => (
                                <div key={comment.id} className="mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{comment.user}</span>
                                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-sm">{comment.content}</p>
                                </div>
                            ))}
                        </ScrollArea>
                        <form onSubmit={handleCommentSubmit} className="flex gap-2">
                            <Input
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <Button type="submit" size="sm">Post</Button>
                        </form>
                    </div>
                )}
            </Card>

            {/* Image Gallery Modal */}
            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                <DialogContent className="max-w-4xl">
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0"
                            onClick={() => setIsGalleryOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <img
                            src={post.images[selectedImageIndex]}
                            alt="Gallery view"
                            className="w-full rounded-lg"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}