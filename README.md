# Sahil Gulab Chavan — Portfolio (v3)

Personal portfolio of **Sahil Gulab Chavan**: Data Scientist Intern and B.Tech AI & ML student at Dilkap Research Institute.
It is built with plain **HTML, CSS and JavaScript**: no frameworks, no build step and nothing to install.

## What's new in v3

- **Anti-scraping protection** for the resume, email and images. Details are in the [Privacy & anti-scraping](#privacy--anti-scraping) section below.
- **Real certificates:**
  - each one links to its official verification page (Forage/Deloitte, Scaler, Credly, Kaggle)
  - the Scaler certificate and the Google badge open full screen on click
- The "Certifications earned" number updates automatically from the certificate list.
- A profile photo can now be set with one constant (`PROFILE_PHOTO`).

## Folder structure

```
.
├── index.html            # Page layout and static text
├── README.md
├── robots.txt            # Tells search engines / AI crawlers what to stay out of
└── assets/
    ├── css/style.css     # All styles (colours are CSS variables at the top)
    ├── js/main.js        # All behaviour + editable content (CONTENT section at the top)
    ├── images/           # Favicon, project thumbnails
    │   └── certs/        # Certificate images (random file names on purpose)
    └── resume/           # Your phone-free resume goes here (see below)
```

Private files are kept **outside** this folder in `Website/private/` so they can never be deployed by accident:
- `Sahil_Chavan_Resume_Harvard.pdf`: the original resume, which includes your phone number
- `certificates.txt`: your list of certificate links

## ⚠️ Before you deploy: add the phone-free resume

The site deliberately ships **without** a resume file. Export your resume without the phone number and save it as:

```
assets/resume/301b49834b7ae9774455.pdf
```

The odd name is on purpose: it makes the URL impossible to guess. Visitors still download it as `Sahil_Chavan_Resume.pdf`.
Until the file is there, the download dialog says the resume isn't available and points to LinkedIn and email.

## Check it locally

The resume download uses `fetch()`, which browsers block on `file://`. So test it over a local server:

- **VS Code:** right-click `index.html` and choose **Open with Live Server**, or
- **Terminal** (from this folder): `python -m http.server 8000`, then open <http://localhost:8000>.

Things to check:
- **Download Resume:** a "Quick check" dialog opens. Press and hold the button until it fills, and the resume downloads. Try it with the keyboard too: Tab to the button, then hold Space.
- **Email:** it appears in the hero icon and the contact card, and the copy button works.
- **Certificates:** "View certificate" opens the image full screen; "Verify ↗" / "View certificate ↗" opens the issuer's page.
- **Projects and repos:** the project pop-ups and the featured repos still work, and dark and light mode both look right.
- **Phone width:** the ☰ menu works and nothing scrolls sideways.

## Privacy & anti-scraping

| What | How it's protected |
| --- | --- |
| **Resume** | No link to the file anywhere in the HTML. It downloads only after a human presses and holds a button for 1.2 s. The download is refused if the click was synthetic (`isTrusted`), came within 2 s of the page loading, or a hidden "honeypot" field was filled (bots fill every field). The file path is built in JavaScript at click time, and the file name is random. |
| **Email** | Not written anywhere in the HTML. `main.js` stores it as two parts (`EMAIL_PARTS`) with no `@`, and joins them when the page runs. Email-harvesting bots look for `name@domain` patterns and find nothing. |
| **Certificate images** | Not in the page at all until a visitor clicks "View certificate". Stored with random file names. |
| **All images** | `noimageindex, noarchive` keeps them out of Google Images and cached copies. `robots.txt` asks crawlers to skip `/assets/resume/` and `/assets/images/`, and blocks AI-training crawlers completely. Right-click save and dragging are disabled on images (cosmetic). |

**Honest limits:**
- These measures stop generic scrapers, email harvesters, search engines and AI crawlers, which covers nearly all automated traffic.
- A person, or a bot written specifically for your site that drives a real browser, can still get anything a visitor can see. That is true of every public website without a login.
- `robots.txt` only works when the site is at the root of a domain (e.g. `something.netlify.app/robots.txt`). On a GitHub *project* page (`sahiiil-c.github.io/portfolio/`) crawlers won't read it. The meta tag and the other protections still apply.
- **GitHub Pages caveat:**
  - GitHub Pages serves the site from a **public repository**, so anyone can browse `assets/resume/` and `assets/images/certs/` on github.com, and GitHub itself gets scraped.
  - If that matters to you, deploy with **Netlify Drop** (below), where there is no public repo.
  - Or keep the resume out of the repo and only add it on Netlify.

## Customise

Everything in this table is at the top of `assets/js/main.js`:

| What | Constant |
| --- | --- |
| Featured GitHub repos (which ones + order + optional custom description) | `FEATURED_REPOS` |
| GitHub username | `GITHUB_USERNAME` |
| Email (two parts: before and after the @) | `EMAIL_PARTS` |
| Resume file name (without `.pdf`) / name visitors get | `RESUME_KEY` / `RESUME_DOWNLOAD_NAME` |
| Profile photo | `PROFILE_PHOTO` (e.g. `"assets/images/profile.jpg"`) |
| Typing roles in the hero | `ROLES` |
| Scrolling skills band | `MARQUEE_ITEMS` |
| Skill tabs and cards | `SKILLS` |
| Projects (cards + pop-up case studies) | `PROJECTS` (set `demo` to a live Streamlit URL to show a "Live demo" button) |
| Certificates | `CERTIFICATES` |

### Certificates

```js
{ title: "Pandas", issuer: "Kaggle", status: "Completed",
  url: "https://www.kaggle.com/learn/certification/sahiiilc/pandas",   // official verification page
  image: "" }                                                         // optional image
```

- `url` is shown as **"Verify ↗"**, or as **"View certificate ↗"** when there is no image.
- `image` adds a **"View certificate"** button that opens it full screen.
- **To add an image:**
  - Kaggle pages are behind a CAPTCHA, so take a screenshot of the certificate yourself.
  - Save it in `assets/images/certs/` with a random name, e.g. `a8f3c19e2d.png`.
  - Set `image: "assets/images/certs/a8f3c19e2d.png"`.
- Set `status: "In progress"` for unfinished courses. They show an orange badge and aren't counted in the "Certifications earned" stat.

### Feature a different GitHub repo

```js
const FEATURED_REPOS = [
  { name: "Firebase-Manager", description: "Optional text shown instead of GitHub's description" },
  { name: "Streamlit-apps" },   // no description → GitHub's description is used
];
```

The repo `name` must match the name on GitHub (case doesn't matter). The site makes **one** GitHub API request per visit.

## Deploy (when you're ready)

**Netlify Drop (recommended for privacy):** drag this folder onto <https://app.netlify.com/drop>.
There is no public repo, and `robots.txt` works because the site sits at the root of its domain.

**GitHub Pages:** use your existing `sahiiil-c/portfolio` repo. Read the GitHub Pages caveat above first.
1. Replace the repo's files with the contents of this folder.
2. Commit and push:
   ```bash
   git add -A
   git commit -m "Portfolio v3"
   git push
   ```
3. In the repo, go to **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`.
   The site will be live at `https://sahiiil-c.github.io/portfolio/`.

All asset paths are relative, so the site works from a sub-path like `/portfolio/` without changes.

## Tech

HTML5 · CSS3 (Grid, Flexbox, custom properties) · Vanilla JavaScript (IntersectionObserver, Canvas, Fetch API / GitHub REST API, Pointer Events) · Google Fonts (Space Grotesk, Inter, JetBrains Mono)

---

© Sahil Gulab Chavan
