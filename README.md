# Rania Adel — Developer Portfolio

> A responsive, PWA-enabled personal portfolio showcasing web development services and projects.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-3a6cf4?style=for-the-badge&logo=vercel)](https://raniaadel20002.github.io/My-Portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

---

## 📌 Overview

This is my personal developer portfolio — a single-page, fully responsive website built with pure HTML, CSS, and JavaScript. It presents my services, highlights selected projects with live links, and provides direct contact information. The site is also installable as a **Progressive Web App (PWA)** with full offline support.

---

## ✨ Features

- **Hero Section** — Full-screen background image with an overlay, name, title, and call-to-action
- **Services Section** — Three-tier pricing cards (Bronze, Silver, Gold) with hover animations
- **Projects Section** — Responsive Bootstrap grid showcasing live deployed projects
- **Contact Section** — Phone and email displayed with Font Awesome icons
- **Sticky Header** — Fixed navigation bar with a hamburger toggle on mobile
- **PWA Support** — Installable on mobile and desktop; works offline via Service Worker
- **Smooth Scrolling** — Anchor-based navigation with smooth scroll behavior
- **Micro-animations** — Card hover scale effects and button transitions throughout

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styling, CSS variables, media queries, animations |
| JavaScript (ES6) | Mobile nav toggle, Service Worker registration |
| Bootstrap 5.3.3 | Responsive grid for the Projects section |
| Font Awesome 6.7.2 | Icons (social, contact, navigation) |
| Service Worker API | Offline caching and PWA fetch strategy |
| Web App Manifest | PWA installability and theme configuration |
| Google Fonts (Poppins) | Typography |

---

## 📁 Project Structure

```
My-Portfolio/
├── index.html          # Main single-page HTML
├── style.css           # All custom styles and responsive breakpoints
├── script.js           # Service Worker registration + mobile nav logic
├── sw.js               # Service Worker (cache-first offline strategy)
├── manifest.json       # PWA Web App Manifest
├── offline.html        # Fallback page shown when offline
└── images/
    ├── photo.png       # Hero background image
    ├── Capture.PNG     # Project screenshot 3
    ├── Capture1.PNG    # Project screenshot 2
    ├── Capture2.PNG    # Project screenshot 1
    └── icons/
        ├── icon-192.png    # PWA icon (192×192)
        └── icon-512.png    # PWA icon (512×512)
```

---

## 🚀 Getting Started

No build tools or package managers are required. This is a static site.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/raniaadel20002/My-Portfolio.git
   ```

2. **Open in your browser**
   ```bash
   cd My-Portfolio
   # Open index.html directly, or serve it locally:
   npx serve .
   ```
   > ⚠️ The Service Worker requires a server context (localhost or HTTPS). Opening `index.html` directly via `file://` will skip PWA features but the site will still fully render.

---

## 📱 Responsive Design

The portfolio is optimized for all screen sizes:

| Breakpoint | Layout |
|---|---|
| Mobile (< 768px) | Single-column layout; hamburger nav; full-width cards |
| Tablet (768px – 1023px) | Two-column project grid; adjusted section padding |
| Desktop (≥ 1024px) | Three-column project grid; full navbar; hero aligned left |

- **CSS Custom Properties** power the design token system (colors, font sizes, transitions)
- **`clamp()`** is used throughout for fluid, viewport-responsive typography and spacing
- **Bootstrap 5** grid handles the Projects section breakpoints (`col-12 / col-md-6 / col-lg-4`)

---

## 🌐 Live Projects Featured

| Project | Live Link |
|---|---|
| Care Pharmacy App | [care-pharmacy-vanilla.vercel.app](https://care-pharmacy-vanilla.vercel.app/) |
| E-Commerce Store | [e-commerce-nu-eight-59.vercel.app](https://e-commerce-nu-eight-59.vercel.app/) |

---

## 📬 Contact

- **Email:** raniaadel20002@gmail.com
- **Phone:** +20 128 930 8219
- **LinkedIn:** [linkedin.com/in/rania-adel-302682277](https://www.linkedin.com/in/rania-adel-302682277/)

---

## 📄 License

This project is open source and available for reference and inspiration.
