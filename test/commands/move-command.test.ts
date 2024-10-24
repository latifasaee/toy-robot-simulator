import { Robot } from '../../src/robot-controller';
import { Table } from '../../src/table';
import { MoveCommand } from '../../src/commands/move-command';
import { Direction } from '../../src/enum';
import { PlaceCommand } from '../../src/commands/place-command';
import { Position } from '../../src/robot-position';

describe('MoveCommand', () => {
  describe('execute', () => {
    let mockRobot: Robot;
    let mockTable: Table;
    let mockMoveCommand: MoveCommand;

    beforeEach(() => {
      mockRobot = new Robot();
      mockTable = new Table(5, 5);
      mockMoveCommand = new MoveCommand(mockRobot, mockTable);
    });

    describe('when robot is placed', () => {
      it('should decrease X when the robot is facing WEST', () => {
        const mockPosition = new Position(1, 1, Direction.WEST);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('0,1,WEST');
      });

      it('should increase X when facing EAST', () => {
        const mockPosition = new Position(1, 1, Direction.EAST);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('2,1,EAST');
      });

      it('should increase Y when facing NORTH', () => {
        const mockPosition = new Position(1, 1, Direction.NORTH);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('1,2,NORTH');
      });

      it('should decrease Y when facing SOUTH', () => {
        const mockPosition = new Position(1, 1, Direction.SOUTH);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('1,0,SOUTH');
      });
    });

    describe('when attempting to move off the table', () => {
      it('should not move WEST off the table', () => {
        const mockPosition = new Position(0, 1, Direction.WEST);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('0,1,WEST');
      });

      it('should not move EAST off the table', () => {
        const mockPosition = new Position(4, 1, Direction.EAST);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('4,1,EAST');
      });

      it('should not move NORTH off the table', () => {
        const mockPosition = new Position(1, 4, Direction.NORTH);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('1,4,NORTH');
      });

      it('should not move SOUTH off the table', () => {
        const mockPosition = new Position(1, 0, Direction.SOUTH);
        new PlaceCommand(mockRobot, mockTable, mockPosition).execute();

        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('1,0,SOUTH');
      });
    });

    describe('when robot is not placed', () => {
      it('should not move and retain invalid position', () => {
        mockMoveCommand.execute();

        expect(mockRobot.report()).toBe('Robot is not on the table.');
      });
    });
  });
});
