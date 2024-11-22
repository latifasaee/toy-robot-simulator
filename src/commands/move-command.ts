import { BaseCommand } from './base-command';

export class MoveCommand extends BaseCommand {
  execute(): void {
    if (this.robot.isPlaced()) {
      const newPosition = this.robot.move();

      if (
        newPosition &&
        this.table.isValidPosition(newPosition.x, newPosition.y) &&
        !this.table.isObstacle(newPosition.x, newPosition.y)
      ) {
        this.robot.updatePosition(newPosition);
      } else {
        console.log('Command ignored: invalid position');
      }
    }
  }
}
