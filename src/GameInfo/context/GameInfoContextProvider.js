import React, { createContext, useState } from "react";

export const GameInfoContext = createContext();

export const GameInfoContextProvider = ({ children }) => {
  const [gameInfo, setGameInfo] = useState({});
  const [gameStores, setGameStores] = useState([]);
  const [allStores, setAllStores] = useState({});
  const [tempStores, setTempStores] = useState([]);

  return (
    <GameInfoContext.Provider value={{
      gameInfo,
      setGameInfo,
      gameStores,
      setGameStores,
      allStores,
      setAllStores,
      tempStores,
      setTempStores
    }}>
      {children}
    </GameInfoContext.Provider>
  );
};
