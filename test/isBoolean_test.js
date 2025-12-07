import { expect } from 'chai'
import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {
  it('should return true for boolean primitives', () => {
    expect(isBoolean(true)).to.equal(true)
    expect(isBoolean(false)).to.equal(true)
  })

  it('should return true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).to.equal(true)
    expect(isBoolean(new Boolean(false))).to.equal(true)
  })

  it('should return false for non-boolean values', () => {
    expect(isBoolean(1)).to.equal(false)
    expect(isBoolean(0)).to.equal(false)
    expect(isBoolean('true')).to.equal(false)
    expect(isBoolean('false')).to.equal(false)
    expect(isBoolean({})).to.equal(false)
    expect(isBoolean([])).to.equal(false)
  })

  it('should return false for null and undefined', () => {
    expect(isBoolean(null)).to.equal(false)
    expect(isBoolean(undefined)).to.equal(false)
  })

  it('should return false for NaN', () => {
    expect(isBoolean(NaN)).to.equal(false)
  })
})