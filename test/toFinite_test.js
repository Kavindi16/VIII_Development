import { expect } from 'chai'
import toFinite from '../src/toFinite.js'

describe('toFinite', () => {
  it('should return finite number for normal numbers', () => {
    expect(toFinite(3.2)).to.equal(3.2)
    expect(toFinite(-5.7)).to.equal(-5.7)
  })

  it('should convert string numbers to finite numbers', () => {
    expect(toFinite('3.2')).to.equal(3.2)
    expect(toFinite('-5.7')).to.equal(-5.7)
  })

  it('should return MAX_INTEGER for Infinity and -Infinity', () => {
    const MAX_INTEGER = 1.7976931348623157e+308
    expect(toFinite(Infinity)).to.equal(MAX_INTEGER)
    expect(toFinite(-Infinity)).to.equal(-MAX_INTEGER)
  })

  it('should return 0 for null, undefined, or non-numeric values', () => {
    expect(toFinite(null)).to.equal(0)
    expect(toFinite(undefined)).to.equal(0)
    expect(toFinite(NaN)).to.equal(0)
    expect(toFinite('abc')).to.equal(0)
  })

  it('should return 0 for Number.MIN_VALUE correctly', () => {
    expect(toFinite(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE)
  })

  it('should preserve 0 and -0', () => {
    expect(toFinite(0)).to.equal(0)
    expect(toFinite(-0)).to.equal(-0)
  })
})
