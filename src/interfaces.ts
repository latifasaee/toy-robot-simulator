import { Direction } from './enum';

export interface IRobot {
  place(x: number, y: number, direction: Direction): void;
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
  getNextPosition(): IPosition;
  rotateLeft(): Direction;
  rotateRight(): Direction;
  report(): string;
}
