import "./styles.css";
function Info({ type, time }) {
  return (
    <div className="game-info">
      {type} <span id="time-remaining">{time}</span>
    </div>
  );
}

export default Info;
