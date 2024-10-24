# Toy Robot Simulator

This project simulates a toy robot moving on a tabletop, following a series of commands. The robot can be placed on a grid and can move, turn, and report its position based on user input commands.

## Table of Contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Commands](#commands)
- [Running Tests](#running-tests)

## Features

- Supports the following commands:
  - **PLACE X,Y,F**: Places the robot on the table at a specific position (`X,Y`) facing a direction (`F` = NORTH, SOUTH, EAST, WEST).
  - **MOVE**: Moves the robot one unit forward in the direction it is currently facing.
  - **LEFT**: Rotates the robot 90 degrees to the left without changing its position.
  - **RIGHT**: Rotates the robot 90 degrees to the right without changing its position.
  - **REPORT**: Outputs the robot's current position and direction.
- Input validation and error handling.
- Unit tests for all major functionality using **Jest**.

## Setup and Installation

### Prerequisites

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)
- **Docker** (for containerized development)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/toy-robot-simulator.git
   cd toy-robot-simulator
   ```
2. Install dependencies
   `npm install`

3. Run the linter to check for code style issues:
   `npm run lint`

4. Run the code:
   `npm start`

5. Running Tests
   Unit tests are written using Jest. To run the tests:
   `npm test` or `npm run test`

### Running with Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:
   `docker build -t toy-robot .`

2. Run the application in interactive mode:
   `docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app toy-robot npm run dev`

3. Running Tests: To run tests in Docker, use the following command:

   `docker run --rm -v $(pwd):/usr/src/app -w /usr/src/app toy-robot npm test`

The simulator will read commands from the terminal. Example:

```plain
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```
