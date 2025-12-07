import { expect } from 'chai'
import reduce from '../src/reduce.js'

describe('reduce', () => {
  // Array tests
  it('should reduce an array with an initial accumulator', () => {
    const arr = [1, 2, 3, 4]
    const sum = reduce(arr, (acc, n) => acc + n, 0)
    expect(sum).to.equal(10)
  })

  it('should reduce an array without an initial accumulator', () => {
    const arr = [1, 2, 3]
    const sum = reduce(arr, (acc, n) => acc + n)
    expect(sum).to.equal(6) // first element used as accumulator
  })

  it('should handle empty array with initial accumulator', () => {
    const arr = []
    const result = reduce(arr, (acc, n) => acc + n, 0)
    expect(result).to.equal(0)
  })

  it('should handle empty array without initial accumulator', () => {
    const arr = []
    const result = reduce(arr, (acc, n) => acc + n)
    expect(result).to.equal(undefined)
  })

  // Object tests
  it('should reduce an object with an initial accumulator', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = reduce(obj, (acc, value) => acc + value, 0)
    expect(result).to.equal(6)
  })

  it('should reduce an object without an initial accumulator', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = reduce(obj, (acc, value) => acc + value)
    expect(result).to.equal(6)
  })

  it('should handle empty object with initial accumulator', () => {
    const obj = {}
    const result = reduce(obj, (acc, value) => acc + value, 10)
    expect(result).to.equal(10)
  })

  it('should handle empty object without initial accumulator', () => {
    const obj = {}
    const result = reduce(obj, (acc, value) => acc + value)
    expect(result).to.equal(undefined)
  })
})