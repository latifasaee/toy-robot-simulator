import { BaseCommand } from './base-command';

export class LeftCommand extends BaseCommand {
  execute(): void {
    if (this.robot.isPlaced() && this.robot.position) {
      this.robot.position.direction = this.robot.position.rotateLeft();
    }
  }
}
