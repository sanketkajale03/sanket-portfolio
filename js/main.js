
/**
 * Main Application Entry Point
 *
 * Coordinates shared components and common functionality.
 */

import { loadComponent } from "./components.js";

/**
 * Initialize the website.
 */
async function initializeWebsite() {

    // Load reusable website components.
    await Promise.all([
        loadComponent("#header-container", "./components/header.html"),
        loadComponent("#sidebar-container", "./components/sidebar.html"),
        loadComponent("#footer-container", "./components/footer.html")
    ]);

    // Initialize common website features.
    initializeCurrentYear();

}

/**
 * Display the current year in the footer.
 */
function initializeCurrentYear() {

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}

// Start the application after the DOM is ready.
document.addEventListener("DOMContentLoaded", initializeWebsite);
