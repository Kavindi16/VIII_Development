import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should lowercase all other letters', () => {
    expect(capitalize('hELLo')).to.equal('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should handle non-string input by converting to string', () => {
    expect(capitalize(123)).to.equal('123'); // "123" → "123"
  });

  
});