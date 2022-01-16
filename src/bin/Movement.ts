import {Geometry} from "./Geometry";
import {Board, getSpot, mapBoard, Spot} from "./Board";

export type Coord = { x: number, y: number };

export type Move = {
  from: Coord,
  to: Coord,
}

export const makeMove = (from: Coord, to: Coord) => ({ from, to });

export function getAllValidMoves(geometry: Geometry, board: Board): Move[] {
  return mapBoard(board, (spot) => getValidMovesFromSpot(geometry, board, spot)).flat();
}

export function getValidMovesFromSpot(geometry: Geometry, board: Board, spot: Spot): Move[] {
  const moveList = Object.values(geometry(spot));

  return moveList.filter(move => isMoveValid(board, move));
}

function isMoveValid(board: Board, move: Move): boolean {
  const [ fromSpot, toSpot ] = Object.values(move).map((m) => getSpot(board, m));

  if (!fromSpot || !toSpot) {
    // One of the two spots are not legal on this board
    return false ;
  }

  if (!isJumpValid(fromSpot, toSpot, board)) {
    return false;
  }

  return true;
}

function isJumpValid(fromSpot: Spot, tooSpot: Spot, board: Board): boolean {
  if (tooSpot.status !== "EMPTY") {
    return false;
  }

  if (fromSpot.status !== "FILLED") {
    return false;

  }

  const midSpot = getMidpointSpot(fromSpot, tooSpot, board);

  if (!midSpot) {
    return false;
  }

  if (midSpot.status !== "FILLED") { 
    return false;
  }

  return true;
}

function getMidpointSpot(fromSpot: Spot, toSpot: Spot, board: Board): Spot | undefined {
  const midY = (fromSpot.y + toSpot.y) / 2;
  const midX = (fromSpot.x + toSpot.x) / 2;

  if (board[midY]) {
    return board[midY][midX];
  }

  return undefined;
}


