import { expect } from 'chai'
import chunk from '../src/chunk.js'

describe('chunk function', () => {
  it.skip('should split array into chunks of given size', () => {
    const arr = ['a', 'b', 'c', 'd']
    expect(chunk(arr, 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
    expect(chunk(arr, 3)).to.deep.equal([['a', 'b', 'c'], ['d']])
  })

  it.skip('should handle array length not divisible by size', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(chunk(arr, 2)).to.deep.equal([[1, 2], [3, 4], [5]])
  })

  it('should return empty array if input is null or undefined', () => {
    expect(chunk(null, 2)).to.deep.equal([])
    expect(chunk(undefined, 2)).to.deep.equal([])
  })

  it('should return empty array if size is 0 or negative', () => {
    const arr = [1, 2, 3]
    expect(chunk(arr, 0)).to.deep.equal([])
    expect(chunk(arr, -1)).to.deep.equal([])
  })

  it.skip('should use default size of 1 if size is not provided', () => {
    const arr = [1, 2, 3]
    expect(chunk(arr)).to.deep.equal([[1], [2], [3]])
  })
})