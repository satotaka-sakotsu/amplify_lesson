import React from "react";
import { historiesType } from '../types/game';
import Button from '@material-ui/core/Button';

type propsType = {
  onClick: (step: number) => void;
  history: historiesType;
  status: string;
};

const Information = ({ onClick, history, status }: propsType) => {
  const moves = history.map((_, step) => {
    const desc = step ?
      'Go to move #' + step :
      'Go to game start';
    return (
      <li key={step}>
        <Button
          onClick={() => onClick(step)}
          variant='contained'
        >{desc}</Button>
      </li>
    );
  });

  return (
    <>
      <div>{status}</div>
      <ol>{moves}</ol>
    </>
  );
};

export default Information;
