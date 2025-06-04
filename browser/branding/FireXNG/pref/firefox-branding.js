/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "about:welcome");
pref("startup.homepage_welcome_url.additional", "");
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 21600); // 6 hours
// Give the user x seconds to react before showing the big UI. default=192 hours
pref("app.update.promptWaitTime", 691200);
// app.update.url.manual: URL user can browse to manually if for some reason
// all update installation attempts fail.
// app.update.url.details: a default value for the "More information about this
// update" link supplied in the "An update is available" page of the update
// wizard.
#if MOZ_UPDATE_CHANNEL == beta
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/beta?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/beta/notes");
  pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#elifdef MOZ_ESR
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/enterprise?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/organizations/notes");
  pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#else
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/new?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/notes");
  pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#endif
pref("app.releaseNotesURL.prompt", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=updateprompt");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=4 days
pref("app.update.badgeWaitTime", 345600);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 0);

//           ===========================
//            FIREXNG PRIVACY HARDENING
//           ===========================

// ADD-ON RECCOMENDATIONS & UPDATES

pref("extensions.pocket.enabled", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.htmlaboutaddons.recommendations.enabled", false);
pref("extensions.htmlaboutaddons.discover.enabled", false);
pref("extensions.webservice.discoverURL", "");
pref("extensions.systemAddon.update.url", "");
pref("extensions.update.enabled", false);
pref("extensions.update.url", "");

// CRASH REPORTING

pref("breakpad.reportURL", "");
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// DATA COLLECTION & TELEMETRY

pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("browser.ping-centre.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.tabs.firefox-view", false); // disables view + telemetry
pref("browser.messaging-system.enabled", false);
pref("browser.messaging-system.whatsNewPanel.enabled", false);

// DEFAULT BROWSER CHECK

pref("browser.shell.checkDefaultBrowser", false);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// DNS, PREFETCHING, SPECULATIVE

pref("network.trr.mode", 5); // Disable DNS over HTTPS
pref("network.http.sendRefererHeader", 0);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.speculative-parallel-limit", 0);
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.preconnect", false);
pref("browser.urlbar.speculativeConnect.enabled", false);

// FINGERPRINTING & PROTECTION

pref("privacy.resistFingerprinting", true);
pref("privacy.resistFingerprinting.letterboxing", true);

// FORM AUTOFILL & PASSWORDS

pref("signon.autofillForms", false);
pref("signon.rememberSignons", false);
pref("browser.formfill.enable", false);

// GEOLOCATION

pref("geo.enabled", false);
pref("geo.provider.network.url", "");
pref("geo.provider.use_gpsd", false);           // Linux
pref("geo.provider.ms-windows-location", false); // Windows
pref("geo.provider.use_corelocation", false);    // macOS
pref("browser.region.network.url", "");
pref("browser.region.update.enabled", false);

// NORMANDY, SHIELD & EXPERIMENTS

pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("app.normandy.first_run", false);
pref("app.shield.optoutstudies.enabled", false);
pref("browser.selfsupport.url", ""); // Heartbeat (ratings)

// SAFE BROWSING & GOOGLE SERVICES

pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("network.connectivity-service.enabled", false); // disables NetError ping

// SEARCH SUGGESTIONS & SPONSORED CONTENT

pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.suggest.searches", false);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
pref("browser.discovery.enabled", false); // add-on discovery
pref("browser.search.hiddenOneOffs", "Google,Bing,DuckDuckGo,Amazon.com,eBay");

// SKIP FIRST RUN WELCOME
pref("browser.aboutwelcome.enabled", false);
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.startup.homepage_override.skip", true);


// UPDATES

pref("app.update.enabled", false);
pref("app.update.auto", false);
pref("app.update.service.enabled", false);

// WEB FEATURES

pref("media.peerconnection.enabled", false);  // WebRTC
pref("dom.battery.enabled", false);
pref("dom.serviceWorkers.enabled", false);
pref("dom.push.enabled", false);
pref("dom.webnotifications.enabled", false);
pref("dom.webnotifications.serviceworker.enabled", false);

//          ===========================
//             NEW TAB PAGE SETTINGS
//          ===========================

pref("browser.newtabpage.enabled", false);
pref("browser.newtab.preload", false);
pref("browser.newtabpage.activity-stream.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
pref("browser.newtab.use_custom", false);
pref("browser.newtab.custom_url", "about:blank");
pref("browser.newtab.url", "about:blank");  // Legacy fallback
// pref("browser.newtab.url", "file:///path/to/custom.html");
