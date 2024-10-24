import { Robot } from '../src/robot';
import { Direction } from '../src/enum';
import { Position } from '../src/position';

describe('Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('should place the robot on the table', () => {
    robot.place(1, 2, Direction.NORTH);
    expect(robot.isPlaced()).toBe(true);
  });

  it('should not move if the robot is not placed on the table', () => {
    const newPosition = robot.move();
    expect(newPosition).toBeUndefined();
  });

  it('should move to the correct next position when placed', () => {
    robot.place(1, 2, Direction.NORTH);
    const newPosition = robot.move();
    expect(newPosition).toEqual(new Position(1, 3, Direction.NORTH));
  });

  it('should rotate left correctly', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.rotateLeft();
    expect(robot.report()).toBe('0,0,WEST');
  });

  it('should rotate right correctly', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.rotateRight();
    expect(robot.report()).toBe('0,0,EAST');
  });

  it('should report the current position and direction correctly', () => {
    robot.place(1, 2, Direction.SOUTH);
    expect(robot.report()).toBe('1,2,SOUTH');
  });

  it('should not rotate if the robot is not placed on the table', () => {
    robot.rotateLeft();
    expect(robot.report()).toBe('Robot is not on the table.');
    robot.rotateRight();
    expect(robot.report()).toBe('Robot is not on the table.');
  });
});
