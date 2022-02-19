import { Context, PropsWithChildren as PWC, useContext } from "react";
import { Spot, SpotStatus } from "../bin/Board";
import { Move } from "../bin/Movement";
import { MovesContext } from "../store/gameState";

interface Props {
  spot: Spot;
}

const getClassname = (status: SpotStatus): string => {
  switch (status) {
    case SpotStatus.VOID:
      return "cell cell--void";
    case SpotStatus.EMPTY:
      return "cell cell--empty";
    case SpotStatus.FILLED:
      return "cell cell--filled";
    default:
      return "cell";
  }
};

const isValidStart = (spot: Spot, moves: Move[]): boolean => {
  return moves.some(({ from }) => from.x === spot.x && from.y === spot.y);
};

// const handleMouseOver = (spot: Spot, ctx: Context<MovesContext>) => {
//   ctx.Consumer.
// }

export const Cell: React.FC<Props> = ({ spot }: PWC<Props>) => {
  const ctx = useContext(MovesContext);

  const isStart = isValidStart(spot, ctx.validMoves);

  return (
    <div
      className={getClassname(spot.status) + (isStart ? " cell--start" : "")}
      // onMouseOver={handleMouseOver(spot, ctx)}
    >
      {spot.x},{spot.y}
    </div>
  );
};
