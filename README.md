# Benne Vignesh — Developer Portfolio

A clean, premium, minimal, and fully responsive personal developer portfolio website for **Benne Vignesh**, 2nd year B.Tech student focusing on **Artificial Intelligence and Machine Learning**.

Built with pure **HTML5, CSS3, and vanilla JavaScript** — zero frameworks, zero external runtime dependencies, lightweight, and blazingly fast.

---

## Project Structure

```text
portfolio_1/
├── index.html        # Main HTML structure with semantic sections and clear editable comments
├── favicon.svg       # Clean SVG monogram favicon
├── css/
│   └── style.css     # Maintainable CSS with custom properties, typography, responsive breakpoints
├── js/
│   └── main.js       # Vanilla JS: dynamic year, mobile nav toggle, scrollspy, copy-to-clipboard
└── README.md         # Documentation & GitHub Pages deployment guide
```

---

## How to Run & Preview the Website Locally

Since this website is built with standard web technologies (HTML/CSS/JS), there is no compilation or build step required.

### Option 1: Direct File Open (Easiest & Fastest)
1. Open File Explorer and navigate to this folder: `e:\Download\portfolio_1`.
2. Double-click **`index.html`** or right-click `index.html` → **Open with** → your favorite browser (Google Chrome, Microsoft Edge, Brave, Firefox, etc.).

### Option 2: VS Code Live Server Extension
1. Open the folder in **VS Code**: `code .`
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will automatically open at `http://127.0.0.1:5500` with live reload on edit.

### Option 3: Command Line (PowerShell / Git Bash)
If you have Python installed on your system later, you can simply run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## How to Customize and Edit Your Information

All editable regions are marked with clear HTML comments (`<!-- EDITABLE: ... -->`) inside [index.html](index.html).

### 1. Adding Projects in the Future
In [index.html](index.html), inside `<section id="projects">`:
- Add a `<div class="projects-grid">` containing `<article class="project-card">` components with your project title, tech tags, and repository links whenever you are ready to publish projects.

### 2. Update Skills
In [index.html](index.html), add or modify skill items in any category:
```html
<div class="skill-item">
  <span class="skill-name">New Skill Name</span>
  <span class="skill-context">Short Context</span>
</div>
```

### 3. Update Contact Information
In [index.html](index.html):
- Email: `vigneshbenne@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vignesh-benne-50563b446`
- GitHub: `https://github.com/vigneshbenne-max`

*(Note: If you ever change your email address, also update the `emailToCopy` constant in [js/main.js](js/main.js).)*

---

## How to Publish for Free Using GitHub Pages

Publish your portfolio to the web under your personal GitHub URL (`https://vigneshbenne-max.github.io` or `https://vigneshbenne-max.github.io/portfolio`):

### Step 1: Initialize Git and Commit
Open PowerShell or Git Bash inside this folder:
```bash
cd "e:\Download\portfolio_1"
git init
git add .
git commit -m "Initial commit: Benne Vignesh developer portfolio"
```

### Step 2: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Choose one of two options:
   - **Option A (Main User Site):** Name the repository `vigneshbenne-max.github.io`. Your portfolio will be live at `https://vigneshbenne-max.github.io`.
   - **Option B (Project Site):** Name the repository `portfolio`. Your portfolio will be live at `https://vigneshbenne-max.github.io/portfolio`.
3. Keep it **Public** and do not add a README (one already exists here). Click **Create repository**.

### Step 3: Push Your Code
Copy the commands shown on GitHub and run them:
```bash
git branch -M main
git remote add origin https://github.com/vigneshbenne-max/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose the `main` branch and folder `/ (root)`.
5. Click **Save**.
6. Within 1-2 minutes, GitHub will publish your site and display the live URL at the top of the Pages screen!

---

## Key Design & Accessibility Highlights

- **Clean Aesthetic:** Pure white background, charcoal typography (`#0f172a`, `#334155`), and restrained engineering blue accents (`#1d4ed8`).
- **Zero Jargon or Inflation:** Completely honest presentation of 2nd year B.Tech coursework, current learning, and active prototypes without exaggerated claims or fake metrics.
- **Responsive Layout:** Adapts seamlessly across ultra-wide desktop monitors, laptops, tablets, and mobile smartphones.
- **Accessibility:** Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`), ARIA attributes, skip link, keyboard navigable mobile menu, and WCAG AA compliant color contrasts.
- **Lightweight & Fast:** 0 external CSS/JS libraries or fonts, instant loading with zero layout shift (CLS).
