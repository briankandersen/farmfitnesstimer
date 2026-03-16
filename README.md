# Farm Fitness Timer

A powerful, standalone browser-based workout timer for Functional Fitness, HIIT, CrossFit, and general training. Built as a Single Page Application (SPA) in a single HTML file, optimized for both mobile and desktop.

Created by [Farm Fitness Timer](https://www.farmfitnesstimer.com).

## Timer Modes

- **Clock** — Full-screen digital clock.
- **Rounds** — Work/rest intervals with configurable rounds and sets (Perfect for Tabata & HIIT).
- **EMOM** — Every Minute On the Minute.
- **AMRAP / For Time** — Countdown or count-up timer with a time cap.
- **Circuit** — Advanced builder with named exercises, individual work/rest durations, and overall circuit rounds.
- **Compound** — Chain multiple timer types (AMRAPs, EMOMs, Circuits, and Rest) into one massive, continuous workout.

## Key Features & Architecture

- **State Persistence (Auto-Save):** Automatically saves all field inputs, circuit builds, and compound segments to `localStorage` in real-time. Restores the exact active setup view seamlessly upon browser refresh.
- **High-Precision Metronome:** Uses `performance.now()` instead of system time to guarantee perfectly accurate intervals and catch-up logic, even if the device sleeps or the browser throttles background tabs.
- **Accessibility (a11y) & Performance:** Features full zoom support, dynamic language switching (`lang="da"`/`lang="en"`), hidden ARIA labels for screen readers, deferred script loading, and a robust offline-ready monospace font stack.
- **Optimized Event Delegation:** DOM interactions are built using highly optimized event delegation to prevent memory leaks and ensure blazing-fast performance, even when building massive compound workouts.
- **Preset Management:** Save, load, delete, **export, and import (JSON)** presets for all timer types. Includes intelligent conflict resolution (skip, rename, overwrite) during import.
- **Immersive UI/UX:** Replaces all native browser pop-ups (like `confirm()`) with custom-designed HTML/CSS dialogs to maintain a seamless, branded experience.
- **Native App Feel:** Utilizes `100dvh` for perfect mobile scaling and the HTML5 History API (`history.pushState`) so the browser's hardware "Back" button works seamlessly within the app.
- **SEO Optimized:** Dynamically updates page titles and meta descriptions via URL parameters. Supports bilingual SEO based on `.dk` or `.com` domains.
- **Audio & Visual Cues:** Adjustable volume, halfway beeps, 3-2-1 countdown, and distinct color codes for Work, Rest, and Done phases.

## URL Parameters (Shareable Workouts)

You can share a complete workout setup via a simple URL. By default, the URL opens the setup screen so the user can review settings before starting. 

**SEO Tip:** Add the `&title=` parameter to dynamically change the browser tab and meta description (spaces should be written as `+`).

### Ready-to-Use Examples
* **[Classic Tabata Timer](https://www.farmfitnesstimer.com/?title=Classic+Tabata+Timer&type=rounds&work=20&rest=10&rounds=8)**
* **[Standard 20 Minute EMOM](https://www.farmfitnesstimer.com/?title=Standard+20+Minute+EMOM+Timer&type=emom&interval=60&rounds=20)**
* **[Fight Gone Bad](https://www.farmfitnesstimer.com/?title=Fight+Gone+Bad+Timer&type=circuit&cr=3&crest=60&ex=Wall+Balls:60:0:1,SDHP:60:0:1,Box+Jumps:60:0:1,Push+Press:60:0:1,Row:60:0:1)**

**Auto-Start:**
Add `&go=true` to any URL to auto-start the timer immediately (a "Tap to Start" screen is shown first to enable browser audio).

## Google Search Console & Sitemaps

For optimal indexing and cross-language visibility, use separate sitemaps for the two domains:

1.  **Add Properties:** Add both `farmfitnesstimer.com` and `farmfitnesstimer.dk` as Domain properties in [Google Search Console](https://search.google.com/search-console/).
2.  **Verification:** Confirm ownership via DNS TXT records.
3.  **Submit Sitemaps:**
    * For **.com**: Submit `sitemap-com.xml`.
    * For **.dk**: Submit `sitemap-dk.xml`.

Both sitemaps include `xhtml:link` tags to inform Google that the pages are localized versions of each other, ensuring users see the correct domain based on their language.

## Deployment & Testing

The application is self-contained in a single `index.html` file and can be deployed on any static host (Netlify, GitHub Pages, etc.).

**Important Note on Local Testing:** Due to the use of the HTML5 History API, the app must be run via a local web server (e.g., VS Code Live Server). Opening the file directly via `file:///` will cause the browser to block the navigation logic for security reasons.

## License

© [Farm Fitness Timer](https://www.farmfitnesstimer.com).