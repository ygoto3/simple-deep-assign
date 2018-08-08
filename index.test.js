const test = require('ava');
const simpleDeepAssign = require('./index');

test('simpleDeepAssign', t => {
  var target = {};

  simpleDeepAssign(target, 0);
  t.deepEqual(target, {});

  simpleDeepAssign(target, 'a');
  t.deepEqual(target, {});

  simpleDeepAssign(target, [0, 1]);
  t.deepEqual(target, {});

  simpleDeepAssign(target, null);
  t.deepEqual(target, {});

  simpleDeepAssign(target, void 0);
  t.deepEqual(target, {});

  simpleDeepAssign(target, { a: 'a' }, { b: 'b' }, { c: [ 1, 2 ] }, { d: { a: 'a' } }, { d: { b: 'b' } });
  t.deepEqual(target, {
    a: 'a',
    b: 'b',
    c: [ 1, 2 ],
    d: { a: 'a', b: 'b' },
  });
});
