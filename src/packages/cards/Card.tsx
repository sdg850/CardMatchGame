import { useContext, useState } from "react";

import "./styles.css";
import { GameContext } from "../../hooks/UseGameContex";

function Card() {
  const [Visible, setVisible] = useState(false);
  const { handleTotalClicks } = useContext(GameContext);

  const handleClick = () => {
    setVisible(true);
    handleTotalClicks();
  };

  const visibleClass = Visible ? "visible" : "";

  return (
    <>
      <div className={`${visibleClass} card`} onClick={() => handleClick()}>
        <div className={`card-back card-face`}>
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Bat.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Bat.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Bones.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Bones.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Cauldron.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Cauldron.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Eye.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Eye.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Skull.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Skull.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Pumpkin.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Pumpkin.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Ghost.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Ghost.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Dracula.png" />
        </div>
      </div>
      <div className="card">
        <div className="card-back card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/Cobweb.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/Cobweb.png"
          />
          <img className="spider" src="src/assets/Images/Spider.png" />
        </div>
        <div className="card-front card-face">
          <img
            className="cob-web cob-web-top-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-top-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-left"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img
            className="cob-web cob-web-bottom-right"
            src="src/assets/Images/CobwebGrey.png"
          />
          <img className="card-value" src="src/assets/Images/Dracula.png" />
        </div>
      </div>
    </>
  );
}

export default Card;
