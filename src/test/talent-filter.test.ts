import { describe, expect, it } from 'vitest';
import { filterTalents } from '@/components/bridge/data';

describe('Talent directory filtering', () => {
  it('finds professionals by skill without case sensitivity', () => {
    expect(filterTalents('rEaCt', 'All fields').map(t => t.name)).toEqual(['Amira Hassan']);
  });
  it('combines field and query filters', () => {
    expect(filterTalents('Python', 'Technology').map(t => t.name)).toEqual(['Amira Hassan', 'Omar Khalil']);
    expect(filterTalents('Python', 'Engineering')).toEqual([]);
  });
  it('returns no rows when there is no matching professional', () => {
    expect(filterTalents('no matching skill', 'All fields')).toEqual([]);
  });
});