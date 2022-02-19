import { Coord } from "./Movement";

export type Board = Spot[][];

export enum SpotStatus {
  FILLED = "FILLED",
  EMPTY = "EMPTY",
  VOID = "VOID",
}

export interface Spot {
  x: number;
  y: number;
  status: SpotStatus;
}

export function mapBoard<T>(board: Board, fn: (spot: Spot) => T): T[] {
  const returnArray = board.map((row) => {
    return row.map((spot) => fn(spot));
  });

  return returnArray.flat();
}

export function displayBoardString(board: Board): string {
  return board
    .map((row) => {
      return row
        .map((col) => {
          return col.status === SpotStatus.FILLED
            ? "o"
            : col.status === SpotStatus.EMPTY
            ? "x"
            : ".";
        })
        .join("");
    })
    .join("\n");
}

export function parseBoardString(src: string): Board {
  const rows = src.split("\n").filter(Boolean);

  const board = rows.map((row, y) => {
    return row.split("").map((spot, x) => {
      const status =
        spot === "x"
          ? SpotStatus.EMPTY
          : spot === "o"
          ? SpotStatus.FILLED
          : SpotStatus.VOID;

      return {
        x,
        y,
        status,
      };
    });
  });

  return board;
}

export function getSpot(board: Board, coords: Coord): Spot | null {
  const { x, y } = coords;

  if (!board[y]) {
    return null;
  }

  if (!board[y][x]) {
    return null;
  }

  return board[y][x];
}
