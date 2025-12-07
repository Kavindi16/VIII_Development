import { expect } from 'chai'
import toInteger from '../src/toInteger.js'

describe('toInteger', () => {
  it('should convert a floating number to integer by truncating decimal', () => {
    expect(toInteger(3.2)).to.equal(3)
    expect(toInteger(-3.7)).to.equal(-3)
  })

  it('should convert numeric strings to integers', () => {
    expect(toInteger('3.2')).to.equal(3)
    expect(toInteger('-7.8')).to.equal(-7)
  })

  it('should return 0 for very small numbers (Number.MIN_VALUE)', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0)
  })

  
  it('should return 0 for non-numeric values', () => {
    expect(toInteger(undefined)).to.equal(0)
    expect(toInteger(null)).to.equal(0)
    expect(toInteger(NaN)).to.equal(0)
    expect(toInteger('abc')).to.equal(0)
  })

  it('should keep integers unchanged', () => {
    expect(toInteger(42)).to.equal(42)
    expect(toInteger(-99)).to.equal(-99)
  })
})