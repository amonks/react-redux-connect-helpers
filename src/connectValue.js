import connectStateValue from './connectStateValue'
import { always } from './util'

/** @function
 * @name connectValue
 * @desc Returns a function that connects a value to a React component as a prop
 * @param {any} value
 * @param {string} propName
 * @returns {function} Connected component class
 * @example const TitleContainer = compose(
 *   connectValue('purple', 'color'),
 *   connectValue('You\'re Living All Over Me', 'title')
 * )(TitleComponent)
 */
export default (value, propName) =>
  connectStateValue(null, propName, always(value))
