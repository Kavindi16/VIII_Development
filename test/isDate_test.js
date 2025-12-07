import { expect } from 'chai'
import isDate from '../src/isDate.js'

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).to.equal(true)
  })

  it('should return false for date strings', () => {
    expect(isDate('2024-01-01')).to.equal(false)
    expect(isDate('Mon April 23 2012')).to.equal(false)
  })

  it('should return false for non-date primitives', () => {
    expect(isDate(123)).to.equal(false)
    expect(isDate(true)).to.equal(false)
    expect(isDate(null)).to.equal(false)
    expect(isDate(undefined)).to.equal(false)
  })

  it('should return false for objects that are not Date', () => {
    expect(isDate({})).to.equal(false)
    expect(isDate([])).to.equal(false)
  })

  it('should return false for NaN', () => {
    expect(isDate(NaN)).to.equal(false)
  })
})