import React from 'react';

function SquareBox({ index, onClick, value }) {

  return (
    <React.Fragment>
      <button className="square" onClick={() => onClick(index)} >
        {value}
      </button>
    </React.Fragment>
  )
};

export default SquareBox;