# Safe Data Cleaner for Teachers — GitHub Pages Package

This is a **static**, browser-only tool that lets educators remove student PII from CSV files **without uploading anything**. All cleaning happens on the user's device.

## 🚀 Quick Deploy to GitHub Pages

1. Create a new public repo (e.g., `safe-data-cleaner`).
2. Add these files at the repo root:
   - `index.html`
   - `service-worker.js`
   - `manifest.webmanifest`
   - `.nojekyll`
3. Commit & push.
4. In the repo: **Settings → Pages →** set **Source = Deploy from a branch**, pick `main` and `/ (root)`.
5. Open the Pages URL (shown in the Settings page).

> **Note:** This build uses CDN scripts (React, ReactDOM, Babel, PapaParse) only for loading the page itself. The app blocks all other network calls. Your CSV data never leaves the device.

## 🔒 How we ensure “no data leaves the computer”

- **Client-side only**: CSV read via the File API; output created via Blob URLs.
- **CSP**: `connect-src 'self'` blocks any outbound requests, except to self for static files/CDNs defined in `script-src`.
- **Runtime network lock**: a small script prevents `fetch`, `XMLHttpRequest`, and `WebSocket` to non-self origins.
- **Service worker**: rejects any cross-origin requests at runtime (defense-in-depth).

You can verify: Open DevTools → Network tab → interact with the app → you should see **no network traffic** when uploading/cleaning/downloading CSVs.

## 🧩 Local development (optional)

Just open `index.html` from disk in a modern browser, or serve with any static server. Everything runs locally.

## 📁 What’s included

- `index.html` — the full app in a single file (with teacher-friendly UI wording).
- `service-worker.js` — blocks cross-origin fetches at runtime.
- `manifest.webmanifest` — basic PWA manifest.
- `.nojekyll` — ensures GitHub Pages serves files as-is.

## ✅ Tested browsers

- Chrome, Edge, Firefox, Safari (latest).

---

© 2025. Educational use only. No warranties.
