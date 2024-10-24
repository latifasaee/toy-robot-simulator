import { BaseCommand } from './base-command';

export class RightCommand extends BaseCommand {
  execute(): void {
    if (this.robot.isPlaced()) {
      this.robot.rotateRight();
    }
  }
}
