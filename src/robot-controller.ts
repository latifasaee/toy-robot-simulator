import { Direction } from './enum';
import { IRobot } from './interfaces';
import { Position } from './robot-position';

export class Robot implements IRobot {
  position: Position | null = null;

  place(x: number, y: number, direction: Direction): void {
    this.position = new Position(x, y, direction);
  }

  report(): string {
    return this.position
      ? this.position.report()
      : 'Robot is not on the table.';
  }

  isPlaced(): boolean {
    return this.position !== null;
  }
}
