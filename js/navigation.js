
/**
 * Responsive navigation controller.
 */

import { sitePath } from "./paths.js";

export function initializeNavigation() {

    // Resolve shared navigation links.
    document.querySelectorAll("[data-route]").forEach((link) => {

        const route = link.dataset.route;

        link.href = sitePath(route);

    });

    const menuButton = document.querySelector("#mobile-menu-button");

    const navigation = document.querySelector("#main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", String(!isOpen));

        navigation.classList.toggle("active");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );

    });

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

        });

    });

}
