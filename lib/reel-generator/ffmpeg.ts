import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs/promises';

interface ClipConfig {
  inputPath: string;
  startTime: number;
  duration: number;
  effects?: {
    zoom?: boolean;
    transition?: string;
    filter?: string;
  };
}

interface ReelConfig {
  outputPath: string;
  clips: ClipConfig[];
  audio?: {
    path: string;
    volume?: number;
  };
  captions?: {
    text: string;
    timestamp: number;
    duration: number;
  }[];
}

export class ReelGenerator {
  private tempDir: string;

  constructor(tempDir: string = '/tmp/reels') {
    this.tempDir = tempDir;
  }

  async generateReel(config: ReelConfig): Promise<string> {
    await fs.mkdir(this.tempDir, { recursive: true });

    const filterComplex: string[] = [];
    const inputs: string[] = [];

    // Add input clips
    config.clips.forEach((clip, i) => {
      inputs.push('-i', clip.inputPath);
      
      let filter = `[${i}:v]`;
      
      // Apply effects
      if (clip.effects?.zoom) {
        filter += `scale=1920:1080,zoompan=z='min(zoom+0.002,1.2)':d=${clip.duration}:s=1920x1080`;
      } else {
        filter += 'scale=1920:1080';
      }
      
      filter += `[v${i}]`;
      filterComplex.push(filter);
    });

    // Add transitions
    const transitionDuration = 0.5;
    config.clips.forEach((_, i) => {
      if (i < config.clips.length - 1) {
        filterComplex.push(
          `[v${i}][v${i + 1}]xfade=transition=fade:duration=${transitionDuration}:offset=${i * (transitionDuration + 2)}[v${i + 1}]`
        );
      }
    });

    // Add captions
    if (config.captions) {
      config.captions.forEach((caption, i) => {
        filterComplex.push(
          `drawtext=text='${caption.text}':fontsize=48:fontcolor=white:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,${caption.timestamp},${
            caption.timestamp + caption.duration
          })'`
        );
      });
    }

    // Add background music if provided
    if (config.audio) {
      inputs.push('-i', config.audio.path);
      filterComplex.push(
        `[${config.clips.length}:a]volume=${config.audio.volume || 0.3}[a]`
      );
    }

    const ffmpegArgs = [
      '-y',
      ...inputs,
      '-filter_complex',
      filterComplex.join(';'),
      '-c:v',
      'libx264',
      '-preset',
      'medium',
      '-crf',
      '23',
      config.outputPath,
    ];

    return new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', ffmpegArgs);

      ffmpeg.stderr.on('data', (data) => {
        console.log(`ffmpeg: ${data}`);
      });

      ffmpeg.on('close', (code) => {
        if (code === 0) {
          resolve(config.outputPath);
        } else {
          reject(new Error(`FFmpeg process exited with code ${code}`));
        }
      });
    });
  }
}