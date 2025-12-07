import { expect } from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo function', () => {
  it('should return the original value if it is not null or undefined', () => {
    expect(defaultTo(5, 10)).to.equal(5)
    expect(defaultTo('hello', 'world')).to.equal('hello')
    expect(defaultTo(false, true)).to.equal(false)
  })

  it('should return default value if original value is undefined', () => {
    expect(defaultTo(undefined, 10)).to.equal(10)
  })

  it('should return default value if original value is null', () => {
    expect(defaultTo(null, 10)).to.equal(10)
  })

  it('should return default value even if it is falsy', () => {
    expect(defaultTo(null, 0)).to.equal(0)
    expect(defaultTo(undefined, '')).to.equal('')
    expect(defaultTo(undefined, false)).to.equal(false)
  })

  it('should return original value even if it is falsy but not null/undefined', () => {
    expect(defaultTo(0, 10)).to.equal(0)
    expect(defaultTo('', 'default')).to.equal('')
    expect(defaultTo(false, true)).to.equal(false)
  })
})