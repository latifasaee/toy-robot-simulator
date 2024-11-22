import { Direction, DirectionVectors } from '../enum';
import { Robot } from '../robot';
import { Table } from '../table';
import { BaseCommand } from './base-command';

type Position = [number, number];

export class FindPathCommand extends BaseCommand {
  private sourcePosition: Position = [0, 0];

  constructor(
    robot: Robot,
    table: Table,
    private destinationPosition: Position
  ) {
    super(robot, table);
  }

  execute(): void {
    const pathToTarget: Position[] = this.findPath(
      this.table,
      this.sourcePosition,
      this.destinationPosition
    );

    if (pathToTarget.length === 0) {
      console.log(
        `No path found from ${this.sourcePosition} to ${this.destinationPosition}`
      );
    } else {
      console.log(
        `Path from ${this.sourcePosition} to ${
          this.destinationPosition
        }: ${JSON.stringify(pathToTarget)}`
      );
    }
  }

  private findPath(
    table: Table,
    source: Position,
    destination: Position
  ): Position[] {
    const directions: Position[] = [
      DirectionVectors[Direction.NORTH],
      DirectionVectors[Direction.SOUTH],
      DirectionVectors[Direction.EAST],
      DirectionVectors[Direction.WEST],
    ];

    const queue: [Position, Position[]][] = [[source, [source]]];
    const visited: Set<string> = new Set();
    visited.add(source.toString());

    while (queue.length > 0) {
      const [[x, y], path] = queue.shift() as [Position, Position[]];

      if (x === destination[0] && y === destination[1]) {
        return path;
      }

      for (const [dx, dy] of directions) {
        const nx: number = x + dx;
        const ny: number = y + dy;

        if (
          table.isValidPosition(nx, ny) &&
          !table.isObstacle(nx, ny) &&
          !visited.has([nx, ny].toString())
        ) {
          visited.add([nx, ny].toString());
          queue.push([[nx, ny], path.concat([[nx, ny]])]);
        }
      }
    }
    return [];
  }
}
