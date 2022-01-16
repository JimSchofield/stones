import {useState} from 'react';
import './App.css'
import Board from './bin/Board';
import {cartesian} from './bin/Geometry';
import {getAllValidMoves} from './bin/Movement';

const testBoard = `
xxox.
.xox.
.oxoo
`
function App() {
  const [board, setBoard] = useState(Board.parseBoardString(testBoard));

  console.log(getAllValidMoves(cartesian, board));

  return (
    <div id="app">
      <h1>Stones</h1>
      <pre>
        {Board.displayBoardString(board)}
      </pre>
    </div>
  )
}

export default App
