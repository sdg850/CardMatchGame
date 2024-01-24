import { useContext } from "react";
import AudioControllerGame from "../../hooks/MusicManager";
import { TimeContext } from "../../hooks/ManageTime";

function OverlayEnd() {
  const {
    timeOver,
    stopInterval,
    startCountdown,
    handleSetTimeOver,
    isGameOver,
  } = useContext(TimeContext);

  if (timeOver === 0) {
    stopInterval();
    AudioControllerGame.gameOver();
    handleSetTimeOver();
  }

  const handleRestartGame = () => {
    AudioControllerGame.startMusic();
    startCountdown();
  };

  const visibleClass = isGameOver ? "visible" : "";

  return (
    <div id="game-over-text" className={`overlay-text ${visibleClass}`}>
      GAME OVER
      <span className="overlay-text-small" onClick={() => handleRestartGame()}>
        Click to Restart
      </span>
    </div>
  );
}

export default OverlayEnd;
