import React, { useState } from "react";
import Status from "./components/status/status";
import Board from "./components/board/board";
import "./App.css";

// const App = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState(null);
//   const [winningLine, setWinningLine] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isXNext ? "X" : "O";
//     setBoard(newBoard);
//     setIsXNext(!isXNext);
//     checkWinner(newBoard);
//   };

//   const checkWinner = (board) => {
//     const winningLines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let i = 0; i < winningLines.length; i++) {
//       const [a, b, c] = winningLines[i];
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         setWinner(board[a]);
//         setWinningLine([a, b, c]);
//         return;
//       }
//     }

//     if (board.every((cell) => cell !== null)) {
//       setWinner("Tie");
//     }
//   };

//   const handleReset = () => {
//     setBoard(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//     setWinningLine(null);
//   };

//   return (
//     <div className="container">
//       <Status winner={winner} isXNext={isXNext} />
//       <Board squares={board} onClick={handleClick} winningLine={winningLine} />
//       {winner && (
//         <button className="reset" onClick={handleReset}>
//           Reset
//         </button>
//       )}
//     </div>
//   );
// };

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningLine([a, b, c]);
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner("Tie");
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  return (
    <div className="container">
      <Status winner={winner} isXNext={isXNext} />
      <Board squares={board} onClick={handleClick} winningLine={winningLine} />
      {winner && (
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default App;
