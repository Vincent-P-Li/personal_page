# Personal Academic Webpage — Vincent Peiling Li

A single-page personal site, designed to drop straight into a GitHub Pages repository.

## Files

- `index.html` — Profile (home): hero, about, current research, talks/writing, funding & recognition
- `research.html` — Past research projects
- `experience.html` — Working experience (RA roles, service)
- `interests.html` — Personal interests
- `contact.html` — Contact, ORCID, LinkedIn, CV
- `styles.css` — shared stylesheet for all pages
- `site.js` — small shared script (smooth scroll, reveal-on-scroll, year)
- `images/` — hero backdrop and portrait
- `cv/Vincent-Li-CV.pdf` — the CV linked from "Download CV". Replace this file when you update your CV; the filename can stay the same so the link never breaks.
- `README.md` — this file

## Deploying on GitHub Pages

1. Create a new public repo, for example `vincentli.github.io` (using `<username>.github.io` makes it your default personal site).
2. Upload the contents of this project to the repo root (so `index.html` is at the top level).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
4. Wait ~1 minute; your site will be live at `https://<username>.github.io`.

## Editing

Everything is plain HTML with inline CSS. To change text, just edit the relevant `<section>` in `index.html`. Common edits:

- **Portrait**: replace the `<div class="portrait">` block with `<img src="me.jpg" alt="Vincent Li" style="width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:4px;" />`.
- **Links (GitHub / Scholar)**: in the Contact section, fill in the `href="#"` placeholders.
- **CV**: drop the latest PDF into `cv/` and keep the filename `Vincent-Li-CV.pdf`.
- **Colours**: tweak the CSS variables at the top of `index.html` (`--bg`, `--clay`, `--sage`, etc.).
