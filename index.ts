'use strict'

import { toMs } from 'hh-mm-ss';

export type ProgressFunction = (progress: number, event: any) => void;
export default function ffmpegOnProgress(onProgress: ProgressFunction, durationMs: number): (...args: any[]) => void {
  return (event) => {
    let progress = 0

    try {
      const timestamp = toMs(event.timemark)
      progress = timestamp / durationMs
    } catch (err) { }

    if (isNaN(progress) && !isNaN(event.percent)) {
      progress = event.percent / 100
    }

    if (!isNaN(progress)) {
      progress = Math.max(0, Math.min(1, progress))
      onProgress(progress, event)
    }
  }
}
