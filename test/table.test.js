"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("../src/table");
describe('Table', () => {
    let table;
    beforeAll(() => { });
    beforeEach(() => {
        table = new table_1.Table(5, 5);
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
