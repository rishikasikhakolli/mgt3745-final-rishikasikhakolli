# DECISION-001: Travlr as a link, or add a "Share Trip" button

## Committed before the evidence (2026-11-17)
Default action: Keep Travlr as it is (a shared link, no accounts, no reminders) and spend December on polish.

Owner and deadline: Rishika Sikhakolli, 2026-12-07

Evidence that would change it:
- Outcome: Number of reviews real users post after the share date (2026-11-19), counted with [evals/queries/reviews-after-share.sql](../evals/queries/reviews-after-share.sql)
- Threshold: At least 6 reviews from real users by 2026-12-07. If fewer, I'll add a "share this trip" button that copies the link with a short message, so posters remind friends to check it.
- Guardrail: 0 missing or mismatched reviews when checking the feed on a second device. If this breaks, I fix it before anything else.

## Resolved beneath (<YYYY-MM-DD>)
Result: <numbers, with n>

Decision: <ship / iterate / stop>

Reversal trigger: <what would make you revisit it>
