import React from "react";
import { Spot } from "../bin/Board";
import { Move } from "../bin/Movement";

export const MovesContext = React.createContext<{
  selected: Spot | null;
  validMoves: Move[];
  setSelected: (spot: Spot) => void;
}>({ selected: null, valideMoves: [] as Move[], setSelected: (spot: Spot) => {} });
