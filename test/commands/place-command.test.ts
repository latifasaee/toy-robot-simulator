import { Robot } from '../../src/robot';
import { Table } from '../../src/table';
import { PlaceCommand } from '../../src/commands/place-command';
import { Direction } from '../../src/enum';
import { Position } from '../../src/position';

describe('PlaceCommand', () => {
  let mockRobot: Robot;
  let mockTable: Table;
  let mockPlaceCommand: PlaceCommand;

  beforeEach(() => {
    mockRobot = new Robot();
    mockTable = new Table(5, 5);
  });

  it('should place the robot at a valid position', () => {
    const mockPosition = new Position(1, 1, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('1,1,NORTH');
  });

  it('should not place the robot at an invalid position', () => {
    const mockPosition = new Position(-1, 1, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });

  it('should not place the robot at a negative X position', () => {
    const mockPosition = new Position(-1, 1, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });

  it('should not place the robot at a negative Y position', () => {
    const mockPosition = new Position(1, -1, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });

  it('should not place the robot at an X position exceeding the table width', () => {
    const mockPosition = new Position(6, 1, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });

  it('should not place the robot at a Y position exceeding the table height', () => {
    const mockPosition = new Position(1, 6, Direction.NORTH);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });

  it('should not place the robot at an invalid direction', () => {
    const mockPosition = new Position(1, 1, 'INVALID_DIRECTION' as Direction);
    mockPlaceCommand = new PlaceCommand(mockRobot, mockTable, mockPosition);

    mockPlaceCommand.execute();

    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });
});
