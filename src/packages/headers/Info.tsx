import "./styles.css";

function Info({ type, setStart }) {
  return (
    <div className="game-info">
      {type} <span id="time-remaining">{setStart}</span>
    </div>
  );
}

export default Info;
