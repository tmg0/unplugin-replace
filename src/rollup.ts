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
 * import Macros from 'unplugin-replace/rollup'
 *
 * export default {
 *   plugins: [Macros()],
 * }
 * ```
 */
export default unplugin.rollup
