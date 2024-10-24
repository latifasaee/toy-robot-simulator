import { createInterface } from 'readline/promises';
import { Robot } from './robot';
import { Table } from './table';
import { CommandHandler } from './command-handler';

const robot = new Robot();
const table = new Table(5, 5);

const commandHandler = new CommandHandler(robot, table);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  let exit = false;

  do {
    try {
      const answer = await readline.question('Enter (EXIT) to quite: ');
      if (answer.trim().toLowerCase() === 'exit') {
        exit = true;
      } else {
        const command = commandHandler.handle(answer);
        if (command) {
          command.execute();
        }
      }
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  } while (!exit);

  readline.close();
};

main();
