# BUYE — Landing Page

A single-page site for BUYE (Brush Up Your English), organized around the four learner tracks:
**Coaching for Students · Career Boost for Professionals · Training for Educators · Skills for Entrepreneurs & Teams**

Plain HTML/CSS/JS — no build tools, no framework, no npm install needed. Opens directly in a browser and deploys as a static site.

```
buye-site/
├── index.html
├── assets/
│   ├── style.css
│   └── main.js
└── README.md
```

---

## 1. Preview it locally in VS Code

1. Open the `buye-site` folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel, if you don't have it.
3. Right-click `index.html` → **"Open with Live Server"**.
4. Your browser opens the page with auto-reload as you edit.

*(Alternative without any extension: just double-click `index.html` — it will open directly in your browser. WhatsApp/email links work either way.)*

---

## 2. Push it to GitHub

Open a terminal in the `buye-site` folder (VS Code: **Terminal → New Terminal**) and run:

```bash
git init
git add .
git commit -m "Initial BUYE landing page"
```

Then create a new empty repository on GitHub (e.g. `buye-website`) — **don't** initialize it with a README, since you already have one — and connect it:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/buye-website.git
git push -u origin main
```

---

## 3. Deploy for free with GitHub Pages

1. On GitHub, open your repository → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL within a minute or two, typically:
   ```
   https://<your-username>.github.io/buye-website/
   ```

Any time you push new changes to `main`, the live site updates automatically within a minute.

---

## 4. Connecting your real domain (buye.online)

Once GitHub Pages is live:
1. In your repo, go to **Settings → Pages → Custom domain**, enter `www.buye.online`, and save. This creates a `CNAME` file in your repo automatically — don't delete it.
2. At your domain registrar (wherever you bought buye.online), add:
   - A `CNAME` record: `www` → `<your-username>.github.io`
   - Optionally, 4 `A` records on the root domain pointing to GitHub's IPs (listed in GitHub's Pages docs) so `buye.online` without `www` also works.
3. DNS changes can take a few hours to propagate. Once live, tick **Enforce HTTPS** in the same Pages settings panel.

---

## 5. What to update before/after launch

- **Contact details** are already wired in: WhatsApp → `+91 99958 63184` (via `wa.me` links), email → `info@buye.online`. Search-and-replace in `index.html` if either ever changes.
- **Prices and course names** live directly in the HTML inside each of the four `<article class="segment-card">` blocks — edit the text there, no other file needs touching.
- **Fonts** (Fraunces, IBM Plex Sans, Caveat) load from Google Fonts automatically — no setup needed, but the site does need an internet connection for them to appear; without it, the browser falls back to system fonts gracefully.
- Add real screenshots/photos later by dropping image files into `assets/` and referencing them with an `<img>` tag — the layout doesn't currently use any photos, by design, so this is optional.

That's it — no server, no database, no monthly hosting cost.
