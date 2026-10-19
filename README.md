# Sahil Gulab Chavan — Portfolio

A personal portfolio website for **Sahil Gulab Chavan**, Data Analyst and Machine Learning enthusiast.
It is built with plain **HTML, CSS and JavaScript**: no frameworks, no build step and no installation.

## Features

- **Bold, modern design:** oversized typography, vivid gradients, a dark theme and an optional light theme that the browser remembers
- **Animated hero:** an interactive neural-network canvas that reacts to the mouse, and a role line that types itself out
- **Skills:** tabbed categories with animated proficiency rings
- **Projects:** category filter and 3D tilt cards. Each card opens a **case-study pop-up** with the problem, approach, results and metrics.
- **Live GitHub repos:** fetched from the GitHub API, with a loading skeleton and a fallback message
- **Journey timeline:** the line fills in as you scroll
- **Certificates gallery:** opens in a full-screen lightbox with keyboard arrow support
- **Testimonials slider:** auto-plays, with previous/next buttons, dots and swipe on phones
- **Contact form:** live validation and toast messages. Sending opens the visitor's email app. Also includes a "copy email" button.
- **Extras:** preloader, scroll-progress bar, custom cursor, magnetic buttons, scroll-reveal animations and a back-to-top button
- **Responsive and accessible:** works on phones, supports keyboard navigation, traps focus inside pop-ups, and respects the "reduce motion" setting

## Folder structure

```
.
├── index.html            # Page layout and static text
├── README.md
└── assets/
    ├── css/style.css     # All styles (colours are CSS variables at the top)
    ├── js/main.js        # All behaviour + editable content (projects, skills, etc.)
    ├── images/           # Favicon, project thumbnails, certificate images, profile photo
    └── resume/           # Put resume.pdf here
```

## Run it locally

- **Easiest:** double-click `index.html` to open it in a browser.
- **Recommended:** open the folder in VS Code and use the **Live Server** extension
  (right-click `index.html` → *Open with Live Server*).

## Customise

Most content is in the **CONTENT** section at the top of `assets/js/main.js`:

| What | Where |
| --- | --- |
| Typing roles | `ROLES` |
| Scrolling tool band | `MARQUEE_ITEMS` |
| Skills and percentages | `SKILLS` |
| Projects (with pop-up details and metrics) | `PROJECTS` |
| Certificates | `CERTIFICATES` (put the images in `assets/images/`) |
| Testimonials | `TESTIMONIALS` |
| GitHub repos section | `GITHUB_USERNAME` (e.g. `"sahilchavan"`) |
| Email used by the contact form | `CONTACT_EMAIL` |

In `index.html`, update:

1. **Profile photo:** add `assets/images/profile.jpg`, then replace
   `<div class="photo-placeholder">SC</div>` with
   `<img src="assets/images/profile.jpg" alt="Sahil Gulab Chavan" />`.
2. **Resume:** add `assets/resume/resume.pdf` so the "Download CV" button works.
3. **Social links:** the GitHub, LinkedIn, Kaggle and email links in the hero.
4. **About text and stats:** the bio paragraphs and the `data-target` numbers.
5. **Journey:** the company, college, dates and bullet points.
6. **Contact details:** email, phone and location.

**Colours:** change `--violet`, `--pink` and `--orange` at the top of `assets/css/style.css`.

> All names, companies, dates, metrics and testimonials are **placeholders**. Replace them with real information before publishing.

## Deploy (free)

- **GitHub Pages:** push this folder to a repository, then go to *Settings → Pages → Deploy from branch* → `main` / root.
- **Netlify:** drag and drop this folder at <https://app.netlify.com/drop>.
- **Vercel:** import the repository. No build settings are needed.

## Tech

HTML5 · CSS3 (Grid, Flexbox, custom properties, `color-mix`) · Vanilla JavaScript (IntersectionObserver, Canvas, Fetch API) · Google Fonts (Space Grotesk, Inter, JetBrains Mono)

---

© Sahil Gulab Chavan
