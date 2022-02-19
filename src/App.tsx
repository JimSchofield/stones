import { useState, useMemo } from "react";
import "./App.css";
import { parseBoardString } from "./bin/Board";
import { cartesian } from "./bin/Geometry";
import { getAllValidMoves } from "./bin/Movement";
import { Board } from "./components/Board";
import { MovesContext } from "./store/gameState";

const testBoard = `
xoox.
.xox.
.oxoo
`;

function App() {
  const [board, _setBoard] = useState(parseBoardString(testBoard));
  const [selected, setSelected] = useState(null);

  const validMoves = useMemo(() => {
    return getAllValidMoves(cartesian, board);
  }, [board]);

  return (
    <div id="app">
      <h1>Stones</h1>
      <MovesContext.Provider value={{ selected, validMoves, setSelected }}>
        <Board board={board} />
      </MovesContext.Provider>
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(validMoves, null, 2)}
      </pre>
    </div>
  );
}

export default App;
