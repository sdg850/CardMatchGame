import AudioControllerGame from "../../hooks/MusicManager";

import { useContext } from "react";
import { TimeContext } from "../../hooks/ManageTime";
import { GameContext } from "../../hooks/UseGameContex";

function OverlayWin() {
  const { handleSetTimeOver, stopInterval, startCountdown } =
    useContext(TimeContext);
  const { isMatchCompleted, handleIsMatched } = useContext(GameContext);

  if (isMatchCompleted) {
    AudioControllerGame.stopMusic();
    AudioControllerGame.victory();
    stopInterval();
    handleSetTimeOver();
  }

  const handleRestartGame = () => {
    startCountdown();
    handleIsMatched();
    AudioControllerGame.startMusic();
  };

  const visibleClass = isMatchCompleted ? "visible" : "";

  return (
    <div id="victory-text" className={`overlay-text ${visibleClass}`}>
      VICTORY
      <span className="overlay-text-small" onClick={() => handleRestartGame()}>
        Click to Restart
      </span>
    </div>
  );
}

export default OverlayWin;
