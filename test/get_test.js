import { expect } from 'chai'
import get from '../src/get.js'  

describe('get()', () => {
  const object = { a: [{ b: { c: 3 } }] }

  it('should get a nested property using string path', () => {
    const result = get(object, 'a[0].b.c')
    expect(result).to.equal(3)
  })

  it('should get a nested property using array path', () => {
    const result = get(object, ['a', '0', 'b', 'c'])
    expect(result).to.equal(3)
  })

  it('should return default value if path does not exist', () => {
    const result = get(object, 'a[0].b.x', 'default')
    expect(result).to.equal('default')
  })

  it('should return undefined if object is null or undefined', () => {
    expect(get(null, 'a.b')).to.equal(undefined)
    expect(get(undefined, ['a', 'b'])).to.equal(undefined)
  })

  it('should return default value if object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).to.equal('default')
    expect(get(undefined, ['a', 'b'], 42)).to.equal(42)
  })
})
