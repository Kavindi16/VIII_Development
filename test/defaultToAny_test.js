import { expect } from 'chai'
import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny function', () => {
  it('should return the original value if it is valid', () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1)
    expect(defaultToAny('a', 10, 20)).to.equal('a')
  })

  it('should return the first valid default value if original is undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10)
    expect(defaultToAny(undefined, null, 20)).to.equal(20)
  })

  it('should return the first valid default value if original is null', () => {
    expect(defaultToAny(null, 10, 20)).to.equal(10)
  })

  it('should return NaN if all values including defaults are NaN or invalid', () => {
    const result = defaultToAny(undefined, null, NaN)
    expect(result).to.be.NaN
  })

  it('should handle mix of valid and falsy defaults correctly', () => {
    expect(defaultToAny(undefined, 0, '', false, 5)).to.equal(0)
    expect(defaultToAny(null, undefined, '', false, 5)).to.equal('')
    expect(defaultToAny(undefined, null, false, 5)).to.equal(false)
  })
})