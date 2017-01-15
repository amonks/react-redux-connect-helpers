import { connect, bindActionCreators } from 'react-redux'

/** @function
 * @name createActionConnector
 * @desc A higher order function that returns a function to connect bound actions to React components as props
 * @param {object} actionCreators
 * @returns {function} Helper to connect an action
 * @example const actionCreators = { purchaseAlbum, ... }
 * const connectAction = createActionConnector(actionCreators)
 * const PurchaseButton = compose(
 *   connectAction('purchaseAlbum', 'onClick')
 * )(ButtonComponent)
 */
export default (actionCreators = {}) =>
  (actionName, propName = actionName) =>
    connect(null,
      dispatch => ({
        [propName]: bindActionCreators(actionCreators, dispatch)[actionName]
      })
    )
