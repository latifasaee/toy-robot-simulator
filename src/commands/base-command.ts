import { ICommand } from '../interfaces';
import { Robot } from '../robot-controller';
import { Table } from '../table';

export class BaseCommand implements ICommand {
  constructor(protected robot: Robot, protected table: Table) {}

  execute(): void {
    throw new Error('Method not implemented.');
  }
}
