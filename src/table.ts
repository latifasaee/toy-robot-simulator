import { IPosition, ITable } from './interfaces';

export class Table implements ITable {
  constructor(private height: number, private width: number) {}

  isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }
}
