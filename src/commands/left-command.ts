import { BaseCommand } from './base-command';

export class LeftCommand extends BaseCommand {
  execute(): void {
    if (this.robot.isPlaced()) {
      this.robot.rotateLeft();
    }
  }
}
