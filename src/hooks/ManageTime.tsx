import React, { useState, createContext, useRef } from "react";

export const TimeContext = createContext({
  startCountdown: () => {},
  timeOver: 0,
  stopInterval: () => {},
  handleSetTimeOver: () => {},
  isGameOver: false,
});

function ManageTime({ children }: { children: React.ReactNode }) {
  const [timeOver, setTimeOver] = useState(20);
  const [isGameOver, setIsGameOver] = useState(false);

  const interval = useRef({});

  const startCountdown = () => {
    setIsGameOver(false);

    interval.current = setInterval(() => {
      if (timeOver > 0) {
        setTimeOver((prev) => prev - 1);
        return;
      }
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(interval.current as number);
    timeOver === 0 && setIsGameOver(true);
  };

  const handleSetTimeOver = () => {
    setTimeOver(() => 20);
  };

  const counterDown = {
    startCountdown,
    timeOver,
    stopInterval,
    handleSetTimeOver,
    isGameOver,
  };

  return (
    <TimeContext.Provider value={counterDown}>{children}</TimeContext.Provider>
  );
}

export default ManageTime;
