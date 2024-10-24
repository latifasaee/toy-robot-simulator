import { Robot } from '../src/robot-controller';
import { Direction } from '../src/enum';

describe('Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('should place the robot on the table', () => {
    robot.place(0, 0, Direction.NORTH);

    expect(robot.isPlaced()).toBe(true);
    expect(robot.report()).toBe('0,0,NORTH');
  });

  it('should report that the robot is not on the table', () => {
    expect(robot.isPlaced()).toBe(false);
    expect(robot.report()).toBe('Robot is not on the table.');
  });
});
