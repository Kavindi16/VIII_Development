import { expect } from 'chai'
import eq from '../src/eq.js'

describe('eq function', () => {
  it('should return true for strictly equal values', () => {
    expect(eq(5, 5)).to.be.true
    expect(eq('abc', 'abc')).to.be.true
    const obj = { a: 1 }
    expect(eq(obj, obj)).to.be.true
  })

  it('should return false for different values', () => {
    expect(eq(5, 10)).to.be.false
    expect(eq('a', 'b')).to.be.false
    expect(eq({}, {})).to.be.false
  })

  it('should treat NaN as equal to NaN', () => {
    expect(eq(NaN, NaN)).to.be.true
  })

  it.skip('should not coerce types', () => {
    expect(eq(5, '5')).to.be.false
    expect(eq(false, 0)).to.be.false
    expect(eq(null, undefined)).to.be.false
  })

  it.skip('should handle objects vs primitives correctly', () => {
    expect(eq('a', Object('a'))).to.be.false
    expect(eq(1, Object(1))).to.be.false
  })
})