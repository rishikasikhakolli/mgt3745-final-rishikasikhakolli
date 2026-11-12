# Sourcing Audit

## Audit 1, November 2026

### Prediction Stake
I predict that at least 9 of my 12 tools will be rated "Adopt" (safe to use). Resolution: Tight.

### Weights
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
| Cloudflare D1 | platform (database) | worker/wrangler.toml, ADR-001 | Yes: stores reviews, spot names, photos |
| GitHub Pages | platform (hosting) | ADR-001, README | Yes: serves the page |
| GitHub + Codespaces | platform | .devcontainer/devcontainer.json | No |
| wrangler | dev package (pinned 4.159.0 in package.json) | package.json, README "Run It" | No |
| Node.js 22 + built-in test runner | platform (runtime) | devcontainer.json image, package.json test script | No |
| Live Server extension | dev tool | devcontainer.json | No |
| GitHub Copilot | builder | devcontainer.json, TOOLS.md, DDR-001 | No |
| Claude | builder | DDR-001 to DDR-006 | No |
| bolt.new | builder | HW5 DDRs (EVALS.md) | No |
| Google AI Studio | builder | HW5 DDRs (EVALS.md) | No |
| gemini-3.5-flash via Cloudflare AI Gateway | model | Removed from worker/wrangler.toml | No: Travlr has no AI feature |

Installed packages: 0 before the wrangler pin, 38 after (see Changes). Checked with `npm ls --all` on 2026-11-09 and 11-10. Scripts from other websites: none (index.html only loads its own app.js).

### Evidence (each fact with its source and the date you read it)
*Weights and Stake committed in d77e2d0, before any evidence below.*

| Dependency | Latest version and date | Maintainers or vendor | License or terms | Limits or price | Other notes | Checked on |
|------------|------|------|------|------|------|------|
| wrangler | 4.159.0, released 2026-11-09 | Cloudflare (one publishing account) | MIT or Apache-2.0 | Free | Not deprecated. New versions come out very often, and I don't use a fixed version. 0 security issues (npm audit). | 2026-11-09, npm view |
| Node.js 22 + built-in test runner | v22.23.4 | OpenJS Foundation | MIT | Free | Supported until 2027-04-30 (github.com/nodejs/release), well after the project ends. | 2026-11-09, node --version |
| Cloudflare Workers | Hosted service (no version) | Cloudflare | Cloudflare terms of service | Free: 100,000 requests/day, 10 ms CPU per request. Paid: from $5/month | Free limits reset daily | 2026-11-10, Workers pricing page |
| Cloudflare D1 | Hosted service (no version) | Cloudflare | Cloudflare terms of service | Free: 5 million rows read/day, 100,000 rows written/day, 5 GB storage. Paid: from $5/month | Limits reset at midnight UTC. Each row maxes out at about 2 MB, so photos must be shrunk | 2026-11-10, D1 pricing and limits pages |
| GitHub Pages | Hosted service (no version) | GitHub (Microsoft) | GitHub terms of service | Free for public repos: 1 GB site, 100 GB/month bandwidth, 10 builds/hour | Not allowed for business sites or for handling passwords or credit cards | 2026-11-10, GitHub Pages limits page |
| GitHub + Codespaces | Hosted service (no version) | GitHub (Microsoft) | GitHub terms of service | Free: 120 hours and 15 GB storage per month. After that: $0.18/hour (2-core) | With no card on file, Codespaces stops when the free hours run out | 2026-11-10, Codespaces billing page |
| Live Server extension | 5.6.1, released 2019-04-17 | Ritwick Dey (one person) | MIT | Free | No new release in over 7 years. Only used for local previews | 2026-11-10, Live Server changelog |
| GitHub Copilot | Hosted service (no version) | GitHub (Microsoft) | GitHub Copilot terms | Free: 2,000 code completions/month; chat limited by "AI credits" (amount not listed). Pro: $10/month | New Student and Pro signups were paused in April 2026 | 2026-11-10, Copilot plans page and changelog |
| Claude | Hosted service (no version) | Anthropic | Anthropic terms | Free: limited use (no exact number given). Pro: $20/month | Limits are described only as "limited," not in numbers | 2026-11-10, claude.com/pricing |
| bolt.new | Hosted service (no version) | StackBlitz | bolt.new terms | Free: 1 million tokens/month, 300,000/day. Pro: $25/month | In HW5 it replaced my backend with localStorage without asking | 2026-11-10, bolt.new/pricing |
| Google AI Studio | Hosted service (no version) | Google | Gemini API terms | Free | On the free tier, Google may use what you type to improve its products, and human reviewers may read it. Must be 18+ | 2026-11-10, Gemini API terms (Dec 2024 version) |
| gemini-3.5-flash (template default) | Released 2026-05-19 | Google | Gemini API terms | Not used, so no cost | No shutdown date, but Google now automatically sends its requests to gemini-3.6-flash. Travlr doesn't use it | 2026-11-10, Gemini deprecations page |

### Scores and Rings
| Dependency | Stability | Pricing | Institutional fit | Exit cost | Weighted | Ring | Reason in one line |
|------------|---|---|---|---|---|---|---|
| Cloudflare Workers | 5 | 4 | 5 | 3 | 4.10 | Adopt | Free tier covers my traffic and it already runs my app. |
| Cloudflare D1 | 4 | 4 | 5 | 4 | 4.15 | Adopt | Holds all reviews within free limits. |
| GitHub Pages | 5 | 5 | 5 | 5 | 5.00 | Adopt | Free, stable, and plain files I can host anywhere. |
| GitHub + Codespaces | 5 | 4 | 5 | 4 | 4.45 | Adopt | The course runs on it. |
| wrangler | 3 | 5 | 5 | 4 | 4.05 | Adopt | Official Cloudflare tool, but it releases almost daily, so I pinned one version. |
| Node.js 22 + built-in test runner | 5 | 5 | 5 | 4 | 4.65 | Adopt | Supported until April 2027, and the test runner needs no extra packages. |
| Live Server extension | 1 | 5 | 4 | 5 | 3.65 | Trial | No update since 2019, but any local server can replace it. |
| GitHub Copilot | 4 | 2 | 5 | 5 | 4.10 | Adopt | Course tool. |
| Claude | 4 | 3 | 4 | 5 | 4.15 | Adopt | Useful helper and logged in DDRs. |
| bolt.new | 3 | 4 | 2 | 4 | 3.40 | Hold | Score says Trial, but in HW5 it replaced my backend without asking, so I won't use it again. |
| Google AI Studio | 4 | 5 | 2 | 5 | 4.25 | Adopt | Kept my backend in HW5 and is my pick for edits; free-tier data terms mean I only paste non-sensitive code. |
| gemini-3.5-flash (template default) | 2 | 5 | 3 | 5 | 3.80 | Hold | Score says Trial, but Travlr has no AI feature. |

### Exit Plans (every critical dependency, every Trial)
| Dependency | Trigger | Substitute | Hours to swap | Tested? (date and how) |
|------------|---|---|---|---|
| Cloudflare D1 | Running out of free space, photos not saving, or lost data | Turso (can load the same export) | 3 to 5 | Yes, 2026-11-11: exported the database with `npx wrangler d1 export` and got a 2.4 KB file with 19 saved rows. Deleted it after. |
| Cloudflare Workers | Traffic goes over 100,000 requests/day, or Cloudflare changes the free plan | Netlify Functions | 4 to 6 | No |
| GitHub Pages | Pages goes down or its rules change | Cloudflare Pages or Netlify | 1 | No |
| Live Server extension | It stops working in Codespaces | `python3 -m http.server` | <1 | No |

### Changes Caused by This Audit
- Pinned wrangler to 4.159.0 in package.json (commit f2f37d3), so it only updates when I choose.
- Packages went from 0 to 38 after the pin, with 0 vulnerabilities.
- npm test is the same before and after: only the template test (F-01a) fails.
- Replaced the template Worker with Travlr's (commit 2bd81ca), which removed the unused Gemini settings.
- ADR-001 not changed; the audit supports it.
- Added DDR-004 through DDR-006.

### Prediction Stake Resolution
The prediction held: 9 of 12 tools were rated Adopt. The other three were Live Server (Trial), bolt.new (Hold), and the Gemini model (Hold). Google AI Studio, was a judgment call because its free-tier data terms could have put it in Assess, which would have made the count 8.
