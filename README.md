# Manoj Pant — Senior Product Manager Portfolio

A production-grade, interactive product portfolio built with **Astro**, **MDX**, and **SCSS**, and deployed via **GitHub Actions** to **GitHub Pages**.

🌐 **Live Website:** [https://mapant.github.io/](https://mapant.github.io/)

---

## 1. Executive Summary & Professional Context

This repository houses my professional product portfolio, engineered to move beyond traditional static resumes and provide recruiters, hiring managers, and engineering leaders with a granular view of my execution capabilities. As a **Senior Product Manager** with over 10 years of professional experience, my work spans complex enterprise domains including **FinTech**, **HealthTech**, **Telecom**, and **Enterprise IT**.

The platform is architected to reflect rigorous product thinking, structured documentation, and robust technical execution across multiple core domains:

* **Digital Banking & API Infrastructure:** Enterprise banking platforms and reusable multi-application suites.


* **Healthcare Ecosystems:** Patient journey workflows, doctor engagement, and BDM sales optimization frameworks.


* **Enterprise Network Analytics:** Spatial cost-intelligence command centers and data-driven cost optimization engines.



---

## 2. Complete Case Study Index

The portfolio features four representative end-to-end case studies, each structured with dedicated route adapters and deep-dive sections:

### A. Integrated Channels Suite (M2P Fintech)

* **Route:** `/projects/integrated-channels/`

* **Domain:** Digital Banking Platforms & NBFC Infrastructure


* **Core Narrative:** Led product management for a comprehensive digital banking platform built from scratch as a reusable **12-application suite**. It bridges lending, cards, payments, reconciliation, compliance, treasury, audit, assets, GST, shares, government schemes, credit bureau connectivity, and document/KYC workflows.


* **Key Components:** Interactive application launch grid, ecosystem topology diagrams, architecture layers, and synthetic compliance reporting specifications.

### B. Ayu DocConnect (Ayu Health)

* **Route:** `/projects/ayu-docconnect/`

* **Domain:** Healthcare Ecosystem & Patient Journey


* **Core Narrative:** Designed and scaled doctor engagement, referral tracking, and patient progression frameworks within the Ayu Health ecosystem. Focuses on bridging the gap between doctor relationship management and clinical service integration.


* **Key Components:** Doctor & Referral Measurement Framework, handoff metrics (OPD, IPD, Discharge, Follow-up), lifecycle retention panels, and workspace mockups.



### C. Sales Intelligence & Field Force Optimization (Ayu Health)

* **Route:** `/projects/ayu-sales-intelligence/`

* **Domain:** Field Operations & Sales BDM Enablement


* **Core Narrative:** Built prospect intelligence, beat planning, and visit management workflows to optimize field force execution and drive BDM productivity.


* **Key Components:** Field Sales Measurement Framework, interactive capability modals, territory mapping illustrations, and pilot outcome metrics.



### D. Telecom Analytics & Cost Optimization (Nokia Networks)

* **Route:** `/projects/telecom-cost-optimization/`

* **Domain:** Enterprise Network Analytics & Cost Control


* **Core Narrative:** Developed a spatial cost-intelligence command center and asset-centered data models to turn disconnected operational records into actionable CapEx/OpEx savings.


* **Key Components:** Asset-centered architecture models, strategy matrices, trust pyramids, and command-centre preview layouts.



---

## 3. Technical Architecture & Tech Stack

The application is structured for high performance, maintainability, and clean separation of concerns:

* **Framework Engine:** **Astro v7+** utilizing static site generation (SSG) to ensure zero client-side JavaScript overhead during initial document delivery.


* **Content Layer:** Markdown and **MDX** files act as route adapters that invoke dedicated Astro case-study presentation components.


* **Styling System:** Modular **SCSS** featuring scoped project design tokens, responsive grid layouts, and custom desktop framing rules.


* **Interactivity & UI:** Plain browser JavaScript handles navigation observers, History API deep-linking for workspaces, native HTML dialog modals, and form-to-`mailto` draft generation.
* **CI/CD Automation:** Fully automated deployment pipeline via **GitHub Actions** using `withastro/action@v2` targeting **Node.js 22.12.0** on root domain `mapant.github.io`.



---

## 4. Repository Directory Structure

```text
manoj-product-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages deployment pipeline
├── docs/
│   ├── references/                 # Detailed technical implementation guides
│   │   ├── main-portfolio-reference.md[cite: 35]
│   │   ├── integrated-channels-reference.md[cite: 34]
│   │   ├── ayu-docconnect-reference.md[cite: 32]
│   │   ├── ayu-sales-intelligence-reference.md[cite: 33]
│   │   └── telecom-reference.md[cite: 36]
│   ├── ayu-docconnect-validation.md[cite: 32]
│   ├── ayu-sales-intelligence-validation.md[cite: 33]
│   └── github-pages-root-migration.md
├── public/                         # Static assets (portraits, logos, case study graphics)
├── src/
│   ├── components/                 # Reusable UI components & section layouts
│   ├── data/
│   │   └── portfolio.js            # Centralized homepage content & product data
│   ├── layouts/
│   │   ├── PortfolioLayout.astro   # Homepage layout wrapper[cite: 35]
│   │   └── SiteLayout.astro        # Shared HTML document head & metadata[cite: 35]
│   ├── pages/
│   │   ├── index.astro             # Main portfolio homepage[cite: 35]
│   │   └── projects/               # Case study route adapters (MDX)[cite: 32, 33, 34, 35, 36]
│   └── styles/                     # Global and scuffed component SCSS files
├── astro.config.mjs                # Astro configuration (root site definition)[cite: 35]
├── package.json                    # Project dependencies and script runner
└── README.md                       # Repository documentation

```

---

## 5. Local Development & Setup Instructions

To run, test, or build this portfolio locally on your machine, follow these steps:

### Prerequisites

* Ensure you have **Node.js v22.12.0** (or higher) and **npm** installed.

### Step 1: Clone the Repository

```bash
git clone https://github.com/mapant/mapant.github.io.git
cd mapant.github.io

```

### Step 2: Install Dependencies

```bash
npm install

```

### Step 3: Run the Development Server

```bash
npm run dev

```

*(The local server will start and be accessible at `http://localhost:4321`)*

### Step 4: Build for Production

```bash
npm run build

```

*(Generates static output in the `dist/` directory)*

---

## 6. Comprehensive Documentation Index

For maintainers or engineers looking to modify or extend the codebase, detailed technical reference manuals are available inside the `docs/references/` directory:

1. **[Main Portfolio & Shared Architecture Reference](https://www.google.com/search?q=docs/references/main-portfolio-reference.md):** Covers the homepage structure, data contracts, shared shell components (`ProjectShell.astro`), asset management guidelines, and instructions for adding a new project.


2. **[Integrated Channels Suite Reference](https://www.google.com/search?q=docs/references/integrated-channels-reference.md):** Details the 12 application records (`APPS`), modal interaction loops, synthetic reporting tables, and presentation layouts.


3. **[Ayu DocConnect Reference](https://www.google.com/search?q=docs/references/ayu-docconnect-reference.md):** Documents the Doctor & Referral Measurement Framework, component hierarchies, icon mappings, and styling layers.


4. **[Ayu Sales Intelligence Reference](https://www.google.com/search?q=docs/references/sales-intelligence-reference.md):** Outlines the Field Sales Measurement Framework, capability dialog bindings, map illustrations, and sprite mappings.


5. **[Telecom Analytics Reference](https://www.google.com/search?q=docs/references/telecom-reference.md):** Explains the asset-centered architecture models, strategy matrices, trust pyramids, and command-centre preview structures.



---

## 7. Professional Connect & Links

* **Live Portfolio:** [https://mapant.github.io/](https://mapant.github.io/)

* **LinkedIn:** [Manoj Pant](https://www.google.com/search?q=https://www.linkedin.com/in/manoj-pant-35129495/)

* **Professional Email:** `manoj.pant.pm@outlook.com`
