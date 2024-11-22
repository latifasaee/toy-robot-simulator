import { IPosition, ITable } from './interfaces';

type Obstacles = {
  x: number;
  y: number;
}[];

export class Table implements ITable {
  private obstacles: Obstacles = [];

  constructor(private height: number, private width: number) {}

  isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  addObstacle(x: number, y: number): void {
    if (this.isValidPosition(x, y)) {
      this.obstacles.push({ x, y });
    }
  }

  isObstacle(x: number, y: number): boolean {
    const fillteredObstacle = this.obstacles.filter(
      (obstacle) => obstacle.x === x && obstacle.y === y
    ).length;

    return fillteredObstacle > 0;
  }
}
