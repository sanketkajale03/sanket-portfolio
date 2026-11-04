
/**
 * Theme Manager
 *
 * Responsibilities:
 * 1. Switch between dark and light themes.
 * 2. Remember the selected theme.
 * 3. Update the theme button.
 */

const THEME_STORAGE_KEY = "sanket-portfolio-theme";

const VALID_THEMES = ["dark", "light"];

/**
 * Get the saved theme safely.
 */
function getSavedTheme() {

    try {

        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

        if (VALID_THEMES.includes(savedTheme)) {
            return savedTheme;
        }

    } catch (error) {

        console.warn("Unable to access saved theme:", error);

    }

    return "dark";
}

/**
 * Apply the selected theme.
 */
export function applyTheme(theme) {

    const selectedTheme = VALID_THEMES.includes(theme)
        ? theme
        : "dark";

    document.documentElement.dataset.theme = selectedTheme;

    const themeButton = document.querySelector("#theme-toggle");
    const themeIcon = document.querySelector("#theme-icon");
    const themeLabel = document.querySelector("#theme-label");

    if (themeButton) {

        const isDark = selectedTheme === "dark";

        themeButton.setAttribute("aria-pressed", String(isDark));

        themeButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );

        if (themeIcon) {
            themeIcon.textContent = isDark ? "☀" : "☾";
        }

        if (themeLabel) {
            themeLabel.textContent = isDark ? "Light" : "Dark";
        }

    }

    try {

        localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);

    } catch (error) {

        console.warn("Unable to save theme preference:", error);

    }

}

/**
 * Initialize the theme manager.
 */
export function initializeTheme() {

    applyTheme(getSavedTheme());

    const themeButton = document.querySelector("#theme-toggle");

    if (!themeButton) {
        console.warn("Theme toggle button was not found.");
        return;
    }

    themeButton.addEventListener("click", () => {

        const currentTheme = document.documentElement.dataset.theme;

        const nextTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        applyTheme(nextTheme);

    });

}
