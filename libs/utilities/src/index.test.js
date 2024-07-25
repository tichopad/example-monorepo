import { expect, describe, it } from 'vitest';
import { double } from './index.js';

describe('double', () => {
  it('doubles a number', () => {
    expect(double(2)).toBe(4);
  });
});
