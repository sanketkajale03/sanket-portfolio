
/**
 * Project Path Manager
 *
 * Resolves project resources relative to the project root.
 * Also supports GitHub Pages repository subpaths.
 */

const PROJECT_ROOT = new URL("../", import.meta.url);

/**
 * Resolve a project-relative path.
 *
 * @param {string} path - Path relative to project root.
 * @returns {string} Absolute resource URL.
 */
export function sitePath(path) {

    const cleanPath = path.replace(/^\/+/, "");

    return new URL(cleanPath, PROJECT_ROOT).href;

}
