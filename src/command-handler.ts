import { LeftCommand } from './commands/left-command';
import { MoveCommand } from './commands/move-command';
import { PlaceCommand } from './commands/place-command';
import { ReportCommand } from './commands/report-command';
import { RightCommand } from './commands/right-command';
import { CommandType, Direction } from './enum';
import { ICommand } from './interfaces';
import { Position } from './position';
import { Robot } from './robot';
import { Table } from './table';
import { ObstacleCommand } from './commands/obstacle-command';
import { FindPathCommand } from './commands/find-path-command';

export class CommandHandler {
  constructor(private readonly robot: Robot, private readonly table: Table) {}

  handle(command: string): ICommand | null {
    const placeRegex = /^PLACE\s+(\d+),\s*(\d+),\s*(NORTH|SOUTH|EAST|WEST)$/i;
    const obstacleRegex = /^OBSTACLE\s+(\d+),\s*(\d+)$/i;
    const findRegex = /^FIND\s+(\d+),\s*(\d+)$/i;

    const [commandType] = command.split(' ');

    switch (commandType.toUpperCase()) {
      case CommandType.PLACE:
        const [, x, y, direction] = command.match(placeRegex)!;
        const position = new Position(
          parseInt(x),
          parseInt(y),
          direction.toUpperCase() as Direction
        );
        return new PlaceCommand(this.robot, this.table, position);

      case CommandType.MOVE:
        return new MoveCommand(this.robot, this.table);

      case CommandType.LEFT:
        return new LeftCommand(this.robot, this.table);

      case CommandType.RIGHT:
        return new RightCommand(this.robot, this.table);

      case CommandType.REPORT:
        return new ReportCommand(this.robot, this.table);

      case CommandType.OBSTACLE:
        const [, newX, newY] = command.match(obstacleRegex)!;

        return new ObstacleCommand(this.robot, this.table, {
          x: parseInt(newX),
          y: parseInt(newY),
        });

      case CommandType.FIND:
        const [, xCord, yCord] = command.match(findRegex)!;

        return new FindPathCommand(this.robot, this.table, [
          parseInt(xCord),
          parseInt(yCord),
        ]);

      default:
        console.error('Invalid command!');
        return null;
    }
  }
}
