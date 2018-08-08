// @flow
const { deepAssign }= require('./simpleDeepAssign');

/**
 * Recursively copy the values of all enumerable own properties from a source item or more to a target item if the both items are objects
 * @public
 * @param {Object} target - a target object
 * @param {Object} source - a source object
 * @param {...Object} [rest] - the rest of source objects
 * @example
 * simpleDeepAssign({ a: 'a' }, { b: 'b' }, { c: [ 1, 2 ] }, { d: { a: 'a' } }, { d: { b: 'b' } });
 * // { a: 'a', b: 'b', c: [ 1, 2 ], d: { a: 'a', b: 'b' } }
 */
function simpleDeepAssign(target, source, ...rest) {
  if (!source) return;
  deepAssign(target, source);
  simpleDeepAssign(target, ...rest);
}

module.exports = simpleDeepAssign;
