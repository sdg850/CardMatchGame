import { memo, useContext, useState } from "react";

import "./styles.css";
import { GameContext } from "../../hooks/UseGameContex";

function Card({ card }) {
  const [visible, setVisible] = useState(false);
  const { totalClicks, handleTotalClicks, matchedCards, checkCardMatch } =
    useContext(GameContext);

  const handleClick = () => {
    checkCardMatch(card);
    handleTotalClicks();
    setVisible(true);
  };

  const visibleClass =
    visible || matchedCards.current.includes(card) ? "visible" : "";

  const isMatched = matchedCards.current.includes(card) ? "matched" : "";

  if (totalClicks % 2 == 0) {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }

  return (
    <>
      <div
        className={`card ${visibleClass} ${isMatched}`}
        onClick={() => handleClick()}
      >
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
          <img className="card-value" src={`src/assets/Images/${card}.png`} />
        </div>
      </div>
    </>
  );
}

export default memo(Card);
