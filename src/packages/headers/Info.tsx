import "./styles.css";

interface IInfoType {
  type: string;
  setStart: number;
}

function Info({ type, setStart }: IInfoType) {
  return (
    <div className="game-info">
      {type} <span id="time-remaining">{setStart}</span>
    </div>
  );
}

export default Info;
