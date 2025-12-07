import { expect } from 'chai'
import toString from '../src/toString.js'  

describe('toString()', () => {

  it.skip('should return empty string for null', () => {
    expect(toString(null)).to.equal('')
  })

  it.skip('should return empty string for undefined', () => {
    expect(toString(undefined)).to.equal('')
  })

  it('should return the string itself', () => {
    expect(toString('hello')).to.equal('hello')
  })

  it('should convert numbers to strings', () => {
    expect(toString(123)).to.equal('123')
    expect(toString(0)).to.equal('0')
  })

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0')
  })

  it('should convert arrays to comma-separated strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3')
    expect(toString([null, 2, undefined])).to.equal(',2,')
  })

  it('should recursively convert nested arrays', () => {
    expect(toString([1, [2, 3], null])).to.equal('1,2,3,')
  })

  it('should convert symbols to strings', () => {
    const sym = Symbol('foo')
    expect(toString(sym)).to.equal(sym.toString())
  })

  it('should convert boolean values to strings', () => {
    expect(toString(true)).to.equal('true')
    expect(toString(false)).to.equal('false')
  })

})
