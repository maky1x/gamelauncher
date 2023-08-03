import React from "react";
import { GameInfoContextProvider } from "./context/GameInfoContextProvider";
import { GameInfo } from "./layouts/GameInfo";

export const GameInfoMain = () => {
  return (
    <GameInfoContextProvider>
      <GameInfo />
    </GameInfoContextProvider>
  );
};

export default GameInfoMain;
