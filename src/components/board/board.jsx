import Square from "../square/square";
import "../board/board.css";

const Board = ({ squares, onClick, isWinningSquare }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          isWinningSquare={isWinningSquare}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
