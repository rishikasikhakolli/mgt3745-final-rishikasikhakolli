// worker.js
// The whole server. Read it before you deploy it.
//
// Four things to recognize here, because you will need to recognize them
// later in code you did not write:
//   env.DB      the D1 binding from wrangler.toml (no connection string, nothing to leak)
//   bind(?)     the user's value goes in as a parameter, never pasted into the SQL
//   status 400  the EARS "unwanted behavior" row, executable
//   CORS        headers that tell the browser your page is allowed to call this Worker

const CORS = {
  "access-control-allow-origin": "https://rishikasikhakolli.github.io",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type",
};

const ALLOWED_CATEGORIES = ["Food", "Landmark", "Views", "Activity"];

// ADR-001: photos are resized in the browser, then stored in D1 as a data URL.
// D1 rows max out around 2 MB, so anything over ~1.4 million characters
// (about 1 MB of image) is rejected with a clear 400 instead of failing deep in D1.
const MAX_PHOTO_CHARS = 1400000;
const MAX_SPOT_NAME_CHARS = 100;

export default {
  async fetch(request, env) {
    try {
      return await handle(request, env);
    } catch (err) {
      return new Response("server error: " + err.message, { status: 500, headers: CORS });
    }
  },
};

async function handle(request, env) {
  const url = new URL(request.url);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (!env.DB) {
    return new Response(
      "server error: no D1 binding. Check database_id in wrangler.toml and redeploy.",
      { status: 500, headers: CORS });
  }

  if (request.method === "GET" && url.pathname === "/entries") {
    const { results } = await env.DB.prepare(
      "SELECT id, text, category, spot_name, photo, created_at FROM entries ORDER BY id").all();
    return Response.json(results, { headers: CORS });
  }

  if (request.method === "POST" && url.pathname === "/entries") {
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("body must be JSON", { status: 400, headers: CORS });
    }
    if (!body.text || !body.text.trim()) {
      return new Response("text must not be empty", { status: 400, headers: CORS });
    }
    if (!ALLOWED_CATEGORIES.includes(body.category)) {
      return new Response(
        "category must be one of: " + ALLOWED_CATEGORIES.join(", "),
        { status: 400, headers: CORS });
    }
    const spotName = typeof body.spotName === "string" ? body.spotName.trim() : "";
    if (!spotName) {
      return new Response("spot name must not be empty", { status: 400, headers: CORS });
    }
    if (spotName.length > MAX_SPOT_NAME_CHARS) {
      return new Response(
        "spot name must be " + MAX_SPOT_NAME_CHARS + " characters or fewer",
        { status: 400, headers: CORS });
    }
    if (typeof body.photo !== "string" || !body.photo.startsWith("data:image/")) {
      return new Response("photo must be an image", { status: 400, headers: CORS });
    }
    if (body.photo.length > MAX_PHOTO_CHARS) {
      return new Response("photo is too large, please choose a smaller image", { status: 400, headers: CORS });
    }
    const result = await env.DB.prepare(
      "INSERT INTO entries (text, category, spot_name, photo) VALUES (?, ?, ?, ?)")
      .bind(body.text, body.category, spotName, body.photo).run();
    return new Response(JSON.stringify({ id: result.meta.last_row_id }), {
      status: 201,
      headers: { ...CORS, "content-type": "application/json" },
    });
   }

  return new Response("not found", { status: 404, headers: CORS });
}