import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () => {
  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
  });

  it('should return true for boolean and number primitives', () => {
    expect(isEmpty(true)).to.equal(true);
    expect(isEmpty(false)).to.equal(true);
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty(42)).to.equal(true);
  });

  it('should return true for empty arrays, strings, arguments, buffers, and typed arrays', () => {
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty('')).to.equal(true);

    const args = (function() { return arguments; })(1,2);
    expect(isEmpty(args)).to.equal(false);

    const emptyArgs = (function() { return arguments; })();
    expect(isEmpty(emptyArgs)).to.equal(true);
  });

  it('should return true for empty Map or Set', () => {
    expect(isEmpty(new Map())).to.equal(true);
    expect(isEmpty(new Set())).to.equal(true);

    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).to.equal(false);
  });

  it('should return true for empty object literals or prototypes', () => {
    expect(isEmpty({})).to.equal(true);
    function Foo() {}
    expect(isEmpty(Foo.prototype)).to.equal(true);
  });

  it('should return false for non-empty objects, arrays, or strings', () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
    expect(isEmpty([1, 2, 3])).to.equal(false);
    expect(isEmpty('abc')).to.equal(false);
  });
});
