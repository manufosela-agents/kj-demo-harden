import { describe, it, expect } from 'vitest';
import { subtract } from '../src/subtract.js';

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('subtracts negative numbers', () => {
    expect(subtract(-2, -3)).toBe(1);
  });
});
