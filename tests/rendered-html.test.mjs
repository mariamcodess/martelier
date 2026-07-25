import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("uses the current Martelier brand message", () => {
  assert.match(layout, /Martelier — Luxury Event Design & Décor/);
  assert.match(page, /Your vision,/);
  assert.match(page, /beautifully brought to life\./);
  assert.match(page, /Dallas · DMV · Beyond/);
  assert.doesNotMatch(`${page}\n${layout}`, /Where occasions become atmosphere/i);
});

test("includes the complete inquiry experience on desktop and mobile", () => {
  assert.match(page, /className="mobile-nav-inquiry"/);
  assert.match(page, /name="name"/);
  assert.match(page, /name="phone"/);
  assert.match(page, /name="email"/);
  assert.match(page, /name="eventType"/);
  assert.match(page, /name="location"/);
  assert.match(page, /name="vision"/);
  assert.match(styles, /\.inquiry-panel input, \.inquiry-panel select \{ min-height: 48px; \}/);
});
