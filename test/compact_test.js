import { expect } from 'chai'
import compact from '../src/compact.js'

describe('compact function', () => {
  it.skip('should remove falsey values from array', () => {
    const arr = [0, 1, false, 2, '', 3, undefined, null, NaN]
    expect(compact(arr)).to.deep.equal([1, 2, 3])
  })

  it('should return empty array if all elements are falsey', () => {
    const arr = [0, false, '', undefined, null, NaN]
    expect(compact(arr)).to.deep.equal([])
  })

  it.skip('should return the same array if no falsey values exist', () => {
    const arr = [1, 2, 3, 'a', true]
    expect(compact(arr)).to.deep.equal([1, 2, 3, 'a', true])
  })

  it('should handle empty array', () => {
    expect(compact([])).to.deep.equal([])
  })
})