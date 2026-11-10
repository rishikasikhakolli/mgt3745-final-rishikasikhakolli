# Sourcing Audit

## Audit 1, November 2026

### Prediction Stake (commit before any evidence)
I predict that at least 9 of my 12 tools will be rated "Adopt" (safe to use). Resolution: Tight.

### Weights (commit in their own commit, before scoring)
| Criterion | Weight | Why this weight for this project |
|-----------|--------|----------------------------------|
| Stability | 30 | Real users will be on the live app from Nov 19 to Dec 14, so anything that breaks or changes mid-semester hurts most. |
| Pricing predictability | 20 | I have no budget, but traffic should stay well inside free tiers. |
| Institutional fit | 15 | The course already uses GitHub and Cloudflare. |
| Exit cost | 35 | All my users' reviews and photos will be stored in D1, so it matters if I need to move them. |
Total: 100

### Inventory
| Dependency | Kind (package, dev package, platform, model, builder, CDN script) | Where it is recorded | Ships to users? |
|------------|------|------|------|
| Cloudflare Workers | platform | worker/wrangler.toml, ADR-001 | Yes: runs the API |
| Cloudflare D1 | platform (database) | ADR-001; D1 binding to add in wrangler.toml | Yes: stores reviews, spot names, photos |
| GitHub Pages | platform (hosting) | ADR-001, README | Yes: serves the page |
| GitHub + Codespaces | platform | .devcontainer/devcontainer.json | No |
| wrangler | dev package (run with npx, not in package.json) | README "Run It", TOOLS.md | No |
| Node.js 22 + built-in test runner | platform (runtime) | devcontainer.json image, package.json test script | No |
| Live Server extension | dev tool | devcontainer.json | No |
| GitHub Copilot | builder | devcontainer.json, TOOLS.md, DDR-001 | No |
| Claude | builder | DDR-001, DDR-002 | No |
| bolt.new | builder | HW5 DDRs (EVALS.md) | No |
| Google AI Studio | builder | HW5 DDRs (EVALS.md) | No |
| gemini-3.5-flash via Cloudflare AI Gateway | model | worker/wrangler.toml (template default) | No: Travlr has no AI feature |

Installed packages: 0 (checked with `npm ls --all` on 2026-11-09). Scripts from other websites: none (index.html only loads its own app.js).

### Evidence (each fact with its source and the date you read it)
*Weights and Stake committed in d77e2d0, before any evidence below.*

| Dependency | Latest version and date | Maintainers or vendor | License or terms | Limits or price | Other notes | Checked on |
|------------|------|------|------|------|------|------|
| wrangler | 4.159.0, released 2026-11-09 | Cloudflare (one publishing account) | MIT or Apache-2.0 | Free | Not deprecated. New versions come out very often, and I don't use a fixed version. 0 security issues (npm audit). | 2026-11-09, npm view |
| Node.js 22 + built-in test runner | v22.23.4 | OpenJS Foundation | MIT | Free | Supported until 2027-04-30 (github.com/nodejs/release), well after the project ends. | 2026-11-09, node --version |

### Scores and Rings
| Dependency | Stability | Pricing | Institutional fit | Exit cost | Weighted | Ring | Reason in one line |
|------------|---|---|---|---|---|---|---|

### Exit Plans (every critical dependency, every Trial)
| Dependency | Trigger | Substitute | Hours to swap | Tested? (date and how) |
|------------|---|---|---|---|

### Changes Caused by This Audit
- <removal, pin, or replacement, with commit hash>
- <ADR amended or superseded, if any>
- <DDR lines added, if AI helped>

### Prediction Stake Resolution
<What happened, and whether the prediction held.>
