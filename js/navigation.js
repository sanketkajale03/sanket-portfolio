
/**
 * Navigation Controller
 *
 * Controls the responsive mobile navigation menu.
 */

export function initializeNavigation() {

    const menuButton = document.querySelector("#mobile-menu-button");
    const navigation = document.querySelector("#main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        const isExpanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", String(!isExpanded));

        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation" : "Close navigation"
        );

        navigation.classList.toggle("active");

    });

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute("aria-label", "Open navigation");

        });

    });

}
