import { useState } from "react";
import "./styles.css";
function OverlayStart() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(!start);
  };

  const isStart = start ? "" : "visible";

  return (
    <div className={`${isStart} overlay-text`} onClick={() => handleStart()}>
      Click to Start
    </div>
  );
}

export default OverlayStart;
