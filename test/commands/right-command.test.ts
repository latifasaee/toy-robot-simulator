import { Robot } from '../../src/robot-controller';
import { Table } from '../../src/table';
import { RightCommand } from '../../src/commands/right-command';
import { Direction } from '../../src/enum';
import { PlaceCommand } from '../../src/commands/place-command';
import { Position } from '../../src/robot-position';

describe('RightCommand', () => {
  describe('execute', () => {
    let mockRobot: Robot;
    let mockTable: Table;
    let mockRightCommand: RightCommand;

    beforeEach(() => {
      mockRobot = new Robot();
      mockTable = new Table(5, 5);
      mockRightCommand = new RightCommand(mockRobot, mockTable);
    });

    it('should turn the robot to EAST when facing NORTH', () => {
      const mockPosition = new Position(1, 1, Direction.NORTH);
      const mockPlaceCommand = new PlaceCommand(
        mockRobot,
        mockTable,
        mockPosition
      );

      mockPlaceCommand.execute();
      mockRightCommand.execute();

      expect(mockRobot.report()).toBe('1,1,EAST');
    });

    it('should turn the robot to SOUTH when facing EAST', () => {
      const mockPosition = new Position(1, 1, Direction.EAST);
      const mockPlaceCommand = new PlaceCommand(
        mockRobot,
        mockTable,
        mockPosition
      );

      mockPlaceCommand.execute();
      mockRightCommand.execute();

      expect(mockRobot.report()).toBe('1,1,SOUTH');
    });

    it('should turn the robot to WEST when facing SOUTH', () => {
      const mockPosition = new Position(1, 1, Direction.SOUTH);
      const mockPlaceCommand = new PlaceCommand(
        mockRobot,
        mockTable,
        mockPosition
      );

      mockPlaceCommand.execute();
      mockRightCommand.execute();

      expect(mockRobot.report()).toBe('1,1,WEST');
    });

    it('should turn the robot to NORTH when facing WEST', () => {
      const mockPosition = new Position(1, 1, Direction.WEST);
      const mockPlaceCommand = new PlaceCommand(
        mockRobot,
        mockTable,
        mockPosition
      );

      mockPlaceCommand.execute();
      mockRightCommand.execute();

      expect(mockRobot.report()).toBe('1,1,NORTH');
    });

    // check again
    it('should rotate the robot to the right', () => {
      mockRobot.place(0, 0, Direction.NORTH);
      mockRightCommand.execute();
      expect(mockRobot.report()).toBe('0,0,EAST');

      mockRightCommand.execute();
      expect(mockRobot.report()).toBe('0,0,SOUTH');
    });

    it('should ignore the command if the robot is not placed', () => {
      mockRightCommand.execute();
      expect(mockRobot.isPlaced()).toBe(false);
    });
  });
});
