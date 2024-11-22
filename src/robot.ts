import { Direction, RobotState } from './enum';
import { IRobot } from './interfaces';
import { Position } from './position';

export class Robot implements IRobot {
  private position: Position | null = null;
  private state: RobotState = RobotState.OFF_TABLE;

  constructor() {}

  place(x: number, y: number, direction: Direction): void {
    this.position = new Position(x, y, direction);
    this.state = RobotState.ON_TABLE;
  }

  move(): Position | undefined {
    this.checkState();
    if (this.position) {
      return this.position.getNextPosition();
    }
  }

  updatePosition(newPosition: Position): void {
    this.position = newPosition;
  }

  rotateLeft(): void {
    this.checkState();
    if (this.position) {
      this.position = this.position.rotateLeft();
    }
  }

  getRobotPosition(): Position | null {
    return this.position;
  }

  rotateRight(): void {
    this.checkState();
    if (this.position) {
      this.position = this.position.rotateRight();
    }
  }

  report(): string {
    return this.position
      ? this.position.report()
      : 'Robot is not on the table.';
  }

  isPlaced(): boolean {
    return this.position !== null;
  }

  private checkState(): void {
    if (this.state !== RobotState.ON_TABLE) {
      console.log('Robot is not placed on the table.');
    }
  }
}
