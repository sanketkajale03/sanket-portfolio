
/**
 * Shared Component Loader
 *
 * Loads reusable HTML components into the website.
 * Uses fetch() to retrieve component templates.
 */

/**
 * Loads an HTML component into a target element.
 *
 * @param {string} selector - Target element selector.
 * @param {string} componentPath - Component file path.
 */
export async function loadComponent(selector, componentPath) {

    const container = document.querySelector(selector);

    if (!container) {
        console.error(`Component container not found: ${selector}`);
        return;
    }

    try {

        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(
                `Unable to load ${componentPath}: ${response.status}`
            );
        }

        const html = await response.text();

        container.innerHTML = html;

    } catch (error) {

        console.error("Component loading error:", error);

    }

}
