"use strict";

/* ==========================================================
   CarePlus Hospital - script.js
   Loaded with `defer`, so the DOM is ready when this runs.
   ========================================================== */

/* ---------- Storage helpers ----------
   localStorage can throw (private mode, blocked cookies),
   so every access is wrapped. */
const storage = {
    get(key) {
        try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch { /* ignore */ }
    }
};


/* ---------- DARK MODE ---------- */
const themeButton = document.querySelector(".theme-btn");

function applyDarkMode(isDark) {
    document.body.classList.toggle("dark", isDark);

    if (themeButton) {
        themeButton.setAttribute("aria-pressed", String(isDark));
        const icon = themeButton.querySelector("span") || themeButton;
        icon.textContent = isDark ? "☀️" : "🌙";
    }
}

// Called from the button's inline onclick in index.html
function toggleDarkMode() {
    const isDark = !document.body.classList.contains("dark");
    applyDarkMode(isDark);
    storage.set("darkMode", isDark);
}

// Saved choice wins; otherwise follow the visitor's system setting
const savedTheme = storage.get("darkMode");
applyDarkMode(
    savedTheme !== null
        ? savedTheme === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
);


/* ---------- SMOOTH SCROLL ----------
   Only for in-page anchors. Plain "#" links (placeholders) are
   ignored: document.querySelector("#") throws a SyntaxError,
   which broke the original handler on those links. */
const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll('a[href^="#"]').forEach(link => {
    const hash = link.getAttribute("href");
    if (hash.length < 2) return;

    link.addEventListener("click", e => {
        const target = document.getElementById(hash.slice(1));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });

        // Move keyboard/screen-reader focus to the section too
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        history.pushState(null, "", hash);
    });
});


/* ---------- PAGE LOAD EFFECT ---------- */
function markLoaded() {
    document.body.classList.add("loaded");
}

if (document.readyState === "complete") {
    markLoaded();
} else {
    window.addEventListener("load", markLoaded);
}


/* ---------- FOOTER YEAR ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ---------- EMERGENCY BUTTON ----------
   The original confirm() popup was removed on purpose: in a real
   emergency, an extra "are you sure?" step costs seconds, and the
   tel: link already asks the phone to confirm before dialling.
   If you want it back, uncomment the block below.

const emergencyButton = document.querySelector(".emergency-floating");

if (emergencyButton) {
    emergencyButton.addEventListener("click", e => {
        if (!confirm("Call the hospital emergency department?")) {
            e.preventDefault();
        }
    });
}
*/
