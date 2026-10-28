import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum.js';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('adds negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
