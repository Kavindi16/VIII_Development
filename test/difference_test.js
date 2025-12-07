import { expect } from 'chai'
import difference from '../src/difference.js'

describe('difference function', () => {
  it('should return elements not included in other arrays', () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1])
    expect(difference([1, 2, 3], [2], [3])).to.deep.equal([1])
  })

  it('should return empty array if all elements are excluded', () => {
    expect(difference([1, 2], [1, 2])).to.deep.equal([])
  })

  it('should return original array if no values are provided to exclude', () => {
    expect(difference([1, 2, 3])).to.deep.equal([1, 2, 3])
  })

  it('should handle multiple arrays as values', () => {
    expect(difference([1, 2, 3, 4], [2, 3], [4, 5])).to.deep.equal([1])
  })

  it('should return empty array if input is not array-like', () => {
    expect(difference(null, [1, 2])).to.deep.equal([])
    expect(difference(undefined, [1, 2])).to.deep.equal([])
    expect(difference(5, [1, 2])).to.deep.equal([])
  })
})