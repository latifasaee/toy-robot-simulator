import { Position } from '../src/robot-position';
import { Direction } from '../src/enum';

describe('Position', () => {
  it('should move to the correct next position when facing NORTH', () => {
    const position = new Position(0, 0, Direction.NORTH);
    const nextPosition = position.getNextPosition();
    expect(nextPosition.x).toBe(0);
    expect(nextPosition.y).toBe(1);
    expect(nextPosition.direction).toBe(Direction.NORTH);
  });

  it('should move to the correct next position when facing EAST', () => {
    const position = new Position(0, 0, Direction.EAST);
    const nextPosition = position.getNextPosition();
    expect(nextPosition.x).toBe(1);
    expect(nextPosition.y).toBe(0);
    expect(nextPosition.direction).toBe(Direction.EAST);
  });

  it('should move to the correct next position when facing SOUTH', () => {
    const position = new Position(1, 1, Direction.SOUTH);
    const nextPosition = position.getNextPosition();
    expect(nextPosition.x).toBe(1);
    expect(nextPosition.y).toBe(0);
    expect(nextPosition.direction).toBe(Direction.SOUTH);
  });

  it('should move to the correct next position when facing WEST', () => {
    const position = new Position(1, 1, Direction.WEST);
    const nextPosition = position.getNextPosition();
    expect(nextPosition.x).toBe(0);
    expect(nextPosition.y).toBe(1);
    expect(nextPosition.direction).toBe(Direction.WEST);
  });

  it('should rotate left correctly', () => {
    const position = new Position(0, 0, Direction.NORTH);
    const newDirection = position.rotateLeft();
    expect(newDirection).toBe(Direction.WEST);
  });

  it('should rotate right correctly', () => {
    const position = new Position(0, 0, Direction.NORTH);
    const newDirection = position.rotateRight();
    expect(newDirection).toBe(Direction.EAST);
  });

  it('should report the current position and direction correctly', () => {
    const position = new Position(1, 2, Direction.SOUTH);
    const report = position.report();
    expect(report).toBe('1,2,SOUTH');
  });
});
