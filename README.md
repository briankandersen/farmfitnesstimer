# Farm Fitness Timer

A powerful, standalone browser-based workout timer for Functional Fitness, HIIT, CrossFit, and general training [cite: 1.5, 2.5]. Built as a Single Page Application (SPA) in a single HTML file, optimized for both mobile and desktop [cite: 1.5, 2.5].

Created by [Farm Fitness Timer](https://www.farmfitnesstimer.com).

## Timer Modes

- **Clock** — Full-screen digital clock [cite: 1.5, 2.5].
- **Rounds** — Work/rest intervals with configurable rounds and sets (Perfect for Tabata & HIIT) [cite: 1.5, 2.5].
- **EMOM** — Every Minute On the Minute [cite: 1.5, 2.5].
- **AMRAP / For Time** — Countdown or count-up timer with a time cap [cite: 1.5, 2.5].
- **Circuit** — Advanced builder with named exercises, individual work/rest durations, and overall circuit rounds [cite: 1.5, 2.5].
- **Compound** — Chain multiple timer types (AMRAPs, EMOMs, Circuits, and Rest) into one massive, continuous workout [cite: 1.5, 2.5].

## Key Features

- **Preset Management:** Save, load, delete, **export, and import (JSON)** presets for all timer types [cite: 1.5, 2.5]. Includes intelligent conflict resolution (skip, rename, overwrite) during import [cite: 1.5, 2.5].
- **Immersive UI/UX:** Replaces all native browser pop-ups (like `confirm()`) with custom-designed HTML/CSS dialogs to maintain a seamless, branded experience [cite: 1.5, 2.5].
- **Native App Feel:** Utilizes `100dvh` for perfect mobile scaling and the HTML5 History API (`history.pushState`) so the browser's hardware "Back" button works seamlessly within the app [cite: 1.5, 2.5].
- **Intelligent Navigation:** Features a dedicated "Main" button upon completion and a smart "Back" logic that ensures users return to the correct setup screen [cite: 1.5, 2.5].
- **SEO Optimized:** Dynamically updates page titles and meta descriptions via URL parameters [cite: 1.5, 2.5]. Supports bilingual SEO based on `.dk` or `.com` domains [cite: 1.5, 2.5].
- **Audio & Visual Cues:** Adjustable volume, halfway beeps, 3-2-1 countdown, and distinct color codes for Work, Rest, and Done phases [cite: 1.5, 2.5].

## URL Parameters (Shareable Workouts)

You can share a complete workout setup via a simple URL. By default, the URL opens the setup screen so the user can review settings before starting [cite: 1.5, 2.5]. 

**SEO Tip:** Add the `&title=` parameter to dynamically change the browser tab and meta description (spaces should be written as `+`) [cite: 1.5, 2.5].

### Ready-to-Use Examples
* **[Classic Tabata Timer](https://www.farmfitnesstimer.com/?title=Classic+Tabata+Timer&type=rounds&work=20&rest=10&rounds=8)**
* **[Standard 20 Minute EMOM](https://www.farmfitnesstimer.com/?title=Standard+20+Minute+EMOM+Timer&type=emom&interval=60&rounds=20)**
* **[Fight Gone Bad](https://www.farmfitnesstimer.com/?title=Fight+Gone+Bad+Timer&type=circuit&cr=3&crest=60&ex=Wall+Balls:60:0:1,SDHP:60:0:1,Box+Jumps:60:0:1,Push+Press:60:0:1,Row:60:0:1)**

**Auto-Start:**
Add `&go=true` to any URL to auto-start the timer immediately (a "Tap to Start" screen is shown first to enable browser audio) [cite: 1.5, 2.5].

## Google Search Console & Sitemaps

For optimal indexing and cross-language visibility, use separate sitemaps for the two domains [cite: 2.1, 2.5]:

1.  **Add Properties:** Add both `farmfitnesstimer.com` and `farmfitnesstimer.dk` as Domain properties in [Google Search Console](https://search.google.com/search-console/) [cite: 2.1, 2.5].
2.  **Verification:** Confirm ownership via DNS TXT records [cite: 2.5].
3.  **Submit Sitemaps:**
    * For **.com**: Submit `sitemap-com.xml` [cite: 2.1, 2.5].
    * For **.dk**: Submit `sitemap-dk.xml` [cite: 2.1, 2.5].

Both sitemaps include `xhtml:link` tags to inform Google that the pages are localized versions of each other, ensuring users see the correct domain based on their language [cite: 2.1, 2.5].

## Deployment & Testing

The application is self-contained in a single `index.html` file and can be deployed on any static host (Netlify, GitHub Pages, etc.) [cite: 1.5, 2.5].

**Important Note on Local Testing:** Due to the use of the HTML5 History API, the app must be run via a local web server (e.g., VS Code Live Server). Opening the file directly via `file:///` will cause the browser to block the navigation logic for security reasons [cite: 2.5].

## License

© [Farm Fitness Timer](https://www.farmfitnesstimer.com) [cite: 2.5].
