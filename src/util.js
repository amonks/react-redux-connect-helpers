import R, { always, identity } from 'ramda'

const getLensFromPathArray = R.ifElse(R.isArrayLike, R.lensPath, R.lensProp)

const getValueFromPathArray = (pathArray, object) =>
  R.view(getLensFromPathArray(pathArray), object)

const getPropNameFromPathArray = R.ifElse(R.isArrayLike, R.last, identity)

export {
  always,
  identity,
  getLensFromPathArray,
  getValueFromPathArray,
  getPropNameFromPathArray
}
