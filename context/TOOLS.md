# TOOLS.md

The ledger of Trust Boundary crossings and the sourcing audit results.

Never put a credential in this file. A key, token, or password anywhere in the repository is graded as a security failure regardless of the rest.

## Dependencies (from docs/SOURCING-AUDIT.md)

| Tool | Purpose | Ring | Checked on | Limit or price | Exit |
|---|---|---|---|---|---|
| Cloudflare Workers | Runs the API | Adopt | 2026-11-10 | Free: 100,000 requests/day | Netlify |
| Cloudflare D1 | Stores reviews, spot names, photos | Adopt | 2026-11-11 | Free: 5 GB, 100,000 rows written/day | Turso |
| GitHub Pages | Hosts the page | Adopt | 2026-11-10 | Free: 1 GB site, 100 GB/month | Cloudflare Pages |
| GitHub + Codespaces | Where I write and run code | Adopt | 2026-11-10 | Free: 120 hours/month | Any computer with Node |
| wrangler 4.159.0 (pinned) | Deploys the Worker, manages D1 | Adopt | 2026-11-10 | Free | Cloudflare dashboard |
| Node.js 22 | Runs npm test | Adopt | 2026-11-09 | Free; supported until 2027-04-30 | Next Node LTS |
| Live Server extension | Local previews | Trial | 2026-11-10 | Free; no update since 2019 | `python3 -m http.server` |
| GitHub Copilot | Coding help | Adopt | 2026-11-10 | Free: 2,000 completions/month | Stop usage |
| Claude | Drafting help, logged in DDRs | Adopt | 2026-11-10 | Free: limited; Pro $20/month | Stop usage |
| Google AI Studio | Code edits (non-sensitive code only) | Adopt | 2026-11-10 | Free; Google may read free-tier input | Copilot |
| bolt.new | Not used anymore | Hold | 2026-11-10 | Free: 1M tokens/month | Already replaced by AI Studio |
| gemini-3.5-flash | Not used (template leftover) | Hold | 2026-11-10 | Not used | Remove from wrangler.toml |

## Trust Boundary crossings

| Service | Trusted with | Credentials live | Crossing statement | Switching cost |
|---|---|---|---|---|
| Cloudflare Workers + D1 | Every review a user posts (text, spot name, photo); request metadata (IP, timestamp) that Cloudflare logs by default | Cloudflare dashboard login; wrangler token inside the Codespace | "User entries leave the browser and are stored on D1 under Cloudflare's free-tier terms, in a region I did not choose. I am accountable." | Medium: `wrangler d1 export`, rewrite one Worker for another host |
| GitHub + Codespaces | Source, commit history, devcontainer | GitHub account (SSO) | My source code, commit history, and devcontainer configuration leave my machine and live on GitHub's infrastructure under their terms of service. I am accountable for the committed data. | Low: can clone to another host, portable |
| GitHub Copilot | Everything in the repository, as context for suggestions | GitHub account | Every file I have open, including this repository's content, crosses to GitHub's Copilot backend as context for generating suggestions; I am accountable for reviewing the AI before I accept it. | Low: Disable the extension |
| Claude | Repo files and command output I paste in | claude.ai account | "What I paste into Claude crosses to Anthropic; I paste no secrets, and I verify what it drafts before committing (see DDR log)." | Low: stop using it |
| Google AI Studio | Code I paste in | Google account | "Code I paste crosses to Google, which may read free-tier input; I only paste non-sensitive code." | Low: use Copilot instead |
| wrangler (npm, pinned 4.159.0) | Filesystem and terminal access when run; wrangler.toml, worker.js, schema.sql | None itself, but it holds the Cloudflare login token above | "Running wrangler trusts it and its 37 dependencies. I pinned it to 4.159.0 and review updates before upgrading. I am accountable." | Medium: deploy through the Cloudflare dashboard |

## Revisit triggers

- A new service is added to the repository.
- A vendor changes pricing, terms, or region.
- A credential moves.
- A pinned version (wrangler 4.159.0) needs upgrading.
