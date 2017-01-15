import { connect } from 'react-redux'
import { identity, getValueFromPathArray, getPropNameFromPathArray } from './util'

/** @function
 * @name connectStateValue
 * @desc Returns a function that connects a value in state to a React component as a prop
 * @param {Array.<string>|string} pathArray
 * @param {string} propName
 * @param {function} transformValue
 * @returns {function} Connected component class
 * @example const BandContainer = compose(
 *   connectStateValue('name'),
 *   connectStateValue(['musicians'], 'members'),
 *   connectStateValue(
 *     ['discography', 'albumsByYear'],
 *     'firstThreeAlbums',
 *     (albumsByYear, state) => albumsByYear.slice(0, 3)
 *   )
 * )(BandComponent)
 */
export default (
  pathArray = [],
  propName = getPropNameFromPathArray(pathArray),
  transformValue = identity
) =>
  connect(
    state => ({
      [propName]: transformValue(
        getValueFromPathArray(pathArray, state),
        state
      )
    })
  )
