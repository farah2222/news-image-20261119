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

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
