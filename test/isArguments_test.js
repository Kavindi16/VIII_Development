import { expect } from 'chai'
import isArguments from '../src/isArguments.js'

describe('isArguments', () => {
  it('should return true for a real arguments object', () => {
    function testFunc() {
      expect(isArguments(arguments)).to.be.true
    }
    testFunc(1, 2, 3)
  })

  it('should return false for an array', () => {
    expect(isArguments([1, 2, 3])).to.be.false
  })

  it('should return false for a normal object', () => {
    expect(isArguments({ a: 1, b: 2 })).to.be.false
  })

  it('should return false for null and undefined', () => {
    expect(isArguments(null)).to.be.false
    expect(isArguments(undefined)).to.be.false
  })

  it('should return false for strings, numbers, booleans', () => {
    expect(isArguments('string')).to.be.false
    expect(isArguments(42)).to.be.false
    expect(isArguments(true)).to.be.false
  })
})