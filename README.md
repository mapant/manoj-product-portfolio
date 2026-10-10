# Manoj Pant — Product Portfolio

**Senior Product Manager | Fintech · Healthcare · Field Sales · Enterprise Analytics**

An interactive portfolio presenting my product-management work across digital banking, doctor engagement, field-sales execution and telecom cost intelligence. The case studies connect business problems and user needs with product strategy, requirements, workflows, architecture, delivery, measurement and outcomes.

**[View the live portfolio](https://mapant.github.io/)** · **[Explore the case studies](https://mapant.github.io/#portfolio)** · **[Connect](https://mapant.github.io/#connect)**

## Portfolio overview

The main portfolio introduces my approach to product ownership through ten sections:

**Overview → Ecosystem → Challenge → Strategy → PM Scope → Product Metrics → Portfolio → Tech & Data → Outcomes → Connect**

Four dedicated case studies provide project-specific narratives, diagrams, product-interface illustrations and measurement frameworks. Each case study contains ten sections in a single page, with its own internal visual design and section navigation.

| Project | Focus | Live case study |
|---|---|---|
| **Integrated Channels Suite — M2P Fintech** | A connected twelve-application banking suite, configurable workflows, integrations, institutional deployment and product ownership | [Explore Integrated Channels](https://mapant.github.io/projects/integrated-channels/) |
| **Ayu DocConnect — Ayu Health** | Doctor engagement, digital referrals, patient-journey visibility, healthcare services and product measurement | [Explore Ayu DocConnect](https://mapant.github.io/projects/ayu-docconnect/) |
| **Ayu Sales Intelligence & Field Force Optimization — Ayu Health** | Prospect intelligence, beat planning, field visits, territory allocation, operational visibility and scoped pilot outcomes | [Explore Sales Intelligence](https://mapant.github.io/projects/ayu-sales-intelligence/) |
| **Telecom Analytics & Cost Optimization — Nokia Networks** | Asset identity, spatial visibility, operational and financial data, analytics trust and capital efficiency | [Explore Telecom Analytics](https://mapant.github.io/projects/telecom-cost-optimization/) |

The portfolio demonstrates product discovery, prioritisation, requirement definition, workflow design, cross-functional execution, adoption and data-informed improvement. Detailed outcomes retain the scope stated within each case study.

## Website implementation

The portfolio is a statically generated Astro website. Its project interfaces, maps, charts and architecture diagrams are native portfolio demonstrations. They illustrate the represented products; they do not connect to banking, healthcare, sales or telecom production systems.

| Responsibility | Technology |
|---|---|
| Pages and static generation | Astro |
| Project route adapters | MDX with `@astrojs/mdx` |
| Content and components | Astro components, semantic HTML and local JavaScript arrays |
| Layout, typography, cards and colors | SCSS/CSS, Grid, Flexbox, custom properties and system fonts |
| Diagrams, maps, icons and phone previews | Inline SVG, HTML and CSS |
| Navigation and workspace interactions | Plain browser JavaScript; custom workspaces in Integrated Channels and native dialogs in Sales Intelligence |
| Photographs, profile and logo assets | Local files in `public/`, plus native or embedded SVG markup |
| Build runtime | Node.js and npm |
| Hosting and deployment | GitHub Actions and GitHub Pages |

The active font stack is primarily **Segoe UI, Arial, sans-serif**. Technology names such as SQL, PostgreSQL, Python, Power BI, Tableau, GA/Mixpanel and Maps inside case-study diagrams describe product or delivery context. Installed website dependencies are defined in [`package.json`](package.json) and resolved by [`package-lock.json`](package-lock.json).

## Run locally

Use a Node.js version supported by the package engines: **`^22.12.0` or `^24.0.0`**. The deployment workflow currently uses **22.12.0**.

Clone and start the project in Windows PowerShell:

```powershell
git clone https://github.com/mapant/mapant.github.io.git manoj-product-portfolio
cd manoj-product-portfolio
npm.cmd ci
npm.cmd run dev
```

Open the development URL printed in the terminal, normally `http://localhost:4321/`. On other shells, use `npm` in place of `npm.cmd`.

| Command | Purpose |
|---|---|
| `npm.cmd ci` | Install the dependencies resolved by the lockfile |
| `npm.cmd run dev` | Start the local development server |
| `npm.cmd run build` | Generate the production site in `dist/` |
| `npm.cmd run preview` | Serve the generated production output locally |
| `git diff --check` | Check tracked changes for whitespace errors |

Run a build before previewing production output. Local preview does not publish the site.

## Repository structure

```text
.
├── .github/workflows/deploy.yml       # GitHub Pages build and deployment
├── docs/
│   ├── references/                   # Five maintenance guides and archived references
│   ├── ayu-docconnect-validation.md
│   ├── ayu-sales-intelligence-validation.md
│   ├── github-pages-root-migration.md
│   └── PROJECT_CONTEXT.md            # Historical project context
├── public/                           # Local photos, profile and asset files
├── src/
│   ├── components/
│   │   ├── sections/                 # Ten main-portfolio sections
│   │   └── ...                       # Shared shell and project-specific components
│   ├── data/portfolio.js             # Main content collections and project-card mapping
│   ├── layouts/                      # HTML document and homepage layout
│   ├── pages/
│   │   ├── index.astro               # Main portfolio route
│   │   └── projects/                 # Four MDX case-study route adapters
│   ├── scripts/                      # Navigation and stored scripts
│   └── styles/                       # Shared and project-specific SCSS
├── astro.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

The detailed guides distinguish active source files from retained legacy files. Do not edit generated `dist/` output or assume that a similarly named older component/script is used by the current page.

## Implementation and maintenance documentation

Start with the main guide, then read the guide for the project being changed.

| Guide | Coverage |
|---|---|
| [Main Portfolio](docs/references/main-portfolio-reference.md) | Shared architecture, homepage sections, file/data mapping, assets, layout, setup, deployment and the procedure for adding a project |
| [Integrated Channels Suite](docs/references/integrated-channels-reference.md) | Twelve application records, display mappings, workspace/deep-link behavior, icons, diagrams and project styles |
| [Ayu DocConnect](docs/references/ayu-docconnect-reference.md) | Ten sections, new measurement framework, branding, phase typography, phone/orbit diagrams, vendor logos and style ownership |
| [Ayu Sales Intelligence](docs/references/ayu-sales-intelligence-reference.md) | Component composition, seven workspace IDs, phone/map illustrations, photographic assets, measurement and pilot scope |
| [Telecom Analytics](docs/references/telecom-reference.md) | Asset/spatial/cost model, native diagrams, display-only dashboard preview, outcome scope and responsive rules |

Additional dated reports:

- [Ayu DocConnect validation](docs/ayu-docconnect-validation.md)
- [Ayu Sales Intelligence validation](docs/ayu-sales-intelligence-validation.md)
- [GitHub Pages root migration](docs/github-pages-root-migration.md)

[`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md) contains historical context. For the current file graph, route count and layout behavior, use the reference guides and verify against the source. Dated reports retain their original results and may describe an earlier worktree state.

## Making changes or adding projects

- **Main portfolio content:** start with `src/data/portfolio.js` and the corresponding component in `src/components/sections/`.
- **One case study:** use its dedicated guide to locate the owning component, data collection, SVG or stylesheet.
- **Shared header or page layout:** inspect `ProjectShell.astro`, the shared styles and route-specific overrides; validate every affected page.
- **New project:** add an MDX route, dedicated component and scoped styles; map its homepage card, assets, section anchors and previous/next links. Follow the complete checklist in the main guide, including card-grid density and artwork mappings.
- **Visual correction:** preserve approved wording, numerical scope, section order and project architecture. Compare the designated current reference before changing geometry.

Keep reference screenshots as specification/QA artifacts. Build portfolio UI natively rather than using screenshot slices or overlays. Preserve asset attribution, including the [vendor-logo license](public/ayu-docconnect/logos/DEVICON-LICENSE.txt).

The main portfolio contact form opens an email draft through the user's mail client. It does not submit to a server or confirm email delivery.

## Validation

After changing source:

```powershell
npm.cmd run build
git diff --check
git status --short
git diff --name-status
```

Inspect the affected sections at the established **1280 × 665 CSS viewport** and relevant smaller widths. Check text wrapping, lower rows, diagrams, loaded images, section anchors, active navigation and project links. Exercise workspace controls where applicable. Shared changes require checks across the main portfolio and all four case studies.

Build, page-fit and visual-reference fidelity are separate checks. The existing DocConnect and Sales reports record remaining visual differences; they do not certify every reference pixel as identical. **Native Chrome zoom: NOT VERIFIED.** Consult the dated reports for the exact validation scope and limitations.

## Deployment

The website is hosted at **[https://mapant.github.io/](https://mapant.github.io/)** from the repository **`mapant/mapant.github.io`**.

[`astro.config.mjs`](astro.config.mjs) uses `site: 'https://mapant.github.io'`, static output and directory-style routes. There is no subpath `base`, so root-relative project and asset links resolve under the primary domain.

[`deploy.yml`](.github/workflows/deploy.yml) runs on pushes to `main`. It checks out the repository, builds/uploads with `withastro/action@v2` using Node 22.12.0, and publishes with `actions/deploy-pages@v4`. The retained `build.yml.bak` is a backup, not an active workflow.

Review and validate changes before an authorised commit/push. After deployment, confirm the successful Actions run, published commit, project routes and assets. See the root-migration report for the old-repository backup and routing history.

## Contact

For product roles, advisory conversations or collaboration, use the **[Connect section](https://mapant.github.io/#connect)** of the live portfolio.
