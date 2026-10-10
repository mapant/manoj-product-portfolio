# Ayu DocConnect — implementation and maintenance reference

**Verified:** 10 October 2026, source/live baseline `1269e9d`.  
**Live page:** [Ayu DocConnect](https://mapant.github.io/projects/ayu-docconnect/).  
**Read first:** [Main portfolio and shared architecture](main-portfolio-reference.md).

## 1. Purpose and rendering architecture

This case study explains the doctor-engagement, referral and patient-journey platform. Its phones, dashboards and architecture are native portfolio illustrations, not a working healthcare application or a connection to patient records.

```text
src/pages/projects/ayu-docconnect.mdx
  -> DocConnectCaseStudy.astro
     -> ProjectShell.astro -> SiteLayout.astro
     -> AyuHealthBrand.astro
     -> DocConnectIcon.astro
     -> DocConnectLandscape.astro
     -> DocConnect base/prototype/reference SCSS layers
```

MDX is the route adapter. `DocConnectCaseStudy.astro` owns all ten sections, local content arrays, native diagrams and phone previews. It passes custom navigation, `View Projects` → `/#portfolio`, `showProjectFooter={false}`, `viewportFitPrototype={true}` and `profileImage="/profile/portrait.png"` to `ProjectShell`. Previous project is Integrated Channels; next is Sales Intelligence. Separate project navigation appears in the final authored section.

## 2. Complete file and asset map

| File | What it contains / controls |
|---|---|
| `src/pages/projects/ayu-docconnect.mdx` | Title/company frontmatter, Astro component import and route invocation |
| `src/components/DocConnectCaseStudy.astro` | Ten section markup blocks, all project data collections, section navigation, literal copy, diagrams, phone UI and project links |
| `src/components/AyuHealthBrand.astro` | Native SVG Ayu Health identity; optional project descriptor and class prop |
| `src/components/DocConnectIcon.astro` | Named SVG icon paths and special geometry; inline technology-logo markup |
| `src/components/DocConnectLandscape.astro` | Reusable landscape SVG with a same-origin mountain photograph plus native gradients/paths; ID prefixes derive from its class |
| `src/styles/docconnect-case-study.scss` | Base `.dc-*` visual vocabulary, layout, cards, diagrams, typography and tone definitions |
| `src/styles/docconnect-overview-prototype.scss` | Existing prototype/header/viewport geometry and Overview workspace treatment; also imported by Integrated Channels |
| `src/styles/docconnect-reference-layout.scss` | Detailed section refinements, final scoped readability, Metrics replacement, hero/phone/orbit/PM typography and landscape contrast overrides |
| `public/ayu-docconnect/doctor-portrait.png` | Standalone doctor image used in Overview and Portfolio |
| `public/ayu-docconnect/doctor-portrait-challenge-phone.png` | Current Challenge doctor-with-phone image |
| `public/ayu-docconnect/doctor-portrait-challenge.png` | Earlier stored doctor asset; not the current Challenge image source |
| `public/ayu-docconnect/mountain-light-trail.png` | Photograph referenced inside `DocConnectLandscape`; supplies the three lower landscape strips |
| `public/ayu-docconnect/logos/{postgresql,python,figma,github}.svg` | Stored vendor SVG sources; the current icon component embeds their SVG markup rather than requesting external logos |
| `public/ayu-docconnect/logos/DEVICON-LICENSE.txt` | MIT attribution/license for these vendor logo sources; retain it |
| `public/profile/portrait.png` | This route's explicit header profile override |
| `docs/references/ayu-docconnect/overview-reference.png` | Archived specification image; not loaded as website UI |
| `docs/references/ayu-docconnect/reference-pages/page-01.jpg` through `page-10.jpg` | Ten archived flattened reference pages; comparison/specification only |
| `docs/ayu-docconnect-validation.md` | Prior targeted-correction results and explicit fidelity limits |
| `src/data/portfolio.js` | Homepage DocConnect summary, statistics and route link; independently authored from this page |

Shared dependencies: `ProjectShell.astro`, `SiteLayout.astro`, `project-case-study.scss`. Their complete roles are in the main guide. No DocConnect-specific browser script is currently present; active-section behavior comes from ProjectShell.

## 3. Section map: content, technology and visual arrangement

| Order / anchor | Content sources | Layout / visual technology |
|---|---|---|
| 1 / `#overview` | Literal approved hero narrative and value statements | Standalone Ayu Health identity; left narrative, doctor photograph, native angled DocConnect workspace, three action tiles, care-stage flow, stakeholder cards, SVG connectors and lower three-value row |
| 2 / `#ecosystem` | `ecosystemNodes`, `ecosystemOutcomes`; literal narrative | Dark story panel, six stakeholder nodes around the Ayu DocConnect hub, SVG connectors and four outcome cards; HTML/Grid, SVG icons, pastel surfaces |
| 3 / `#challenge` | `challenges`, `fragmentation`; literal story | Four problem cards, Challenge doctor photo with native callouts, fragmentation/impact strip; Grid, local PNG and SVG icons |
| 4 / `#strategy` | `strategyCards`; literal checks/priorities | Four strategy cards around a native four-color directional orbit; center Ayu DocConnect identity and priority strip |
| 5 / `#pm-scope` | `phases`, `phaseTypography`; literal narrative/result | Six numbered phases with heading/description areas and separate deliverable lists; dotted SVG step connectors and landscape impact strip |
| 6 / `#product-metrics` | `coreSignals`, `handoffMeasures`, `doctorLifecycle`, `measurementWorkflows`; literal new framework copy | Blue narrative panel, six core signals, referral handoff flow, three handoff measures, lifecycle panel, four workflow cards and bottom decision strip; entirely HTML/CSS/SVG |
| 7 / `#portfolio` | `modules`, `uxHighlights`, `journeySteps`; literal phone fixtures | Six product modules, three native angled phone mockups, four UX highlights, five journey steps and doctor asset; CSS devices/SVG, no app iframe |
| 8 / `#tech-data` | `integrations`, `techStack`; inline architecture-node arrays | Four architecture layers, six integration cards and ten technology cards; pastel HTML nodes, SVG logos, dashed connectors |
| 9 / `#outcomes` | `outcomeMetrics`, `adoption`, `ecosystemValue`; literal growth/journey narrative | Five metric summaries, adoption bars, referral growth, patient-stage flow, stakeholder rows and landscape takeaway strip |
| 10 / `#product-leadership` | `leadershipCards`; literal capability-map/connect copy | Native collaboration hub/connector diagram, four leadership cards, landscape connect strip and previous/home/next links |

The `pages` collection supplies section metadata: ID, class, stored reference ratios, number and caption. The component applies `--reference-ratio` values, but the current desktop viewport overrides set section aspect ratio to `auto`. Editing a stored ratio does not necessarily change the actual page frame. Some old captions/unused base styles may predate the Metrics replacement; trace whether they are rendered and visible before editing them.

## 4. The Product Metrics replacement: exact content map

The active section is **Doctor & Referral Measurement Framework**, with the subtitle **Specific product signals tied to doctor value and patient progression.** This replaced the older acquisition funnel, referral conversion chart, adoption percentages, North Star strip and Product Health Framework. Those old designs must not be restored from an archived image, older report or base CSS class.

| Group | Ordered native content |
|---|---|
| Core Product Signals | Doctor Activation; Active Doctor Usage; Repeat Referral Rate; Referral Conversion; Journey Visibility; Payout Turnaround |
| Referral Journey: Measure Every Handoff | Referral → OPD → IPD → Discharge → Follow-up |
| Handoff measures | Conversion; Timeliness; Completeness |
| Doctor Lifecycle & Retention | Onboarding; Engagement; Retention; product-decision row |
| Workflow Adoption & Operational Health | Patient Referrals & Tracking; Incentives & Earnings; Extended Services; Support & Reliability; each has MEASURE and INFORMS copy |
| Product Decisions Driven by Measurement | Onboarding simplification; Doctor engagement; Referral bottlenecks; Workflow prioritisation |

`coreSignals` uses arrays for title lines and description lines; `handoffMeasures` and `measurementWorkflows` also carry deliberate text-line arrays. Their `<span>` rendering determines approved wrapping. Icon concepts are looked up by name in `DocConnectIcon`; connectors are native SVG. Some card backgrounds intentionally override their inherited tone, so changing a global tone alone can produce the wrong surface.

The only approved reference exceptions were retention of the existing global portfolio header and the blue-theme narrative panel. The existing validation report nevertheless records **100% pixel-perfect Product Metrics fidelity: FAIL**. Native structure/wording and baseline fit passed in that dated report; exact font finish, gradients and reference-relative dimensions did not. This guide does not upgrade that result to PASS.

## 5. Hardcoded data, metrics and represented integrations

All project arrays and literal narratives are local build-time content. None is fetched from an API or a CMS.

- Ecosystem: six fixed stakeholder records with position classes and bullet lists.
- Strategy: four fixed cards and a separately authored orbit/priorities list.
- PM Scope: six `phases` records plus six matching `phaseTypography` records.
- Portfolio: six modules, four UX highlights, five journey steps and literal phone fixtures (names, referral statuses, earnings values and recent activity).
- Tech & Data: six integration summaries, ten technology labels and literal four-layer node lists.
- Outcomes: five metric records (`1,150+`, `400+`, `170+`, `27+`, `7`) and six adoption-bar fixtures from Pilot Start through Month 5.
- Leadership: four cards and separately authored collaboration/map/connect labels.

The PM description rendering prepends `phaseTypography[index].emphasis` in bold and appends `phase.description.slice(emphasis.length)`. Keep the emphasis an exact prefix of the corresponding description; otherwise a wording edit can remove or duplicate characters. Keep phase and typography arrays in the same order.

PostgreSQL, Python, Big Data, Google Analytics, Looker Studio, SQL Reporting, REST APIs, JIRA, Figma and GitHub in the technology strip describe the product/delivery context. The portfolio does not run a PostgreSQL database, execute Python, embed Looker reports, send GA analytics or connect to hospital operations. Google Business, ambulance, WhatsApp and incentive services are conceptual product integration labels, not active service calls.

## 6. Branding, font, color and illustration contracts

| Element | Implementation / care point |
|---|---|
| Standalone branding | `AyuHealthBrand` is rendered in Overview only. Retain legitimate Ayu DocConnect text inside the hub, strategy orbit, phone UI, diagrams and approved narrative |
| Global profile/header | ProjectShell; local `portrait.png` override, not the default JPG |
| Body font | Inherited `"Segoe UI", Arial, sans-serif`; selected landscape notes use system handwriting fallbacks |
| Font hierarchy | Section-specific SCSS sizes/line heights; final reference styles set many headings/strong text to weight 700; no hosted font dependency |
| Colors | Project ink `--ayu-ink: #070b39`, copy `--ayu-copy: #18375b`; scoped blue/green/violet/pink/amber/sky tone variables and literal gradients |
| Narrative panels | Existing navy/blue/purple family, white body copy and cyan-to-purple headline emphasis |
| Cards | HTML/Grid/Flex, authored pastel gradients, borders, radii and shadows in the three project style layers |
| Medical/product icons | `DocConnectIcon` named SVG geometry, 24-unit base viewBox with special cases |
| Vendor logos | `technologyLogos` embedded SVG strings for PostgreSQL/Python/Figma/GitHub via `Fragment set:html`; local static markup, not a CDN fetch |
| Hero/workspace | Local doctor PNG plus native perspective/rotation, CSS tiles, SVG connectors and cards |
| Phone previews | Native HTML/CSS/SVG; independent local rotation, shadow and overlap |
| Landscape strips | Local mountain photograph inside reusable SVG, native gradients and route-scoped overlays/text shadows |

The archived reference images are specifications, not runtime assets. The UI is not an image overlay, screenshot slice, PDF viewer or canvas. Photograph identity/fidelity cannot be inferred merely from successful image decoding.

## 7. Current layout and CSS ownership

At **1280 × 665**, the live header measured **79.36px**, with ten **1265 × 585.63px** section frames. Desktop geometry uses the existing prototype/reference overrides: full available layout width, `clamp(72px, 6.2vw, 120px)` header and viewport-height sections below it. The baseline is not a strict 16:10 frame.

Style layers are shared project base, DocConnect base, imported prototype and reference refinements. `docconnect-reference-layout.scss` is long and contains earlier and later definitions for the same selectors. Later section-ID-scoped refinements often win. Astro can bundle/reorder style output; inspect computed declarations on the actual page.

Key maintenance targets:

- Overview workspace: `.docconnect-case #overview .dc-device-card`, `.dc-device-actions`, `.dc-care-flow`, hero stakeholder tags and SVG connectors.
- Ecosystem hub: `.dc-network-hub` and stakeholder position/connector rules.
- Strategy center: `.dc-strategy-orbit`, `.dc-orbit-center`, `.orbit-dot` and the SVG arrow markers. Center text must remain within the ring and clear of lower nodes.
- PM Scope readability: `.dc-phase-summary`, heading spans, paragraph emphasis, `.dc-phase-deliverables`, six-column track and footer landscape contrast.
- New Metrics: `.docconnect-case #product-metrics .dc-measure-*`, `.dc-signal-*`, handoff/lifecycle/workflow rules.
- Bottom strips: `.dc-scope-result`, `.dc-key-takeaway`, `.dc-connect-banner` and their overlay/stacking rules.

Do not add another page-frame system to solve a local text/diagram issue. Do not fix wrapping by changing approved text. Some local translations/rotations provide illustration perspective; they do not authorize scaling the whole page.

## 8. Modification sequence and regression checks

| Required change | First place to edit | Related checks |
|---|---|---|
| Narrative/metric wording | Exact occurrence in `DocConnectCaseStudy.astro` | Approved source, homepage summary and fit |
| PM paragraph formatting | `phases`, matching `phaseTypography`, scoped PM styles | Exact prefix, no lost words, heading gap, all six lower lists |
| Strategy/hub text fit | Owning center rules and native markup | Ring/node clearance and arrow direction |
| Metrics card/body/wrapping | Corresponding new data record and `.dc-measure-*` rules | All six core signals, middle panels, four workflow cards and bottom strip |
| Missing technology logo | Icon key and embedded `technologyLogos` | Visible actual SVG paths, not just an empty background |
| Hero photo/crop | Doctor asset plus Overview CSS | Subject scale/placement, tablet boundary, callout clearance |
| Landscape text contrast | Existing local overlay/text style | Bright sunrise region, icon/text stacking, preserve photograph |
| Project ordering | Wrapper props plus final-section links | Previous/home/next destinations |

Validate with `npm.cmd run build`, `git diff --check` and reviewed file scope. Visit all ten anchors at 1280 × 665, await fonts/image decoding and inspect card-boundary text, lower rows, connector paths and active navigation. For shared-file changes, recheck the other projects. Test smaller touch-device breakpoint behavior separately; a media-query viewport change is not a native zoom test.

For SVG edits, verify marker IDs, gradient references, viewBox coordinates, line thickness and stroke direction. Reusing a component can duplicate IDs; keep references consistent and inspect every occurrence. For static medical/phone diagrams, do not accidentally turn illustration labels into fake operational controls.

## 9. Challenges and known current limitations

- Earlier external technology-logo requests failed; the current route embeds those logos. Reintroducing external requests would recreate an unnecessary dependency.
- A previous wide/light Metrics design was explicitly superseded. Archived reference pages were introduced on 6 October, before the later replacement: verify that a candidate reference is the **Doctor & Referral Measurement Framework**, not the old charts.
- Standalone identity banners previously consumed space outside Overview; those were removed while in-context identity remained.
- Heading-to-description spacing and lower deliverable density in PM Scope needed dedicated treatment. The two matching data arrays and multiple style layers make careless edits risky.
- Strategy center text, angled phone presentation and the Overview workspace required local geometry fixes; do not route those through shared alignment changes.
- Bright landscape strips needed local overlays/text contrast, rather than replacement of the approved image.
- The 9 October validation report marked new Metrics pixel fidelity FAIL. The supplied full reference dimensions differ from the retained page/header frame; build/fit success cannot establish identical pixels.
- Historical validation reports say “uncommitted” because they were written before the later release. The implementation is now included in the published baseline; the historical wording is not the current Git status.

Fresh live checks for this guide: HTTP 200, production HTML matches, ten section frames measured, no broken HTML images/horizontal document overflow/missing anchors at baseline, and no cross-origin initial-load resources. No fresh ten-image pixel overlay or native Chrome zoom matrix was performed.

## 10. Provenance and future reference upkeep

Git history: main DocConnect component, Ayu brand, base/prototype styles, two original doctor files and PNG profile were introduced in `21f53f3` (6 October). Icon/landscape components and reference refinements were introduced in `d9e4226`; archived reference pages in `5ddd746`, also 6 October. The Challenge phone asset, mountain photograph, four stored vendor logos/license and correction report were introduced in `57b68cb` (10 October), which also contains the later section refinements. Current root deployment is `1269e9d`.

See [targeted validation report](../../docs/ayu-docconnect-validation.md) for the dated correction matrix. Reference photos/pages must be compared before visual changes; their existence is not approval to modify content or other projects. Record a new verification date/commit and maintain the content, asset, style and limit maps after future approved work. Keep the vendor license with any retained logo distribution.
