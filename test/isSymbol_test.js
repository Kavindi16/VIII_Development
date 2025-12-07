import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {

  it('should return true for Symbol primitives', () => {
    expect(isSymbol(Symbol())).to.be.true;
    expect(isSymbol(Symbol('test'))).to.be.true;
    expect(isSymbol(Symbol.iterator)).to.be.true;
  });

  it('should return true for Symbol objects', () => {
    const symObj = Object(Symbol('obj'));
    expect(isSymbol(symObj)).to.be.true;
  });

  it('should return false for strings, numbers, and booleans', () => {
    expect(isSymbol('abc')).to.be.false;
    expect(isSymbol(123)).to.be.false;
    expect(isSymbol(true)).to.be.false;
  });

  it('should return false for null and undefined', () => {
    expect(isSymbol(null)).to.be.false;
    expect(isSymbol(undefined)).to.be.false;
  });

  it('should return false for objects and arrays', () => {
    expect(isSymbol({})).to.be.false;
    expect(isSymbol([])).to.be.false;
  });

});
