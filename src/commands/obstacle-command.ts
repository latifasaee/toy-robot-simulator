import { Robot } from '../robot';
import { Table } from '../table';
import { BaseCommand } from './base-command';

type Position = { x: number; y: number };

export class ObstacleCommand extends BaseCommand {
  constructor(robot: Robot, table: Table, private obstacle: Position) {
    super(robot, table);
    this.obstacle = obstacle;
  }

  execute(): void {
    const currentPostion = this.robot.getRobotPosition();

    if (this.robot.isPlaced()) {
      if (
        !currentPostion ||
        (currentPostion &&
          currentPostion.x !== this.obstacle.x &&
          currentPostion.y !== this.obstacle.y)
      ) {
        this.table.addObstacle(this.obstacle.x, this.obstacle.y);
      } else {
        console.log('Invalid position, position is taken by robot');
      }
    } else {
      this.table.addObstacle(this.obstacle.x, this.obstacle.y);
    }
  }
}
