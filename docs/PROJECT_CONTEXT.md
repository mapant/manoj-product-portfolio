# Manoj Pant — Product Management Portfolio
## Project Context

**Repository:** `mapant/manoj-product-portfolio`  
**Branch:** `main`  
**Local Repository:** `C:\Users\Manoj Pant\GitHub\manoj-product-portfolio`

---

# 1. Project Overview

This repository contains Manoj Pant's professional Product Management Portfolio website.

The portfolio is designed to present Manoj as a Senior Product Manager / Product professional with 11+ years of experience across:

- Telecom
- Healthcare
- Analytics / BI
- Fintech
- Enterprise Product Development
- Product Management
- Business Analysis
- Technical Business Analysis

The portfolio must demonstrate:

- Product strategy
- Product discovery
- Product management
- Requirement gathering
- Business analysis
- Technical analysis
- Product documentation
- Product architecture understanding
- Data and analytics
- Enterprise product delivery
- Stakeholder management
- Product roadmap and execution
- Product metrics and outcomes
- SaaS / enterprise product thinking
- Regulatory and compliance product experience

The portfolio must not position Manoj exclusively as a fintech or healthcare professional.

His broader professional background, particularly his Nokia / telecom and analytics experience, must remain visible.

---

# 2. Professional Background

Key positioning:

- 11+ years of overall professional experience
- Approximately 7 years of Nokia Networks / telecom experience
- Experience in analytics and BI
- Experience in healthcare
- Experience in fintech
- Experience in Product Management
- Experience in Business Analysis / Technical BA
- Experience in enterprise product development

Career progression:

```text
MIS / Reporting Analyst
        ↓
BI & Data Analyst
        ↓
Business Analyst
        ↓
Technical Business Analyst
        ↓
Senior Product Manager
```

Do not claim that Manoj has 10+ years of fintech experience.

Do not restrict his professional identity to fintech or healthcare.

Do not invent professional experience, responsibilities, technical ownership, certifications, qualifications, metrics, client counts, revenue figures, or outcomes.

---

# 3. Fixed Technology Architecture

The repository uses the following architecture:

```text
Astro
├── Pages
├── Routing
├── Layouts
├── Components
└── Static Generation

MDX
└── Structured portfolio and case-study content

SCSS / CSS
├── Visual system
├── Layout
├── Responsive behavior
└── Page-specific styling

JavaScript
└── Navigation / interactions / dynamic behavior

Semantic HTML
└── Structural foundation
```

This architecture is fixed unless Manoj explicitly requests an architectural change.

Do not replace the architecture with:

- React
- Vite/React application structure
- Tailwind
- Another framework
- A different rendering architecture

Do not revive old implementations or old repository architecture unless explicitly requested.

---

# 4. Technology Stack

Current verified versions:

```text
Node.js       v24.21.0
npm           v11.19.0
Astro         v7.3.5
@astrojs/mdx  v8.0.2
Sass          ^1.93.2
```

Development environment:

- Windows
- VS Code Desktop
- Git
- GitHub
- GitHub Copilot
- OpenAI Codex
- Chrome

---

# 5. Astro Configuration

Current `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  integrations: [mdx()],
  build: { format: 'directory' }
});
```

Important configuration decisions:

- Static output is intentional.
- MDX integration is intentional.
- Directory build format is intentional.
- Do not introduce SSR unless explicitly required.
- Do not introduce unnecessary Astro integrations.

---

# 6. Package Dependencies

Current important dependencies:

```json
{
  "dependencies": {
    "@astrojs/mdx": "^8.0.2",
    "astro": "^7.3.5",
    "sass": "^1.93.2"
  }
}
```

Do not change these dependencies casually.

Any dependency upgrade must be intentional and verified through:

```powershell
npm.cmd run build
```

and:

```powershell
npm.cmd audit
```

Do not run:

```powershell
npm.cmd audit fix --force
```

without explicitly reviewing the resulting dependency changes and potential breaking changes.

---

# 7. Security Baseline

The project previously contained dependency vulnerabilities involving Astro, esbuild, and sharp.

The previous audit reported:

```text
2 low
1 high
1 critical
```

The dependency upgrade was performed deliberately.

The project was upgraded to:

```text
Astro 7.3.5
@astrojs/mdx 8.0.2
```

After the upgrade:

```text
npm.cmd audit
```

returned:

```text
found 0 vulnerabilities
```

The current security baseline is therefore:

```text
0 vulnerabilities
```

---

# 8. Build Verification

The production build has been successfully verified after the Astro upgrade.

Command:

```powershell
npm.cmd run build
```

Result:

```text
6 page(s) built
Complete!
```

Successfully generated routes include:

```text
/
 /projects/aml-compliance/
 /projects/ayu-docconnect/
 /projects/integrated-channels/
 /projects/provider-payout/
 /projects/telecom-cost-optimization/
```

The existing portfolio successfully builds on Astro 7.3.5.

---

# 9. Development Server

Start the development server with:

```powershell
npm.cmd run dev
```

Local URL:

```text
http://localhost:4321/
```

The development server has been verified successfully with Astro 7.3.5.

---

# 10. Windows npm / PowerShell Note

PowerShell currently blocks the npm/npx `.ps1` wrappers because of the system execution policy.

Use:

```powershell
npm.cmd
```

instead of:

```powershell
npm
```

Examples:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd audit
npx.cmd @astrojs/upgrade
```

Node.js itself is installed and working.

Verified:

```text
node -v
v24.21.0
```

npm is installed and working.

Verified:

```text
npm.cmd -v
11.19.0
```

Do not change the PowerShell execution policy unless there is a specific reason to do so.

---

# 11. Git and GitHub

GitHub is the source of truth for this project.

Repository:

```text
https://github.com/mapant/manoj-product-portfolio
```

Primary branch:

```text
main
```

Local repository:

```text
C:\Users\Manoj Pant\GitHub\manoj-product-portfolio
```

The project intentionally works directly with `main`.

Normal workflow:

```text
Local VS Code repository
        ↓
Implementation
        ↓
Local verification
        ↓
Build
        ↓
Git review
        ↓
Commit
        ↓
Push to origin/main
        ↓
GitHub main
```

---

# 12. Current Git Baseline

Latest verified commit:

```text
c1ebe7a
```

Commit message:

```text
Upgrade Astro and MDX dependencies
```

The commit upgraded:

```text
Astro:
5.x → 7.3.5

@astrojs/mdx:
4.x → 8.0.2
```

The commit was successfully pushed to GitHub `main`.

Current verified state:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

The local repository and GitHub `main` are synchronized.

---

# 13. Git Identity

Current Git configuration:

```text
user.name  Manoj Pant
user.email manoj-pant@outlook.com
```

GitHub authentication has been successfully completed.

Git push to `origin/main` has been verified.

---

# 14. VS Code Setup

Development is performed using VS Code Desktop.

The repository is opened locally.

The previous GitHub Codespaces development connection has been closed.

The intended development environment is:

```text
Windows
  ↓
VS Code Desktop
  ↓
Local Git repository
  ↓
GitHub main
```

Do not reconnect to the old Codespaces environment unless explicitly requested.

---

# 15. GitHub Copilot

GitHub Copilot is installed and authenticated.

Use Copilot for:

- Inline code suggestions
- Code completion
- Small coding fixes
- Code explanation
- Alternative implementation ideas
- General coding assistance

Copilot must not introduce architectural changes without explicit approval.

---

# 16. OpenAI Codex

OpenAI Codex is installed and authenticated in VS Code.

Extension:

```text
Codex – OpenAI's coding agent
```

Publisher:

```text
OpenAI
```

Extension ID:

```text
openai.chatgpt
```

Use Codex for:

- Repository inspection
- Multi-file implementation
- Code changes
- Running commands
- Running builds
- Testing
- Debugging
- Refactoring
- Implementation review

---

# 17. AI Development Workflow

Recommended responsibility:

### ChatGPT

Use for:

- Requirements
- Product decisions
- Architecture decisions
- UI requirements
- Design review
- Screenshot review
- Requirement interpretation
- Implementation planning
- Final review

### Codex

Use primarily for:

- Repository implementation
- Multi-file changes
- Commands
- Build/test execution
- Debugging
- Refactoring

### GitHub Copilot

Use primarily for:

- Inline coding
- Small fixes
- Code completion
- Alternative suggestions

Do not have Copilot Agent and Codex modifying the same files simultaneously.

Use one implementation agent at a time.

---

# 18. Development Interaction Rule

Work one step at a time.

When providing instructions:

1. Give one action.
2. Wait for the result.
3. Review the result.
4. Give the next action.

Do not provide a long sequence of commands when the user expects step-by-step guidance.

For UI work:

1. Make one logical change.
2. Verify the result.
3. Review screenshot/output if available.
4. Continue with the next change.

---

# 19. Portfolio Structure

The portfolio contains the following primary sections:

1. Overview
2. Ecosystem
3. Challenge
4. Strategy
5. PM Scope
6. Product Metrics
7. Selected Product Portfolio
8. Tech & Data
9. Product Outcomes
10. Connect

These sections form the primary portfolio information architecture.

Do not remove, rename, or restructure them without an explicit requirement.

---

# 20. Current Project / Case Study Routes

Current project pages:

```text
src/pages/projects/integrated-channels.mdx
src/pages/projects/aml-compliance.mdx
src/pages/projects/ayu-docconnect.mdx
src/pages/projects/provider-payout.mdx
src/pages/projects/telecom-cost-optimization.mdx
```

Current portfolio projects:

### M2P Fintech
Integrated Channels Suite

### M2P Fintech
AML & Compliance Automation

### Ayu Health
Ayu DocConnect

### Phoneme / Ayu Health
Provider Payout Automation

### Nokia Networks
Telecom Analytics & Cost Optimization

---

# 21. Product and Domain Context

The portfolio should represent experience across:

- Telecom
- Healthcare
- Analytics
- Fintech
- Enterprise Products
- SaaS/Product Platforms

The Nokia / telecom experience is important and must remain visible.

The portfolio should not appear to represent a career exclusively in fintech.

---

# 22. M2P Product Context

The M2P portfolio includes an Integrated Channels Suite / Digital Banking Platform.

Relevant domain/application areas include:

- LOS
- LMS
- AML/KYC
- Reconciliation
- CKYC
- CMS
- Treasury
- GST
- FAM
- Audit
- DMS
- Shares
- CIBIL
- PM Schemes

Target clients:

- Banks
- NBFCs

The platform uses a modular architecture and Frappe framework.

The portfolio must represent this experience accurately without overstating technical ownership.

---

# 23. Product Management Responsibilities

Relevant responsibilities include:

- Requirement gathering
- BRD
- FRD
- FSD
- User manuals
- Product decks
- Stakeholder management
- Product roadmap
- Sprint planning
- UAT
- VAPT
- Product documentation
- DFDs
- ER diagrams
- Architecture diagrams
- API specification documentation
- Integration requirements
- Data mapping
- Compliance requirements
- Product analytics
- Product metrics
- Product delivery

---

# 24. Documented Product Outcomes

Current documented outcomes include:

```text
40% → 75% Doctor adoption

10 → 2 days Provider payout turnaround

25% Manual compliance effort reduction

20% Manual reconciliation reduction

30% Manual claim processing reduction

25% Telecom operating-cost reduction
```

Do not invent additional metrics.

New metrics must be explicitly supplied or approved.

---

# 25. Visual Design Direction

The portfolio should feel like a professional Product Management presentation.

It should be:

- Professional
- Premium
- Enterprise-oriented
- Product-focused
- Structured
- Data-driven
- Visually consistent
- Strong in hierarchy

It should not look like:

- A generic developer portfolio
- A basic blog
- A generic template
- A PDF viewer

---

# 26. Header and Navigation

The portfolio uses a dark-blue header/navigation system.

Requirements:

- Consistent across sections
- Appropriately fixed/sticky
- Clear active navigation state
- Native document navigation
- No artificial page scaling

---

# 27. Navigation Implementation

Navigation file:

```text
src/scripts/navigation.js
```

Navigation responsibilities:

- Find navigation links
- Find portfolio sections
- Update active navigation state
- IntersectionObserver
- Hash navigation
- Native document scrolling

Navigation must not:

- Scale the entire page
- Calculate artificial canvas dimensions
- Apply `transform: scale()`
- Detect browser zoom for application scaling
- Create a PDF-viewer-style viewport

---

# 28. Critical Layout Rules

The website must NOT use application-level scaling.

Never introduce:

```css
transform: scale(...)
```

for scaling the portfolio.

Never introduce:

```css
zoom: ...
```

for application-level browser zoom manipulation.

Never create JavaScript logic that:

- Detects browser zoom
- Calculates design width/height for scaling
- Scales the entire application
- Forces a rigid desktop canvas
- Counteracts browser zoom

Browser zoom must remain controlled by the browser.

---

# 29. Presentation Container

The presentation container follows this concept:

```css
width: 100%;
max-width: 1440px;
aspect-ratio: 16 / 10;
margin-inline: auto;
```

Equivalent conceptual utility structure:

```text
aspect-[16/10]
w-full
max-w-[1440px]
mx-auto
```

The container must:

- Preserve 16:10 proportions
- Scale fluidly
- Remain centered
- Preserve structural integrity
- Work naturally with browser zoom
- Avoid JavaScript scaling

---

# 30. 1920 × 1200 Reference

The historical design/reference resolution is:

```text
1920 × 1200
```

This represents a 16:10 ratio.

It is a design/reference target only.

Do NOT create a rigid 1920px CSS canvas.

The current layout approach is:

```text
width: 100%
max-width: 1440px
aspect-ratio: 16/10
margin-inline: auto
```

---

# 31. Browser Zoom

Browser zoom must remain browser-controlled.

The application must not counter-scale itself.

At lower browser zoom:

- The container can naturally appear smaller.
- Blank surrounding margins are acceptable.
- The container should remain centered.
- Structural proportions must remain intact.
- The application must not artificially enlarge the content.

At higher browser zoom:

- Native browser behavior should control the viewport.
- The application must not apply inverse scaling.

---

# 32. Scrolling

Avoid nested scrollbars.

Do not create:

- Scrollable page inside scrollable page
- Inner vertical scrolling containers
- Fixed-height wrappers that create unnecessary scrolling
- PDF-viewer-like scrolling

Preferred model:

```text
Browser viewport
      ↓
Normal document scroll
      ↓
Portfolio sections
```

---

# 33. Responsive Design

Use native CSS for responsive behavior.

Preferred tools:

- CSS Grid
- Flexbox
- `aspect-ratio`
- `max-width`
- `min-width`
- `clamp()`
- Media queries
- Fluid spacing
- Fluid typography

Do not use JavaScript to scale the entire application.

---

# 34. Previous Layout Problems

Previous implementations experienced:

- Rigid 1920px canvas
- JavaScript scaling
- `transform: scale()`
- PDF-viewer-like behavior
- Blank margins
- Clipped layouts
- Nested scrollbars
- Header positioning problems
- Browser zoom compensation

These approaches are not acceptable for the current implementation.

---

# 35. Important Files

Important files include:

```text
astro.config.mjs
package.json
package-lock.json

src/
├── layouts/
│   ├── PortfolioLayout.astro
│   └── SiteLayout.astro
│
├── pages/
│   ├── index.astro
│   └── projects/
│       ├── integrated-channels.mdx
│       ├── aml-compliance.mdx
│       ├── ayu-docconnect.mdx
│       ├── provider-payout.mdx
│       └── telecom-cost-optimization.mdx
│
├── scripts/
│   └── navigation.js
│
└── styles/
    ├── portfolio.scss
    └── responsive-layout.scss
```

---

# 36. Legacy Files

Older implementation files may exist.

Do not automatically reuse them.

For example:

```text
src/styles/responsive-layout.scss
```

may contain older layout logic.

Before reusing legacy code:

1. Inspect it.
2. Determine whether it is currently imported.
3. Determine whether it conflicts with the current architecture.
4. Reuse it only when appropriate.

---

# 37. Known Current Issue

The development server previously reported:

```text
[404] /profile/profile.jpg
```

This indicates that something in the project still references:

```text
/profile/profile.jpg
```

The issue is separate from the Astro security upgrade.

Before changing anything, locate the reference with:

```powershell
git grep -n "profile.jpg"
```

Then determine whether:

- The reference is obsolete.
- It should point to an existing asset.
- The intended asset is missing.

Do not blindly create or replace the image.

---

# 38. Asset Rules

Before creating a replacement asset:

1. Inspect existing assets.
2. Locate all references to the asset.
3. Determine the intended source.
4. Make the smallest appropriate change.

Do not:

- Create duplicate assets unnecessarily.
- Rename assets without checking references.
- Replace working assets.
- Break existing asset paths.

---

# 39. Content Accuracy

Do not fabricate:

- Experience
- Years of domain experience
- Product ownership
- Metrics
- Revenue
- Cost savings
- Client counts
- Technical implementations
- Certifications
- Qualifications
- Product outcomes

Use confirmed project information only.

---

# 40. Reference Material

For specific portfolio tasks, Manoj may provide:

- Requirement PDFs
- Reference PDFs
- Current screenshots
- Target screenshots
- Resume documents
- Product documents
- Design references
- Specific UI requirements

Those materials must be reviewed before implementing the related task.

The supplied requirement/reference material is the source of truth for that specific task.

Do not replace explicit requirements with generic assumptions.

---

# 41. Screenshot Review

When screenshots are provided, review:

- Header
- Navigation
- Section positioning
- Alignment
- Typography
- Spacing
- Grid
- Cards
- Images
- Scrollbars
- Clipping
- Browser zoom
- Blank margins
- Responsive behavior
- Overall visual hierarchy

A successful build does not automatically mean the visual implementation is correct.

---

# 42. Safe Development Workflow

Before significant work:

```powershell
git status
```

Inspect the current state before editing.

After implementation:

```powershell
npm.cmd run dev
```

Verify the browser.

Then:

```powershell
npm.cmd run build
```

Review changes:

```powershell
git diff
```

Stage only intended files:

```powershell
git add <specific-files>
```

Verify:

```powershell
git status
```

Commit:

```powershell
git commit -m "Clear descriptive message"
```

Push:

```powershell
git push origin main
```

Verify:

```powershell
git status
```

---

# 43. Git Safety Rules

Never run the following blindly:

```text
git reset --hard
git clean -fd
git restore .
```

If unexpected changes exist:

1. Inspect `git status`.
2. Inspect `git diff`.
3. Determine what changed.
4. Preserve user work.
5. Only then decide what should be modified or reverted.

Do not destroy existing work simply to obtain a clean Git state.

---

# 44. Commit Rules

Each commit should represent one logical change.

Do not unnecessarily combine:

- Dependency upgrades
- UI redesign
- Asset fixes
- Content changes
- Architecture changes

into a single commit.

Review the staged files before committing.

---

# 45. Current Verified Baseline

```text
Repository:
mapant/manoj-product-portfolio

Branch:
main

Latest commit:
c1ebe7a

Commit:
Upgrade Astro and MDX dependencies

Node.js:
24.21.0

npm:
11.19.0

Astro:
7.3.5

@astrojs/mdx:
8.0.2

Sass:
^1.93.2

Build:
6 pages successfully built

Security audit:
0 vulnerabilities

Git:
working tree clean

Remote:
origin/main synchronized
```

---

# 46. Completed Setup

```text
Git installation                         ✓
Repository cloned locally                ✓
VS Code Desktop                          ✓
Local repository opened                  ✓
Repository trusted                       ✓
GitHub authentication                    ✓
Git push verified                        ✓
GitHub Copilot installed                 ✓
GitHub Copilot authenticated             ✓
OpenAI Codex installed                   ✓
OpenAI Codex authenticated               ✓
Node.js installed                        ✓
npm installed                            ✓
Astro configured                         ✓
MDX configured                           ✓
Astro upgraded to 7.3.5                 ✓
MDX upgraded to 8.0.2                   ✓
Production build verified                ✓
Development server verified              ✓
Security audit verified                  ✓
Git commit created                       ✓
GitHub main updated                      ✓
Local main synchronized                  ✓
```

---

# 47. Current Pending Work

```text
1. Investigate /profile/profile.jpg 404.

2. Continue portfolio UI implementation.

3. Review portfolio sections against the latest requirement/reference material.

4. Perform screenshot-based visual verification.

5. Continue improving the portfolio without changing the fixed architecture.
```

---

# 48. Rules for AI Coding Agents

Any AI coding agent working on this repository must follow these rules:

### Architecture

- Use Astro.
- Use MDX.
- Use SCSS/CSS.
- Use JavaScript only for interaction/dynamic behavior.
- Use semantic HTML.
- Do not replace the architecture with React/Tailwind.
- Do not revive old implementations.
- Do not change architecture without explicit approval.

### Layout

- Do not create a rigid 1920px canvas.
- Do not use JavaScript page scaling.
- Do not use `transform: scale()` for application scaling.
- Do not use CSS `zoom`.
- Do not compensate for browser zoom with JavaScript.
- Preserve the 16:10 presentation-container approach.
- Use native responsive CSS.
- Avoid nested scrollbars.
- Preserve normal document scrolling.

### Content

- Do not invent experience.
- Do not invent metrics.
- Do not exaggerate technical ownership.
- Do not claim 10+ years of fintech experience.
- Keep telecom, Nokia, analytics, healthcare, and fintech experience accurately represented.

### Git

- Check `git status` before significant changes.
- Inspect existing code before modifying it.
- Do not discard unknown changes.
- Stage only intended files.
- Review `git diff` before committing.
- Build before significant commits.
- Push only verified changes.
- Keep unrelated changes separate.

### AI workflow

- Work one logical task at a time.
- Do not use Copilot and Codex simultaneously on the same files.
- Review supplied requirement PDFs/screenshots before implementing related changes.
- Do not replace explicit requirements with generic assumptions.
- Verify implementation before committing.

---

# 49. New Chat / New Agent Context

When starting a new development conversation, use this file as the project context.

The current task-specific requirement may additionally include:

- Requirement PDF
- Reference screenshots
- Current screenshots
- Design references
- Product documents
- Specific implementation instructions

The task-specific material should be reviewed together with this project context.

The project architecture and rules in this document remain applicable unless Manoj explicitly changes them.

---

# 50. Project Objective

The objective is to build a professional Product Management Portfolio that accurately demonstrates:

- Product Management capability
- Product strategy
- Product discovery
- Product delivery
- Business analysis
- Technical analysis
- Analytics
- Product documentation
- Enterprise product development
- Architecture understanding
- Stakeholder management
- Product outcomes
- Telecom experience
- Healthcare experience
- Fintech experience
- SaaS / enterprise product thinking

The website must combine:

```text
Accurate professional content
+
Strong product positioning
+
Professional visual design
+
Native responsive behavior
+
Reliable technical implementation
+
Maintainable Astro architecture
```

The project should evolve incrementally while preserving the established architecture and verified GitHub `main` baseline.
```