import "../square/square.css";

const Square = ({ value, onClick, isWinningSquare }) => {
  const squareClassName = isWinningSquare ? "square winning" : "square";

  return (
    <div className={squareClassName} onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
