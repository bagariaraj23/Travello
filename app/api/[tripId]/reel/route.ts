import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ReelGenerator } from "@/lib/reel-generator/ffmpeg";
import {
  CaptionGenerator,
  TripData,
} from "@/lib/reel-generator/caption-generator";

export async function POST(
  req: Request,
  { params }: { params: { tripId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const trip = await prisma.trip.findUnique({
      where: { id: params.tripId },
      include: {
        media: true,
        logs: true,
      },
    });

    if (!trip) {
      return new NextResponse("Trip not found", { status: 404 });
    }

    // Get default template
    const template = await prisma.reelTemplate.findFirst({
      where: { style: "minimal" },
    });

    if (!template) {
      return new NextResponse("No template found", { status: 404 });
    }

    // Create reel record
    const reel = await prisma.reel.create({
      data: {
        tripId: trip.id,
        userId: trip.userId,
        templateId: template.id,
        status: "processing",
      },
    });

    // Generate captions
    const tripData: TripData = {
      title: trip.title,
      destination: trip.destination,
      startDate: trip.startDate!,
      endDate: trip.endDate!,
      description: trip.description || "",
      logs: trip.logs,
      media: trip.media.map((media) => ({
        caption: media.caption || "",
        location: media.location || "",
        metadata: media.metadata || "",
      }
      )),
    };

    const captionGenerator = new CaptionGenerator();
    const captions = await captionGenerator.generateCaption(tripData);

    // Update reel with generated content
    await prisma.reel.update({
      where: { id: reel.id },
      data: {
        caption: captions.caption,
        blogContent: captions.blogContent,
        hashtags: captions.hashtags.join(","),
      },
    });

    // Start reel generation (this would typically be handled by a background job)
    const reelGenerator = new ReelGenerator();
    const outputPath = `/tmp/reels/${reel.id}.mp4`;

    const clips = trip.media.map((media: any, index: any) => ({
      inputPath: media.mediaUrl,
      startTime: index * 3, // 3 seconds per clip
      duration: 3,
      effects: {
        zoom: index % 2 === 0, // Alternate zoom effect
      },
    }));

    await reelGenerator.generateReel({
      outputPath,
      clips,
      captions: [
        {
          text: trip.title,
          timestamp: 0,
          duration: 3,
        },
      ],
    });

    // Update reel with output URL
    await prisma.reel.update({
      where: { id: reel.id },
      data: {
        status: "completed",
        outputUrl: outputPath,
      },
    });

    return NextResponse.json(reel);
  } catch (error) {
    console.error("[REEL_GENERATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { tripId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const reel = await prisma.reel.findFirst({
      where: { tripId: params.tripId },
      orderBy: { createdAt: "desc" },
    });

    if (!reel) {
      return new NextResponse("Reel not found", { status: 404 });
    }

    return NextResponse.json(reel);
  } catch (error) {
    console.error("[REEL_GET_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
