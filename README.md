# Nithi Ground Check (offline web app)

## Put it online (GitHub Pages, free)
1. Create a GitHub repository, for example `nithi-ground-check`. Set it to Private if you do not want the design coordinates public (Pages on private repos needs a paid GitHub plan; otherwise use Netlify Drop below).
2. Upload every file in this folder (index.html, manifest.webmanifest, sw.js and the three icon-*.png files) to the repository root.
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. After a minute the app is at `https://<your-username>.github.io/nithi-ground-check/`.

Alternative: drag this folder onto https://app.netlify.com/drop for an instant link, no account needed to try.

## Install on Android
Open the link in Chrome. Wait until the badge at the top says "Offline ready", then Chrome menu > Install app (or Add to Home screen). It now opens from the home screen with no signal.

## Share with colleagues
Send them the link and the same install steps. Each phone keeps its own readings. Export CSV from the Log tab and collect files from the team.

## Update later
Replace index.html, then change VERSION in sw.js (for example nithi-gc-v2) and upload both. Phones pick up the new version the next time they open the app online.

## Notes
- Readings live in the browser storage of each phone. Clearing site data or uninstalling the app deletes them, so export regularly.
- Tolerances are set in the Settings tab and are stored per phone.
