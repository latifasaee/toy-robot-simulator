import { log } from 'console';
import { BaseCommand } from './base-command';

export class ReportCommand extends BaseCommand {
  execute(): void {
    console.log(this.robot.report());
  }
}
