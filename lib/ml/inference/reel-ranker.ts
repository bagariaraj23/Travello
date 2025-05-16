import { Media } from "@prisma/client";

export class ReelRanker {
  // This would load the trained model in a real implementation
  constructor() {}

  async rankMedia(mediaItems: Media[]): Promise<Media[]> {
    // Placeholder ranking logic
    // In a real implementation, this would use the trained model
    return mediaItems.sort((a, b) => {
      // Simple heuristics for now:
      // 1. Prefer videos over images
      const aType = (a as any).mediaType;
      const bType = (b as any).mediaType;
      if (aType !== bType) {
        return aType === "video" ? -1 : 1;
      }

      // 2. Prefer media with captions
      if (!!a.caption !== !!b.caption) {
        return a.caption ? -1 : 1;
      }

      // 3. Prefer media with location data
      if (!!a.location !== !!b.location) {
        return a.location ? -1 : 1;
      }

      // 4. Default to newer content using the createdAt field
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  }

  async suggestClipDuration(media: Media): Promise<number> {
    // Placeholder logic for clip duration
    const mediaType = (media as any).mediaType;
    return mediaType === "video" ? 3.0 : 2.5;
  }
}

// Helper function to determine if a media URL is a video
function isVideo(mediaUrl: string): boolean {
  const videoExtensions = [".mp4", ".mov", ".avi", ".webm"];
  return videoExtensions.some((ext) => mediaUrl.toLowerCase().endsWith(ext));
}
