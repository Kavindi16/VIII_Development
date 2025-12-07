import { expect } from 'chai';
import isLength from '../src/isLength.js';

describe('isLength()', () => {
  it('should return true for valid array-like lengths', () => {
    expect(isLength(0)).to.equal(true);
    expect(isLength(1)).to.equal(true);
    expect(isLength(100)).to.equal(true);
    expect(isLength(Number.MAX_SAFE_INTEGER)).to.equal(true);
  });

  it('should return false for negative numbers', () => {
    expect(isLength(-1)).to.equal(false);
    expect(isLength(-100)).to.equal(false);
  });

  it('should return false for non-integer numbers', () => {
    expect(isLength(3.5)).to.equal(false);
    expect(isLength(Number.MIN_VALUE)).to.equal(false);
  });

  it('should return false for non-numeric types', () => {
    expect(isLength('3')).to.equal(false);
    expect(isLength(null)).to.equal(false);
    expect(isLength(undefined)).to.equal(false);
    expect(isLength(true)).to.equal(false);
    expect(isLength({})).to.equal(false);
    expect(isLength([])).to.equal(false);
  });

  it('should return false for Infinity and NaN', () => {
    expect(isLength(Infinity)).to.equal(false);
    expect(isLength(-Infinity)).to.equal(false);
    expect(isLength(NaN)).to.equal(false);
  });
});
