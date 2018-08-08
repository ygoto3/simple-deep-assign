# simple-deep-assign

[![Codecov master](https://img.shields.io/codecov/c/github/ygoto3/simple-deep-assign/master.svg)](https://codecov.io/gh/ygoto3/simple-deep-assign)

A very simple alternative of `Object.assign()` that recursively copies objects' elements to a target object.  Recursion is only applied to a pure object.  The other types of elements are just replaced with source elements.

Install
---

```sh
$ npm i simple-deep-assign
```

Usage
---

```js
import deepAssign from 'simple-deep-assign';

const target = { a: 'a' };
deepAssign(target, { b: 'b' }, { c: [ 1, 2 ] }, { d: { a: 'a' } }, { d: { b: 'b' } });

target; // { a: 'a', b: 'b', c: [ 1, 2 ], d: { a: 'a', b: 'b' } }
```

API Document
---

[https://ygoto3.github.io/simple-deep-assign/function/index.html#static-function-simpleDeepAssign](https://ygoto3.github.io/simple-deep-assign/function/index.html#static-function-simpleDeepAssign)

