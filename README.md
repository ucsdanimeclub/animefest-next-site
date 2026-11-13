# Animefest website archive

This branch only holds the past Animefest websites. Each one lives in a
folder named after its year and is meant to be served at
`animefest.ameatucsd.org/<year>/`. It has no history in common with `main`.

| Year | Source | Version used |
|------|--------|--------------|
| 2016 | [ucsdanimeclub/animefest](https://github.com/ucsdanimeclub/animefest) | `459ed69` (event day, Feb 20 2016) |
| 2017 | ucsdanimeclub/animefest | `63f40c0` (Feb 11 2017) |
| 2018 | ucsdanimeclub/animefest | `da0901b` ("Added post con link", Feb 13 2018) |
| 2019 | ucsdanimeclub/animefest | `e66de4a` (Feb 10 2019, last commit before 2020 prep) |
| 2020 | ucsdanimeclub/animefest | `69f7ac7` (Feb 15 2020; later commits only change CNAME) |
| 2022 | this repo (`main`) | `6c5c9a3` (Aug 2022, last version before 2023 work) |
| 2023 | this repo | `ac535bc` (Mar 2023) |
| 2024 | this repo | `6e0c994` (Feb 2024) |
| 2025 | this repo | `a866a14` (event day, Feb 15 2025) |
| 2026 | this repo | `61b8e1c` (event day, Feb 14 2026) |

There was no Animefest in 2021, and the 2015 website wasn't found in either repo.

## How each year was made

**2016–2020** are plain HTML. They were copied unchanged from the old repo,
with two exceptions:
- In 2017–2020, the navbar's "Animefest" logo linked to the old domain
  `http://animefest.ucsd.moe`. It now links to that year's own `index.html`.
- In 2019 and 2020, the favicon paths (`/images/ico/...`) now start with the
  year folder.

**2022–2026** are Next.js sites. Each was rebuilt from the source commit
listed above with only `next.config.js` changed:
`basePath: '/<year>'` and `assetPrefix: '/<year>'`. They were then exported
with `next build && next export`. Each rebuild was compared with that
year's original deploy on `gh-pages`: every image and asset is
byte-for-byte identical, and every page has the same visible text.

The 2026 home page says "Animefest 2026 has begun!" where the original
showed a countdown, because the countdown is filled in at build time. The
live 2026 site said the same once its page script ran.

Problems that were already in the original sites and were left as they
were:
- 2016: unused Bootstrap demo pages, favicons and lightbox images that
  were never committed.
- 2020: three exhibitor social links written without `https://`.

## Adding a year

Rebuild that year's source commit with `basePath`/`assetPrefix` set to
`/<year>`, export it, and commit the `out/` folder here as `<year>/`.
