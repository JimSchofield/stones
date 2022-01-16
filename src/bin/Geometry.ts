import {Coord, makeMove, Move} from "./Movement";

export type Geometry = (m: Coord) => Record<string, Move>;

export const cartesian: Geometry = (m: Coord) => ({
  up: makeMove(m, { x: m.x, y: m.y - 2 }),
  down: makeMove(m, { x: m.x, y: m.y + 2 }),
  left: makeMove(m, { x: m.x - 2, y: m.y }),
  right: makeMove(m, { x: m.x + 2, y: m.y }),
});
               

