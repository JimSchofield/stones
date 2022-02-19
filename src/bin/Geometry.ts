import { Coord, makeMove, Move } from "./Movement";

export type Geometry = (m: Coord) => Record<string, Move>;

export const cartesian: Geometry = (m: Coord) => ({
  // Returns { start, end, mid }
  // Probably want to rethink the role of geometry if we want to allow
  // jumping more than one stone
  up: makeMove(m, { x: m.x, y: m.y - 2 }, { x: m.x, y: m.y - 1 }),
  down: makeMove(m, { x: m.x, y: m.y + 2 }, { x: m.x, y: m.y + 1 }),
  left: makeMove(m, { x: m.x - 2, y: m.y }, { x: m.x - 1, y: m.y }),
  right: makeMove(m, { x: m.x + 2, y: m.y }, { x: m.x + 1, y: m.y }),
});
