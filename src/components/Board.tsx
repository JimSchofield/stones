import { PropsWithChildren as PWC } from "react";
import { Board as BoardType, Spot } from "../bin/Board";
import { Cell } from "./Cell";

interface Props {
  board: BoardType;
}

interface RowProps {
  row: Spot[];
}

const BoardRow: React.FC<RowProps> = ({ row }: PWC<RowProps>) => {
  return (
    <div className="board__row">
      {row.map((col, index) => {
        return <Cell spot={col} key={index} />;
      })}
    </div>
  );
};

// TODO: Check types
export const Board: React.FC<Props> = ({ board }: PWC<Props>) => {
  return (
    <div>
      {board.map((row, index) => {
        return <BoardRow row={row} key={index} />;
      })}
    </div>
  );
};
