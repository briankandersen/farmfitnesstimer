# Changelog

All notable changes to the Farm Fitness Timer will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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