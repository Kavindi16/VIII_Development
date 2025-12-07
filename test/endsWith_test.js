import { expect } from 'chai'
import endsWith from '../src/endsWith.js'

describe('endsWith function', () => {
  it('should return true if string ends with target', () => {
    expect(endsWith('abc', 'c')).to.be.true
    expect(endsWith('hello world', 'world')).to.be.true
  })

  it('should return false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).to.be.false
    expect(endsWith('hello world', 'hello')).to.be.false
  })

  it('should respect the position argument', () => {
    expect(endsWith('abc', 'b', 2)).to.be.true
    expect(endsWith('hello world', 'lo', 5)).to.be.true
    expect(endsWith('hello world', 'lo', 4)).to.be.false
  })

  it('should handle empty string and empty target', () => {
    expect(endsWith('', '')).to.be.true
    expect(endsWith('abc', '')).to.be.true
    expect(endsWith('', 'a')).to.be.false
  })

  it('should handle negative or NaN position by defaulting to 0', () => {
    expect(endsWith('abc', 'a', -1)).to.be.false
    expect(endsWith('abc', 'a', NaN)).to.be.false
  })

  it('should handle position larger than string length', () => {
    expect(endsWith('abc', 'c', 10)).to.be.true
  })
})