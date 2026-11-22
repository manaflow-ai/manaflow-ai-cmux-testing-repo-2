// Builds status/feed.xml from status/data/incidents.json. Run: node status/scripts/build-rss.mjs
import { readFileSync, writeFileSync } from "node:fs";
const dir = new URL("..", import.meta.url);
const incidents = JSON.parse(readFileSync(new URL("data/incidents.json", dir)));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const base = process.env.STATUS_BASE_URL || "https://status.tally.example.com";
const items = incidents.map((i) => `<item><title>${esc(i.title)} (${esc(i.status)})</title><link>${base}/history.html#${esc(i.id)}</link><guid>${base}/history.html#${esc(i.id)}</guid><pubDate>${new Date(i.started).toUTCString()}</pubDate><description>${esc(i.updates.map((u) => u.text).join(" "))}</description></item>`).join("\n");
writeFileSync(new URL("feed.xml", dir), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Tally status</title><link>${base}</link><description>Tally incidents</description>\n${items}\n</channel></rss>\n`);
