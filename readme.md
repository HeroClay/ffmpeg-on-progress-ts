# ffmpeg-on-progress

> Utility for robustly reporting ffmpeg command progress with fluent-ffmpeg.

Some ffmpeg commands aren't capable fo producing [progress](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#progress-transcoding-progress-information) events, such as when the input is a stream or when using multiple inputs. This simple utility allows you to accurately report progress in these cases by looking at the number of frames ffmpeg has processed with the caveat that you need to know the expected output's duration ahead of time.

In cases where [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) produces a valid progress event, this module is a noop.

## Install

```bash
npm install --save ffmpeg-on-progress-ts
# or
yarn add ffmpeg-on-progress-ts
```

## Usage

```ts
import ffmpeg from 'fluent-ffmpeg'
import ffmpegOnProgress from 'ffmpeg-on-progress-ts'
import type { ProgressFunction } from 'ffmpeg-on-progress-ts'

const logProgress: ProgressFunction = (progress, event) => {
  // progress is a floating point number from 0 to 1
  console.log('progress', (progress * 100).toFixed())
}

// estimated duration of output in milliseconds
const durationEstimate = 4000

const cmd = ffmpeg('input.avi')
  .output('output.mp4')
  .on('progress', ffmpegOnProgress(logProgress, durationEstimate))
  .run()
```

## Related

- [ffmpeg-on-progress](https://github.com/transitive-bullshit/ffmpeg-on-progress) - The JS version
- [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
- [awesome-ffmpeg](https://github.com/transitive-bullshit/awesome-ffmpeg) - A curated list of awesome ffmpeg resources with a focus on JavaScript.
