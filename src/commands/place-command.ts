import { BaseCommand } from './base-command';
import { Robot } from '../robot';
import { Table } from '../table';
import { Position } from '../position';
import { Direction } from '../enum';

export class PlaceCommand extends BaseCommand {
  constructor(robot: Robot, table: Table, private position: Position) {
    super(robot, table);
  }
  execute(): void {
    const { x, y, direction } = this.position;

    if (
      this.position &&
      this.table.isValidPosition(x, y) &&
      Object.values(Direction).includes(direction) &&
      !this.table.isObstacle(x, y)
    ) {
      this.robot.place(x, y, direction);
    } else {
      console.log('Invalid PLACE command: invalid position.');
    }
  }
}
