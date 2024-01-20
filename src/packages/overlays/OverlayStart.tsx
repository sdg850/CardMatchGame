import { useState } from "react";
import "./styles.css";
function OverlayStart() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(!start);
  };

  const isStart = start ? "" : "overlay-text";

  return (
    <div className={`${isStart} visible`} onClick={() => handleStart()}>
      Click to Start
    </div>
  );
}

export default OverlayStart;
