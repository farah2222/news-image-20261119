[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/farah2222/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/farah2222/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World in One Day — 19 November 2026

One image summing up the world's news of Thursday 19 November 2026, built for the [make.fun "Sum up 19 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261119) ($250 in prizes, free to enter).

The image is a newspaper front page: the date across the top, then six stories from six regions, each with a pictogram, a region tag, a headline and one short caption:

| Story | Region / field |
| --- | --- |
| Grand Theft Auto VI rolls out worldwide, unlocking at midnight in each market | Global · culture |
| Trump, Xi and Putin hold a first-ever three-way summit at APEC in Shenzhen | Asia · diplomacy |
| Cyclone Akvan nears India's coast; red alerts and school closures | India · disaster |
| Pew projects Islam will be the world's largest faith by 2035 | Global · society |
| NASA confirms Voyager 1 is one light-day from Earth | Space · science |
| US senators warn AI-enabled cyberattacks are outpacing American defenses | United States · security |

The image is drawn in code (PIL + DejaVu) so every letter stays crisp at any size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory as `entry.png`. It needs no network and writes the same bytes on every run.
