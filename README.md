# ReelSave: Instagram Reels Downloader

A Next.js 15 (App Router) + TypeScript + Tailwind app with its API routes in the same project. It deploys to Vercel as one project and has no database.

## Local setup
```bash
npm install
cp .env.example .env.local     # then edit
npm run dev                    # http://localhost:3000
npm test && npm run typecheck && npm run build
```

## Media retrieval: please read this
Instagram does **not** offer a public API that returns an MP4 for *any* public Reel. Scraping instagram.com or bypassing its login, rate limits or anti-bot checks breaks Meta's terms, so this project does not do it. Retrieval goes through a provider adapter (`src/lib/providers`):

| `MEDIA_PROVIDER` | What works | Notes |
|---|---|---|
| `none` (default) | Nothing. The API returns `PROVIDER_NOT_CONFIGURED` | Honest default |
| `instagram_graph` | **Only Reels owned by your own** Business/Creator account | Official Instagram API. Needs `INSTAGRAM_ACCESS_TOKEN` (`instagram_business_basic`) |
| `yt_dlp` (current) | Public Reels, via the yt-dlp CLI | **Temporary.** The build script downloads a pinned, SHA-256-verified Linux binary into `bin/` on Vercel. It scrapes Instagram, which conflicts with Instagram's Terms. Instagram may block Vercel IPs, so plan to switch to a licensed provider. |
| `custom` | Whatever a licensed provider allows | You supply `CUSTOM_PROVIDER_ENDPOINT` and `CUSTOM_PROVIDER_API_KEY`. The contract is in `src/lib/providers/custom.ts` |

To add another compliant source, implement `MediaProvider` (`src/lib/providers/types.ts`) and register it in `providers/index.ts`.

### Getting an `instagram_graph` token
1. Convert your Instagram account to Professional (Creator or Business).
2. On developers.facebook.com, create an app and add **Instagram → API setup with Instagram login**.
3. Add your account as a tester and generate a token, then exchange it for a long-lived token (valid for 60 days, refreshable).
4. Set `MEDIA_PROVIDER=instagram_graph` and `INSTAGRAM_ACCESS_TOKEN=...`.

## API
- `POST /api/instagram/inspect` takes `{ "url": "<reel url>" }` and returns `{ success, data: { title, thumbnail, videoUrl, shortcode } }` or `{ success:false, error:{ code, message } }`.
- `POST /api/instagram/download` takes `{ "shortcode": "..." }` and streams `video/mp4` as an attachment.

Error codes: `EMPTY_INPUT`, `INVALID_URL`, `PRIVATE_OR_INACCESSIBLE`, `NOT_FOUND`, `UNSUPPORTED_MEDIA`, `TEMPORARILY_UNAVAILABLE`, `PROVIDER_NOT_CONFIGURED`, `RATE_LIMITED`, `PAYLOAD_TOO_LARGE`, `DOWNLOAD_FAILED`, `INTERNAL_ERROR`.

## Security
- Reel URLs are validated with a strict host and path check on both the client and the server.
- The download route never accepts a URL from the browser. It re-resolves the Reel on the server from the shortcode.
- Media is fetched only over https from an allowlist (`*.cdninstagram.com`, `*.fbcdn.net`, and `MEDIA_ALLOWED_HOSTS`). IP literals and localhost are rejected, and redirects are followed manually with every hop re-checked.
- Request bodies are capped at 2 KB. Video responses are capped at 300 MB and streamed, never buffered.
- A per-instance in-memory rate limit is applied. For strong protection, also add a Vercel Firewall rate-limit rule on `/api/*`.
- Nothing is logged or stored, and there are no cookies or analytics.

## Deploy to Vercel
1. `git init && git add . && git commit -m "Initial commit"`, then push to a new GitHub repo.
2. On vercel.com, go to **Add New → Project**, import the repo (Next.js is auto-detected), and use the default build settings.
3. In **Settings → Environment Variables**, add the values from `.env.example`. At minimum set `NEXT_PUBLIC_SITE_URL` to your production domain and choose a `MEDIA_PROVIDER` (currently `yt_dlp`).
4. Deploy. Redeploy after you change env vars.
5. Optional: add a custom domain, then submit `https://<domain>/sitemap.xml` in Google Search Console.
