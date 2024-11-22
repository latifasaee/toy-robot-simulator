import { ObstacleCommand } from '../../src/commands/obstacle-command';
import { PlaceCommand } from '../../src/commands/place-command';
import { Direction } from '../../src/enum';
import { Position } from '../../src/position';
import { Robot } from '../../src/robot';
import { Table } from '../../src/table';

describe('ObstacleCommand', () => {
  let robot: Robot;
  let table: Table;
  let obstacleCommand: ObstacleCommand;
  let obstacle: { x: number; y: number };

  beforeEach(() => {
    robot = new Robot();
    table = new Table(5, 5);
    obstacle = { x: 2, y: 3 };

    obstacleCommand = new ObstacleCommand(robot, table, obstacle);
  });

  it('should add an obstacle when the robot is not placed', () => {
    obstacleCommand.execute();

    expect(table.isObstacle(2, 3)).toBe(true);
  });

  it('should add an obstacle when the robot is placed and its position does not match the obstacle', () => {
    const position = new Position(1, 1, Direction.NORTH);
    new PlaceCommand(robot, table, position).execute();

    obstacleCommand.execute();

    expect(table.isObstacle(2, 3)).toBe(true);
  });

  it('should not add an obstacle when the robot is placed and its position matches the obstacle', () => {
    const position = new Position(2, 3, Direction.NORTH);
    new PlaceCommand(robot, table, position).execute();

    obstacleCommand.execute();

    expect(table.isObstacle(2, 3)).toBe(false);
  });
});
