/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import unplugin from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Replace from 'unplugin-replace/rollup'
 *
 * export default {
 *   plugins: [Replace()],
 * }
 * ```
 */
export default unplugin.rollup
