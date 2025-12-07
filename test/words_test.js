import { expect } from 'chai'
import words from '../src/words.js'  

describe('words()', () => {
  it('should split a simple ASCII string into words', () => {
    const result = words('fred, barney, & pebbles')
    expect(result).to.deep.equal(['fred', 'barney', 'pebbles'])
  })

  it('should use a custom pattern if provided', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g)
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles'])
  })

  it('should return an empty array for empty string', () => {
    const result = words('')
    expect(result).to.deep.equal([])
  })

  it.skip('should handle strings with numbers', () => {
    const result = words('item1 item2 123')
    expect(result).to.deep.equal(['item1', 'item2', '123'])
  })

 
  
})
