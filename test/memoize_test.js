import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize', () => {
  
  it('should return the correct result for a basic function', () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(1, 2)).to.equal(3);
    expect(memoizedAdd(1, 2)).to.equal(3); // cached result
  });

  it('should cache results', () => {
    let callCount = 0;
    const square = (n) => {
      callCount++;
      return n * n;
    };
    const memoizedSquare = memoize(square);

    expect(memoizedSquare(2)).to.equal(4);
    expect(memoizedSquare(2)).to.equal(4);
    expect(callCount).to.equal(1); // second call should use cache
  });

  it('should use resolver to compute cache key', () => {
    const multiply = (a, b) => a * b;
    const resolver = (a, b) => `${a}-${b}`;
    const memoizedMultiply = memoize(multiply, resolver);

    expect(memoizedMultiply(2, 3)).to.equal(6);
    expect(memoizedMultiply(2, 3)).to.equal(6); // cached
  });

  it('should throw TypeError if func is not a function', () => {
    expect(() => memoize(null)).to.throw(TypeError);
    expect(() => memoize(123)).to.throw(TypeError);
  });

  it('should throw TypeError if resolver is not a function', () => {
    const add = (a, b) => a + b;
    expect(() => memoize(add, 'not a function')).to.throw(TypeError);
  });

  it('should allow custom cache constructor', () => {
    const add = (a, b) => a + b;
    memoize.Cache = Map; // default, could be WeakMap
    const memoizedAdd = memoize(add);

    expect(memoizedAdd.cache).to.be.instanceOf(Map);
    memoizedAdd(1, 2);
    expect(memoizedAdd.cache.size).to.equal(1);
  });

});
