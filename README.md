# The Map · AI in Strategy #2

The interactive 4x4 map from "AI in Strategy #2: Do we need humans to do strategy?" (Helsinki, 19 August 2026). Crosses reasoning depth (L1 to L4) with machine authority (T1 to T4), with verdicts translated from the Strategy Science special issue "Can AI Do Strategy?" (vol. 11, no. 1, 2026).

No build step, no dependencies. One HTML file, one image, one tiny Node server.

## Run locally

    npm start

Then open http://localhost:3000

## Deploy on Railway

1. Create a new GitHub repo (for example `ai-in-strategy-map`) and push this folder:

       git init
       git add .
       git commit -m "AI in Strategy #2 map"
       git branch -M main
       git remote add origin git@github.com:V1LL3-max/ai-in-strategy-map.git
       git push -u origin main

2. In Railway: New Project, then Deploy from GitHub repo, then pick the repo. Railway detects Node and runs `npm start` with its own PORT.
3. In the service: Settings, then Networking, then Generate Domain. That URL is what you share with participants.
4. Optional polish: in `index.html`, swap the two social-preview image URLs (og:image, twitter:image) to `https://YOUR-DOMAIN/cover.jpg` so link previews are served from your own domain.

Hosts: Ville Tikka and Johannes Koponen. Made with Claude.
