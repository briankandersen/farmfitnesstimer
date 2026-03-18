# Farm Fitness Timer

A powerful, standalone browser-based workout timer for Functional Fitness, HIIT, CrossFit, and general training. Built as a Single Page Application (SPA) in a single HTML file, optimized for both mobile and desktop.

Created by [Farm Fitness Timer](https://www.farmfitnesstimer.com).

## Timer Modes

- **Clock** — Full-screen digital clock with date display.
- **Rounds** — Work/rest intervals with configurable rounds and sets (Perfect for Tabata & HIIT).
- **EMOM** — Every Minute On the Minute with progress tracking.
- **AMRAP / For Time** — Flexible countdown (AMRAP) or count-up (For Time) timer with an optional time cap.
- **Circuit** — Advanced builder with named exercises, individual work/rest durations, and overall circuit rounds.
- **Compound** — The ultimate workout builder. Chain multiple timer types (AMRAPs, EMOMs, Circuits, and Rest) into one massive, continuous session.

## Key Features & Architecture

- **High-Precision Metronome:** Uses `performance.now()` and microsecond-level tick processing to guarantee perfectly accurate intervals and catch-up logic, even if the device sleeps or the browser throttles background tabs.
- **Dynamic End-of-Workout (EOW):** Real-time calculation of the exact finishing time. The mini-clock automatically adjusts EOW based on current workout progress, including pauses and manual skips.
- **Progressive Web App (PWA):** Fully offline-ready via Service Worker (`sw.js`) and `manifest.json`. Installable as a native app on iOS, Android, and desktop.
- **State Persistence:** Automatically saves all configurations, circuit builds, and compound segments to `localStorage`. Restores your exact session upon refresh.
- **Native Navigation (History API):** Full integration with the HTML5 History API. Use your device's native "Back" button or swipe-back to navigate screens without accidentally leaving the app.
- **Universal Escape/Cancel:** Global event listeners allow the `ESC` key and hardware back-button to act as a universal "Cancel," closing open dialogs or returning to previous menus safely.
- **Preset Management:** Save, load, and delete custom presets. Includes **JSON Export/Import** with intelligent conflict resolution for sharing setups between devices.
- **SEO Optimized:** Dynamically updates page titles and meta descriptions via URL parameters. Supports bilingual SEO targeting based on `.dk` or `.com` domain access.
- **Immersive UI/UX:** Built with `100dvh` for full-screen mobile immersion. Replaces all native browser prompts with custom-designed HTML/CSS dialogs.

## URL Parameters (Shareable Workouts)

Share complete workout setups via a simple link. By default, the URL opens the setup screen so the user can review settings before starting.

### Examples:
* **[Classic Tabata Timer](https://www.farmfitnesstimer.com/?title=Classic+Tabata+Timer&type=rounds&work=20&rest=10&rounds=8)**
* **[Standard 20 Minute EMOM](https://www.farmfitnesstimer.com/?title=Standard+20+Minute+EMOM+Timer&type=emom&interval=60&rounds=20)**
* **[Fight Gone Bad](https://www.farmfitnesstimer.com/?title=Fight+Gone+Bad+Timer&type=circuit&cr=3&crest=60&ex=Wall+Balls:60:0:1,SDHP:60:0:1,Box+Jumps:60:0:1,Push+Press:60:0:1,Row:60:0:1)**

**Auto-Start:**
Add `&go=true` to any URL to trigger the timer immediately (a "Tap to Start" overlay is shown to comply with browser audio policies).

## Google Search Console & Sitemaps

For optimal indexing and cross-language visibility, the project utilizes domain-specific sitemaps:

1.  **Submission:** Submit `sitemap-com.xml` for the .com domain and `sitemap-dk.xml` for the .dk domain.
2.  **hreflang:** Both sitemaps include `xhtml:link` tags to inform Google that the pages are localized versions of each other.
3.  **Robots:** Localized `robots-com.txt` and `robots-dk.txt` manage crawler access per domain via Netlify redirects.

## Deployment & Testing

The entire application is self-contained in a single `index.html` file and can be deployed on any static host (Netlify, GitHub Pages, etc.).

**Offline Compatibility:** The app is designed to work as a local file (`file://`) for absolute offline use. In this mode, History API transitions are automatically handled to ensure the app remains functional without a web server.

**Web Server Testing:** For full PWA and History API testing, run via a local server (e.g., VS Code Live Server or `python -m http.server`).

## License

© [Farm Fitness Timer](https://www.farmfitnesstimer.com). Built with precision for the functional fitness community.