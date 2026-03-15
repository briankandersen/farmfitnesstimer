# Farm Fitness Timer

A powerful, standalone browser-based workout timer for Functional Fitness, HIIT, CrossFit, and general training. Built as a Single Page Application (SPA) in a single HTML file, optimized for both mobile and desktop.

## Timer Modes

- **Clock** — Full-screen digital clock.
- **Rounds** — Work/rest intervals with configurable rounds and sets (Perfect for Tabata & HIIT).
- **EMOM** — Every Minute On the Minute.
- **AMRAP / For Time** — Countdown or count-up timer with a time cap.
- **Circuit** — Advanced builder with named exercises, individual work/rest durations, and overall circuit rounds.
- **Compound** — Chain multiple timer types (AMRAPs, EMOMs, Circuits, and Rest) into one massive, continuous workout.

## Key Features

- **Preset Management:** Save, load, delete, **export, and import (JSON)** presets for all timer types. Includes intelligent conflict resolution (skip, rename, overwrite) during import.
- **Native App Feel:** Utilizes `100dvh` and CSS clamp for perfect mobile scaling, plus HTML5 History API (`history.pushState`) so the browser's hardware "Back" button works seamlessly without leaving the app.
- **SEO Optimized:** Dynamically updates page titles and meta descriptions based on URL parameters (e.g., displaying "Fight Gone Bad" in Google search results). Supports bilingual SEO based on `.dk` or `.com` domains.
- **Audio & Visual Cues:** Adjustable volume, halfway beeps, a 3-2-1 countdown before start, and distinct color codes for Work, Rest, and AMRAP/Circuit phases.
- **Quick Controls:** Tap spacebar to pause/resume.

## URL Parameters (Shareable Workouts)

You can share a complete workout setup via a simple URL. By default, the URL opens the setup screen so the user can review the settings before starting. 

**Pro Tip for SEO:** Add the `&title=` parameter to dynamically change the browser tab and meta description (spaces should be written as `+`).

### Examples:
**Rounds (e.g., Tabata):**
`?title=Classic+Tabata&type=rounds&work=20&rest=10&rounds=8&sets=1&setrest=0`

**EMOM:**
`?title=Standard+EMOM&type=emom&interval=60&rounds=10`

**AMRAP:**
`?title=15+Minute+AMRAP&type=amrap&duration=15`

**Circuit (Advanced):**
`?title=Fight+Gone+Bad&type=circuit&cr=3&crest=60&ex=Wall+Balls:60:0:1,SDHP:60:0:1,Box+Jumps:60:0:1,Push+Press:60:0:1,Row:60:0:1`
*(Format for `ex`: `name:duration:rest:rounds` separated by commas. `cr` = total circuit rounds, `crest` = rest between circuits).*

**Auto-Start:**
Add `&go=true` to any URL to auto-start the timer immediately (a "Tap to Start" screen is shown first to enable browser audio).

## Deployment & Testing

This entire application is self-contained within a single `index.html` file. It can be deployed on any server that serves static files (GitHub Pages, Netlify, standard web hotels, etc.).

**Important Note on Local Testing:** Because the app uses the HTML5 History API for the back-button functionality, it must be run over a local web server (e.g., `http://localhost:5500` via VS Code Live Server or `python -m http.server`). Opening the file directly via `file:///C:/...` will block the back-button logic due to browser security restrictions.

## License

© Farm Fitness