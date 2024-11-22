import { FindPathCommand } from '../../src/commands/find-path-command';
import { Robot } from '../../src/robot';
import { Table } from '../../src/table';

describe('FindPathCommand', () => {
  let robot: Robot;
  let table: Table;
  let findPathCommand: FindPathCommand;
  const destination = [0, 3] as [number, number];

  beforeEach(() => {
    robot = new Robot();
    table = new Table(5, 5);
    findPathCommand = new FindPathCommand(robot, table, destination);
  });

  it('should find the path from (0,0) to (0,3) avoiding obstacles', () => {
    table.addObstacle(1, 1);
    table.addObstacle(1, 2);

    const logSpy = jest.spyOn(console, 'log');

    findPathCommand.execute();

    expect(logSpy).toHaveBeenCalledWith(
      'Path from 0,0 to 0,3: [[0,0],[0,1],[0,2],[0,3]]'
    );
    logSpy.mockRestore();
  });

  it('should return no path if the destination is unreachable', () => {
    table.addObstacle(0, 1);
    table.addObstacle(1, 0);

    const logSpy = jest.spyOn(console, 'log');
    findPathCommand.execute();

    expect(logSpy).toHaveBeenCalledWith('No path found from 0,0 to 0,3');

    logSpy.mockRestore();
  });
});
