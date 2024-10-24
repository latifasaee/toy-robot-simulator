import { Table } from '../src/table';

describe('Table', () => {
  let table: Table;
  beforeAll(() => {});
  beforeEach(() => {
    table = new Table(5, 5);
  });

  test('should be within bounds', () => {
    expect(table.isValidPosition(0, 0)).toBe(true);
    expect(table.isValidPosition(4, 4)).toBe(true);
  });

  test('should not be within bounds', () => {
    expect(table.isValidPosition(5, 5)).toBe(false);
    expect(table.isValidPosition(-1, -1)).toBe(false);
  });
});
