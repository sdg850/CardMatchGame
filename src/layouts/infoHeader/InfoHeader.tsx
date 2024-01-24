import { useContext } from "react";
import { GameContext } from "../../hooks/UseGameContex";
import Info from "../../packages/headers/Info";
import "./styles.css";
import { TimeContext } from "../../hooks/ManageTime";
// import { TimeContext } from "../../hooks/ManageTime";

function InfoHeader() {
  const { timeOver } = useContext(TimeContext);
  const { totalClicks } = useContext(GameContext);

  return (
    <div className="game-info-container">
      <Info type={"Time"} setStart={timeOver} />
      <Info type={"Flips"} setStart={totalClicks} />
    </div>
  );
}

export default InfoHeader;
