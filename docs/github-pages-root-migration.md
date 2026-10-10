# GitHub Pages root migration: files and actions performed

**Date:** 10 October 2026 (IST)  
**Result:** The current portfolio was deployed successfully at **https://mapant.github.io/**. The old repository was retained as a backup.

This document records the approved hosting and routing migration. It does not describe the earlier portfolio design work.

## 1. Problem resolved

The new repository, `mapant/manoj-product-portfolio`, originally published the portfolio at:

`https://mapant.github.io/manoj-product-portfolio/`

The old repository, `mapant/mapant.github.io`, published the root website. Links beginning with `/`, such as `/projects/integrated-channels/`, navigated to the root domain and opened the old project's pages. Some root-relative image paths also resolved incorrectly.

Moving the new repository to the root-site repository name and removing Astro's subpath configuration made those existing links and asset paths resolve to the current portfolio.

## 2. Repository renames and responsibility

The user approved the migration plan and completed these renames through the GitHub UI:

| Repository before migration | Repository after migration | Purpose |
|---|---|---|
| `mapant/mapant.github.io` | [mapant/mapant.github.io-backup-2026-10-10](https://github.com/mapant/mapant.github.io-backup-2026-10-10) | Preserve the old portfolio repository and history |
| `mapant/manoj-product-portfolio` | [mapant/mapant.github.io](https://github.com/mapant/mapant.github.io) | Publish the new portfolio at the root domain |

**The assistant did not perform these GitHub UI renames.** Before pushing, the assistant verified both renamed repositories through GitHub's API, including their original repository IDs:

- New portfolio: repository ID `1395181345`, now named `mapant/mapant.github.io`.
- Old portfolio: repository ID `1376922594`, now named `mapant/mapant.github.io-backup-2026-10-10`.

This confirmed that the push target was the new portfolio repository. No backup files were deleted by the assistant. Disabling or unpublishing the backup's Pages deployment was not performed or verified in this task.

## 3. Files changed or inspected

| File or setting | Action | Details |
|---|---|---|
| `astro.config.mjs` | **Modified and committed** | Removed `base: 'manoj-product-portfolio'`; added the missing final newline |
| Local Git `origin` remote | **Updated** | Changed to `https://github.com/mapant/mapant.github.io.git`; this is local Git configuration, not a tracked source file |
| `.github/workflows/deploy.yml` | Inspected; unchanged | Reused the existing workflow triggered by a push to `main` |
| `.github/workflows/build.yml.bak` | Retained; unchanged | Existing workflow backup; the `.bak` file is not an active Actions workflow |
| `package.json` and portfolio source files | Inspected; unchanged | No dependency, content, styling or route changes were needed |

`.github/workflows/build.yml` was not present on disk at the time of this report, although an IDE tab with that name was open.

**Only `astro.config.mjs` was included in the migration commit.** This report is a separate documentation file created afterward and has not been committed or pushed.

## 4. Exact Astro configuration change

The functional change was removal of the subpath setting:

```diff
 export default defineConfig({
   site: 'https://mapant.github.io',
-  base: 'manoj-product-portfolio',
   output: 'static',
   integrations: [mdx()],
   build: { format: 'directory' }
 });
```

The resulting `astro.config.mjs` is:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mapant.github.io',
  output: 'static',
  integrations: [mdx()],
  build: { format: 'directory' }
});
```

Without an explicit `base`, Astro uses `/`. The existing `site`, static output, MDX integration and directory output format were preserved. No manual rewrite of the portfolio's links was required.

## 5. Actions performed by the assistant

1. Checked the working tree, staged files, current commit and remote before making changes.
2. Inspected the Astro configuration and existing deployment workflow.
3. Removed the Astro subpath setting and built the production site locally.
4. Checked generated routes, root-relative references and the rendered pages at `1280 × 665`.
5. Verified that both GitHub renames had completed, using repository names and IDs.
6. Updated the local `origin` remote and checked that its `main` branch matched the expected new portfolio history.
7. Staged only `astro.config.mjs`, inspected the staged diff and checked it for whitespace errors.
8. Created the approved configuration commit and pushed it to `origin/main`.
9. Monitored the existing GitHub Actions deployment until it completed successfully.
10. Checked the published routes, assets, section anchors and return links against the current production build.
11. Confirmed that the remote commit matched the local commit and the working tree was clean before creating this report.

The main commands executed during the migration were:

```powershell
git status --short --branch
git diff --cached --name-status
git remote -v
git log -1 --oneline

npm.cmd run build
git diff --check
git diff -- astro.config.mjs
git diff --name-status

git remote set-url origin https://github.com/mapant/mapant.github.io.git
git remote -v
git ls-remote --heads origin main

git add -- astro.config.mjs
git diff --cached --name-status
git diff --cached --check
git diff --cached -- astro.config.mjs

git commit -m "Deploy portfolio at root GitHub Pages URL"
git push origin main

git status --short --branch
git log -1 --oneline
git show --stat --oneline HEAD
git diff HEAD^ HEAD --name-status
git ls-remote --heads origin main
git diff --check
```

Temporary QA scripts and JSON results were stored under the Windows temporary directory. They were not added to the repository or deployed as website UI. No new dependencies were installed.

## 6. Commit and deployment evidence

- **Commit:** [1269e9d — Deploy portfolio at root GitHub Pages URL](https://github.com/mapant/mapant.github.io/commit/1269e9ddf639fea2c5236af4fd7885d50b869f6b)
- **Commit time:** 10 October 2026, 03:05:52 IST.
- **Files in the commit:** `astro.config.mjs` only.
- **Push:** `main` advanced from `81855f5` to `1269e9d` on the renamed new repository.
- **Deployment:** [GitHub Actions run 37994412272](https://github.com/mapant/mapant.github.io/actions/runs/37994412272), completed with conclusion **success** for commit `1269e9d`.

The unchanged deployment workflow used `actions/checkout@v4`, `withastro/action@v2` with Node `22.12.0`, and `actions/deploy-pages@v4`.

## 7. Validation results

| Published page | HTTP result | Matches current local production HTML | Browser checks at 1280 × 665 |
|---|---|---|---|
| [Main Portfolio](https://mapant.github.io/) | 200 | PASS | PASS |
| [Integrated Channels Suite](https://mapant.github.io/projects/integrated-channels/) | 200 | PASS | PASS |
| [Ayu DocConnect](https://mapant.github.io/projects/ayu-docconnect/) | 200 | PASS | PASS |
| [Ayu Sales Intelligence](https://mapant.github.io/projects/ayu-sales-intelligence/) | 200 | PASS | PASS |
| [Telecom Analytics & Cost Optimization](https://mapant.github.io/projects/telecom-cost-optimization/) | 200 | PASS | PASS |

Checks completed during the migration:

- `npm.cmd run build`: **PASS**, producing five static pages.
- `git diff --check` and staged diff checks: **PASS**.
- Local output: **23 unique root references** checked; no missing targets or stale `/manoj-product-portfolio/` prefixes.
- Published output: **22 unique asset and link URLs** checked; all returned HTTP 200.
- Live HTML: SHA-256 hashes matched the current local production HTML for all five pages.
- Headless Chrome at `1280 × 665`: no broken images, horizontal overflow or missing section anchor targets on the five pages.
- Project return links: pointed back to the root portfolio.
- Local and remote `main`: matched migration commit `1269e9d`.

These checks establish the deployment and routing result. Native Chrome zoom and pixel-perfect visual fidelity were not tested or certified in this migration.

## 8. Scope preserved

No portfolio wording, images, cards, metrics, section order, project design, shared alignment, page-frame system, dependency manifests or navigation structure was changed during this hosting migration. No force-push or repository deletion was performed.

The live site is **https://mapant.github.io/**. The local folder remains `C:\Users\Manoj Pant\GitHub\manoj-product-portfolio`; its folder name does not affect the hosting URL.

This documentation file remains saved locally, uncommitted and unpushed.
