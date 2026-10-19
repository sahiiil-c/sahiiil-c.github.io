/* =========================================================
   Sahil Gulab Chavan — Portfolio scripts
   Edit the CONTENT section to update the site. No build step needed.
   ========================================================= */

/* ---------------------- CONTENT ---------------------- */

// Your GitHub username. Leave empty ("") to show a friendly placeholder instead.
const GITHUB_USERNAME = "sahiiil-c";

const CONTACT_EMAIL = "sahil@example.com";

const ROLES = ["Data Analyst", "Machine Learning Engineer", "AI Enthusiast", "Data Storyteller"];

const MARQUEE_ITEMS = ["Python", "Machine Learning", "SQL", "Deep Learning", "Power BI", "NLP", "Pandas", "Data Visualisation", "TensorFlow", "Statistics"];

const SKILLS = {
  "Languages": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "R", level: 60 },
    { name: "HTML / CSS", level: 70 },
  ],
  "ML & AI": [
    { name: "scikit-learn", level: 85 },
    { name: "TensorFlow / Keras", level: 75 },
    { name: "PyTorch", level: 65 },
    { name: "NLP", level: 70 },
    { name: "Computer Vision", level: 65 },
  ],
  "Data & Viz": [
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Tableau", level: 70 },
    { name: "Matplotlib / Seaborn", level: 85 },
  ],
  "Tools": [
    { name: "Jupyter", level: 90 },
    { name: "Git & GitHub", level: 80 },
    { name: "Excel", level: 85 },
    { name: "Docker", level: 55 },
    { name: "Streamlit", level: 75 },
  ],
};

const PROJECTS = [
  {
    title: "Customer Churn Prediction",
    category: "ML",
    image: "assets/images/project-churn.svg",
    summary: "Predicts which telecom customers are likely to leave so the retention team can act early.",
    problem: "A telecom company was losing customers without warning and wanted to know who was at risk and why.",
    approach: "Cleaned and encoded 7,000+ customer records, handled class imbalance with SMOTE, and compared Logistic Regression, Random Forest and XGBoost with cross-validation. Used SHAP values to explain the top churn drivers.",
    results: "XGBoost reached the best recall on churners. Contract type, tenure and monthly charges were the strongest drivers, which shaped a targeted retention offer.",
    metrics: [{ value: "86%", label: "Accuracy" }, { value: "0.91", label: "ROC‑AUC" }, { value: "7k+", label: "Customers" }],
    tags: ["Python", "XGBoost", "SHAP", "scikit-learn"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Sales Performance Dashboard",
    category: "Data Analysis",
    image: "assets/images/project-sales.svg",
    summary: "An interactive Power BI dashboard tracking revenue, regions and product performance.",
    problem: "Management needed one place to see sales trends instead of reading dozens of spreadsheets every month.",
    approach: "Combined raw sales data with SQL, built a star-schema data model, wrote DAX measures for YoY growth and margins, and designed drill-down pages by region and product.",
    results: "Reporting time went from hours to minutes, and the dashboard exposed two under-performing regions.",
    metrics: [{ value: "12", label: "KPIs tracked" }, { value: "4", label: "Report pages" }, { value: "−80%", label: "Reporting time" }],
    tags: ["Power BI", "DAX", "SQL", "Excel"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Sentiment Analysis of Reviews",
    category: "NLP",
    image: "assets/images/project-sentiment.svg",
    summary: "Classifies product reviews as positive, negative or neutral using NLP.",
    problem: "An e-commerce store received thousands of reviews and could not read them all to find out what customers disliked.",
    approach: "Pre-processed text (tokenising, stop-words, lemmatising), compared TF-IDF + Logistic Regression with a fine-tuned DistilBERT model, and served the model in a Streamlit app.",
    results: "The transformer model clearly beat the classical baseline, and the app lets anyone paste a review and get a prediction instantly.",
    metrics: [{ value: "92%", label: "F1 score" }, { value: "50k", label: "Reviews" }, { value: "3", label: "Classes" }],
    tags: ["NLP", "Transformers", "NLTK", "Streamlit"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "House Price Prediction",
    category: "ML",
    image: "assets/images/project-house.svg",
    summary: "Regression model estimating property prices from location and features.",
    problem: "Buyers and sellers needed a fair, data-backed estimate of a property's price.",
    approach: "Ran exploratory analysis, engineered features (price per sq. ft, age, location encoding), removed outliers, and tuned Ridge, Lasso and Gradient Boosting models.",
    results: "Gradient Boosting gave the lowest error and the most important features were clearly explained to users.",
    metrics: [{ value: "0.89", label: "R² score" }, { value: "80+", label: "Features" }, { value: "−18%", label: "RMSE vs baseline" }],
    tags: ["Regression", "Feature Engineering", "Pandas"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Image Classifier with CNN",
    category: "Vision",
    image: "assets/images/project-cnn.svg",
    summary: "A convolutional neural network that recognises objects in images.",
    problem: "Build a model that can reliably sort images into categories with limited training data.",
    approach: "Built a CNN in TensorFlow/Keras, used data augmentation and transfer learning (MobileNetV2), and tracked training with learning curves to avoid over-fitting.",
    results: "Transfer learning greatly improved accuracy over the from-scratch model while training in a fraction of the time.",
    metrics: [{ value: "94%", label: "Test accuracy" }, { value: "10", label: "Classes" }, { value: "60k", label: "Images" }],
    tags: ["TensorFlow", "CNN", "Transfer Learning"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "COVID‑19 Exploratory Analysis",
    category: "Data Analysis",
    image: "assets/images/project-covid.svg",
    summary: "Explored global COVID‑19 data to compare waves, vaccination and recovery trends.",
    problem: "Understand how case waves and vaccination rates differed across countries and over time.",
    approach: "Cleaned public time-series data, computed rolling averages and per-capita rates, and visualised the results with interactive Plotly charts.",
    results: "Showed a clear link between vaccination coverage and lower peak mortality in later waves.",
    metrics: [{ value: "190+", label: "Countries" }, { value: "3 yrs", label: "Time-series" }, { value: "15", label: "Charts" }],
    tags: ["EDA", "Plotly", "Pandas", "Time Series"],
    github: "https://github.com/",
    demo: "",
  },
];

const CERTIFICATES = [
  { title: "Data Analytics Professional Certificate", issuer: "Issuer · 2024", image: "assets/images/cert-data-analytics.svg" },
  { title: "Data Science Professional Certificate", issuer: "Issuer · 2024", image: "assets/images/cert-data-science.svg" },
  { title: "Machine Learning Specialization", issuer: "Issuer · 2025", image: "assets/images/cert-machine-learning.svg" },
  { title: "SQL for Data Science", issuer: "Issuer · 2023", image: "assets/images/cert-sql.svg" },
];

const TESTIMONIALS = [
  { quote: "Sahil has a rare ability to explain complex models in simple words. His churn analysis directly shaped our retention plan.", name: "Mentor Name", role: "Senior Data Scientist, Company" },
  { quote: "Hard-working, curious and reliable. Sahil delivered the dashboard ahead of schedule and kept improving it from feedback.", name: "Manager Name", role: "Team Lead, Internship" },
  { quote: "One of the most dedicated students in the department. His final-year project stood out for its depth and clarity.", name: "Professor Name", role: "Faculty, College Name" },
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
    else if (key in node && typeof value !== "string") node[key] = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => child && node.append(child));
  return node;
}

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
      const id = entry.target.id === "github" ? "projects" : entry.target.id === "testimonials" ? "certifications" : entry.target.id;
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

function animateCount(node) {
  const target = Number(node.dataset.target);
  if (reduceMotion) { node.textContent = target; return; }
  const start = performance.now();
  const duration = 1600;
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    node.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
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

/* ---------------------- SKILLS (tabs + rings) ---------------------- */

function initSkills() {
  const tabs = $("#skillTabs");
  const grid = $("#skillsGrid");
  const CIRC = 2 * Math.PI * 44;

  // Shared gradient definition used by every ring.
  document.body.append(el("div", { "aria-hidden": "true", style: "position:absolute;width:0;height:0;overflow:hidden" }));
  document.body.lastChild.innerHTML =
    '<svg width="0" height="0"><defs><linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#7c3aed"/><stop offset=".55" stop-color="#ec4899"/><stop offset="1" stop-color="#f59e0b"/>' +
    "</linearGradient></defs></svg>";

  function show(group) {
    $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.group === group)));
    grid.replaceChildren();
    SKILLS[group].forEach((skill, i) => {
      const card = el("div", { class: "skill-card", style: `animation-delay:${i * 70}ms` });
      card.innerHTML =
        `<div class="ring"><svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="44"/>` +
        `<circle class="value" cx="50" cy="50" r="44" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/></svg><b></b></div>`;
      $("b", card).textContent = `${skill.level}%`;
      card.append(el("h3", { text: skill.name }));
      grid.append(card);
      // Animate the ring on the next frame so the transition runs.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        $(".value", card).style.strokeDashoffset = CIRC * (1 - skill.level / 100);
      }));
    });
  }

  Object.keys(SKILLS).forEach((group, i) => {
    const tab = el("button", { class: "tab", role: "tab", type: "button", text: group, "aria-selected": String(i === 0) });
    tab.dataset.group = group;
    tab.addEventListener("click", () => show(group));
    tabs.append(tab);
  });

  // Start the rings when the section scrolls into view.
  new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) { show(Object.keys(SKILLS)[0]); obs.disconnect(); }
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

/* ---------------------- GITHUB REPOS ---------------------- */

async function loadGithubRepos() {
  const grid = $("#reposGrid");

  const message = (html) => {
    const box = el("div", { class: "repos-message" });
    box.innerHTML = html; // static text only, never API data
    grid.replaceChildren(box);
  };

  if (!GITHUB_USERNAME) {
    message('Add your GitHub username to <code>GITHUB_USERNAME</code> in <code>assets/js/main.js</code> to show your latest repositories here.');
    return;
  }

  // Loading skeletons
  grid.replaceChildren(...Array.from({ length: 3 }, () =>
    el("div", { class: "repo-card skeleton" }, [
      el("div", { class: "sk-line", style: "width:60%" }),
      el("div", { class: "sk-line", style: "width:90%" }),
      el("div", { class: "sk-line", style: "width:75%" }),
    ])));

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?sort=updated&per_page=6`);
    if (res.status === 403) throw new Error("rate");
    if (!res.ok) throw new Error("fail");
    const repos = (await res.json()).filter((r) => !r.fork);

    if (!repos.length) { message("No public repositories yet — check back soon!"); return; }

    grid.replaceChildren(...repos.map((repo) => {
      const updated = new Date(repo.updated_at).toLocaleDateString(undefined, { month: "short", year: "numeric" });
      const card = el("a", { class: "repo-card reveal", href: repo.html_url, target: "_blank", rel: "noopener" }, [
        el("h3", { text: repo.name }),
        el("p", { text: repo.description || "No description provided." }),
        el("div", { class: "repo-meta" }, [
          repo.language ? el("span", { class: "repo-lang", text: repo.language }) : null,
          el("span", { text: `★ ${repo.stargazers_count}` }),
          el("span", { text: `Updated ${updated}` }),
        ]),
      ]);
      return card;
    }));
    observeReveals(grid);
  } catch (err) {
    const profile = `https://github.com/${encodeURIComponent(GITHUB_USERNAME)}`;
    message(err.message === "rate"
      ? `GitHub's rate limit was reached. <a href="${profile}" target="_blank" rel="noopener"><u>View the profile on GitHub →</u></a>`
      : `Couldn't load repositories right now. <a href="${profile}" target="_blank" rel="noopener"><u>View the profile on GitHub →</u></a>`);
  }
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

function initLightbox() {
  const grid = $("#certsGrid");
  const box = $("#lightbox");
  const img = $("#lbImg");
  const caption = $("#lbCaption");
  let current = 0;
  let opener = null;

  const show = (i) => {
    current = (i + CERTIFICATES.length) % CERTIFICATES.length;
    const cert = CERTIFICATES[current];
    img.src = cert.image;
    img.alt = cert.title;
    caption.textContent = `${cert.title} — ${cert.issuer} (${current + 1}/${CERTIFICATES.length})`;
    // restart the entrance animation
    img.style.animation = "none"; void img.offsetWidth; img.style.animation = "";
  };
  const open = (i, from) => {
    opener = from;
    show(i);
    box.hidden = false;
    document.body.classList.add("locked");
    $("#lbClose").focus();
  };
  const close = () => {
    box.hidden = true;
    document.body.classList.remove("locked");
    opener?.focus();
  };

  CERTIFICATES.forEach((cert, i) => {
    const card = el("button", { class: "cert-card reveal", type: "button", "aria-label": `View certificate: ${cert.title}` }, [
      el("img", { src: cert.image, alt: "", loading: "lazy" }),
      el("div", { class: "cert-info" }, [el("h3", { text: cert.title }), el("span", { class: "mono", text: cert.issuer })]),
    ]);
    card.addEventListener("click", () => open(i, card));
    grid.append(card);
  });

  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => show(current - 1));
  $("#lbNext").addEventListener("click", () => show(current + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  box.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
    trapFocus(box, e);
  });
}

/* ---------------------- TESTIMONIALS SLIDER ---------------------- */

function initTestimonials() {
  const slider = $("#slider");
  const track = $("#sliderTrack");
  const dots = $("#sliderDots");
  let index = 0;
  let timer;

  TESTIMONIALS.forEach((t, i) => {
    const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
    track.append(el("figure", { class: "slide", "aria-roledescription": "slide", "aria-label": `${i + 1} of ${TESTIMONIALS.length}` }, [
      el("blockquote", { text: t.quote }),
      el("figcaption", { class: "slide-author" }, [
        el("span", { class: "slide-avatar", text: initials }),
        el("div", {}, [el("strong", { text: t.name }), el("span", { text: t.role })]),
      ]),
    ]));
    const dot = el("button", { type: "button", "aria-label": `Show testimonial ${i + 1}` });
    dot.addEventListener("click", () => { go(i); restart(); });
    dots.append(dot);
  });

  function go(i) {
    index = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    $$("button", dots).forEach((d, n) => d.setAttribute("aria-current", String(n === index)));
  }
  const stop = () => clearInterval(timer);
  const restart = () => { stop(); if (!reduceMotion) timer = setInterval(() => go(index + 1), 6000); };

  $("#slidePrev").addEventListener("click", () => { go(index - 1); restart(); });
  $("#slideNext").addEventListener("click", () => { go(index + 1); restart(); });
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", restart);
  slider.addEventListener("focusin", stop);

  // Swipe on touch screens
  let startX = null;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    startX = null;
    restart();
  });

  go(0);
  restart();
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
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast("Opening your email app… thanks for reaching out!");
    form.reset();
    $$(".field", form).forEach((f) => f.classList.remove("valid", "invalid"));
  });

  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast("Email address copied to clipboard.");
    } catch {
      toast(`Copy failed — the email is ${CONTACT_EMAIL}`, true);
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
  initSkills();
  renderProjects();
  initModal();
  loadGithubRepos();
  initTimeline();
  initLightbox();
  initTestimonials();
  initContact();
  observeReveals();
  $("#year").textContent = new Date().getFullYear();
});
