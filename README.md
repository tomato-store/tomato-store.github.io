# tomato-store.github.io

Fully Automated Plant Cultivation & Harvesting System | KMU UROP Project

Project website for **Tomato Store**, built with Jekyll and served via GitHub Pages.

## Structure

The site is a Jekyll multi-page site — one page per section:

| URL          | Source file      | Section                  |
| ------------ | ---------------- | ------------------------ |
| `/`          | `index.html`     | Home (hero)              |
| `/about/`    | `about.html`     | About the project        |
| `/system/`   | `system.html`    | System architecture      |
| `/tech/`     | `tech.html`      | Tech stack               |
| `/gallery/`  | `gallery.html`   | Gallery & demo           |
| `/resources/`| `resources.html` | Publications & poster    |
| `/team/`     | `team.html`      | Team                     |

- `_layouts/default.html` — shared page shell (head, navbar, footer, scripts).
- `_includes/navbar.html`, `_includes/footer.html` — shared partials.
- `_data/nav.yml` — single source of truth for the navigation menu.
- `assets/` — CSS, JS, images, and documents (`assets/docs/poster.pdf`).

The site is bilingual (English / 한글); the navbar language button swaps all
`data-en` / `data-ko` text in place and remembers the choice in `localStorage`.

## Local development

GitHub Pages builds the site automatically on push to `main`. To preview locally:

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
