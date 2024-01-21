import React, { createContext, useRef, useState } from "react";

interface IContexTypes {
  handleTotalClicks: () => void;
  checkCardMatch: (arg: string) => void;
  matchedCards: React.MutableRefObject<string[]>;
  totalClicks: number;
}

export const GameContext = createContext<IContexTypes>({
  handleTotalClicks: () => {},
  checkCardMatch: () => {},
  matchedCards: [],
  totalClicks: 0,
});

const UseGameContex = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [totalClicks, setTotalClicks] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  // const [isPendingToCheck, setIsPendingToCheck] = useState(false);
  // const [isMatched, setIsMatched] = useState(false);
  // const [cardToCheck, setCardToCheck] = useState("");
  // const [matchedCards, setMatchedCards] = useState([]);

  // const handleVisible = () => {
  //   setIsVisible(isVisible);
  // };

  const matchedCards = useRef([]);
  let cardToCheck = useRef("");

  const handleTotalClicks = (): void => {
    setTotalClicks((prev) => prev + 1);
    // checkCardMatch(card);
  };

  const checkCardMatch = (card) => {
    if (cardToCheck.current) {
      if (card == cardToCheck.current) {
        matchedCards.current.push(card);
      }
      cardToCheck.current = "";
      return;
    }
    cardToCheck.current = card;
  };

  // const checkCardMatch = ({ card }) => {
  //   if (cardToCheck) {
  //     const matched = card === cardToCheck;

  //     if (matched) {
  //       setMatchedCards((prev) => [...prev, card]);
  //     }

  //     setIsPendingToCheck(false);
  //     setCardToCheck("");
  //   }

  //   setIsPendingToCheck(true);
  //   setCardToCheck(card);
  //   setIsMatched(matchedCards.includes(card));
  // };

  const providerValue: IContexTypes = {
    handleTotalClicks,
    checkCardMatch,
    matchedCards,
    totalClicks,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default UseGameContex;
