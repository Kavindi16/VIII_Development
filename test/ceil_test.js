import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil()', () => {

  it('should round numbers up to the nearest integer', () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(4.1)).to.equal(5);
    expect(ceil(-4.1)).to.equal(-4); // negative rounding
  });

  it('should round numbers up with precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(1.234, 1)).to.equal(1.3);
  });

  it('should round numbers up with negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(1234, -1)).to.equal(1240);
  });

  it('should return NaN for invalid number inputs', () => {
    expect(ceil('abc')).to.be.NaN;
    expect(ceil(undefined)).to.be.NaN;
    expect(ceil(null)).to.equal(0);
  });

});