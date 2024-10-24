import { BaseCommand } from './base-command';

export class MoveCommand extends BaseCommand {
  execute(): void {
    if (this.robot.isPlaced() && this.robot.position) {
      const newPosition = this.robot.position.getNextPosition();

      if (this.table.isValidPosition(newPosition.x, newPosition.y)) {
        this.robot.position = newPosition;
      } else {
        console.log('Command ignored: invalid position');
      }
    }
  }
}
