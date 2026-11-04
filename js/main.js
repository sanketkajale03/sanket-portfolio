
/**
 * Main application entry point.
 */

import { loadComponent } from "./components.js";

import { initializeTheme } from "./theme.js";

import { initializeNavigation } from "./navigation.js";

async function initializeWebsite() {

    await Promise.all([

        loadComponent(
            "#header-container",
            "components/header.html"
        ),

        loadComponent(
            "#footer-container",
            "components/footer.html"
        )

    ]);

    initializeTheme();

    initializeNavigation();

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}

document.addEventListener("DOMContentLoaded", initializeWebsite);
