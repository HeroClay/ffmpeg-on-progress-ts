export default function ffmpegOnProgress(onProgress: (progress: number, event: any) => void, durationMs: number): (...args: any[]) => void;
