# Arkbible Web Platform

> A Godly Community Rooted in Scripture, Prayer & Faithful Fellowship.

[![Live Demo](https://img.shields.io/badge/Live_Demo-arkbible.app-3A6B68?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.arkbible.app/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Built with Vite](https://img.shields.io/badge/Built_with-Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

---

## 📖 What the Project Does

**Arkbible** is an ad-free, non-profit Christian digital sanctuary connecting global believers to read God's Word, post prayer requests, share testimonies, and support one another across life's seasons without ads, pop-ups, or subscriptions.

### Key Features & Capabilities
* 🌐 **Global Believers Community**: Connects Christians worldwide around three core pillars—Faithful Fellowship, Daily Scripture Grounding, and Mutual Prayer Support.
* 📱 **Arkbible Mobile App Showcase**: Highlighting the official mobile app featuring offline multi-translation Bibles (KJV, WEB, Louis Segond, Reina-Valera), dramatic audio readings, and 0% AI hallucination verse search.
* 🌐 **Multi-Language Support (i18n)**: Seamless instant switching between **English** and **French** across the entire website interface.
* 🤝 **Kingdom Movement & Partnerships**: Dedicated portals for **Donation** (Financial Giving), **Church & Pastor Alliances** (Partnerships), and **Field Missionary Service** (Volunteering).
* 📜 **Interactive Scripture Share Card**: Custom generator for creating and copying beautifully themed scripture cards to share on social media.
* 📖 **Testimonies & Community Wall**: Interactive community testimony feed allowing users to share faith stories and receive encouragement.
* ⚡ **Ultra-Fast Single Page Application**: Smooth Client-side routing with clean animations and zero lag.

---

## 🛠️ Technologies Used

* **Core Framework**: [React 18](https://react.dev/)
* **Build Tool & Dev Server**: [Vite 6](https://vitejs.dev/)
* **Styling**: Vanilla CSS Design System with custom CSS variables, fluid responsive layouts, and modern typography (Google Fonts *Inter* & *Playfair Display*).
* **Iconography**: [Lucide React](https://lucide.react.dev/)
* **Animations & Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
* **Internationalization**: Lightweight custom React Context (`LanguageContext`) for translation management.
* **Deployment & Hosting**: [Vercel](https://vercel.com/) with custom domain configuration.

---

## How to Run It Locally

Follow these step-by-step instructions to run the project on your local machine:

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chroksys/arkbible-website.git
   cd arkbible-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the URL shown in your terminal) to view the live application.

---

## Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with instant HMR. |
| `npm run build` | Bundles and optimizes all frontend assets into the `dist/` folder for production. |
| `npm run preview` | Serves the production build locally to test performance and routes. |
| `npm run lint` | Runs ESLint to check for code quality and syntax standards. |

---

## Live Demo & Links

* 🔗 **Live Website**: [https://www.arkbible.app/](https://www.arkbible.app/)
* 📦 **GitHub Repository**: [https://github.com/chroksys/arkbible-website](https://github.com/chroksys/arkbible-website)

---

##  Project Structure

```text
arkbible-website/
├── public/                # Static assets (favicons, WebManifest, images, videos)
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, Modals)
│   ├── context/           # React Context (LanguageContext for i18n)
│   ├── i18n/              # Translation dictionary files (en.js, fr.js)
│   ├── pages/             # Page components (HomePage, AboutPage, ProductPage, etc.)
│   ├── App.jsx            # Main app router & modal state management
│   ├── main.jsx           # React DOM root entry point
│   └── index.css          # Design system, CSS variables & global typography
├── index.html             # HTML shell, Google Fonts & structured SEO metadata
├── package.json           # Project dependencies & npm scripts
├── vercel.json            # Vercel SPA routing configuration
└── README.md              # Project documentation
```

---

## 🛡️ License

This project is maintained for the **Arkbible Ministry**. All rights reserved.
