import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export interface ReelMetrics {
  id: string;
  duration: number;
  clipCount: number;
  transitionTypes: string[];
  captionStyle: string;
  musicStyle: string;
  engagement: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
}

export class DataCollector {
  private dataDir: string;

  constructor(dataDir: string = "./data/training") {
    this.dataDir = dataDir;
  }

  async collectReelMetrics(): Promise<ReelMetrics[]> {
    const reels = await prisma.reel.findMany({
      include: {
        clips: true,
        template: true,
      },
    });

    const metrics: ReelMetrics[] = reels.map((reel:any) => ({
      id: reel.id,
      duration: reel.duration || 0,
      clipCount: reel.clips.length,
      transitionTypes: ["fade", "zoom"], // Example transitions
      captionStyle: "minimal",
      musicStyle: "upbeat",
      engagement: {
        views: 0, // To be implemented with analytics
        likes: 0,
        shares: 0,
        comments: 0,
      },
    }));

    await this.saveMetrics(metrics);
    return metrics;
  }

  private async saveMetrics(metrics: ReelMetrics[]) {
    const filePath = path.join(this.dataDir, "reel_metrics.json");
    await writeFile(filePath, JSON.stringify(metrics, null, 2));
  }
}