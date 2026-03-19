# Changelog

All notable changes to the Farm Fitness Timer will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.50] - 2026-03-19
### Added
* Implemented visually hidden, SEO-optimized `<h1>` text ("Farm Fitness Timer - Free Online Workout Clock") alongside the main logo to improve keyword relevance without altering the UI.
* Added a hardcoded default `<link rel="canonical">` tag in the document `<head>` to prevent indexing race conditions before JavaScript execution.

### Changed
* Significantly upgraded the JSON-LD Structured Data from a basic `SoftwareApplication` to a comprehensive `WebApplication`, injecting a detailed `featureList` and `browserRequirements` to enhance Google Rich Snippets.
* Completely rewrote the bottom SEO text container into a Generative Engine Optimization (GEO) friendly Q&A/FAQ format. This targets semantic search queries and LLM (AI) scraping behavior for both English and Danish users.
* Refactored the JavaScript canonical URL generation to reliably append `window.location.search`, ensuring dynamically shared URLs (like custom AMRAPs and Circuits) are correctly indexed as unique pages rather than duplicates.

## [1.0.48] - 2026-03-19
### Fixed
* Fixed a major SEO bug where dynamically generated canonical tags ignored query parameters (`window.location.search`). 
* This ensures that parameterized URLs (like pre-built AMRAP or Circuit timers) submitted via sitemaps are properly indexed by Googlebot instead of being flagged as duplicates of the root domain.

## [1.0.47] - 2026-03-18
### Changed
* Optimized UI element dimensions for better vertical space utilization on mobile screens.
* Reduced padding and slightly scaled down font sizes on numerical input fields (`.field input`) and stepper buttons (`.step-btn`).
* Slimmed down the vertical padding on primary action buttons (`.btn`, `.btn-sm`) to create a more compact, yet touch-friendly footprint.
* Adjusted padding on the preset selection bar elements (`select`, `.preset-btn`) to tighten up the setup screen headers.

## [1.0.46] - 2026-03-18
### Fixed
* Resolved an iOS/Safari specific audio suspension bug where Web Audio API oscillator beeps would randomly stop firing after the initial tones.
* Applied `playsInline` property and `playsinline` HTML attribute to the background `silentAudio` HTML5 Audio element. This prevents iOS from attempting to hijack the audio stream for full-screen media playback and aggressively suspending the audio context during background/PWA execution.

## [1.0.45] - 2026-03-18
### Fixed
* Resolved a Safari/iOS specific rendering bug where the timer navigation SVG icons (`icon-chevron-left`, `icon-chevron-right`) would fail to display. 
* Replaced `display: none` on the root `<svg>` symbol container with a zero-dimension absolute positioning hack (`width: 0; height: 0; overflow: hidden;`) to force WebKit browsers to retain the symbols in the DOM for `<use>` element referencing.
* Added `aria-hidden="true"` to the hidden SVG container to maintain screen reader accessibility standards.

## [1.0.44] - 2026-03-18
### Added
* Added inline SVG symbols (`icon-chevron-left` and `icon-chevron-right`) to the DOM to ensure crisp, high-resolution iconography across all pixel densities.

### Changed
* Replaced the standard Unicode arrow characters (`◀`, `▶`, `◀◀`, `▶▶`) in the timer navigation bar with custom SVG icons for a more cohesive, premium design.
* Introduced the `.timer-nav-icon` CSS class to strip default iOS/Android WebView button styling (removing grey backgrounds and native borders).
* Upgraded the timer navigation buttons with a native-feeling "halo" hover/tap effect matching the app's primary gold accent color (`--accent`).
* Constructed double-chevron "skip" icons for Compound/Circuit modes by overlapping two SVG elements with negative margins, ensuring perfect visual alignment.

## [1.0.43] - 2026-03-18
### Changed
* Refactored codebase to use English comments globally for improved readability and maintainability.
* Cleaned up minor duplicate code fragments and dead logic across the `index.html` file.
* Streamlined the state management sections and internal function documentation.

## [1.0.42] - 2026-03-18
### Added
* Implemented a "Smart Install" button (`btn-install-app`) in the main menu, specifically targeting `.com` users.
* Added a custom iOS installation guide dialog (`ios-install-dialog`) providing step-by-step instructions for adding the PWA to the iOS home screen.

### Changed
* Integrated environment detection logic (`window.matchMedia('(display-mode: standalone)')` and `navigator.standalone`) to dynamically hide the install button if the app is already installed or running as a TWA.
* Configured the install button to route Android and Desktop users directly to the Google Play Store (URL placeholder ready for final package ID).

## [1.0.41] - 2026-03-18
### Added
* Added `apple-touch-icon` explicitly in `<head>` to ensure iOS devices generate high-quality homescreen icons.
* Implemented dynamic `canonical` URL generation to prevent duplicate content indexing between `.com` and `.dk` domains.
* Added `Strict-Transport-Security` (HSTS) and `Permissions-Policy` headers to `netlify.toml` to enforce HTTPS and lock down unused browser hardware features.
* Applied `x-default` hreflang tags to all localized sub-URLs in both XML sitemaps, providing a proper global fallback for unmatched languages.
* Added `lang` and `dir` properties to `manifest.json` for better PWA compliance.

### Changed
* Dynamically update `twitter:title`, `twitter:description`, and `og:` meta tags via JavaScript when a shared workout URL is opened, ensuring rich previews match the actual domain and content.
* Updated `favicon.svg` fill colors to perfectly match the CSS `--accent` variable (`#e8a800`) for visual consistency.

### Removed
* Removed redundant root path (`./`) from the Service Worker `PRECACHE_URLS` list to prevent duplicate caching of the `index.html` file.

## [1.0.40] - 2026-03-18
### Changed
* Comprehensive update of `README.md` to reflect new architecture (Metronome, EOW, History API).
* Standardized documentation for SEO and localization strategy.
* Improved deployment instructions for local and offline testing.

## [1.0.39] - 2026-03-18
### Changed
* Updated internal version to 1.0.40 in manifest.
* Modified last modified dates in `.com` and `.dk` sitemap files.
* Adjusted service worker cache name to trigger an update for end users.

## [1.0.38] - 2026-03-17
### Added
* `generer-billeder.html` utility script for local SVG-to-image conversion.
* Comprehensive suite of favicons (`favicon.svg`, `icon-192.png`, `icon-512.png`) and Open Graph images (`og-image.jpg`).
### Changed
* Massive refactoring of code structure, optimizing UI spacing and layout across all setup screens.

## [1.0.37] - 2026-03-16
### Added
* Global settings UI allowing configuration of:
  * URL parameters visibility.
  * Default count direction (Up/Down).
  * Default Halfway Beep state.
  * Pre-Timer Countdown duration.
  * Minutes and Seconds stepper increments.

## [1.0.36] - 2026-03-16
### Changed
* Updated Service Worker (`sw.js`) cache name to version 2 for improved asset management and cache busting.

## [1.0.35] - 2026-03-16
### Changed
* Refactored Service Worker (`sw.js`) fetch logic to a `Network-first` strategy for the main HTML file, falling back to cache when offline.
* Set `Cache-first` strategy for external assets like Google Fonts.

## [1.0.34] - 2026-03-16
### Added
* Dynamic "Total Workout Time" display on the setup screens, providing users with the calculated duration of their configured workout before starting.

## [1.0.33] - 2026-03-16
### Added
* Defined `theme-color` meta tag (`#111111`) to style the mobile browser status bar.
### Changed
* Updated `favicon` reference to point to the correct internal asset.

## [1.0.32] - 2026-03-16
### Added
* Initial PWA support with a fully configured `manifest.json`.
* Implemented Service Worker (`sw.js`) for caching strategies, enabling offline capability.

## [1.0.31] - 2026-03-16
### Changed
* Updated primary UI font family from `Source Sans Pro` to `Source Sans 3` for better rendering.
* Optimized logo loading logic in `index.html`.

## [1.0.30] - 2026-03-16
### Added
* `_redirects` file with routing rules for Netlify deployment.
* Explicit `robots-com.txt` and `robots-dk.txt` for domain-specific indexing.
### Removed
* Deleted the generic `robots.txt` file in favor of the localized versions.

## [1.0.29] - 2026-03-16
### Changed
* Updated `README.md` with a detailed breakdown of the new architecture, state persistence, and high-precision metronome logic.
* Updated `lastmod` dates in XML sitemaps.

## [1.0.28] - 2026-03-16
### Changed
* Refactored the timer display font stack to prioritize `JetBrains Mono` and explicitly fall back to `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, and `Consolas` for maximum cross-platform compatibility.

## [1.0.27] - 2026-03-16
### Added
* Added `preconnect` meta links for Google Fonts to eliminate render-blocking delay.
### Changed
* Refactored `localStorage` handling (`farmActiveView`) so the browser accurately remembers the last active view across sessions.

## [1.0.26] - 2026-03-16
### Changed
* Refactored stepper button functionality (`+` / `-`) to use global event delegation.
* Centralized input logic so dynamic `input` events bubble correctly to trigger UI/URL updates.

## [1.0.25] - 2026-03-16
### Changed
* Improved accessibility (a11y) by adding `aria-label` attributes to UI controls, stepper buttons, and navigation elements.

## [1.0.24] - 2026-03-16
### Changed
* Upgraded the metronome timing logic to use `performance.now()` instead of `Date.now()` for hyper-accurate, microsecond-level tick processing.

## [1.0.23] - 2026-03-16
### Changed
* Refactored event handling for Compound and Circuit segment lists. Removed per-item listeners in favor of a centralized, delegated `handleListClick` function.

## [1.0.22] - 2026-03-16
### Fixed
* Enhanced audio handling specifically for iOS Safari by implementing a silent audio oscillator trick on the first "Tap to Start" interaction, successfully unlocking the Web Audio Context.

## [1.0.21] - 2026-03-16
### Changed
* Refactored preset import process to use a `while` loop for efficiency.
* Greatly improved conflict resolution logic (Skip/Rename/Overwrite) when users import JSON files with existing preset names.

## [1.0.20] - 2026-03-16
### Added
* Implemented the HTML5 Wake Lock API (`navigator.wakeLock.request('screen')`) to prevent mobile screens from dimming or locking while a timer is active.

## [1.0.19] - 2026-03-16
### Added
* Implemented the core `metronomeTick` functionality for bulletproof timer synchronization. Includes advanced "catch-up" logic calculating missed `MathTicks` if the browser was suspended in a background tab.

## [1.0.18] - 2026-03-16
### Added
* Sub-navigation buttons (Rewind/Forward) added to the active timer UI.
* Users can now manually skip between exercises, intervals, or compound segments mid-workout.

## [1.0.17] - 2026-03-16
### Added
* Intercepts `beforeunload` events: If a user attempts to refresh the page or close the tab during an active workout, the browser will display a standard warning dialog.

## [1.0.16] - 2026-03-16
### Changed
* Updated `README.md` with explicit Google Search Console guidelines for managing dual sitemaps.

## [1.0.15] - 2026-03-16
### Added
* Introduced localized confirmation dialogs ("Are you sure?") in Danish and English for critical destructive actions like deleting presets or clearing circuit segments.

## [1.0.14] - 2026-03-15
### Added
* Added a dedicated 'Main' button to the timer control panel for faster navigation back to the root menu.

## [1.0.13] - 2026-03-15
### Changed
* Renamed "Reset" button to "Back" in the timer UI.
* Refactored history management: The app now leverages `history.back()` and the `popstate` event for seamless back-navigation, preventing accidental workout stops.

## [1.0.12] - 2026-03-15
### Added
* Initial `robots.txt` configuration pointing web crawlers to the respective sitemaps.

## [1.0.11] - 2026-03-15
### Added
* Built dedicated `sitemap-com.xml` and `sitemap-dk.xml` files.
* Incorporated `hreflang` attributes indicating localization mappings for various pre-configured timer URLs.

## [1.0.10] - 2026-03-15
### Changed
* Programmatically disabled the PayPal donation section for users accessing the timer via the `.dk` domain.

## [1.0.9] - 2026-03-15
### Changed
* Refactored CSS layout for Compound and Circuit setups (`justify-content: flex-start`), ensuring scrollability remains smooth when the segment list exceeds viewport height.

## [1.0.8] - 2026-03-15