export interface TripData {
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  logs: { content: string; timestamp: Date }[];
  media: { caption?: string; location?: string; metadata?: any }[];
}

export class CaptionGenerator {
  private async generatePrompt(tripData: TripData): Promise<string> {
    const locations = new Set(tripData.media
      .map(m => m.location)
      .filter(Boolean));
    
    const logContent = tripData.logs
      .map(log => log.content)
      .join('\n');

    return `Create an engaging Instagram caption for a travel reel about a trip to ${tripData.destination}.

Trip Details:
- Title: ${tripData.title}
- Duration: ${tripData.startDate.toLocaleDateString()} to ${tripData.endDate.toLocaleDateString()}
- Locations visited: ${Array.from(locations).join(', ')}

Traveler's Notes:
${logContent}

Please generate:
1. A captivating main caption (max 200 characters)
2. A longer description with emojis
3. Relevant hashtags (max 15)
4. A short blog-style summary (2-3 paragraphs)`;
  }

  async generateCaption(tripData: TripData): Promise<{
    caption: string;
    description: string;
    hashtags: string[];
    blogContent: string;
  }> {
    // TODO: Replace with actual OpenAI API call
    // This is a placeholder implementation
    return {
      caption: `Adventure of a lifetime in ${tripData.destination} 🌎✨`,
      description: `Exploring the beautiful ${tripData.destination} from ${tripData.startDate.toLocaleDateString()} to ${tripData.endDate.toLocaleDateString()}! 🌅\n\nUnforgettable moments and breathtaking views around every corner. 📸`,
      hashtags: [
        'travel',
        'wanderlust',
        'adventure',
        'explore',
        'travelphotography'
      ],
      blogContent: `Embarking on an unforgettable journey through ${tripData.destination}, we discovered hidden gems and created memories that will last a lifetime. From stunning landscapes to cultural encounters, every moment was filled with wonder and excitement.

Our adventure took us through picturesque locations, each offering its own unique charm and character. The local cuisine, friendly people, and breathtaking views made this trip truly special.`
    };
  }
}