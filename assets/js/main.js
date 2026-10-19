/* =========================================================
   Sahil Gulab Chavan — Portfolio v3 scripts
   Edit the CONTENT section to update the site. No build step needed.
   ========================================================= */

/* ---------------------- CONTENT ---------------------- */

const GITHUB_USERNAME = "sahiiil-c";

// Repos shown in "Featured repositories", in this order. Only these are shown.
// `name` must match the repo name on GitHub (case doesn't matter).
// `description` is optional; when set it is shown instead of GitHub's description.
const FEATURED_REPOS = [
  {
    name: "Firebase-Manager",
    description: "Multi-role Firestore admin panel in Streamlit with Google OAuth 2.0, role-based access and full CRUD down to nested subcollections.",
  },
  {
    name: "AI-Face-Attendance-System-Streamlit",
    description: "Real-time OpenCV/LBPH face recognition that logs attendance automatically, with a live Streamlit dashboard.",
  },
  {
    name: "Building-energy-anomaly-detection-ml",
    description: "Isolation Forest, LOF and Elliptic Envelope on two years of hourly electricity data from 1,578 commercial buildings.",
  },
  {
    name: "Evoastra-ventures-Data-scraping",
    description: "Python data-scraping work from my Data Scientist internship at Evoastra Ventures.",
  },
];

// Email is stored in two parts so email-harvesting bots can't find it in the source.
const EMAIL_PARTS = ["chavansahil2300", "gmail.com"];

// Resume: save the PDF as assets/resume/<RESUME_KEY>.pdf (see README). It is only
// downloadable through the "Quick check" dialog, never linked directly from the page.
const RESUME_KEY = "301b49834b7ae9774455";
const RESUME_DOWNLOAD_NAME = "Sahil_Chavan_Resume";

// Profile photo, e.g. "assets/images/profile.jpg". Leave "" to show the SC monogram.
const PROFILE_PHOTO = "";

const ROLES = ["Data Scientist Intern", "AI & ML Engineer", "Python Developer", "Data Analyst"];

const MARQUEE_ITEMS = ["Python", "Pandas", "Scikit-learn", "EDA", "Feature Engineering", "OpenCV", "Streamlit", "SQL", "Firebase", "NumPy", "Jupyter", "Git"];

const SKILLS = {
  "Languages": [
    { name: "Python", note: "Pipelines, ML models and full-stack apps" },
    { name: "SQL", note: "Querying and shaping structured data" },
    { name: "HTML & CSS", note: "Web front-ends, including this site" },
  ],
  "Data & ML": [
    { name: "Pandas", note: "Cleaning, imputation and feature engineering" },
    { name: "NumPy", note: "Numerical computing" },
    { name: "Scikit-learn", note: "Supervised models, anomaly detection, CV" },
    { name: "OpenCV", note: "Real-time face detection & recognition" },
  ],
  "Apps & Tools": [
    { name: "Streamlit", note: "Interactive dashboards and deployed apps" },
    { name: "Firebase / Firestore", note: "NoSQL data, OAuth 2.0, role-based access" },
    { name: "Jupyter", note: "Reproducible, modular experiment workflows" },
    { name: "Git", note: "Version control and open-source on GitHub" },
  ],
  "Core": [
    { name: "Data Cleaning & EDA", note: "Univariate, bivariate and correlation analysis" },
    { name: "Feature Engineering", note: "Temporal, lag and rolling-window features" },
    { name: "Supervised ML", note: "Training with cross-validation & feature selection" },
    { name: "Model Evaluation", note: "Comparing models to pick what performs" },
    { name: "Statistical Analysis", note: "Turning numbers into actionable insight" },
    { name: "Role-Based Access Control", note: "Secure multi-role applications" },
  ],
};

const PROJECTS = [
  {
    title: "AI Face Recognition Attendance System",
    category: "Computer Vision",
    image: "assets/images/project-face-attendance.svg",
    summary: "Real-time face recognition that logs attendance automatically, with a live Streamlit dashboard.",
    problem: "Taking attendance by hand is slow and needs manual data entry for every person, every session.",
    approach: "Built a real-time face detection and recognition pipeline with OpenCV and the LBPH face recognizer, and wrapped it in an interactive Streamlit dashboard.",
    results: "Attendance is logged automatically with no manual data entry, and the dashboard gives live attendance monitoring plus access to historical records.",
    metrics: [{ value: "Real‑time", label: "Detection & recognition" }, { value: "LBPH", label: "Face recognizer" }, { value: "Live", label: "Streamlit dashboard" }],
    tags: ["Python", "OpenCV", "LBPH", "Streamlit"],
    github: "https://github.com/sahiiil-c/AI-Face-Attendance-System-Streamlit",
    demo: "",
  },
  {
    title: "Firebase Database Manager",
    category: "Full‑stack",
    image: "assets/images/project-firebase-manager.svg",
    summary: "A multi-role admin panel to manage Firestore data safely, with Google OAuth 2.0 and role-based access.",
    problem: "Managing Firestore collections, documents and nested subcollections directly is error-prone, and different users (Admins and Clients) need different levels of access.",
    approach: "Architected a full-stack Streamlit + Firestore web app with Google OAuth 2.0 sign-in and role-based access control. Implemented full CRUD across collections, documents and nested subcollections with type-safe casting for strings, ints, floats, booleans and lists. Used Firestore ArrayUnion/ArrayRemove for safe list edits and session-state handling to block duplicate form submissions.",
    results: "A safe admin tool that prevents accidental overwrites and duplicate submissions, fully documented and open-sourced on GitHub under the MIT License.",
    metrics: [{ value: "2", label: "User roles (Admin / Client)" }, { value: "Full CRUD", label: "Down to subcollections" }, { value: "OAuth 2.0", label: "Google sign-in" }, { value: "MIT", label: "Open source" }],
    tags: ["Python", "Streamlit", "Firestore", "OAuth 2.0", "RBAC"],
    github: "https://github.com/sahiiil-c/Firebase-Manager",
    demo: "",
  },
  {
    title: "Building Energy Anomaly Detection",
    category: "Machine Learning",
    image: "assets/images/project-energy-anomaly.svg",
    summary: "Group project at Evoastra Ventures: finding unusual electricity use across 1,578 commercial buildings.",
    problem: "Spot abnormal electricity consumption in two years (2016–2017) of hourly data from 1,578 commercial buildings in the Building Data Genome Project 2 dataset.",
    approach: "Cleaned and forward-filled 1,312,095 missing values while keeping the time series continuous. Engineered temporal features (hour of day, day of week, weekend flag, 1-hour and 24-hour lags, 24-hour rolling mean and std). Built and compared three unsupervised models (Isolation Forest, Local Outlier Factor and Elliptic Envelope) at 1% contamination.",
    results: "Isolation Forest flagged 175 anomalies, giving a clear shortlist of unusual consumption events to investigate.",
    metrics: [{ value: "1,578", label: "Buildings" }, { value: "17,544", label: "Hourly timestamps" }, { value: "1.31M", label: "Missing values filled" }, { value: "175", label: "Anomalies flagged" }],
    tags: ["Python", "Pandas", "Scikit-learn", "Isolation Forest", "Time Series"],
    github: "https://github.com/sahiiil-c/Building-energy-anomaly-detection-ml",
    demo: "",
  },
];

// `url` = official credential / verification page (opens in a new tab).
// `image` = certificate image in assets/images/certs/ — it is loaded only when a visitor
// clicks "View certificate", so scrapers reading the page never see it.
const CERTIFICATES = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    status: "Completed",
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68da1684b544efd2ccb3b7de_1759129562114_completion_certificate.pdf",
    image: "assets/images/certs/delloite.png",
  },
  {
    title: "Designing Scalable RAG Pipelines",
    issuer: "Scaler Masterclass",
    status: "Completed",
    url: "https://moonshot.scaler.com/s/sl/BY7aSQ6vSh",
    image: "assets/images/certs/59fbbef8943bbb42.png",
  },
  {
    title: "Google AI for App Building",
    issuer: "Google · Coursera",
    status: "Completed",
    url: "https://www.credly.com/badges/6cb13941-a173-48c6-b295-848f06a1f0b9",
    image: "assets/images/certs/1789917594839.jpg",
  },
  { title: "Pandas", issuer: "Kaggle", status: "Completed", url: "https://www.kaggle.com/learn/certification/sahiiilc/pandas", image: "assets/images/certs/pandas.jpg" },
  { title: "Python", issuer: "Kaggle", status: "Completed", url: "https://www.kaggle.com/learn/certification/sahiiilc/python", image: "assets/images/certs/python.jpg" },
  { title: "Python Bootcamp", issuer: "Udemy", status: "Completed", url: "", image: "" },
];

/* ---------------------- HELPERS ---------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => child && node.append(child));
  return node;
}

function svgIcon(paths) {
  const span = el("span", { "aria-hidden": "true" });
  span.innerHTML = `<svg viewBox="0 0 24 24">${paths}</svg>`; // static markup only
  return span.firstChild;
}
const REPO_ICON = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16v-4"/>';

let toastTimer;
function toast(message, isError = false) {
  const box = $("#toast");
  box.textContent = message;
  box.classList.toggle("error", isError);
  box.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove("show"), 3500);
}

// Keeps Tab focus inside an open dialog.
function trapFocus(container, event) {
  if (event.key !== "Tab") return;
  const focusable = $$("button, a[href], input, textarea, [tabindex]:not([tabindex='-1'])", container)
    .filter((node) => !node.hidden && node.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { last.focus(); event.preventDefault(); }
  else if (!event.shiftKey && document.activeElement === last) { first.focus(); event.preventDefault(); }
}

/* ---------------------- PRELOADER ---------------------- */

function initPreloader() {
  const finish = () => {
    $("#preloader").classList.add("done");
    document.body.classList.add("loaded");
  };
  if (document.readyState === "complete") setTimeout(finish, 300);
  else window.addEventListener("load", () => setTimeout(finish, 300));
  setTimeout(finish, 3000); // never block the page if a font/image is slow
}

/* ---------------------- THEME ---------------------- */

function initTheme() {
  const root = document.documentElement;
  const button = $("#themeToggle");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  const apply = (theme) => {
    root.setAttribute("data-theme", theme);
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    $('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0b0b12" : "#faf8f5");
  };
  apply(saved || (prefersLight ? "light" : "dark"));

  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

/* ---------------------- NAV, PROGRESS, TO-TOP ---------------------- */

function initNav() {
  const navbar = $("#navbar");
  const links = $("#navLinks");
  const menuBtn = $("#menuBtn");
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");

  const setMenu = (open) => {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  $$("a", links).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    navbar.classList.toggle("scrolled", y > 30);
    toTop.classList.toggle("show", y > 700);
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  // Highlight the link of the section currently in view.
  const navMap = new Map($$("a", links).map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$("a", links).forEach((a) => a.classList.remove("active"));
      const id = entry.target.id === "github" ? "projects" : entry.target.id;
      navMap.get(id)?.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((section) => spy.observe(section));
}

/* ---------------------- CUSTOM CURSOR & MAGNETIC BUTTONS ---------------------- */

function initCursor() {
  if (!finePointer || reduceMotion) return;
  const dot = $("#cursorDot");
  const ring = $("#cursorRing");
  let x = 0, y = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    document.body.classList.add("has-cursor");
  });
  document.addEventListener("mouseleave", () => document.body.classList.remove("has-cursor"));

  (function follow() {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();

  document.addEventListener("mouseover", (e) => {
    ring.classList.toggle("hover", !!e.target.closest("a, button, .project-card, .cert-card"));
  });

  $$(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => (btn.style.transform = ""));
  });
}

/* ---------------------- HERO NEURAL-NETWORK CANVAS ---------------------- */

function initHeroCanvas() {
  const canvas = $("#heroCanvas");
  const ctx = canvas.getContext("2d");
  const hero = $("#home");
  const mouse = { x: -9999, y: -9999 };
  let nodes = [];
  let width = 0, height = 0, running = false, frame;

  const colors = ["124,58,237", "236,72,153", "245,158,11"];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((width * height) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.2,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    if (!running) draw(); // draw a still frame for reduced motion / paused state
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const linkDist = 130;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (running) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;
        // gentle push away from the mouse
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 && md > 0) { a.x += (mdx / md) * 1.2; a.y += (mdy / md) * 1.2; }
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < linkDist) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / linkDist) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${a.c},0.9)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (running) frame = requestAnimationFrame(draw);
  }

  hero.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });

  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); });
  resize();

  if (reduceMotion) return;
  // Only animate while the hero is on screen.
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !running) { running = true; draw(); }
    else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(frame); }
  }).observe(hero);
}

/* ---------------------- TYPING ---------------------- */

function initTyping() {
  const target = $("#typed");
  if (reduceMotion) { target.textContent = ROLES[0]; return; }
  let role = 0, chars = 0, deleting = false;
  (function tick() {
    const word = ROLES[role];
    target.textContent = word.slice(0, chars);
    let delay = deleting ? 45 : 95;
    if (!deleting && chars === word.length) { deleting = true; delay = 1600; }
    else if (deleting && chars === 0) { deleting = false; role = (role + 1) % ROLES.length; delay = 350; }
    else chars += deleting ? -1 : 1;
    setTimeout(tick, delay);
  })();
}

/* ---------------------- MARQUEE ---------------------- */

function initMarquee() {
  const track = $("#marqueeTrack");
  // Two copies so the -50% translate loops seamlessly.
  [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].forEach((item) => track.append(el("span", { text: item })));
}

/* ---------------------- REVEAL & COUNTERS ---------------------- */

// <span class="stat-num" data-target="1.3" data-decimals="1" data-suffix="M">
function animateCount(node) {
  const target = Number(node.dataset.target);
  const decimals = Number(node.dataset.decimals || 0);
  const suffix = el("span", { class: "suffix", text: node.dataset.suffix || "" });
  const render = (value) => {
    node.textContent = value.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    node.append(suffix);
  };
  if (reduceMotion) { render(target); return; }
  const start = performance.now();
  const duration = 1600;
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    render(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    $$(".stat-num", entry.target).forEach(animateCount);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

function observeReveals(root = document) {
  $$(".reveal:not(.visible)", root).forEach((node) => revealObserver.observe(node));
}

/* ---------------------- SKILLS (tabs + cards) ---------------------- */

function initSkills() {
  const tabs = $("#skillTabs");
  const grid = $("#skillsGrid");
  const groups = Object.keys(SKILLS);

  const initials = (name) => name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  function show(group) {
    $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.group === group)));
    grid.replaceChildren(...SKILLS[group].map((skill, i) =>
      el("div", { class: "skill-card", style: `animation-delay:${i * 60}ms` }, [
        el("span", { class: "skill-icon", "aria-hidden": "true", text: initials(skill.name) }),
        el("h3", { text: skill.name }),
        el("p", { text: skill.note }),
      ])));
  }

  groups.forEach((group, i) => {
    const tab = el("button", { class: "tab", role: "tab", type: "button", text: group, "aria-selected": String(i === 0) });
    tab.dataset.group = group;
    tab.addEventListener("click", () => show(group));
    tabs.append(tab);
  });

  // Animate the first group in when the section scrolls into view.
  new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) { show(groups[0]); obs.disconnect(); }
  }, { threshold: 0.2 }).observe(grid);
}

/* ---------------------- PROJECTS (filter + tilt + modal) ---------------------- */

function renderProjects() {
  const grid = $("#projectsGrid");
  const filters = $("#projectFilters");
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  categories.forEach((cat, i) => {
    const btn = el("button", { class: `filter${i === 0 ? " active" : ""}`, type: "button", text: cat });
    btn.addEventListener("click", () => {
      $$(".filter", filters).forEach((b) => b.classList.toggle("active", b === btn));
      $$(".project-card", grid).forEach((card) => {
        const show = cat === "All" || card.dataset.category === cat;
        card.classList.toggle("is-hidden", !show);
        card.classList.remove("is-entering");
        if (show) { void card.offsetWidth; card.classList.add("is-entering"); }
      });
    });
    filters.append(btn);
  });

  PROJECTS.forEach((project, index) => {
    const card = el("button", { class: "project-card reveal", type: "button", "aria-label": `Open details for ${project.title}` }, [
      el("div", { class: "project-thumb" }, [el("img", { src: project.image, alt: "", loading: "lazy" })]),
      el("div", { class: "project-body" }, [
        el("span", { class: "project-cat mono", text: project.category }),
        el("h3", { text: project.title }),
        el("p", { text: project.summary }),
        el("div", { class: "tags" }, project.tags.map((t) => el("span", { text: t }))),
        el("span", { class: "project-more" }, ["View case study ", el("span", { text: "→" })]),
      ]),
    ]);
    card.dataset.category = project.category;
    card.addEventListener("click", () => openModal(index, card));

    if (finePointer && !reduceMotion) {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 8}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    }
    grid.append(card);
  });
}

let modalOpener = null;
function openModal(index, opener) {
  const p = PROJECTS[index];
  const modal = $("#projectModal");
  modalOpener = opener;

  $("#modalImg").src = p.image;
  $("#modalCat").textContent = p.category;
  $("#modalTitle").textContent = p.title;
  $("#modalProblem").textContent = p.problem;
  $("#modalApproach").textContent = p.approach;
  $("#modalResults").textContent = p.results;
  $("#modalMetrics").replaceChildren(...p.metrics.map((m) =>
    el("div", { class: "metric" }, [el("b", { text: m.value }), el("span", { text: m.label })])));
  $("#modalTags").replaceChildren(...p.tags.map((t) => el("span", { text: t })));

  const links = [];
  if (p.github) links.push(el("a", { class: "btn btn-primary", href: p.github, target: "_blank", rel: "noopener", text: "View code →" }));
  if (p.demo) links.push(el("a", { class: "btn btn-ghost", href: p.demo, target: "_blank", rel: "noopener", text: "Live demo" }));
  $("#modalLinks").replaceChildren(...links);

  modal.hidden = false;
  document.body.classList.add("locked");
  $(".modal-panel", modal).scrollTop = 0;
  $(".modal-close", modal).focus();
}

function closeModal() {
  const modal = $("#projectModal");
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("locked");
  modalOpener?.focus();
}

function initModal() {
  const modal = $("#projectModal");
  $$("[data-close]", modal).forEach((n) => n.addEventListener("click", closeModal));
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    trapFocus(modal, e);
  });
}

/* ---------------------- FEATURED GITHUB REPOS ---------------------- */

function repoCard(featured, live) {
  const url = live?.html_url || `https://github.com/${GITHUB_USERNAME}/${featured.name}`;
  const description = featured.description || live?.description || "No description provided.";
  const meta = [];
  if (live) {
    if (live.language) meta.push(el("span", { class: "repo-lang", text: live.language }));
    meta.push(el("span", { text: `★ ${live.stargazers_count}` }));
    if (live.forks_count) meta.push(el("span", { text: `⑂ ${live.forks_count}` }));
    const updated = new Date(live.pushed_at || live.updated_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    meta.push(el("span", { text: `Updated ${updated}` }));
  } else {
    meta.push(el("span", { text: "View on GitHub →" }));
  }

  return el("a", { class: "repo-card reveal", href: url, target: "_blank", rel: "noopener" }, [
    el("div", { class: "repo-head" }, [svgIcon(REPO_ICON), el("span", { class: "repo-badge", text: "Featured" })]),
    el("h3", { text: live?.name || featured.name }),
    el("p", { text: description }),
    el("div", { class: "repo-meta" }, meta),
  ]);
}

async function loadGithubRepos() {
  const grid = $("#reposGrid");
  if (!FEATURED_REPOS.length) { grid.closest("section").hidden = true; return; }

  // Loading skeletons
  grid.replaceChildren(...FEATURED_REPOS.map(() =>
    el("div", { class: "repo-card skeleton" }, [
      el("div", { class: "sk-line", style: "width:60%" }),
      el("div", { class: "sk-line", style: "width:90%" }),
      el("div", { class: "sk-line", style: "width:75%" }),
    ])));

  // One request for all public repos, then keep only the featured ones (in FEATURED_REPOS order).
  let liveByName = new Map();
  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?per_page=100`);
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    liveByName = new Map((await res.json()).map((repo) => [repo.name.toLowerCase(), repo]));
  } catch (err) {
    // Offline or rate-limited: show the featured cards without live stats.
    console.warn("Featured repos: showing without live stats.", err);
  }

  grid.replaceChildren(...FEATURED_REPOS.map((f) => repoCard(f, liveByName.get(f.name.toLowerCase()))));
  observeReveals(grid);
}

/* ---------------------- TIMELINE FILL ---------------------- */

function initTimeline() {
  const timeline = $("#timeline");
  const fill = $("#timelineFill");
  const update = () => {
    const r = timeline.getBoundingClientRect();
    const progress = (window.innerHeight * 0.6 - r.top) / r.height;
    fill.style.height = `${Math.max(0, Math.min(1, progress)) * 100}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------------------- CERTIFICATES + LIGHTBOX ---------------------- */

function initCertificates() {
  const grid = $("#certsGrid");
  const box = $("#lightbox");
  const img = $("#lbImg");
  const caption = $("#lbCaption");
  const withImages = CERTIFICATES.filter((c) => c.image);
  let current = 0;
  let opener = null;

  // About-section stat follows the list automatically.
  const count = $("#certCount");
  if (count) count.dataset.target = CERTIFICATES.filter((c) => /completed/i.test(c.status)).length;

  // The image URL is only put into the page here, after a visitor clicks.
  const show = (i) => {
    current = (i + withImages.length) % withImages.length;
    const cert = withImages[current];
    img.src = cert.image;
    img.alt = `${cert.title} certificate — ${cert.issuer}`;
    caption.textContent = `${cert.title} — ${cert.issuer} (${current + 1}/${withImages.length})`;
    img.style.animation = "none"; void img.offsetWidth; img.style.animation = ""; // restart entrance animation
  };
  const open = (cert, from) => {
    opener = from;
    show(withImages.indexOf(cert));
    $("#lbPrev").hidden = $("#lbNext").hidden = withImages.length < 2;
    box.hidden = false;
    document.body.classList.add("locked");
    $("#lbClose").focus();
  };
  const close = () => {
    box.hidden = true;
    img.removeAttribute("src");
    document.body.classList.remove("locked");
    opener?.focus();
  };

  CERTIFICATES.forEach((cert) => {
    const inProgress = /progress/i.test(cert.status);
    const actions = el("div", { class: "cert-actions" });

    if (cert.image) {
      const view = el("button", { class: "cert-btn", type: "button", text: "View certificate", "aria-label": `View certificate: ${cert.title}` });
      view.addEventListener("click", () => open(cert, view));
      actions.append(view);
    }
    if (cert.url) {
      actions.append(el("a", {
        class: "cert-link", href: cert.url, target: "_blank", rel: "noopener",
        text: cert.image ? "Verify ↗" : "View certificate ↗",
        "aria-label": `${cert.image ? "Verify" : "View"} ${cert.title} on the issuer's site (opens in a new tab)`,
      }));
    }

    grid.append(el("div", { class: "cert-card reveal" }, [
      el("span", { class: "cert-mark", "aria-hidden": "true", text: cert.issuer[0] }),
      el("span", { class: `cert-status${inProgress ? " progress" : ""}`, text: cert.status }),
      el("div", { class: "cert-info" }, [el("h3", { text: cert.title }), el("span", { class: "mono", text: cert.issuer })]),
      actions.childElementCount ? actions : null,
    ]));
  });

  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => show(current - 1));
  $("#lbNext").addEventListener("click", () => show(current + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  box.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if (withImages.length > 1 && e.key === "ArrowLeft") show(current - 1);
    if (withImages.length > 1 && e.key === "ArrowRight") show(current + 1);
    trapFocus(box, e);
  });
}

/* ---------------------- EMAIL (assembled at runtime) ---------------------- */

const getEmail = () => EMAIL_PARTS.join(String.fromCharCode(64));

function initEmail() {
  const email = getEmail();
  $$("[data-email]").forEach((a) => a.setAttribute("href", `mailto:${email}`));
  $$("[data-email-text]").forEach((node) => (node.textContent = email));
}

/* ---------------------- PROFILE PHOTO & IMAGE DETERRENTS ---------------------- */

function initPhoto() {
  if (!PROFILE_PHOTO) return;
  $(".photo-placeholder")?.replaceWith(el("img", { src: PROFILE_PHOTO, alt: "Sahil Gulab Chavan", draggable: "false" }));
}

// Cosmetic only: stops casual right-click "Save image" and drag-to-desktop.
function initImageGuards() {
  const guarded = "img, .photo-frame, .project-thumb, .lightbox";
  document.addEventListener("contextmenu", (e) => { if (e.target.closest(guarded)) e.preventDefault(); });
  document.addEventListener("dragstart", (e) => { if (e.target.closest(guarded)) e.preventDefault(); });
}

/* ---------------------- RESUME GATE (human-only download) ---------------------- */

function initResumeGate() {
  const gate = $("#resumeGate");
  const holdBtn = $("#holdBtn");
  const fill = $("#holdFill");
  const label = $("#holdLabel");
  const honeypot = $("#gateHp");
  const fallback = $("#gateFallback");
  const pageStart = performance.now();
  const HOLD_MS = 1200;
  const IDLE_LABEL = "Press & hold to download";
  let opener = null;
  let holdStart = 0;
  let trusted = false;
  let frame = 0;
  let busy = false;

  // Built at runtime so the file path never appears in the page source.
  const resumePath = () => ["assets", "resume", RESUME_KEY].join("/") + "." + "pdf";

  const resetHold = () => {
    cancelAnimationFrame(frame);
    holdStart = 0;
    fill.style.transform = "scaleX(0)";
    holdBtn.classList.remove("holding");
  };

  const openGate = (from) => {
    opener = from;
    resetHold();
    busy = false;
    label.textContent = IDLE_LABEL;
    holdBtn.disabled = false;
    fallback.hidden = true;
    gate.hidden = false;
    document.body.classList.add("locked");
    holdBtn.focus();
  };
  const closeGate = () => {
    if (gate.hidden) return;
    resetHold();
    gate.hidden = true;
    document.body.classList.remove("locked");
    opener?.focus();
  };

  async function download() {
    busy = true;
    holdBtn.disabled = true;
    label.textContent = "Preparing download…";

    // Bot signals: synthetic events, interacting instantly after load, or a filled honeypot.
    const tooFast = performance.now() - pageStart < 2000;
    if (!trusted || tooFast || honeypot.value) {
      busy = false;
      holdBtn.disabled = false;
      label.textContent = "Please try again";
      return;
    }

    try {
      const res = await fetch(resumePath(), { cache: "no-store" });
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) throw new Error(`Resume not found (${res.status})`);
      const url = URL.createObjectURL(await res.blob());
      const a = el("a", { href: url, download: `${RESUME_DOWNLOAD_NAME}.pdf` });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      toast("Resume downloaded — thanks for your interest!");
      closeGate();
    } catch (err) {
      console.warn(err);
      label.textContent = IDLE_LABEL;
      holdBtn.disabled = false;
      fallback.hidden = false;
      toast("Resume isn't available right now — reach me on LinkedIn or email.", true);
    } finally {
      busy = false;
    }
  }

  const step = (now) => {
    const progress = Math.min((now - holdStart) / HOLD_MS, 1);
    fill.style.transform = `scaleX(${progress})`;
    if (progress < 1) frame = requestAnimationFrame(step);
    else { holdBtn.classList.remove("holding"); holdStart = 0; download(); }
  };
  const startHold = (e) => {
    if (busy || holdStart) return;
    trusted = e.isTrusted;
    holdStart = performance.now();
    holdBtn.classList.add("holding");
    label.textContent = "Keep holding…";
    frame = requestAnimationFrame(step);
  };
  const stopHold = () => {
    if (!holdStart) return;
    resetHold();
    label.textContent = IDLE_LABEL;
  };

  holdBtn.addEventListener("pointerdown", (e) => { holdBtn.setPointerCapture?.(e.pointerId); startHold(e); });
  holdBtn.addEventListener("pointerup", stopHold);
  holdBtn.addEventListener("pointercancel", stopHold);
  holdBtn.addEventListener("lostpointercapture", stopHold);
  holdBtn.addEventListener("keydown", (e) => {
    if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); startHold(e); }
  });
  holdBtn.addEventListener("keyup", (e) => { if (e.key === " " || e.key === "Enter") stopHold(); });
  holdBtn.addEventListener("contextmenu", (e) => e.preventDefault()); // long-press menu on phones

  $$("[data-resume]").forEach((btn) => btn.addEventListener("click", (e) => { if (e.isTrusted) openGate(btn); }));
  $$("[data-gate-close]", gate).forEach((n) => n.addEventListener("click", closeGate));
  $("#gateForm").addEventListener("submit", (e) => e.preventDefault());
  gate.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeGate();
    trapFocus(gate, e);
  });
}

/* ---------------------- CONTACT FORM ---------------------- */

function initContact() {
  const form = $("#contactForm");
  const fields = {
    name: { input: $("#name"), check: (v) => (v.length >= 2 ? "" : "Please enter your name.") },
    email: { input: $("#email"), check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address.") },
    message: { input: $("#message"), check: (v) => (v.length >= 10 ? "" : "Message should be at least 10 characters.") },
  };

  const validate = (key) => {
    const { input, check } = fields[key];
    const error = check(input.value.trim());
    const wrap = input.closest(".field");
    wrap.classList.toggle("invalid", !!error);
    wrap.classList.toggle("valid", !error);
    $(".field-error", wrap).textContent = error;
    return !error;
  };

  // Live validation once the visitor has touched a field.
  Object.keys(fields).forEach((key) => {
    const input = fields[key].input;
    input.addEventListener("blur", () => input.value && validate(key));
    input.addEventListener("input", () => input.closest(".field").classList.contains("invalid") && validate(key));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(fields).map(validate);
    if (results.includes(false)) {
      toast("Please fix the highlighted fields.", true);
      $(".field.invalid input, .field.invalid textarea", form)?.focus();
      return;
    }
    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const subject = $("#subject").value.trim() || `Portfolio enquiry from ${name}`;
    const body = `${fields.message.input.value.trim()}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast("Opening your email app… thanks for reaching out!");
    form.reset();
    $$(".field", form).forEach((f) => f.classList.remove("valid", "invalid"));
  });

  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(getEmail());
      toast("Email address copied to clipboard.");
    } catch {
      toast(`Copy failed — the email is ${getEmail()}`, true);
    }
  });
}

/* ---------------------- START ---------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  initNav();
  initCursor();
  initHeroCanvas();
  initTyping();
  initMarquee();
  initEmail();
  initPhoto();
  initImageGuards();
  initSkills();
  renderProjects();
  initModal();
  loadGithubRepos();
  initTimeline();
  initCertificates();
  initResumeGate();
  initContact();
  observeReveals();
  $("#year").textContent = new Date().getFullYear();

  // Sections are filled in by JS, so re-jump to a #section link once they exist.
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant" }));
  }
});
