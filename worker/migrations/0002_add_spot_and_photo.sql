-- 0002_add_spot_and_photo.sql
-- ADR-001: spot names and photos move from the browser into D1.
-- Run once: npx wrangler d1 execute mgt3745-entries --remote --file=migrations/0002_add_spot_and_photo.sql
ALTER TABLE entries ADD COLUMN spot_name TEXT;
ALTER TABLE entries ADD COLUMN photo TEXT;