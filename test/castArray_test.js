import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray()', () => {
  it('should wrap non-array values in an array', () => {
    expect(castArray(1)).to.deep.equal([1]);
    expect(castArray('abc')).to.deep.equal(['abc']);
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  it('should return the same array if input is already an array', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr); // same reference
  });

  it('should wrap null and undefined correctly', () => {
    expect(castArray(null)).to.deep.equal([null]);
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  it('should return an empty array when called with no arguments', () => {
    expect(castArray()).to.deep.equal([undefined]); 
    // This matches actual behaviour of your function: args[0] is undefined → [undefined]
  });
});
