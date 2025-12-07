import { expect } from 'chai'
import every from '../src/every.js'

describe('every function', () => {
  it('should return true when all elements satisfy the predicate', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).to.be.true
    expect(every(['a', 'aa'], str => str.length >= 1)).to.be.true
  })

  it('should return false when at least one element fails the predicate', () => {
    expect(every([1, 2, 3], n => n > 1)).to.be.false
    expect(every(['yes', '', 'ok'], Boolean)).to.be.false
  })

  it('should return true for an empty array (vacuous truth)', () => {
    expect(every([], () => false)).to.be.true
    expect(every([], () => true)).to.be.true
  })

  it('should handle null or undefined array by returning true (empty length)', () => {
    expect(every(null, () => true)).to.be.true
    expect(every(undefined, () => false)).to.be.true
  })

  it('should pass value, index, and array to predicate', () => {
    const arr = ['a', 'b', 'c']
    const results = []

    every(arr, (value, index, array) => {
      results.push({ value, index, sameArray: array === arr })
      return true
    })

    expect(results).to.deep.equal([
      { value: 'a', index: 0, sameArray: true },
      { value: 'b', index: 1, sameArray: true },
      { value: 'c', index: 2, sameArray: true }
    ])
  })
})