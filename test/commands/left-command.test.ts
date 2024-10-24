import { LeftCommand } from '../../src/commands/left-command';
import { PlaceCommand } from '../../src/commands/place-command';
import { Robot } from '../../src/robot-controller';
import { Table } from '../../src/table';
import { Position } from '../../src/robot-position';
import { Direction } from '../../src/enum';

describe('LeftCommand', () => {
  describe('execute', () => {
    let mockRobot: Robot;
    let mockTable: Table;
    let mockLeftCommand: LeftCommand;

    beforeEach(() => {
      mockRobot = new Robot();
      mockTable = new Table(5, 5);
      mockLeftCommand = new LeftCommand(mockRobot, mockTable);
    });

    it('should turn the robot to WEST when facing NORTH', () => {
      const mockPosition = new Position(1, 1, Direction.NORTH);
      new PlaceCommand(mockRobot, mockTable, mockPosition).execute();
      mockLeftCommand.execute();
      expect(mockRobot.report()).toBe('1,1,WEST');
    });

    it('should turn the robot to SOUTH when facing WEST', () => {
      const mockPosition = new Position(1, 1, Direction.WEST);
      new PlaceCommand(mockRobot, mockTable, mockPosition).execute();
      mockLeftCommand.execute();
      expect(mockRobot.report()).toBe('1,1,SOUTH');
    });

    it('should turn the robot to EAST when facing SOUTH', () => {
      const mockPosition = new Position(1, 1, Direction.SOUTH);
      new PlaceCommand(mockRobot, mockTable, mockPosition).execute();
      mockLeftCommand.execute();
      expect(mockRobot.report()).toBe('1,1,EAST');
    });

    it('should turn the robot to NORTH when facing EAST', () => {
      const mockPosition = new Position(1, 1, Direction.EAST);
      new PlaceCommand(mockRobot, mockTable, mockPosition).execute();
      mockLeftCommand.execute();
      expect(mockRobot.report()).toBe('1,1,NORTH');
    });
  });
});
