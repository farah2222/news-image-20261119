// news-image-20261119 — the world's news of Thursday 19 November 2026,
// summed up in one image.
//
// The image is entry.png beside this file: a 1024x1024 PNG drawn in code
// (PIL + DejaVu), a newspaper front page with six stories from six
// regions. This program just carries it to the output directory —
// it needs no network and writes the same bytes on every run.
//
// Outside the grader:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const bytes = readFileSync(join(here, 'entry.png'));
// The gate only takes a whole PNG or JPEG, so check the magic bytes
// first and fail loudly instead of copying a corrupt file to /output.
const isPng = bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50
  && bytes[2] === 0x4e && bytes[3] === 0x47 && bytes[4] === 0x0d
  && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a;
const isJpeg = bytes.length >= 3 && bytes[0] === 0xff
  && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) throw new Error('entry.png is neither a PNG nor a JPEG');
writeFileSync(join(outDir, 'entry.png'), bytes);
