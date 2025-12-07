import { expect } from 'chai'
import map from '../src/map.js'

describe('map', () => {
  it('should map each element using the provided iteratee', () => {
    const array = [1, 2, 3]
    const result = map(array, x => x * 2)
    expect(result).to.deep.equal([2, 4, 6])
  })

  it('should handle an empty array', () => {
    const array = []
    const result = map(array, x => x * 2)
    expect(result).to.deep.equal([])
  })

  it('should handle null or undefined array', () => {
    expect(map(null, x => x * 2)).to.deep.equal([])
    expect(map(undefined, x => x * 2)).to.deep.equal([])
  })

  it('should pass value, index, and array to the iteratee', () => {
    const array = [10, 20, 30]
    const results = []
    map(array, (value, index, arr) => {
      results.push({ value, index, arr })
      return value
    })
    expect(results).to.deep.equal([
      { value: 10, index: 0, arr: [10, 20, 30] },
      { value: 20, index: 1, arr: [10, 20, 30] },
      { value: 30, index: 2, arr: [10, 20, 30] },
    ])
  })
})
