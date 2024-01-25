import { useContext, useState } from "react";

import "./styles.css";
import { GameContext } from "../../hooks/UseGameContex";
import AudioControllerGame from "../../hooks/MusicManager";
import Cobweb from "../../assets/Images/Cobweb.png";
import CobwebGrey from "../../assets/Images/CobwebGrey.png";
import Spider from "../../assets/Images/Spider.png";

export interface ICardTypes {
  card: string;
}

function Card({ card }: ICardTypes) {
  const [visible, setVisible] = useState(false);
  const { totalClicks, handleTotalClicks, matchedCards, checkCardMatch } =
    useContext(GameContext);

  const handleClick = () => {
    checkCardMatch(card);
    handleTotalClicks();
    setVisible(true);
    AudioControllerGame.flip();
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
          <img className="cob-web cob-web-top-left" src={Cobweb} />
          <img className="cob-web cob-web-top-right" src={Cobweb} />
          <img className="cob-web cob-web-bottom-left" src={Cobweb} />
          <img className="cob-web cob-web-bottom-right" src={Cobweb} />
          <img className="spider" src={Spider} />
        </div>
        <div className="card-front card-face">
          <img className="cob-web cob-web-top-left" src={CobwebGrey} />
          <img className="cob-web cob-web-top-right" src={CobwebGrey} />
          <img className="cob-web cob-web-bottom-left" src={CobwebGrey} />
          <img className="cob-web cob-web-bottom-right" src={CobwebGrey} />
          <img className="card-value" src={card} />
        </div>
      </div>
    </>
  );
}

export default Card;
