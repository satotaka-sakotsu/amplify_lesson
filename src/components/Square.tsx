import React from "react";

export type propsType = {
  onClick: () => void;
  value: string | null;
};

const Square = ({ onClick, value }: propsType) => {
  return (
    <button
      className="square"
      onClick={onClick}
      >
      {value}
    </button>
  );
};

export default Square;
