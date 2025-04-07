'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { MapPin, Image as ImageIcon, X } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const LocationPicker = dynamic(() => import('@/components/map/location-picker'), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
});

export function PostEditor() {
    const [content, setContent] = useState('');
    const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedImages([...selectedImages, ...files]);

        // Create preview URLs
        const newPreviewUrls = files.map(file => URL.createObjectURL(file));
        setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
    };

    const removeImage = (index: number) => {
        const newImages = [...selectedImages];
        const newPreviewUrls = [...imagePreviewUrls];

        // Revoke the URL to prevent memory leaks
        URL.revokeObjectURL(newPreviewUrls[index]);

        newImages.splice(index, 1);
        newPreviewUrls.splice(index, 1);

        setSelectedImages(newImages);
        setImagePreviewUrls(newPreviewUrls);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement post creation logic
        setContent('');
        setSelectedLocation('');
        setSelectedImages([]);
        setImagePreviewUrls([]);
    };

    return (
        <>
            <Card className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Textarea
                        placeholder="Share your travel experience..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[100px]"
                    />

                    {/* Image Previews */}
                    {imagePreviewUrls.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                            {imagePreviewUrls.map((url, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={url}
                                        alt={`Preview ${index + 1}`}
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        className="absolute top-2 right-2"
                                        onClick={() => removeImage(index)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Selected Location */}
                    {selectedLocation && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {selectedLocation}
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            id="image-upload"
                            onChange={handleImageSelect}
                        />
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => document.getElementById('image-upload')?.click()}
                        >
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Add Photos
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setIsLocationPickerOpen(true)}
                        >
                            <MapPin className="h-4 w-4 mr-2" />
                            Add Location
                        </Button>
                        <div className="ml-auto">
                            <Button type="submit">Post</Button>
                        </div>
                    </div>
                </form>
            </Card>

            {/* Location Picker Modal */}
            <Dialog open={isLocationPickerOpen} onOpenChange={setIsLocationPickerOpen}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Choose Location</DialogTitle>
                    </DialogHeader>
                    <div className="h-[400px]">
                        <LocationPicker onLocationSelect={(location) => {
                            setSelectedLocation(location);
                            setIsLocationPickerOpen(false);
                        }} />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}