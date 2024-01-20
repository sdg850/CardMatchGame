import { useContext } from "react";
import { GameContext } from "../../hooks/UseGameContex";
import Info from "../../packages/headers/Info";
import "./styles.css";

function InfoHeader() {
  const { totalClicks } = useContext(GameContext);

  return (
    <div className="game-info-container">
      <Info type={"Time"} time={100} />
      <Info type={"Flips"} time={totalClicks} />
    </div>
  );
}

export default InfoHeader;
