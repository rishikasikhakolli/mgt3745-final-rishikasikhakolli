# Travlr

**One sentence:** Travlr lets casual travelers post a photo, the spot's name, and a short review so friends can follow their trip without the pressure of your average social media application.

**Deployed:** [Travlr URL](https://rishikasikhakolli.github.io/mgt3745-final-rishikasikhakolli/) · [Worker API](https://mgt3745-hw4.travlr.workers.dev/entries)

**Status:** Partly working. Review text saves to the server; photos and spot names still save only in the poster's browser until the D1 change in ADR-001 is built.

**Hours spent:** ~9 on final repo (as of 2026-11-11), plus earlier work (~45 hours)

## See It Work

[The product in use](docs/img/see-it-work.gif)

## Who It Is For

Casual travelers who take lots of photos and want a quick, low-pressure way to share highlights with friends. Today they text scattered photos or skip posting because social media feels too formal or judged, and they forget details because nothing was recorded. See [context/USERS.md](context/USERS.md).

## Run It

```bash
npm install
npm test                       # code evals in evals/
npx wrangler login --device    # sign in to Cloudflare (works in Codespaces)
npx wrangler dev               # runs the Worker locally
```

## The Record

| Artifact | Link |
|---|---|
| Problem and success measures | [context/PROJECT.md](context/PROJECT.md) |
| Users and jobs | [context/USERS.md](context/USERS.md) |
| Features (EARS rows) | [context/FEATURES.md](context/FEATURES.md) |
| Architecture and ADRs | [context/ARCHITECTURE.md](context/ARCHITECTURE.md), [docs/ADR-001.md](docs/ADR-001.md) |
| Evals, RAT, Stakes, production verdict | [context/EVALS.md](context/EVALS.md) |
| Delegation log | [docs/DDR-LOG.md](docs/DDR-LOG.md) |
| Decision memo | [docs/DECISION-001.md](docs/DECISION-001.md) |
| Real-user feedback | [docs/FEEDBACK.md](docs/FEEDBACK.md) |
| Scaffold audits | [docs/AUDIT.md](docs/AUDIT.md) |
| Sourcing audit | [docs/SOURCING-AUDIT.md](docs/SOURCING-AUDIT.md) |
| Tools and Trust Boundary | [context/TOOLS.md](context/TOOLS.md) |
| Deployment notes | [docs/DEPLOY.md](docs/DEPLOY.md) |
| Self-review with Homogenization Check | [docs/SELF-REVIEW.md](docs/SELF-REVIEW.md) |

## AI Use

Claude drafted ADR-001, the Audit 1 findings, and most of the HW7 sourcing audit rows. GitHub Copilot ran the /audit prompt file. I checked every number at its source, ran every command myself, and set the final verdicts, scores, and rings. Each use is logged with its verification in [docs/DDR-LOG.md](docs/DDR-LOG.md).
