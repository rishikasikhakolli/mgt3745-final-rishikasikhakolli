# Context Scaffold Audits

## Audit 1: 2026-11-09 (before the November 12 check-in)

| File | Reader | Last changed | Finding | Verdict | PR |
|---|---|---|---|---|---|
| PROJECT.md | Human, agent | 2026-09-25 (HW5) | No reframe or three success measures; lists category ranking as Deferred, but FEATURES says Built | Rewrite | |
| USERS.md | Human, agent | 2026-09-25 (HW5) | Two users and a journey, but not written as job statements | Rewrite | |
| FEATURES.md | Human, agent | 2026-09-30 (HW5) | No row IDs (template test expects F-01a); no exclusions; "Server unreachable" still CANNOT TEST YET; template comments left in | Rewrite | |
| ARCHITECTURE.md | Human, agent | 2026-09-30 (HW5) | ADRs belong in docs/ADR-001.md; no diagram or Trust Boundary; duplicate ADR-001 heading; template line left at bottom | Rewrite | |
| STYLE.md | Agent | 2026-09-30 (HW5) | Tokens (pink, Roboto) don't match styles.css; template comment left in; links to docs/Instagram.md and docs/Reddit.md, which aren't in this repo | Rewrite | |
| DESIGN.md | Agent | 2026-11-06 (template) | Template stub with placeholders; required because Travlr has a visual interface; its tokens overlap STYLE.md's with different names, so one file must own the tokens | Rewrite | |
| STANDARDS.md | Human | 2026-09-25 (HW5) | Rules 5 and 8 duplicate each other; "Copy in from HW3" comment left in | Rewrite | |
| CLAUDE.md | Agent | 2026-09-25 (HW5) | Rules still accurate; references /curiosity, which was not carried forward | Keep | |
| AGENTS.md | Agent | 2026-09-25 (HW5) | Still the "arrives in Module 6" preview; root AGENTS.md points to it | Rewrite | |
| SKILLS.md | Agent | 2026-09-30 (HW5) | Concrete patterns from real HW5 failures; failure-handling pattern overlaps CLAUDE.md and STANDARDS.md, but they don't conflict | Keep | |
| EVALS.md | Human, agent | 2026-09-30 (HW5) | All HW5 (bolt.new RAT); links tests and docs not in this repo; "7 EARS rows" vs 5 | Rewrite | |
| TOOLS.md | Agent | 2026-09-25 (HW5) | No bolt.new or AI Studio rows; missing HW7 columns (Ring, Checked on, Limit or price, Exit) | Rewrite | |

### Changes made
- Carried forward from mgt3745-hw5 (commit 6d77c86): AGENTS, ARCHITECTURE, CLAUDE, EVALS, FEATURES, PROJECT, SKILLS, STANDARDS, STYLE, TOOLS, USERS.
- Not carried forward: `context/README.md` and `curiosity/`.
- DESIGN.md left as the template stub; HW5 had none.
- `worker/` kept: Travlr uses a Cloudflare Worker + D1 backend.

## Audit 2: <YYYY-MM-DD> (final-iteration window, December 9 to 14)
