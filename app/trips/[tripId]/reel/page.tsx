"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Video, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function ReelPage() {
    const params = useParams();
    const router = useRouter();
    const [reel, setReel] = useState<any>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const fetchReel = async () => {
        try {
            const response = await fetch(`/api/trips/${params.tripId}/reel`);
            if (response.ok) {
                const data = await response.json();
                setReel(data);
            }
        } catch (error) {
            console.error("Error fetching reel:", error);
        }
    };

    const generateReel = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch(`/api/trips/${params.tripId}/reel`, {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to generate reel");
            }

            const data = await response.json();
            setReel(data);
            toast.success("Reel generation started!");

            // Poll for status updates
            const interval = setInterval(async () => {
                const statusResponse = await fetch(`/api/trips/${params.tripId}/reel`);
                const statusData = await statusResponse.json();

                setReel(statusData);

                if (statusData.status === "completed" || statusData.status === "failed") {
                    clearInterval(interval);
                    setIsGenerating(false);

                    if (statusData.status === "completed") {
                        toast.success("Reel generated successfully!");
                    } else {
                        toast.error("Failed to generate reel");
                    }
                }
            }, 5000);

        } catch (error) {
            toast.error("Failed to generate reel");
            setIsGenerating(false);
        }
    };

    useEffect(() => {
        fetchReel();
    }, [params.tripId]);

    return (
        <div className="container max-w-4xl py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Trip Reel</CardTitle>
                </CardHeader>
                <CardContent>
                    {!reel && !isGenerating && (
                        <div className="text-center py-10">
                            <Video className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No Reel Generated Yet</h3>
                            <p className="text-gray-500 mb-4">
                                Create a beautiful video reel from your trip memories
                            </p>
                            <Button onClick={generateReel} disabled={isGenerating}>
                                Generate Reel
                            </Button>
                        </div>
                    )}

                    {isGenerating && (
                        <div className="text-center py-10">
                            <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Generating Your Reel</h3>
                            <p className="text-gray-500">
                                This may take a few minutes. Please wait...
                            </p>
                        </div>
                    )}

                    {reel && reel.status === "completed" && (
                        <div className="space-y-6">
                            <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                <video
                                    src={reel.outputUrl}
                                    controls
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Caption</h3>
                                    <p className="text-gray-600">{reel.caption}</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Hashtags</h3>
                                    <p className="text-gray-600">
                                        {reel.hashtags?.split(",").map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                            >
                                                #{tag.trim()}
                                            </span>
                                        ))}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Blog Content</h3>
                                    <div className="prose max-w-none">
                                        {reel.blogContent?.split("\n\n").map((paragraph: string, i: number) => (
                                            <p key={i} className="text-gray-600">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        onClick={() => {
                                            // Implement sharing functionality
                                            toast.success("Sharing feature coming soon!");
                                        }}
                                    >
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Share Reel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}


