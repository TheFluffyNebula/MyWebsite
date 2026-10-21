# MyWebsite

Personal portfolio for Jason Yin. Static site built with [Eleventy](https://www.11ty.dev/),
hosted on GitHub Pages at <https://thefluffynebula.github.io/MyWebsite/>.

No frameworks, no CDN scripts or fonts, no trackers. One stylesheet, one small theme-toggle
script, everything else is plain HTML generated at build time.

## Preview locally

You need [Node.js](https://nodejs.org/) (18 or newer). Then, in this folder:

```
npm install
npm start
```

Open <http://localhost:8080/MyWebsite/>.

The `/MyWebsite/` part matters — this is a GitHub Pages *project* site, so it is served from a
subpath rather than the domain root. The dev server reproduces that, so what you see locally
matches production.

`npm run build` writes the site to `_site/` without serving it.

## Add a project

**One entry in [`src/_data/projects.json`](src/_data/projects.json).** That single entry produces
the card on the home page and the projects index, and adds the project to the nav menu if it's
featured.

```json
{
  "slug": "MyProject",
  "title": "My Project",
  "summary": "One line explaining what it is.",
  "date": "March 2026",
  "sort": "2026-03",
  "group": "featured",
  "tags": ["React", "Postgres"],
  "thumb": "/Images/MyProject/cover.jpg",
  "thumb_alt": "Describe what the picture actually shows.",
  "status": "In progress",
  "live_url": "",
  "repo_url": "https://github.com/TheFluffyNebula/my-project",
  "video_url": "",
  "devpost_url": ""
}
```

| Field | What it does |
| --- | --- |
| `slug` | Identifier. The page lives at `/Projects/<slug>.html`. |
| `sort` | Sort key, `YYYY-MM`, never displayed. Orders the **More projects** and **Earlier work** sections, newest first. |
| `group` | `featured` (home page + nav), `more`, or `earlier` (the "Earlier work" section). |

**Ordering.** `more` and `earlier` sort themselves by `sort`, newest first. **`featured` does not** — it appears in the order the entries sit in `projects.json`, so the lead card is a deliberate choice rather than whichever project is newest. Move an entry up or down in the file to reorder it; the home page, the projects index and the nav dropdown all read that same order.

| `thumb` / `thumb_alt` | Card image and its alt text. Leave `thumb` empty for a placeholder tile. |
| `status` | Optional pill next to the date, e.g. a placing or "In progress". |
| `live_url`, `repo_url`, `video_url`, `devpost_url` | **Optional.** A button appears only for the ones you fill in. Leave the rest as `""`. |

That's enough for the cards. To give the project a write-up page too, add
`src/projects/<slug>.md`:

```markdown
---
layout: project.njk
slug: MyProject
permalink: /Projects/MyProject.html
title: My Project
description: One sentence, used for search results and link previews.
last_updated: 2026-03-14
---

Your write-up here.
```

The title, date, tags, status and link buttons at the top of the page are read from
`projects.json` — don't repeat them in the markdown.

### Optional front matter

- `standing` — renders a "Where this stands now" box above the write-up. Useful on long journal
  pages whose older entries have been overtaken.
- `last_updated` — shown in the footer. Bump it when you edit the page.

### Images

Put them in `Images/<Project>/`. Reference them with the `url` filter so the subpath is applied:

```html
<img src="{{ '/Images/MyProject/cover.jpg' | url }}" alt="What the picture shows." loading="lazy">
```

Wrap several in `<ul class="shots">…</ul>` for a responsive grid.

Before adding an image: strip EXIF and location metadata, and check whether anyone identifiable
appears in it.

## Add a note

Same idea: an entry in [`src/_data/notes.json`](src/_data/notes.json), plus
`src/notes/<name>.md` with a matching `permalink` if the note needs its own page.

## Site-wide settings

[`src/_data/site.json`](src/_data/site.json) holds your name, the one-line pitch, the publication
line, and the resume / GitHub / LinkedIn / email links. A link left as `""` renders a visible
dashed TODO placeholder on the home page instead of a dead button.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and publishes it.

**One-time setup:** in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
Until that's changed from "Deploy from a branch", the workflow will build but nothing will
publish.

## Old URLs

Every page that existed before the rewrite still resolves:

- `/Projects/*.html` are generated at exactly their original paths.
- `/Navigation/Projects.html`, `/Navigation/Websites.html` and `/Navigation/Ongoing.html` are
  meta-refresh stubs pointing at `/Projects/`, defined in
  [`src/_data/redirects.json`](src/_data/redirects.json). GitHub Pages can't issue real 301s.

If you ever rename a page, add its old path to `redirects.json` rather than letting the URL break
— these are linked from the resume, Devpost and LinkedIn.
