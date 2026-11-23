import { test } from "node:test";
import assert from "node:assert/strict";
import { parseReelUrl, isValidShortcode } from "../src/lib/instagram-url.ts";
import { isAllowedMediaUrl } from "../src/lib/media-host.ts";

test("accepts valid reel urls", () => {
  for (const u of [
    "https://www.instagram.com/reel/C1a2B3c4D5e/",
    "https://www.instagram.com/reels/C1a2B3c4D5e/?igsh=abc",
    "instagram.com/reel/C1a2B3c4D5e",
    "https://m.instagram.com/reel/C1a2B3c4D5e/",
    "https://www.instagram.com/someuser/reel/C1a2B3c4D5e/",
  ]) {
    const r = parseReelUrl(u);
    assert.ok(r.ok, u);
    if (r.ok) assert.equal(r.shortcode, "C1a2B3c4D5e");
  }
});

test("rejects invalid urls", () => {
  assert.deepEqual(parseReelUrl(""), { ok: false, reason: "EMPTY_INPUT" });
  for (const u of [
    "https://www.instagram.com/p/C1a2B3c4D5e/",
    "https://evil.com/reel/C1a2B3c4D5e/",
    "https://instagram.com.evil.com/reel/C1a2B3c4D5e/",
    "https://user:pw@www.instagram.com/reel/C1a2B3c4D5e/",
    "https://www.instagram.com:8080/reel/C1a2B3c4D5e/",
    "javascript:alert(1)",
    "https://www.instagram.com/reel/../../x/",
    "https://www.instagram.com/a/b/reel/C1a2B3c4D5e/",
    "https://www.instagram.com/reel/" + "a".repeat(600),
  ]) assert.equal(parseReelUrl(u).ok, false, u);
  assert.equal(parseReelUrl(42).ok, false);
});

test("shortcode check", () => {
  assert.ok(isValidShortcode("C1a2B3c4D5e"));
  assert.ok(!isValidShortcode("../etc/passwd"));
  assert.ok(!isValidShortcode({}));
});

test("media host allowlist blocks SSRF targets", () => {
  assert.ok(isAllowedMediaUrl("https://scontent-del1-1.cdninstagram.com/v/t50/x.mp4?oe=1", []));
  assert.ok(isAllowedMediaUrl("https://video.xx.fbcdn.net/v/x.mp4", []));
  for (const u of [
    "http://scontent.cdninstagram.com/x.mp4",
    "https://169.254.169.254/latest/meta-data",
    "https://localhost/x",
    "https://[::1]/x",
    "https://cdninstagram.com.evil.com/x.mp4",
    "https://evilcdninstagram.com/x.mp4",
    "https://u:p@scontent.cdninstagram.com/x.mp4",
    "https://scontent.cdninstagram.com:8443/x.mp4",
    "file:///etc/passwd",
  ]) assert.equal(isAllowedMediaUrl(u, []), false, u);
  assert.ok(isAllowedMediaUrl("https://media.example-provider.com/a.mp4", ["media.example-provider.com"]));
});
