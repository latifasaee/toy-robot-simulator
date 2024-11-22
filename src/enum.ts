export enum CommandType {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
  OBSTACLE = 'OBSTACLE',
  FIND = 'FIND',
}

export enum RobotState {
  OFF_TABLE,
  ON_TABLE,
}

export enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export const DirectionValues = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
] as const;

export const DirectionVectors: { [key in Direction]: [number, number] } = {
  [Direction.NORTH]: [0, 1],
  [Direction.SOUTH]: [0, -1],
  [Direction.EAST]: [1, 0],
  [Direction.WEST]: [-1, 0],
};
