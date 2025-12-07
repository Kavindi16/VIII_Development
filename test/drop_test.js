import { expect } from 'chai'
import drop from '../src/drop.js'

describe('drop function', () => {
  it('should drop the first element by default', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3])
  })

  it('should drop the first n elements', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3])
    expect(drop([1, 2, 3, 4], 3)).to.deep.equal([4])
  })

  it('should return empty array if n >= array length', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([])
    expect(drop([1, 2, 3], 3)).to.deep.equal([])
  })

  it('should not drop any elements if n <= 0', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
    expect(drop([1, 2, 3], -2)).to.deep.equal([1, 2, 3])
  })

  it('should return empty array for null or undefined input', () => {
    expect(drop(null, 2)).to.deep.equal([])
    expect(drop(undefined, 2)).to.deep.equal([])
  })
})