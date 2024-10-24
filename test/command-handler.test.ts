import { CommandHandler } from '../src/command-handler';
import { PlaceCommand } from '../src/commands/place-command';
import { MoveCommand } from '../src/commands/move-command';
import { LeftCommand } from '../src/commands/left-command';
import { RightCommand } from '../src/commands/right-command';
import { ReportCommand } from '../src/commands/report-command';
import { Position } from '../src/robot-position';
import { Robot } from '../src/robot-controller';
import { Table } from '../src/table';
import { Direction } from '../src/enum';

jest.mock('../src/robot-position', () => ({
  __esModule: true,
  Position: jest.fn().mockImplementation((x, y, direction) => {
    return {
      x,
      y,
      direction,
    };
  }),
}));

jest.mock('../src/commands/place-command', () => ({
  __esModule: true,
  PlaceCommand: jest.fn(),
}));

jest.mock('../src/commands/move-command', () => ({
  __esModule: true,
  MoveCommand: jest.fn(),
}));

jest.mock('../src/commands/left-command', () => ({
  __esModule: true,
  LeftCommand: jest.fn(),
}));

jest.mock('../src/commands/right-command', () => ({
  __esModule: true,
  RightCommand: jest.fn(),
}));

jest.mock('../src/commands/report-command', () => ({
  __esModule: true,
  ReportCommand: jest.fn(),
}));

const mockedPosition = jest.mocked(Position);
const mockedPlaceCommand = jest.mocked(PlaceCommand);
const mockedMoveCommand = jest.mocked(MoveCommand);
const mockedLeftCommand = jest.mocked(LeftCommand);
const mockedRightCommand = jest.mocked(RightCommand);
const mockedReportCommand = jest.mocked(ReportCommand);

describe('CommandHandler', () => {
  let mockRobot: Robot;
  let mockTable: Table;
  let commandHandler: CommandHandler;

  beforeEach(() => {
    mockRobot = new Robot();
    mockTable = new Table(5, 5);
    commandHandler = new CommandHandler(mockRobot, mockTable);

    mockedPosition.mockClear();
    mockedPlaceCommand.mockClear();
    mockedMoveCommand.mockClear();
    mockedLeftCommand.mockClear();
    mockedRightCommand.mockClear();
    mockedReportCommand.mockClear();
  });

  describe('parse method', () => {
    describe('PLACE command', () => {
      const mockInputPlace = 'PLACE 1, 1, NORTH';

      it('creates command with the correct arguments', () => {
        const mockPosition = new Position(1, 1, Direction.NORTH);

        commandHandler.handle(mockInputPlace);

        expect(Position).toHaveBeenCalledWith(1, 1, Direction.NORTH);
        expect(PlaceCommand).toHaveBeenCalledWith(
          mockRobot,
          mockTable,
          mockPosition
        );
      });

      it('returns command', () => {
        const command = commandHandler.handle(mockInputPlace);
        expect(command).toBeInstanceOf(PlaceCommand);
      });
    });

    describe('MOVE command', () => {
      const mockInputMove = 'MOVE';

      it('creates command with the correct arguments', () => {
        commandHandler.handle(mockInputMove);

        expect(mockedMoveCommand).toHaveBeenCalledWith(mockRobot, mockTable);
      });

      it('returns command', () => {
        const command = commandHandler.handle(mockInputMove);

        expect(command).toBeInstanceOf(MoveCommand);
      });
    });

    describe('LEFT command', () => {
      const mockInputLeft = 'LEFT';

      it('creates command with the correct arguments', () => {
        commandHandler.handle(mockInputLeft);

        expect(mockedLeftCommand).toHaveBeenCalledWith(mockRobot, mockTable);
      });

      it('returns command', () => {
        const command = commandHandler.handle(mockInputLeft);
        expect(command).toBeInstanceOf(LeftCommand);
      });
    });

    describe('RIGHT command', () => {
      const mockInputRight = 'RIGHT';

      it('creates command with the correct arguments', () => {
        commandHandler.handle(mockInputRight);

        expect(mockedRightCommand).toHaveBeenCalledWith(mockRobot, mockTable);
      });

      it('returns command', () => {
        const command = commandHandler.handle(mockInputRight);
        expect(command).toBeInstanceOf(RightCommand);
      });
    });

    describe('REPORT command', () => {
      const mockInputReport = 'REPORT';

      it('creates command with the correct arguments', () => {
        commandHandler.handle(mockInputReport);

        expect(mockedReportCommand).toHaveBeenCalledWith(mockRobot, mockTable);
      });

      it('returns command', () => {
        const command = commandHandler.handle(mockInputReport);
        expect(command).toBeInstanceOf(ReportCommand);
      });
    });

    describe('INVALID command', () => {
      const mockInputInvalid = 'invalid command';
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      it('returns null', () => {
        const command = commandHandler.handle(mockInputInvalid);

        expect(command).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith('Invalid command!');
      });
    });
  });
});
