import { Geometry } from "./Geometry";
import { Board, getSpot, mapBoard, Spot } from "./Board";

export type Coord = { x: number; y: number };

export type Move = {
  from: Coord;
  to: Coord;
  midSpot: Coord;
};

export const makeMove = (from: Coord, to: Coord, midSpot: Coord) => ({
  from,
  to,
  midSpot,
});

export function getAllValidMoves(geometry: Geometry, board: Board): Move[] {
  return mapBoard(board, (spot) =>
    getValidMovesFromSpot(geometry, board, spot)
  ).flat();
}

export function getValidMovesFromSpot(
  geometry: Geometry,
  board: Board,
  spot: Spot
): Move[] {
  const moveList = Object.values(geometry(spot));

  return moveList.filter((move) => isMoveValid(board, move));
}

function isMoveValid(board: Board, move: Move): boolean {
  const [fromSpot, toSpot, midSpot] = Object.values(move).map((m) =>
    getSpot(board, m)
  );

  if (!fromSpot || !toSpot || !midSpot) {
    // One of the two spots are not legal on this board
    return false;
  }

  if (!isJumpValid(fromSpot, toSpot, midSpot)) {
    return false;
  }

  return true;
}

function isJumpValid(
  fromSpot: Spot,
  tooSpot: Spot,
  midSpot: Spot,
  // board: Board
): boolean {
  if (tooSpot.status !== "EMPTY") {
    return false;
  }

  if (fromSpot.status !== "FILLED") {
    return false;
  }

  if (midSpot.status !== "FILLED") {
    return false;
  }

  return true;
}
