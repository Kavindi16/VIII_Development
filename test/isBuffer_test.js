import { expect } from 'chai';
import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {

  it('should return true for Node.js Buffer instances', () => {
    if (typeof Buffer !== 'undefined') {
      const buf = Buffer.from([1, 2, 3]);
      expect(isBuffer(buf)).to.be.true;
    }
  });

  it('should return false for typed arrays', () => {
    expect(isBuffer(new Uint8Array([1, 2, 3]))).to.be.false;
    expect(isBuffer(new Int16Array([1, 2, 3]))).to.be.false;
  });

  it('should return false for arrays and objects', () => {
    expect(isBuffer([1, 2, 3])).to.be.false;
    expect(isBuffer({ a: 1 })).to.be.false;
  });

  it('should return false for strings, numbers, booleans, null, and undefined', () => {
    expect(isBuffer('abc')).to.be.false;
    expect(isBuffer(123)).to.be.false;
    expect(isBuffer(true)).to.be.false;
    expect(isBuffer(false)).to.be.false;
    expect(isBuffer(null)).to.be.false;
    expect(isBuffer(undefined)).to.be.false;
  });

});
