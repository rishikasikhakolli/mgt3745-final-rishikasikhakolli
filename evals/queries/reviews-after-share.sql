-- Outcome metric for DECISION-001: reviews posted after the share date.
-- Run: npx wrangler d1 execute mgt3745-entries --remote --file=evals/queries/reviews-after-share.sql
SELECT COUNT(*) AS reviews_after_share
FROM entries
WHERE created_at >= '2026-11-19';
