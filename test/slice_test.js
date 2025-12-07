import { expect } from 'chai'
import slice from '../src/slice.js'  // Adjust path if necessary

describe('slice()', () => {

  it('should return a slice from start to end', () => {
    const array = [1, 2, 3, 4]
    expect(slice(array, 1, 3)).to.deep.equal([2, 3])
  })

  it('should return slice from start to end of array if end is undefined', () => {
    const array = [1, 2, 3, 4]
    expect(slice(array, 2)).to.deep.equal([3, 4])
  })

  it('should handle negative start index', () => {
    const array = [1, 2, 3, 4]
    expect(slice(array, -2)).to.deep.equal([3, 4])
    expect(slice(array, -5)).to.deep.equal([1, 2, 3, 4])
  })

  it('should handle negative end index', () => {
    const array = [1, 2, 3, 4]
    expect(slice(array, 1, -1)).to.deep.equal([2, 3])
    expect(slice(array, 0, -5)).to.deep.equal([])
  })

  it('should return empty array if start >= end', () => {
    const array = [1, 2, 3]
    expect(slice(array, 2, 1)).to.deep.equal([])
  })

  it('should return empty array for null or undefined', () => {
    expect(slice(null, 1, 2)).to.deep.equal([])
    expect(slice(undefined, 0, 1)).to.deep.equal([])
  })

  it('should handle full slice if start and end are undefined', () => {
    const array = [1, 2, 3]
    expect(slice(array)).to.deep.equal([1, 2, 3])
  })

  it('should handle zero-length array', () => {
    expect(slice([], 0, 2)).to.deep.equal([])
  })

})
