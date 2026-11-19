-- schema.sql
-- One table for Travlr reviews.
CREATE TABLE IF NOT EXISTS entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL,
  category TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  spot_name TEXT,
  photo TEXT
);