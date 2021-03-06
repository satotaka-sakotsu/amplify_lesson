import React, { useState } from 'react';
import Board from './components/Board';
import Information from './components/Information';
import { squaresType, historiesType } from './types/game';
import './App.css';

type stateType = {
  history: historiesType;
  stepNumber: number;
  xIsNext: boolean;
};

const Container = () => {
  const [state, setState] = useState<stateType>({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  });

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }

  const handleClick = (idx: number) => {
    const _history = state.history.slice(0, state.stepNumber + 1);
    const _current = _history[_history.length - 1];
    const squares = _current.squares.slice();
    if (calculateWinner(squares) || squares[idx]) {
      return;
    }
    squares[idx] = state.xIsNext ? 'X' : 'O';
    setState({
      history: _history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: _history.length,
      xIsNext: !state.xIsNext
    });
  };

  const jumpTo = (step: number) => {
    setState({
      history: state.history,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={idx => handleClick(idx)}
        />
      </div>
      <div className="game-info">
        <Information
          history={history}
          status={status}
          onClick={step => jumpTo(step)}
        />
      </div>
    </div>
  );
};

function calculateWinner(squares: squaresType) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Container;
