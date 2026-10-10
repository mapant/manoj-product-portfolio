# Integrated Channels Suite — implementation and maintenance reference

**Verified:** 10 October 2026, source/live baseline `1269e9d`.  
**Live page:** [Integrated Channels Suite](https://mapant.github.io/projects/integrated-channels/).  
**Read first:** [Main portfolio and shared architecture](main-portfolio-reference.md).

## 1. Purpose, route and architecture

This case study presents the M2P Fintech digital banking suite and the product-management work around twelve applications. It is a native portfolio presentation with explanatory workspaces, not a running banking platform.

```text
src/pages/projects/integrated-channels.mdx
  -> IntegratedChannelsCaseStudy.astro
     -> ProjectShell.astro -> SiteLayout.astro
     -> IntegratedChannelsPresentation.astro
        -> IntegratedChannelsIcon.astro
        -> IntegratedChannelsBrandMark.astro
     -> inline workspace JavaScript + serialized APPS data
```

The MDX file contains title/company frontmatter and one Astro component invocation. The actual page title, navigation and content are owned by the case-study components. `ProjectShell` is configured with custom ten-section navigation, `View Projects` linking to `/#portfolio`, `viewportFitPrototype={true}` and `showProjectFooter={false}`. The presentation contains its own final-section project navigation.

Previous project: Telecom. Next project: Ayu DocConnect. The wrapper props and authored final navigation are separate places to inspect when this project order changes.

## 2. Complete project file map

| File | Contents / responsibility | How to modify safely |
|---|---|---|
| `src/pages/projects/integrated-channels.mdx` | File-based route adapter; title/company metadata | Keep its slug and homepage `products.url` aligned |
| `src/components/IntegratedChannelsCaseStudy.astro` | ProjectShell props, ten nav IDs, canonical `APPS` records, modal markup and active inline workspace script | Use for workspace content, links and interaction behavior |
| `src/components/IntegratedChannelsPresentation.astro` | Ten authored section layouts, narrative arrays, app display dictionaries, technology/metric/leadership content | Use for page copy, visible card labels and section composition |
| `src/components/IntegratedChannelsIcon.astro` | Named inline SVG geometry, fill/stroke variants and CSS class handling | Extend the correct icon key rather than substituting a text glyph |
| `src/components/IntegratedChannelsBrandMark.astro` | Native SVG M2P/company branding variants | Preserve its viewBox, paths and current sizing contract |
| `src/styles/integrated-channels-case-study.scss` | Project palette, proportional `ic()` sizing, all sections, app positions, modal and responsive behavior | Main project-specific style owner |
| `public/ics/ics-challenge-bank.png` | Standalone bank photograph in Challenge | Review both asset and CSS crop when changing it |
| `public/ics/ics-pm-scope-photo.png` | Standalone PM/work photograph in PM Scope | Does not contain the whole page UI |
| `src/styles/docconnect-overview-prototype.scss` | Imported existing prototype/header/layout layer | Shared dependency despite its DocConnect name; do not treat as ICS-only |
| `src/components/ProjectShell.astro`, `src/layouts/SiteLayout.astro`, `src/styles/project-case-study.scss` | Shared document/header/general case-page foundations | Changes require regression checks on all four projects |
| `src/data/portfolio.js` | Homepage summary/card/link for this case study | Not the source of this detailed page's narratives |

**Not active here:** `src/scripts/integrated-channels.js`, `ProjectCaseStudyShell.astro`, `CaseStudyPage.astro`, `case-study.scss`. The old script uses different selectors and a second `APPS` schema; it is not imported by this route. `page-view.scss` contains selectors mentioning `.ics-case`, but **this route does not import that file**. Do not assume every stylesheet containing an ICS selector is loaded on the ICS page.

`public/profile/m2p-logo.svg` is stored but the active project uses `IntegratedChannelsBrandMark`. The shared header uses `/profile/portrait.jpg`.

## 3. Section order, data mapping and rendering technology

| Order / anchor | Information mapped | Layout, cards, illustrations and diagrams |
|---|---|---|
| 1 / `#overview` | Literal suite narrative; `overviewPillars`, `overviewPillarIconNames` | Native HTML narrative, suite visual and three capability pillars; CSS surfaces, SVG branding/icons |
| 2 / `#ecosystem` | `apps`, `displayName`, `ecosystemIcons`, `ecosystemTones` | Twelve positioned app launchers around the banking ecosystem; native connectors/nodes, `data-open` buttons |
| 3 / `#challenge` | `challenges`, `challengeThemes` | Narrative, six challenge cards, standalone bank photo and impact themes; HTML/Grid/SVG icons |
| 4 / `#strategy` | `strategyPillars`, `strategicPriorities` | Four strategy pillars, ecosystem integration concept and priority strip; CSS grids and native diagram elements |
| 5 / `#pm-scope` | `responsibilities`, `deliverables`, `tools`, `deliveryStages` | Product responsibilities, evidence/deliverables, tool logos, delivery sequence and PM photograph |
| 6 / `#product-metrics` | `metricCards`, `useCases`, `frameworks`, `decisionLenses` | Authored measurement cards/frameworks and product-decision content; no analytics fetch |
| 7 / `#portfolio` | `apps`, app display/category/description/icon/tone dictionaries; `portfolioHighlights`, `portfolioValues` | Twelve product-workspace launch cards plus side information and value panels; native HTML buttons |
| 8 / `#tech-data` | `architectureLayers`, `integrations`, `technologies`, `technologyBrands` | Suite architecture layers, integrations and technology strip; HTML nodes, SVG icons/logos and CSS connectors |
| 9 / `#outcomes` | `outcomeMetrics`, `institutionImpacts`, `businessOutcomes` | Authored outcome values and institutional/business impact cards; HTML/CSS, not live bank reporting |
| 10 / `#product-leadership` | `leadershipCompetencies`, `capabilities`, `connectWays` | Leadership cards, product capability examples, connect banner and project navigation |

All sections are authored in `IntegratedChannelsPresentation.astro`. The data prop `apps={APPS}` links the canonical application records to both Ecosystem and Portfolio launchers. Main portfolio IDs such as `#metrics` do not replace this route's `#product-metrics`.

## 4. Canonical application data and display dictionaries

The current application order is:

| ID | Name in canonical record |
|---|---|
| `audit` | Audit |
| `fam` | FAM |
| `gst` | GST |
| `los-lms` | LOS–LMS |
| `cms` | CMS |
| `shares` | Shares |
| `pm-schemes` | PM Schemes |
| `cibil` | CIBIL |
| `reconciliation` | Reconciliation |
| `aml-kyc` | AML–KYC |
| `treasury` | Treasury |
| `dms-ckyc` | DMS & CKYC |

Each `APPS` object contains:

| Field | Usage |
|---|---|
| `id` | Stable launcher lookup and `#app/<id>` deep link |
| `name`, `category`, `color` | Workspace title/category/theme and fallbacks |
| `purpose`, `problem` | Workspace product brief |
| `capabilities`, `users`, `integrations` | Feature list, role list and conceptual integration landscape |
| `workflow` | Ordered explanatory journey steps |
| `reports` | Synthetic dashboard/report table |
| `pm` | Product-management contribution bullets |
| `api`, `error` | Example contract path and representative guardrail text |
| `learning` | Product learning paragraph |

Presentation dictionaries additionally include `displayName`, `displayCategory`, `cardDescriptions`, `ecosystemIcons`, `portfolioIcons`, `ecosystemTones`, `portfolioTones`, `portfolioDisplayName`. These intentionally affect visible launch-card wording/iconography independently of the modal's canonical records.

A record change does **not** automatically update every descriptive dictionary. Some current summaries and modal wording differ, including CMS/financial-module descriptions. Review the exact approved source for the affected view; do not silently merge or rewrite them. An application addition/reorder also changes numbered CSS node positions (`ics-node-*`) and the spatial diagram, not just the record count.

## 5. Workspace interaction contract

The active code is the inline `<script is:inline define:vars={{ appData: APPS }}>` inside `IntegratedChannelsCaseStudy.astro`.

1. Astro serializes the local records into `appData` during rendering.
2. Every `[data-open]` button looks up its matching `id`.
3. `showApp` populates `#dbadge`, `#dname`, `#dcat`, `#dbody`, opens `#backdrop`, sets `aria-hidden=false` and locks body scrolling with `ics-modal-open`.
4. The URL is updated with `history.replaceState` to `#app/<id>`; the previous section hash is retained for closing.
5. Close button, outside-backdrop click and Escape call `closeApp`; body scrolling resumes and the stored section hash returns.
6. Loading a valid `#app/<id>` directly opens its workspace.

Rendered string values pass through `esc()` before being inserted into `innerHTML`. Preserve this escaping when extending the template. All `/api/v1/...` paths and the `IC-DEMO-001` request payload are **displayed conceptual examples**, not HTTP requests or working endpoints. Tables are synthetic reporting specifications, not client data.

The modal body has its own overflow handling for long detail content. This is separate from normal section composition. The current custom handler is not a native `<dialog>` and does not explicitly implement a focus trap/restoration routine; a future accessibility change should account for that while retaining close/deep-link behavior.

## 6. Actual visual technology and assets

| Element | Technology / source |
|---|---|
| Page and header | Astro HTML via ProjectShell; shared plus imported prototype/project SCSS |
| Typography | Inherited `"Segoe UI", Arial, sans-serif`; project font sizes/weights in ICS SCSS |
| Palette | `--ics-ink: #102d56`, `--ics-copy: #4b6d91`, `--ics-navy: #082e58`, `--ics-blue: #087ff0`, `--ics-line: #d5e6f8`; local card tones |
| Cards | HTML articles/buttons, CSS Grid/Flex, literal border/radius/shadow/gradient rules |
| Icons | `IntegratedChannelsIcon.astro`, native SVG paths; project rendering uses SVG geometry rather than a hosted icon library |
| Branding | `IntegratedChannelsBrandMark.astro`, inline SVG |
| Ecosystem/architecture | HTML nodes plus native SVG/CSS line and shape treatment |
| Photographs | Two local PNGs under `/ics/`, with crop/sizing controlled by ICS SCSS |
| Profile | Shared local `/profile/portrait.jpg` |
| Workspace UI | Local HTML generated by plain browser JavaScript |

The professional technology labels in Tech & Data describe the banking platform and delivery tooling; they are not additional installed website frameworks or integrations. There is no bank connection, payment submission, external client-data source, CMS, CDN photo or active webfont load on this page.

## 7. Current frame and CSS cascade

The desktop `.ics-section` frame is sized by the active ICS stylesheet: full layout width, header `11.8dvh`, section height `calc(100dvh - var(--header-h))`, hidden section overflow. The `ic($baseline)` Sass helper converts a baseline CSS-pixel dimension to `baseline / 12.8` container-width units (`cqw`). It sizes local native elements; it is not `transform: scale()`.

At the inspected **1280 × 665** viewport, header height was **78.47px** and all ten section frames were **1265 × 586.52px**. The scrollbar accounts for the 15px layout-width reduction. These measured frames are not strict 16:10 rectangles.

Current layers to inspect are shared `project-case-study.scss`, imported `docconnect-overview-prototype.scss`, then project-specific ICS rules and their desktop/mobile conditions. Astro may bundle styles; inspect the winning computed declaration rather than relying only on source import order. ICS has 761px desktop and 760px/480px mobile breakpoints. Its proportional sizing, minimum font values and fixed layout rows must be reviewed together at smaller viewports.

## 8. Future modification sequence

| Change | Files/fields to review |
|---|---|
| Visible launch-card title/description | Presentation display dictionaries, then canonical record if approved |
| Workspace body/guardrail/report | `APPS` in the case-study wrapper and modal template |
| New application | Canonical record, all icon/tone/display dictionaries, diagram node CSS, application count/labels and both launch grids |
| Diagram connector/node problem | Presentation native geometry plus matching ICS selector; preserve IDs and line direction |
| Typography/card density | Owning ICS rule, `ic()` unit, grid row and section boundaries |
| Photo/crop | Corresponding PNG plus CSS object size/position; never substitute a reference UI crop |
| Branding/icon geometry | Dedicated project SVG components |
| Homepage summary | `products` entry in `src/data/portfolio.js` |
| Previous/next order | Wrapper props and authored final-section navigation |

Before editing, search the exact text/selector, identify the active file and compare the approved reference. Preserve authored claims, twelve application identities, synthetic-data labels and current architecture. Do not import the old explorer script or reintroduce its print/search architecture as a shortcut.

## 9. Challenges and current limits

- The old explorer script and current inline script have similar names but different DOM/data contracts. Editing the old file would have no live effect.
- Application IDs feed records, display dictionaries, SVG icon selection, spatial node numbering and deep links. Partial changes can create mismatched launches or descriptions.
- Product/architecture narratives are dense; hidden section overflow can conceal a lower row after a copy or font change. Build success alone does not prove fit.
- Prototype CSS is shared with DocConnect. A change there can affect an approved project even when made during ICS work.
- Root-relative links previously opened the old root-site portfolio; the root deployment now resolves them to the new site.
- Exact visual-reference pixel equality has not been newly measured for this documentation task. Native Chrome zoom remains unverified.

Current live verification: HTTP 200, HTML matches the current production build, ten measured sections, no broken HTML images, horizontal document overflow or missing nav anchors at baseline. This audit did not rerun every workspace opening or perform a new photographic/pixel-fidelity review.

## 10. Validation and history for the next maintainer

After a project edit, build with `npm.cmd run build`; run `git diff --check` and inspect the changed paths. At 1280 × 665, visit all ten anchors and inspect every dense lower row. Open all twelve Ecosystem launchers and all twelve Portfolio launchers; confirm the correct title/record, close button, Escape, backdrop click, direct `#app/<id>` loading and return hash. Confirm photographs, icon paths, local resource URLs, homepage links and previous/next navigation.

If a shared shell/prototype rule changes, check all affected routes. If a breakpoint changes, test its boundaries. For an accessibility change, check keyboard focus and scroll restoration explicitly. Do not equate viewport emulation with native zoom verification. Follow the user's commit/push authorization; these guides are not a deployment instruction.

Git history: route adapter/initial wrapper already existed on 1 October (`e1f2e26`, `ea61f35`); the current presentation was introduced in `b6349e1` on 7 October. The SVG brand/icon components and two photographs were introduced in `b1707de`, also on 7 October. Shared/ICS design foundations were introduced in `21f53f3` on 6 October and later modified. The currently published root-site baseline includes these files through `1269e9d`.

Update this guide when record fields, active imports, diagram positions, asset sources, interaction behavior or validation results change. The main guide contains the cross-project addition/release procedure.
