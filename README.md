# Resume-Website
This is my website. I'll also provide a URL for easy testing.
https://reeves999.github.io/Resume-Website/

---

> 📌 **Branch Reference — `9-26_Update_Bio_Dev_Ahlpa`**
> This section was saved to the README on this branch so the full project
> context can be recalled quickly when returning to work.

---

## 📁 Project: Resume-Website

**Purpose:** A personal resume/portfolio website built to showcase your skills as a **Freelance Software Developer / Dog Sitter**, with a goal of becoming a software engineer.

**Live URL:** `https://reeves999.github.io/Resume-Website/` (hosted on GitHub Pages)

---

## 📐 Structure

```
Resume-Website/
├── index.html          ← Home page (nav + contact email form)
├── Style.CSS           ← Single shared stylesheet
├── main.js             ← Three.js background animation (currently commented out)
├── jsconfig.json       ← VS Code JS config (ESNext, ES2020, React JSX)
├── qrcode_website.py   ← Python script to generate a QR code for the site
├── test-email.php      ← Draft PHP email-sending script (never fully completed)
├── README.md           ← This file
├── Daniel-Reeves-Linkin.pdf  ← PDF of LinkedIn profile
├── Website.jpg         ← Generated QR code image
├── github.png / linkedin.png / Rover.png  ← Social/external icon images
├── branch_containers/
│   ├── me.html         ← "About Me" page (bio + skills list)
│   └── projects.html   ← Projects page (1 filled project + 3 empty templates)
├── Resume.code-workspace / Apt-Autodownload-Script.code-workspace  ← VS Code workspaces
└── .cspell/ / .vscode/ ← Editor configs
```

---

## 🎨 Design & Styling

- **Fonts:** Times New Roman throughout (serif, formal feel)
- **Layout:** CSS Grid for navigation (`grid-template-areas: 'home me projects'`)
- **Color:** Light gray background (`#e0e0e0`), white borders on nav items
- **Contact form:** Styled inputs/textarea with a light blue (`#96c6e9`) background
- **Footer:** Social links (Rover, GitHub, LinkedIn) with icon images, plus icon attribution credits

---

## 📄 Pages

| Page | Content |
|------|---------|
| **Home** (`index.html`) | Header with name + tagline, nav bar, email contact form (Name/Email/Message/Submit) |
| **Me** (`me.html`) | Summary paragraph explaining background (left IKEA to dog-sit, self-taught developer), skills list (Linux, PowerShell, Python, Raspberry Pi/Pico, self-taught) |
| **Projects** (`projects.html`) | 1 real project: **"Backyard Renovation"** (March 2016–Present, retaining wall + fence + bathroom tech side-project). 3 empty template blocks awaiting more projects. |

---

## 🛠️ Tech Stack

- **Frontend:** Plain HTML5 + CSS3 (single stylesheet) + vanilla JS
- **JS:** `main.js` had a Three.js background animation (rotating torus) — currently all commented out
- **Backend:** None (static site on GitHub Pages). A PHP email script was started but never integrated
- **Tooling:** VS Code workspace, Python QR code generator
- **Hosting:** GitHub Pages (under `Reeves999` GitHub account)

---

## 📝 Git History (32 commits)

Key themes from the commit log:
- Started with basic CSS + navigation work
- Added the JS file (Three.js background) and later commented it out
- Iterated on the email/contact form
- Fixed nav bar, screen-fit, and typo issues
- Added more content to the projects page
- Final commit: *"I forget to change the href for tags in the website"*

---

## ⚠️ Notable Incomplete / WIP Items

1. **`main.js`** — Entirely commented out (Three.js torus animation never made it live)
2. **`test-email.php`** — Has syntax errors (stray `?` characters) and placeholder values; never connected
3. **`projects.html`** — 3 of 4 project blocks are empty placeholders
4. **`index.html` line 32** — Has a broken/malformed `<a>` tag with a fake-looking email (`Mr.Core.Hard@gmail153.com12`)
5. **`me.html`** — Missing closing `</main>` tag and `</html>` closing tag

---

## 💡 Quick Recap in One Sentence

You built a **3-page static HTML/CSS resume website** (Home, About, Projects) for yourself as a self-taught developer/dog-sitter, hosted on GitHub Pages, with a contact form, social links, a Python QR code generator, and a stub Three.js background animation that was never activated.

