import { expect } from 'chai'
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    expect(upperFirst('hello')).to.equal('Hello')
  })

  it('should leave the first letter uppercase if already capitalized', () => {
    expect(upperFirst('World')).to.equal('World')
  })

  it('should not change the rest of the string', () => {
    expect(upperFirst('fRED')).to.equal('FRED')
  })

  it('should handle empty string', () => {
    expect(upperFirst('')).to.equal('')
  })

  it('should handle single character strings', () => {
    expect(upperFirst('a')).to.equal('A')
    expect(upperFirst('Z')).to.equal('Z')
  })

  it('should not affect non-alphabetic first characters', () => {
    expect(upperFirst('1abc')).to.equal('1abc')
    expect(upperFirst('!hello')).to.equal('!hello')
  })
})