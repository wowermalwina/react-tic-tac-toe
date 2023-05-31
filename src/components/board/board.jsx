import Square from "../square/square";
import "../board/board.css";

const Board = ({ squares, onClick, winningLine }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinningSquare={winningLine && winningLine.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
