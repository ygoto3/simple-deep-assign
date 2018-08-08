// @flow
const test = require('ava');
const {
  isArray,
  isObject,
  deepAssignObject,
  simpleDeepAssign,
} = require('./simpleDeepAssign');

test('isArray', t => {
  var item;
  var actual;

  item = [];
  actual = isArray(item);
  t.true(actual);

  item = [1, 2, 3, 4];
  actual = isArray(item);
  t.true(actual);

  item = [{}, { '0': 1, '1': 2, '2': 3, '3': 4 }];
  actual = isArray(item);
  t.true(actual);

  item = { '0': 1, '1': 2, '2': 3, '3': 4 };
  actual = isArray(item);
  t.false(actual);

  item = null;
  actual = isArray(item);
  t.false(actual);

  item = void 0;
  actual = isArray(item);
  t.false(actual);
});

test('isObject', t => {
  var item;
  var actual;

  item = [1, 2, 3, 4];
  actual = isObject(item);
  t.false(actual);

  item = {};
  actual = isObject(item);
  t.true(actual);

  item = { '0': 1, '1': 2, '2': 3, '3': 4 };
  actual = isObject(item);
  t.true(actual);

  item = null;
  actual = isObject(item);
  t.false(actual);

  item = void 0;
  actual = isObject(item);
  t.false(actual);
});

test('deepAssignObject', t => {
  function func() {}
  const createTarget = () => ({
    a: 1,
    b: 'b',
    c: {
      a: 1,
      b: 'b',
    },
    d: [
      0, {
        a: 1,
        b: 'b'
      },
    ],
    e: func,
  });
  var target;

  target = createTarget();
  deepAssignObject(target, { a: 2 });
  t.deepEqual(target, {
    a: 2,
    b: 'b',
    c: {
      a: 1,
      b: 'b',
    },
    d: [
      0, {
        a: 1,
        b: 'b'
      },
    ],
    e: func,
  });

  target = createTarget();
  deepAssignObject(target, { a: { a: 1, b: 'b' }, b: 'c' });
  t.deepEqual(target, {
    a: { a: 1, b: 'b' },
    b: 'c',
    c: {
      a: 1,
      b: 'b',
    },
    d: [
      0, {
        a: 1,
        b: 'b'
      },
    ],
    e: func,
  });

  target = createTarget();
  deepAssignObject(target, { a: 'a', b: [ 0, 1, 2 ], c: { a: 2 } });
  t.deepEqual(target, {
    a: 'a',
    b: [ 0, 1, 2 ],
    c: {
      a: 2,
      b: 'b',
    },
    d: [
      0, {
        a: 1,
        b: 'b'
      },
    ],
    e: func,
  });

  target = createTarget();
  const fn = () => {};
  deepAssignObject(target, { d: [ 0, 1, 2 ], e: { fn } });
  t.deepEqual(target, {
    a: 1,
    b: 'b',
    c: {
      a: 1,
      b: 'b',
    },
    d: [ 0, 1, 2 ],
    e: { fn },
  });
});
