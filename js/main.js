
/**
 * Main Application Entry Point
 */

import { loadComponent } from "./components.js";

import { initializeTheme } from "./theme.js";

import { initializeNavigation } from "./navigation.js";

/**
 * Initialize the homepage.
 */
async function initializeWebsite() {

    // Load shared components.
    await Promise.all([

        loadComponent(
            "#header-container",
            "./components/header.html"
        ),

        loadComponent(
            "#footer-container",
            "./components/footer.html"
        )

    ]);

    // Initialize interactive features after loading components.
    initializeTheme();

    initializeNavigation();

    initializeCurrentYear();

}

/**
 * Update footer year.
 */
function initializeCurrentYear() {

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

}

// Start application.
document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);
