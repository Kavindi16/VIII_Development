import { expect } from 'chai';
import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {

  it('should return true for all typed arrays', () => {
    expect(isTypedArray(new Int8Array())).to.be.true;
    expect(isTypedArray(new Uint8Array())).to.be.true;
    expect(isTypedArray(new Uint8ClampedArray())).to.be.true;
    expect(isTypedArray(new Int16Array())).to.be.true;
    expect(isTypedArray(new Uint16Array())).to.be.true;
    expect(isTypedArray(new Int32Array())).to.be.true;
    expect(isTypedArray(new Uint32Array())).to.be.true;
    expect(isTypedArray(new Float32Array())).to.be.true;
    expect(isTypedArray(new Float64Array())).to.be.true;
  });

  it('should return false for non-typed arrays', () => {
    expect(isTypedArray([])).to.be.false;
    expect(isTypedArray({})).to.be.false;
    expect(isTypedArray('string')).to.be.false;
    expect(isTypedArray(123)).to.be.false;
    expect(isTypedArray(null)).to.be.false;
    expect(isTypedArray(undefined)).to.be.false;
  });

  it('should return false for objects that look like typed arrays but are not', () => {
    const fakeTypedArray = { buffer: new ArrayBuffer(8), length: 8 };
    expect(isTypedArray(fakeTypedArray)).to.be.false;
  });

});
