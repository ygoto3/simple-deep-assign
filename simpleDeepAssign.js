// @flow

/**
 * Check if it is an array
 * @private
 * @param {*} item - an item to check
 * @return {boolean} array or not
 * @example
 * isArray([0, 1, 2]) // true
 */
function isArray(item/*: any*/)/*: boolean*/ {
  return {}.toString.call(item) === '[object Array]';
}

/**
 * Check if it is an object
 * @private
 * @param {*} item - an item to check
 * @return {boolean} object or not
 * @example
 * isObject({ a: 'a' }) // true
 */
function isObject(item/*: any*/)/*: boolean*/ {
  return typeof item === 'object' && item !== null && !isArray(item);
}

/**
 * Recursively copy the values of all enumerable own properties from a source object to a target object 
 * @private
 * @param {Object} target - a target object
 * @param {Object} source - a source object
 * @example
 * deepAssignObject({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
 * // { a: 'a', b: 'B', c: 'c' }
 */
function deepAssignObject(target/*: Object*/, source/*: Object*/)/*: void*/ {
  Object.keys(source).forEach(key => {
    if (key === '__proto__' || key === 'prototype' || key === 'constructor'){
      return;
    }
    if (isObject(target[key]) && isObject(source[key])) {
      deepAssignObject(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
}

/**
 * Recursively copy the values of all enumerable own properties from a source item to a target item if the both items are objects
 * @private
 * @param {Object} target - a target object
 * @param {Object} source - a source object
 * @example
 * deepAssign({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
 * // { a: 'a', b: 'B', c: 'c' }
 */
function deepAssign(target/*: any*/, source/*: any*/)/*: void*/ {
  if (!isObject(target) || !isObject(source)) return;
  deepAssignObject(target, source);
}

module.exports = {
  isArray,
  isObject,
  deepAssignObject,
  deepAssign,
};
