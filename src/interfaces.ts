import { Direction, RobotState } from './enum';
import { Position } from './position';

export interface IRobot {
  place(x: number, y: number, direction: Direction): void;
  move(): Position | undefined;
  updatePosition(newPosition: Position): void;
  rotateLeft(): void;
  rotateRight(): void;
  report(): string;
  isPlaced(): boolean;
}

export interface ITable {
  isValidPosition(x: number, y: number): boolean;
}

export interface ICommand {
  execute(): void;
}

export interface IPosition {
  x: number;
  y: number;
  direction: Direction;
  getNextPosition(): Position;
  rotateLeft(): Position;
  rotateRight(): Position;
  report(): string;
}
