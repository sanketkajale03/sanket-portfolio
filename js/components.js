
/**
 * Reusable HTML component loader.
 */

import { sitePath } from "./paths.js";

export async function loadComponent(selector, componentPath) {

    const container = document.querySelector(selector);

    if (!container) {
        console.warn(`Container not found: ${selector}`);
        return;
    }

    try {

        const response = await fetch(sitePath(componentPath));

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();

        // Only trusted local templates belong in this loader.
        container.innerHTML = html;

    } catch (error) {

        console.error("Component loading failed:", error);

    }

}
