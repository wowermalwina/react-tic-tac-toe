import "../status/status.css";

const Status = ({ winner, isXNext }) => {
  if (winner) {
    if (winner === "Tie") {
      return <div className="status">Tie!</div>;
    } else {
      return <div className="status">Winner: {winner}</div>;
    }
  } else {
    return <div className="status">Next player: {isXNext ? "X" : "O"}</div>;
  }
};

export default Status;
