# tomato-store.github.io

Fully Automated Plant Cultivation & Harvesting System | KMU UROP Project

Project website for **Tomato Store**, built with Jekyll and served via GitHub Pages.

## Structure

The site is a single-page Jekyll site. `index.html` holds every section,
and the navbar links are in-page anchors:

| Anchor      | Section                              |
| ----------- | ------------------------------------ |
| `#hero`     | Hero — title, links (paper, poster)  |
| `#about`    | About the project                    |
| `#system`   | System architecture                  |
| `#tech`     | Tech stack                           |
| `#demo`     | Demo video                           |
| `#team`     | Team                                 |

- `_layouts/default.html` — shared page shell (head, navbar, footer, scripts).
- `_includes/navbar.html`, `_includes/footer.html` — shared partials.
- `_data/nav.yml` — single source of truth for the navigation menu.
- `assets/` — CSS, JS, images, and documents.
  - `assets/docs/poster.pdf` — conference poster (linked from the hero).
  - `assets/docs/kics-paper.pdf` — KICS paper *(add this file)*.
  - `assets/video/demo.mp4` — demo clip shown in the Demo section (1280×720).

The site is bilingual (English / 한글); the navbar language button swaps all
`data-en` / `data-ko` text in place and remembers the choice in `localStorage`.
Both languages render in a single font (Pretendard) so toggling never shifts
the layout. The active nav link tracks the section in view via a scroll-spy in
`assets/js/script.js`.

## Local development

GitHub Pages builds the site automatically on push to `main`. To preview locally:

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
