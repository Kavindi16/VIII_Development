import { expect } from 'chai';
import toNumber from '../src/toNumber.js';
import isSymbol from '../src/isSymbol.js';
import isObject from '../src/isObject.js';

describe('toNumber', () => {

  it('should return the same number for number input', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(0)).to.equal(0);
    expect(toNumber(-5)).to.equal(-5);
  });

  it('should convert numeric strings to numbers', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('  42  ')).to.equal(42); // trims whitespace
    expect(toNumber('+10')).to.equal(10);
    expect(toNumber('-7')).to.equal(-7);
  });

  it('should convert binary and octal strings', () => {
    expect(toNumber('0b101')).to.equal(5);
    expect(toNumber('0o12')).to.equal(10);
  });

  it('should return NaN for bad hexadecimal strings', () => {
    expect(toNumber('-0x1F')).to.be.NaN;
    expect(toNumber('+0xFF')).to.be.NaN;
  });

  it('should return NaN for symbols', () => {
    expect(toNumber(Symbol('test'))).to.be.NaN;
  });

  it('should convert objects with valueOf', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should convert objects without valueOf to string then number', () => {
    const obj = { toString: () => '123' };
    expect(toNumber(obj)).to.equal(123);
  });

  it('should handle Infinity and -Infinity', () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(-Infinity)).to.equal(-Infinity);
  });

  it('should handle edge cases like 0 and -0', () => {
    expect(toNumber(0)).to.equal(0);
    expect(Object.is(toNumber(-0), -0)).to.be.true;
  });

});
