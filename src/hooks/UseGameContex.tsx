import React, {
  MutableRefObject,
  createContext,
  useRef,
  useState,
} from "react";

interface IContexTypes {
  handleTotalClicks: () => void;
  checkCardMatch: (arg: string) => void;
  matchedCards: MutableRefObject<string[]>;
  totalClicks: number;
  isMatchCompleted: boolean;
  handleIsMatched: () => void;
}

export const GameContext = createContext<IContexTypes>({
  handleTotalClicks: () => {},
  checkCardMatch: () => {},
  matchedCards: { current: [] },
  totalClicks: 0,
  isMatchCompleted: false,
  handleIsMatched: () => {},
});

const UseGameContex = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [isMatchCompleted, setIsMatchCompleted] = useState(false);

  const matchedCards: React.MutableRefObject<string[]> = useRef([]);
  let cardToCheck = useRef("");

  const handleTotalClicks = (): void => {
    setTotalClicks((prev) => prev + 1);
    // checkCardMatch(card);
  };

  const checkCardMatch = (card: string) => {
    if (cardToCheck.current) {
      if (card == cardToCheck.current) {
        matchedCards.current.push(card);
        if (matchedCards.current.length == 8) {
          setIsMatchCompleted(true);
          matchedCards.current = [];
        }
      }
      cardToCheck.current = "";
      return;
    }
    setIsMatchCompleted(false);
    cardToCheck.current = card;
  };

  const handleIsMatched = () => {
    setIsMatchCompleted(!isMatchCompleted);
    setTotalClicks(() => 0);
  };

  const providerValue: IContexTypes = {
    handleTotalClicks,
    checkCardMatch,
    matchedCards,
    totalClicks,
    isMatchCompleted,
    handleIsMatched,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default UseGameContex;
