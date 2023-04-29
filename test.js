import ffmpeg from 'fluent-ffmpeg'
import ffmpegOnProgress from './index.js'

const logProgress = (progress, event) => {
  // progress is a floating point number from 0 to 1
  console.log('progress', (progress * 100).toFixed())
}

// estimated duration of output in milliseconds
const durationEstimate = 4000

const cmd = ffmpeg('media/1.mp4')
  .output('media/output.mp4')
  .on('progress', ffmpegOnProgress(logProgress, durationEstimate))
  .run()
