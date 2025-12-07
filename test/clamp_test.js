import { expect } from 'chai'
import clamp from '../src/clamp.js'

describe('clamp function', () => {
  it('should clamp numbers below the lower bound to lower', () => {
    expect(clamp(-10, -5, 5)).to.equal(-5)
    expect(clamp(-100, 0, 10)).to.equal(0)
  })

  it.skip('should clamp numbers above the upper bound to upper', () => {
    expect(clamp(10, -5, 5)).to.equal(5)
    expect(clamp(20, 0, 10)).to.equal(10)
  })

  it.skip('should handle non-number inputs by converting them to numbers', () => {
    expect(clamp('2', 0, 5)).to.equal(2)
    expect(clamp('10', 0, 5)).to.equal(5)
  })

  it('should handle NaN bounds by defaulting to 0', () => {
    expect(clamp(5, NaN, NaN)).to.equal(0)
    expect(clamp(-5, NaN, NaN)).to.equal(0)
  })
})