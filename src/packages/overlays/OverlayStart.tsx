import { memo, useContext, useState } from "react";
import "./styles.css";
import AudioControllerGame from "../../hooks/MusicManager";
import { TimeContext } from "../../hooks/ManageTime";

function OverlayStart() {
  const [start, setStart] = useState(false);
  const { startCountdown } = useContext(TimeContext);

  const handleStart = async () => {
    setStart(!start);
    AudioControllerGame.startMusic();
    startCountdown();
  };

  const isStart = start ? "" : "visible";

  return (
    <div className={`${isStart} overlay-text`} onClick={() => handleStart()}>
      Click to Start
    </div>
  );
}

export default memo(OverlayStart);
