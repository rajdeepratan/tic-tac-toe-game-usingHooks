import React, { useState } from 'react';

import { SquareBox } from 'components';
import { calculateWinner, isBoardFull } from 'function';

import './GameBoard.scss';


function GameBoard() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(square);

  const handleClick = value => {
    const squares = square;
    if (!squares[value] && winner === null) {
      console.log('inside the condition')
      squares[value] = isXNext ? 'X' : 'O';
      setSquare(squares);
      setIsXNext(!isXNext);
    }
  }

  const handleReset = () => {
    setSquare(Array(9).fill(null));
    setIsXNext(true);
  }

  const checkStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isBoardFull(square)) {
      return "Draw!";
    } else {
      return `Next Play: ${nextSymbol}`;
    }
  }

  return (
    <div className="game-board">
      <h3 className="game-name">Tic Tac Toe</h3>
      <div className="row">
        <div className="column">
          <SquareBox
            index={0}
            onClick={handleClick}
            value={square[0]}
          />
          <SquareBox
            index={1}
            onClick={handleClick}
            value={square[1]}
          />
          <SquareBox
            index={2}
            onClick={handleClick}
            value={square[2]}
          />
        </div>
        <div className="column">
          <SquareBox
            index={3}
            onClick={handleClick}
            value={square[3]}
          />
          <SquareBox
            index={4}
            onClick={handleClick}
            value={square[4]}
          />
          <SquareBox
            index={5}
            onClick={handleClick}
            value={square[5]}
          />
        </div>
        <div className="column">
          <SquareBox
            index={6}
            onClick={handleClick}
            value={square[6]}
          />
          <SquareBox
            index={7}
            onClick={handleClick}
            value={square[7]}
          />
          <SquareBox
            index={8}
            onClick={handleClick}
            value={square[8]}
          />
        </div>
      </div>
      <div className="game-status">{checkStatus()}</div>
      <div className="reset-button">
        <button onClick={handleReset} >
          Reset
        </button>
      </div>
    </div>
  )
};

export default GameBoard;