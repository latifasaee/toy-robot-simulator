import { DirectionValues, Direction } from './enum';
import { IPosition } from './interfaces';

export class Position implements IPosition {
  constructor(
    public x: number,
    public y: number,
    public direction: Direction
  ) {}

  getNextPosition(): Position {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case Direction.NORTH:
        newY += 1;
        break;
      case Direction.SOUTH:
        newY -= 1;
        break;
      case Direction.EAST:
        newX += 1;
        break;
      case Direction.WEST:
        newX -= 1;
        break;
    }

    return new Position(newX, newY, this.direction);
  }

  rotateLeft(): Position {
    return new Position(this.x, this.y, this.getNewDirection(-1));
  }

  rotateRight(): Position {
    return new Position(this.x, this.y, this.getNewDirection(1));
  }

  report(): string {
    return `${this.x},${this.y},${this.direction}`;
  }

  private getNewDirection(turn: number): Direction {
    const currentIndex = DirectionValues.indexOf(this.direction);
    const newIndex =
      (currentIndex + turn + DirectionValues.length) % DirectionValues.length;
    return DirectionValues[newIndex];
  }
}
