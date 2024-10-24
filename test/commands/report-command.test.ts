import { Robot } from '../../src/robot-controller';
import { Table } from '../../src/table';
import { ReportCommand } from '../../src/commands/report-command';
import { PlaceCommand } from '../../src/commands/place-command';
import { Position } from '../../src/robot-position';
import { Direction } from '../../src/enum';

describe('ReportCommand', () => {
  let mockRobot: Robot;
  let mockTable: Table;

  beforeEach(() => {
    mockRobot = new Robot();
    mockTable = new Table(5, 5);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should report the robot's position when placed on the table", () => {
    const mockPosition = new Position(1, 2, Direction.EAST);
    const mockPlaceCommand = new PlaceCommand(
      mockRobot,
      mockTable,
      mockPosition
    );
    const mockReportCommand = new ReportCommand(mockRobot, mockTable);

    mockPlaceCommand.execute();
    mockReportCommand.execute();
    const mockExpectedReport = '1,2,EAST';

    expect(mockRobot.report()).toBe(mockExpectedReport);
  });

  it('should report that the robot is not on the table when it is not placed', () => {
    const mockReportCommand = new ReportCommand(mockRobot, mockTable);
    mockReportCommand.execute();
    expect(mockRobot.report()).toBe('Robot is not on the table.');
  });
});
