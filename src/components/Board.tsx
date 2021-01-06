import React from "react";
import Square from "./Square";

type propsType = {
  onClick: (idx: number) => void;
  squares: Array<string | null>;
};

const Board = ({ onClick, squares }: propsType) => {
  const squaresNode = (items: Array<number>) => (
    items.map(key => (
      <Square
        key={key}
        value={squares[key]}
        onClick={() => onClick(key)}
      />
    ))
  );

  return (
    <div>
      <div className="board-row">
        {squaresNode([0, 1, 2])}
      </div>
      <div className="board-row">
        {squaresNode([3, 4, 5])}
      </div>
      <div className="board-row">
        {squaresNode([6, 7, 8])}
      </div>
    </div>
  );
};

export default Board;
