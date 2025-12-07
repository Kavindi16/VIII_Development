import { expect } from 'chai';
import isObject from '../src/isObject.js';

describe('isObject()', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).to.equal(true);
    expect(isObject({ a: 1, b: 2 })).to.equal(true);
  });

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).to.equal(true);
    expect(isObject([])).to.equal(true);
  });

  it('should return true for functions', () => {
    expect(isObject(function() {})).to.equal(true);
    expect(isObject(() => {})).to.equal(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).to.equal(false);
  });

  it('should return false for primitive types', () => {
    expect(isObject(123)).to.equal(false);
    expect(isObject('abc')).to.equal(false);
    expect(isObject(true)).to.equal(false);
    expect(isObject(undefined)).to.equal(false);
  });

  it('should return true for wrapper objects', () => {
    expect(isObject(new String(''))).to.equal(true);
    expect(isObject(new Number(0))).to.equal(true);
    expect(isObject(new Boolean(true))).to.equal(true);
  });

  it('should return false for symbols', () => {
    expect(isObject(Symbol('id'))).to.equal(false);
  });
});
