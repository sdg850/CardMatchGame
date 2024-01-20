import React, { createContext, useState } from "react";

interface IContexTypes {
  handleTotalClicks: () => void;
  totalClicks: number;
}

export const GameContext = createContext<IContexTypes>({
  handleTotalClicks: () => {},
  totalClicks: 0,
});

const UseGameContex = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [totalClicks, setTotalClicks] = useState(0);

  const handleTotalClicks = (): void => {
    setTotalClicks((prev) => prev + 1);
  };

  const providerValue: IContexTypes = {
    handleTotalClicks,
    totalClicks,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default UseGameContex;
